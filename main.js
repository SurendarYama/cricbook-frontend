import { io } from "socket.io-client";

import "./main.css";
import { home, dashboard } from "pages";

const socket = io("http://localhost:3000", { transports: ["websocket"] });
socket.on("connect", () => console.log("IO COnnected..."));

const app = document.querySelector("#app");
const user = localStorage.getItem("user");

user ? app.append(dashboard()) : app.append(home());
