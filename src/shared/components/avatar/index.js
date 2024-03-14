import { createImageTag } from "utils";
import { avatarImg } from "assets";
export default function avatar() {
  const avatar = createImageTag({
    src: avatarImg,
    alt: "avatar_image",
    avatar: true,
  });

  return avatar;
}
