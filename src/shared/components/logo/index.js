import { createImageTag } from "utils";
import { logoImg } from "assets";
export default function logo() {
  const logo = createImageTag({ src: logoImg, alt: "logo_image" });
  logo.classList.add("w-12", "h-12");
  return logo;
}
