import { countryOptions } from "assets";

export const createFormSelect = (opts) => {
  const formField = document.createElement("label");
  formField.classList.add("space-y-2");
  const formFieldLable = document.createElement("span");
  formFieldLable.classList.add("form-lable");
  formFieldLable.innerText = opts.labelName;

  const countryWrapper = document.createElement("div");
  countryWrapper.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "space-x-2"
  );
  const flag = document.createElement("span");
  flag.setAttribute("id", "flagIcons");
  const flagCode = opts.selected.code.toLowerCase();
  flag.classList.add("size-8", "fi", `fi-${flagCode}`);

  const formFieldSelect = document.createElement("select");
  formFieldSelect.classList.add("form-feild-select");
  formFieldSelect.setAttribute("name", opts.name);
  const { options } = opts;

  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    const optionNode = document.createElement("option");
    optionNode.classList.add("text-purple-700", "font-bold");
    option.selected && (optionNode.selected = true);
    optionNode.setAttribute("value", option.name);
    optionNode.innerHTML = option.name;
    formFieldSelect.append(optionNode);
  }

  formFieldSelect.addEventListener("change", () => {
    const selectedValue = document.querySelector(".form-feild-select").value;
    let selectedCountry = countryOptions
      .filter((country) => country.name === selectedValue)[0]
      .code.toLowerCase();
    selectedCountry === "an" && (selectedCountry = "nl");
    debugger;
    const flagIcons = document.querySelector("#flagIcons");
    flagIcons.className = "size-8 fi";
    flagIcons.classList.add(`fi-${selectedCountry}`);
  });

  countryWrapper.append(flag, formFieldSelect);
  formField.append(formFieldLable, countryWrapper);
  return formField;
};
