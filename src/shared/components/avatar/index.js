import { createImageTag } from "utils";

export default function avatar(src, alt) {
  const avatar = createImageTag({
    src,
    alt,
  });
  avatar.classList.add(
    "rounded",
    "rounded-full",
    "w-12",
    "h-12",
    "cursor-pointer"
  );
  return avatar;
}
