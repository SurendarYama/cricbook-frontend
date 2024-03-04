import { createFormInput, createFormCheckBox, createAgree } from "utils";

export default function register() {
  const registerWrapper = document.createElement("div");
  registerWrapper.classList.add("register-header");
  const registerHeaderText = document.createElement("div");
  registerHeaderText.innerText = "Register";
  const form = document.createElement("form");
  form.classList.add("flex", "flex-col", "gap-y-5");
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

  const button = document.createElement("button");
  button.classList.add("register-button");
  button.setAttribute("type", "submit");
  button.innerText = "Register";

  form.append(username, email, phoneNumber, agree, button);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("username"));
  });
  registerWrapper.append(registerHeaderText, form);
  return registerWrapper;
}
