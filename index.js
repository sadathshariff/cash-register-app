const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".noOfNotes");

//available Notes
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", () => {
  hideMessage(); //hiding the Error Message

  if (billAmount.value > 0) {
    //checking if the billAmount is > 0

    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value; //sub to get the remaining amount to return

      calculateChange(amountToBeReturned);
      noChangeToReturn(cashGiven, billAmount);
    } else if (cashGiven.value > 0 && cashGiven.value < billAmount) {
      showMessage(
        "Cash given is less than Bill Amount, You are running shortage of money"
      );
    } else {
      showMessage("You want to wash Dishes !!");
    }
  } else {
    showMessage("Invalid Bill Amount");
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
  let noChangeToReturn = billAmount.value - cashGiven.value;
  if (noChangeToReturn < 1) {
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
