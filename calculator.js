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

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // declare variables for all inputs.
  const loanAmount = document.querySelector('#loan-amount');
  const termInYears = document.querySelector('#loan-years');
  const yearlyRate = document.querySelector('#loan-rate');

  loanAmountVal = loanAmount.value;
  termInYearsVal = termInYears.value;
  yearlyRateVal = yearlyRate.value;

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
};

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  return ((loanAmountVal * yearlyRateVal) / (1 - ((1 + yearlyRateVal) ** (termInYearsVal * -1)))).toFixed(2); 

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  





}
