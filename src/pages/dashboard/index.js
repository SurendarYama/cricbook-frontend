import { sidebar } from "components";

export default function dashboard() {
  const dashboard = document.createElement("div");
  dashboard.setAttribute("id", "dashboardPage");
  dashboard.classList.add("flex");
  const user = localStorage.getItem("user");
  console.log(user);
  dashboard.append(sidebar());
  return dashboard;
}
