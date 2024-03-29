import { logo } from "components";

export default function header() {
  const header = document.createElement("header");
  header.classList.add("header");
  const createdWithTextNode = document.createElement("span");
  createdWithTextNode.append(document.createTextNode("CricBook"));
  header.append(logo(), createdWithTextNode);
  return header;
}
