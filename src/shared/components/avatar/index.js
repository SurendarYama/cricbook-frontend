import { createImageTag } from "utils";

export default function avatar(src, alt) {
  const avatar = createImageTag({
    src,
    alt,
  });
  avatar.classList.add("rounded", "rounded-full", "size-12", "cursor-pointer");
  return avatar;
}
