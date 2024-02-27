import { header } from "components";

export default function home() {
  const home = document.createElement("div");
  home.append(header());
  return home;
}
