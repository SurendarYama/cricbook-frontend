export const createImageTag = ({ src, alt }) => {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  return img;
};

export const createFormInput = (opts) => {
  const formField = document.createElement("label");
  formField.classList.add("space-y-2");
  const formFieldLable = document.createElement("span");
  formFieldLable.classList.add("form-lable");
  formFieldLable.innerText = opts.labelName;
  const formFieldInput = document.createElement("input");
  formFieldInput.classList.add("form-input");
  formFieldInput.setAttribute("type", opts.inputType);
  formFieldInput.setAttribute("required", true);
  formFieldInput.setAttribute("name", opts.inputName);
  formFieldInput.setAttribute("placeholder", opts.inputPlaceholder);
  formField.append(formFieldLable, formFieldInput);
  return formField;
};

export const createFormCheckBox = (opts) => {
  const formFeildCheckBox = document.createElement("div");
  const formFeildCheckBoxInput = document.createElement("input");
  formFeildCheckBoxInput.setAttribute("type", "checkbox");
  formFeildCheckBoxInput.setAttribute("checked", opts.checked);
  formFeildCheckBoxInput.classList.add("accent-purple-700");
  const formFeildCheckBoxContent = document.createElement("span");
  formFeildCheckBoxContent.classList.add("ml-2", "text-sm");
  formFeildCheckBoxContent.innerHTML = opts.checkboxContent;
  formFeildCheckBox.append(formFeildCheckBoxInput, formFeildCheckBoxContent);
  return formFeildCheckBox;
};

export const createAgree = (opts) => {
  const agree = document.createElement("span");
  const agreeContent = document.createElement("a");
  agreeContent.classList.add(
    "text-purple-900",
    "text-xs",
    "hover:text-red-600",
    "font-bold"
  );
  agreeContent.setAttribute("href", opts.href);
  agreeContent.innerText = opts.content;
  agree.append(agreeContent);
  return agree;
};
