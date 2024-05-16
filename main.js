(async function () {
  const { io } = await import("socket.io-client");
  import("./main.css");
  const { home, dashboard } = await import("pages");

  const socket = io("http://localhost:3000", { transports: ["websocket"] });
  socket.on("connect", () => console.log("IO COnnected..."));

  const app = document.querySelector("#app");
  const user = localStorage.getItem("user");

  user ? app.append(dashboard()) : app.append(home());
})();
