import {
  createFormInput,
  createFormCheckBox,
  createAgree,
  createFormSelect,
  createFormError,
} from "utils";
import { countryOptions } from "assets";

export default function register() {
  const registerWrapper = document.createElement("div");
  registerWrapper.classList.add("register-header");
  const registerHeaderText = document.createElement("div");
  registerHeaderText.innerText = "Register";
  const form = document.createElement("form");
  form.classList.add("flex", "flex-col", "gap-y-5");

  const state = {
    noEmptyFeilds: false,
  };

  const username = createFormInput({
    labelName: "Username",
    inputType: "text",
    inputName: "username",
    inputPlaceholder: "SurendarYama",
    minLength: 6,
    maxLength: 26,
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

  const password = createFormInput({
    labelName: "Password",
    inputType: "password",
    inputName: "password",
    inputPlaceholder: "Password",
    minLength: 6,
    maxLength: 26,
  });

  const confirmPassword = createFormInput({
    labelName: "Confirm Password",
    inputType: "password",
    inputName: "confirmPassword",
    inputPlaceholder: "Password",
    minLength: 6,
    maxLength: 26,
  });

  const options = countryOptions.map((option, index) => {
    index === 0 ? (option.selected = true) : (option.selected = false);
    return option;
  });
  const country = createFormSelect({ labelName: "Country", options });

  const termsAndConditions = createAgree({
    href: "#",
    content: "Terms And Conditions",
  });

  const privacyPolicy = createAgree({
    href: "#",
    content: "Privacy Policy",
  });

  const agree = createFormCheckBox({
    checkboxContent: `I agree to ${termsAndConditions.innerHTML} and ${privacyPolicy.innerHTML}`,
    checked: true,
  });

  agree.addEventListener("click", function (e) {
    if (this.firstChild.checked && getState().noEmptyFeilds) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });

  const button = document.createElement("button");
  button.classList.add("auth-button", "register-auth-button");
  button.setAttribute("type", "submit");
  state.noEmptyFeilds ? (button.disabled = false) : (button.disabled = true);
  button.innerText = "Register";
  form.append(
    username,
    email,
    phoneNumber,
    password,
    confirmPassword,
    country,
    agree,
    button
  );

  const formElements = form.elements;
  for (let i = 0; i < formElements.length; i++) {
    const input = formElements[i];
    if (input.classList.contains("form-input")) {
      input.addEventListener("change", (e) => {
        const value = e.target.value;
        const valueLength = value.length;
        const inputName = input.name;
        const inputValue = getState()[inputName];
        let usernameError;
        if (
          inputValue.minLength &&
          inputValue.maxLength &&
          (valueLength < inputValue.minLength ||
            valueLength > inputValue.maxLength)
        ) {
          usernameError = createFormError({
            errorMessae: "username must be 6-26 characters length.",
          });
          usernameError[1]("block");
          username.append(usernameError[0]);
        } else {
          usernameError[1]("block");
        }
      });
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("username"));
  });
  registerWrapper.append(registerHeaderText, form);
  return registerWrapper;
}
