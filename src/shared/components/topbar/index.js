import { avatar } from "components";
import { avatarImg } from "assets";
import { getUserById } from "services";

import { logout } from "utils";

export default function topbar() {
  const topbarWrapper = document.createElement("div");
  topbarWrapper.classList.add(
    "flex",
    "w-full",
    "h-10",
    "space-x-2",
    "justify-end",
    "items-center"
  );
  const userId = localStorage.getItem("user");
  getUserById(`${import.meta.env.CRICBOOK_APP_BASE_URL}user/${userId}`).then(
    (data) => {
      debugger;
      const avatarNode = avatar(avatarImg, "avatar_image");
      avatarNode.classList.remove("w-12", "h-12");
      avatarNode.classList.add("w-8", "h-8");
      const { username } = data.user;
      const userNode = document.createElement("span");
      userNode.classList.add("font-bold", "text-purple-600", "mt-1");
      userNode.innerText = username.charAt(0).toUpperCase() + username.slice(1);

      const userIcon = document.createElement("i");
      userIcon.classList.add("fa-solid", "fa-user", "text-purple-600");
      topbarWrapper.append(userIcon, userNode, avatarNode);
    }
  );
  return topbarWrapper;
}
