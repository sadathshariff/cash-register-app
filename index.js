const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".noOfNotes");
const changeReturn = document.querySelector(".changeReturn");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;

      calculateChange(amountToBeReturned);
    } else {
      showMessage(
        "The Cash Provided Should atleat equal to the bill amount or wash dishes"
      );
    }
    calculateNoChange(billAmount, amountToBeReturned);
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateNoChange(billAmount, amountToBeReturned) {
  let returnAmount = amountToBeReturned - billAmount;
  if (returnAmount < 1) {
    showMessage("No Amount to Return");
    return;
  }
  changeReturn.style.display = "block";
}

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

    amountToBeReturned = amountToBeReturned % availableNotes[i];

    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  errorMessage.style.display = "none";
}

function showMessage(errorMsg) {
  errorMessage.style.display = "block";
  errorMessage.innerText = errorMsg;
  changeReturn.style.display = "none";
}
