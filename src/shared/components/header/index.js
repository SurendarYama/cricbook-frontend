import { avatar } from "components";
import { logoImg } from "assets";

export default function header() {
  const header = document.createElement("header");
  const logo = avatar(logoImg, "logo_image");
  header.classList.add("header");
  const createdWithTextNode = document.createElement("span");
  createdWithTextNode.append(document.createTextNode("CricBook"));
  header.append(logo, createdWithTextNode);
  return header;
}
