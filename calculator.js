window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  const values  = { amount: 10000, years: 10, rate: 4.5 };
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = values.amount;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = values.years;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;
  update();
}

function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

function calculateMonthlyPayment(values) {
  const i = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (i * values.amount) /
    (1 - ((1 + i) ** (n * -1)))
  ).toFixed(2);
}

function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}