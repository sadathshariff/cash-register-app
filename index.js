const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".noOfNotes");
const table = document.querySelector(".change-table");

//available Notes
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", () => {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
      noChangeToReturn(cashGiven, billAmount);
    } else {
      showMessage("Please pay the exact Amount or You wanna Wash Dishes!!");
    }
  } else {
    showMessage("Invalid Bill Aamount!!");
  }
});

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

function noChangeToReturn(cashGiven, billAmount) {
  let noChangeToReturn = cashGiven.value - billAmount.value;
  if (noChangeToReturn == 0) {
    showMessage("No Change to return :)");
    hideTable();
  }
}

function hideMessage() {
  errorMessage.style.display = "none";
}

function showMessage(errorMsg) {
  errorMessage.innerText = errorMsg;
  errorMessage.style.display = "block";
  hideTable();
}

function hideTable() {
  table.style.display = "none";
}
