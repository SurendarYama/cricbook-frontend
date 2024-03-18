import { createImageTag } from "utils";
import { logoImg } from "assets";
export default function logo() {
  const logo = createImageTag({ src: logoImg, alt: "logo_image" });
  logo.classList.add("size-12");
  return logo;
}
