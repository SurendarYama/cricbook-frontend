import { home } from "pages";
export const logout = () => {
  localStorage.removeItem("user");
  document.getElementById("dashboardPage").remove();
  document.getElementById("app").append(home());
};
