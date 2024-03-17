import {
  createFormInput,
  createFormCheckBox,
  createAgree,
  createFormSelect,
  createFormError,
  createDialog,
} from "utils";
import { countryOptions } from "assets";
import { authUser } from "services";

export default function register() {
  const registerWrapper = document.createElement("div");
  registerWrapper.classList.add("register-header");
  const registerHeaderText = document.createElement("div");
  registerHeaderText.innerText = "Register";
  const form = document.createElement("form");
  form.classList.add("flex", "flex-col", "gap-y-5");
  form.setAttribute("name", "reset");

  const username = createFormInput({
    labelName: "Username*",
    inputType: "text",
    inputName: "username",
    inputPlaceholder: "SurendarYama",
    minLength: 6,
    maxLength: 26,
  });

  const email = createFormInput({
    labelName: "Email*",
    inputType: "email",
    inputName: "email",
    inputPlaceholder: "surendaryama@gmail.com",
  });

  const phoneNumber = createFormInput({
    labelName: "Phone Number*",
    inputType: "tel",
    inputName: "phoneNumber",
    inputPlaceholder: "9876543210",
  });

  const password = createFormInput({
    labelName: "Password*",
    inputType: "password",
    inputName: "password",
    inputPlaceholder: "Password",
    minLength: 6,
    maxLength: 26,
  });

  const confirmPassword = createFormInput({
    labelName: "Confirm Password*",
    inputType: "password",
    inputName: "confirmPassword",
    inputPlaceholder: "Password",
    minLength: 6,
    maxLength: 26,
  });

  const options = countryOptions.map((option, index) => {
    option.name === "India"
      ? (option.selected = true)
      : (option.selected = false);
    return option;
  });
  const country = createFormSelect({
    labelName: "Country*",
    options,
    name: "country",
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

  agree.addEventListener("click", function (e) {
    this.firstChild.checked
      ? (button.disabled = false)
      : (button.disabled = true);
  });

  const button = document.createElement("button");
  button.classList.add("auth-button");
  button.setAttribute("type", "submit");
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

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataUserName = formData.get("username");
    const formDataEmail = formData.get("email");
    const formDataPhoneNumber = formData.get("phoneNumber");
    const formDataPassword = formData.get("password");
    const formDataConfirmPassword = formData.get("confirmPassword");
    const formDataCountry = formData.get("country");

    const [countryData] = countryOptions.filter(
      (option) => option.name.toLowerCase() === formDataCountry.toLowerCase()
    );
    delete countryData.selected;

    const passwordErr = document.getElementById("passwordError");
    const emptyFeildsError = document.getElementById("emptyFeildsError");
    const usernameFeildError = document.getElementById("usernameError");
    const emailFeildError = document.getElementById("emailError");
    const phoneNumberFeildError = document.getElementById("phoneNumberError");
    passwordErr && passwordErr.remove();
    emptyFeildsError && emptyFeildsError.remove();
    usernameFeildError && usernameFeildError.remove();
    emailFeildError && emailFeildError.remove();
    phoneNumberFeildError && phoneNumberFeildError.remove();

    if (
      formDataUserName &&
      formDataEmail &&
      formDataPhoneNumber &&
      formDataPassword &&
      formDataConfirmPassword &&
      formDataCountry
    ) {
      if (formDataConfirmPassword === formDataPassword) {
        const newUser = {
          username: formDataUserName,
          email: formDataEmail,
          phoneNumber: formDataPhoneNumber,
          password: formDataPassword,
          country: countryData.name,
          countryDailCode: countryData["dial_code"],
          countryCode: countryData.code,
        };
        const response = await authUser(
          `${import.meta.env.CRICBOOK_APP_BASE_URL}auth/register`,
          newUser
        );

        if (response.hasError) {
          if (response.feildName === "username") {
            const error = createFormError({
              errorMessage: response.message,
              id: "usernameError",
            });
            username.insertBefore(error, username.firstChild);
            registerWrapper.scrollTop = 0;
          }

          if (response.feildName === "email") {
            const error = createFormError({
              errorMessage: response.message,
              id: "emailError",
            });
            email.insertBefore(error, email.firstChild);
            registerWrapper.scrollTop = 0;
          }
          if (response.feildName === "phoneNumber") {
            const error = createFormError({
              errorMessage: response.message,
              id: "phoneNumberError",
            });
            phoneNumber.insertBefore(error, phoneNumber.firstChild);
            registerWrapper.scrollTop = 0;
          }
        } else {
          form.reset();
          const registerDialog = createDialog({
            closeButtonContent: "Close",
            content: response.message,
          });
          registerWrapper.append(registerDialog);
          registerDialog.showModal();
        }
      } else {
        const error = createFormError({
          errorMessage: "Confirm Password and Password is not matched.",
          id: "passwordError",
        });
        confirmPassword.insertBefore(error, confirmPassword.firstChild);
      }
    } else {
      const error = createFormError({
        errorMessage: "All the feilds are required*.",
        id: "emptyFeildsError",
      });
      registerWrapper.scrollTop = 0;
      registerWrapper.insertBefore(error, registerWrapper.firstChild);
    }
  });
  registerWrapper.append(registerHeaderText, form);
  return registerWrapper;
}
