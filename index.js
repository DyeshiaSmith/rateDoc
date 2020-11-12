import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import "./env";
import "cors";

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

  getData(st);
  addNavEventListeners(st);
}

render(state.Home);

let docList = {};

function getData(state = {}) {
  if (state.page === "Home" || state.page === "Reviewdoc") {
    axios
      .get("http://localhost:3000/rateADoc")
      .then(response => {
        docList = response.data.dates;
        const containerElement = document.getElementById("container");
        docList.forEach(doc => {
          const card = document.createElement("div");
          card.innerHTML = `<div class="card">
            <div class="card-bio">
              <div class="img-wrapper">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                alt="Person" />
              </div>
              <div class="person-info">
                <h3 class="doc-name">${doc.Name}</h3>
                <p class="doc-type">${doc.Speciality}</p>
              </div>
              <button class="card-btn">
                    <span class="card-btn-contact">Review!</span>
                    <i class="fas fa-angle-up"></i>
                  </button>
            </div>
            <div class="card-contact">
              <h4>See Reviews</h4>
            </div>
          </div>`;
          containerElement.appendChild(card);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

function addNavEventListeners(state = {}) {
  // TODO: any js code for specific page (submit btn) goes inside if conditional fot that pg.
  console.log("state", state);
  // Run getRatings when DOM loads
  // document.addEventListener("DOMContentLoaded", getRatings);

  let doctor;
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
  if (state.page === "Home") {
    //add button toggle to cards
    document.querySelector(".card-btn").addEventListener("click", () => {
      document.querySelector(".card").classList.toggle("change");
    });
  }

  if (state.page === "Reviewdoc") {
    const doctorSelect = document.getElementById("doctor-select");
    const ratingControl = document.getElementById("rating-control");
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
  }
}

//submit fxn to make api call and add doctor data
//to get data back..add template literals inside of api axios call to populate cards....
// function addEventListener() {
//   document
//     .getElementById("submit")
//     .addNavEventListeners("click", () => getData());
// }

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
