import Navigo from "navigo";
import { capitalize } from "lodash";
import * as state from "./store";
import { Header, Nav, Main, Footer } from "./components";
// import axios from "axios";
import "./env";

const router = new Navigo(window.location.origin);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;
  router.updatePageLinks();
  addNavEventListeners();
}

render(state.Home);

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();

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
