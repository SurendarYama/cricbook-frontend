import { sidebar, main } from "components";

export default function dashboard() {
  const dashboard = document.createElement("div");
  dashboard.setAttribute("id", "dashboardPage");
  dashboard.classList.add("flex");
  const user = localStorage.getItem("user");
  const userId = document.createElement("div");
  userId.innerText = user;
  dashboard.append(sidebar(), main([userId]));
  return dashboard;
}
