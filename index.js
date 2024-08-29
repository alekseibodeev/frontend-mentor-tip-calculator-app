const tipCustom = document.getElementById("tip-custom");
const tipCustomValue = document.getElementById("tip-custom-value");

const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const people = document.getElementById("people");
const form = document.getElementById("calculator-form");

const tipValue = document.getElementById("tip-value");
const totalValue = document.getElementById("total-value");
const reset = document.getElementById("reset");

const handleInputChange = () => new FormData(form);

const calcTip = (formdata) => {
  if (!formdata.people || !formdata.bill || !formdata.tip) return 0;
  const bill = parseFloat(formdata.bill);
  const tip = parseFloat(formdata.tip);
  const people = parseFloat(formdata.people);
  return (bill * (tip / 100)) / people;
};

const calcTotal = (formdata) => {
  if (!formdata.people || !formdata.bill) return 0;
  if (!formdata.tip) bill / people;
  const bill = parseFloat(formdata.bill);
  const tip = parseFloat(formdata.tip);
  const people = parseFloat(formdata.people);
  return (bill * ((100 + tip) / 100)) / people;
};

tipCustom.addEventListener("input", () => {
  tipCustomValue.focus();
});

tipCustomValue.addEventListener("input", () => {
  tipCustom.value = tipCustomValue.value;
});

bill.addEventListener("input", handleInputChange);

tip.addEventListener("input", handleInputChange);

people.addEventListener("input", handleInputChange);

form.addEventListener("formdata", (event) => {
  const formdata = Object.fromEntries(event.formData);
  tipValue.textContent = calcTip(formdata).toFixed(2);
  totalValue.textContent = calcTotal(formdata).toFixed(2);

  if (!formdata.bill || !formdata.tip || !formdata.people) {
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
