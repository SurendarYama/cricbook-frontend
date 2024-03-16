import { createImageTag } from "utils";

export default function avatar(src, alt) {
  const avatar = createImageTag({
    src,
    alt,
    avatar: true,
  });
  return avatar;
}
