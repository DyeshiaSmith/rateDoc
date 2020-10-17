import axios from "axios";
import Navigo from "navigo";
import { capitalize } from "lodash";
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";

//the toggle menu
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

function render(st = state.Home) {
  document.getElementById("#root").innerHTML = `  ${Header(st)}  ${Nav(
    st.Links
  )}  ${Main(st)}  ${Footer()} router.updatePageLinks(); `;
}

render(state.Home);

const router = new Navigo(window.location.origin);

router.on({
  "/": () => render(state.Home),
  ":page": params => {
    let page = capitalize(params.page);
    render(state[page]);
  }
});
