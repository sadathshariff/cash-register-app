const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".noOfNotes");
const table = document.querySelector(".change-table");

//available Notes
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function clickHandler() {
  hideMessage();
  let billAmountValue = Number(billAmount.value);
  let cashGivenValue = Number(cashGiven.value);
  if (billAmountValue > 0 && cashGivenValue > 0) {
    if (cashGivenValue >= billAmountValue) {
      const amountToBeReturned = cashGivenValue - billAmountValue;
      calculateChange(amountToBeReturned);
      noChangeToReturn(cashGivenValue, billAmountValue);
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
}

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    //looping through the notes array

    //dividing to get the number of times it is diivisble and trunc it to get the no of notes
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    // Doing the modulus to get the remianing amount and again divide it with next note
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    //assiging the no of notes
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function noChangeToReturn(cashGivenValue, billAmountValue) {
  let noChangeToReturn = cashGivenValue - billAmountValue;
  if (noChangeToReturn == 0) {
    showMessage("No Change to return :)");
  }
}

function hideMessage() {
  errorMessage.style.display = "none";
}

function showMessage(errorMsg) {
  errorMessage.innerText = errorMsg;
  errorMessage.style.display = "block";
}

checkButton.addEventListener("click", clickHandler);
