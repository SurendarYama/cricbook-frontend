import "./main.css";
import { home, dashboard } from "pages";

const app = document.querySelector("#app");

const user = localStorage.getItem("user");
user ? app.append(dashboard()) : app.append(home());
