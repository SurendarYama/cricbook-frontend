import "./main.css";
import { home } from "pages";

const app = document.querySelector("#app");
app.dataset.route = "home";
app.append(home());
