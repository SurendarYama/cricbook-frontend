import { avatar } from "components";
import { avatarImg } from "assets";
import { getUserById } from "services";
import { createUserDetail } from "utils";

export default function topbar() {
  const topbarWrapper = document.createElement("div");
  topbarWrapper.classList.add(
    "flex",
    "w-full",
    "h-10",
    "space-x-10",
    "justify-end",
    "items-center"
  );
  const userId = localStorage.getItem("user");
  getUserById(`${import.meta.env.CRICBOOK_APP_BASE_URL}user/${userId}`).then(
    (data) => {
      const avatarNode = avatar(avatarImg, "avatar_image");
      avatarNode.classList.remove("w-12", "h-12");
      avatarNode.classList.add("w-8", "h-8");
      const { username, email, phoneNumber, countryDailCode } = data.user;
      const usernameNode = createUserDetail({
        icon: "fa-user",
        feildName: username,
      });
      const emailNode = createUserDetail({
        icon: "fa-envelope",
        feildName: email,
      });
      const phoneNumberNode = createUserDetail({
        icon: "fa-phone",
        feildName: `${countryDailCode}  ${phoneNumber}`,
      });

      topbarWrapper.append(
        phoneNumberNode,
        emailNode,
        usernameNode,
        avatarNode
      );
    }
  );
  return topbarWrapper;
}
