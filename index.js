import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import "./env";

const router = new Navigo(window.location.origin);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
  router.updatePageLinks();

  // if (!state.login.signedIn) {
  //   render(state.Login);
  //   router.navigate("/Home");
  // }
  addNavEventListeners();
}

render(state.Home);

function addNavEventListeners() {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}

//add button toggle to cards
document.querySelector(".card-btn").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

// Leave reviews
const ratings = {
  overall: 4.7,
  care: 3.4,
  patience: 2.3,
  listening: 3.6,
  knowledgeable: 4.1,
  environment: 4.5,
  timeliness: 3.2
};

// Total Stars
const starsTotal = 5;

// Run getRatings when DOM loads
document.addEventListener("DOMContentLoaded", getRatings);

// Form=mss
const doctorSelect = document.getElementById("doctor-select");
const ratingControl = document.getElementById("rating-control");

let doctor;

//doc select change
doctorSelect.addEventListener("click", e => {
  doctor = e.target.value;
  // Enable rating control
  ratingControl.disabled = false;
  ratingControl.value = ratings[doctor];
});

// Rating control change eventlistner.
ratingControl.addEventListener("blur", e => {
  const rating = e.target.value;

  // Make sure 5 or under
  if (rating > 5) {
    alert("Please rate 1 to 5");
    return;
  }

  // Change rating
  ratings[doctor] = rating;

  getRatings();
});

// Get ratings
function getRatings() {
  for (let rating in ratings) {
    // Get percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // Set width of stars-inner to percentage
    document.querySelector(
      `.${rating} .stars-inner`
    ).style.width = starPercentageRounded;

    // Add number rating
    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}
