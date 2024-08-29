const tipCustom = document.getElementById("tip-custom");
const tipCustomValue = document.getElementById("tip-custom-value");

const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const people = document.getElementById("people");
const form = document.getElementById("calculator-form");

const tipValue = document.getElementById("tip-value");
const totalValue = document.getElementById("total-value");
const reset = document.getElementById("reset");

const handleInputChange = () => {
  if (!form.checkValidity()) return;
  new FormData(form);
};

const handleErrorChange = (event) => {
  const target = event.currentTarget;
  const value = parseFloat(target.value);
  const error = target.parentElement.querySelector(".input-field__error");
  if (value === 0) {
    error.textContent = "Can't be zero";
  } else if (value < 0) {
    error.textContent = "Can't be negative";
  } else {
    error.textContent = "";
  }
};

const calcTip = (formdata) => {
  const bill = parseFloat(formdata.bill);
  const tip = parseFloat(formdata.tip);
  const people = parseFloat(formdata.people);
  if (!bill || !tip || !people) return 0;
  return (bill * (tip / 100)) / people;
};

const calcTotal = (formdata) => {
  const bill = parseFloat(formdata.bill);
  const tip = parseFloat(formdata.tip);
  const people = parseFloat(formdata.people);
  if (!bill || !people) return 0;
  if (!tip) return bill / people;
  return (bill * ((100 + tip) / 100)) / people;
};

tipCustom.addEventListener("input", () => {
  tipCustomValue.focus();
});

tipCustomValue.addEventListener("input", () => {
  tipCustom.value = tipCustomValue.value;
});

bill.addEventListener("input", handleInputChange);
bill.addEventListener("input", handleErrorChange);

tip.addEventListener("input", handleInputChange);

people.addEventListener("input", handleInputChange);
people.addEventListener("input", handleErrorChange);

form.addEventListener("formdata", (event) => {
  const formdata = Object.fromEntries(event.formData);
  tipValue.textContent = calcTip(formdata).toFixed(2);
  totalValue.textContent = calcTotal(formdata).toFixed(2);

  if (!formdata.bill && !formdata.tip && !formdata.people) {
    reset.setAttribute("disabled", "");
  } else {
    reset.removeAttribute("disabled", "");
  }
});

reset.addEventListener("click", () => {
  bill.value = "";
  people.value = "";
  tip
    .querySelectorAll('input[type="radio"]')
    .forEach((button) => (button.checked = false));
  tipCustomValue.value = "";
  new FormData(form);
});
