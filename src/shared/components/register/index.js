import { createFormInput } from "utils";

export default function register() {
  const registerWrapper = document.createElement("div");
  registerWrapper.classList.add("register-header");
  const registerHeaderText = document.createElement("div");
  registerHeaderText.innerText = "Register";
  const form = document.createElement("form");
  form.classList.add("flex", "flex-col", "gap-y-3");
  const username = createFormInput({
    labelName: "Username",
    inputType: "type",
    inputName: "username",
    inputPlaceholder: "SurendarYama",
  });

  const email = createFormInput({
    labelName: "Email",
    inputType: "email",
    inputName: "email",
    inputPlaceholder: "surendaryama@gmail.com",
  });

  const phoneNumber = createFormInput({
    labelName: "Phone Number",
    inputType: "tel",
    inputName: "phoneNumber",
    inputPlaceholder: "+91 9876543210",
  });
  form.append(username, email, phoneNumber);
  registerWrapper.append(registerHeaderText, form);
  return registerWrapper;
}
