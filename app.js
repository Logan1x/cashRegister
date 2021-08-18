const billGiven = document.getElementById("bill-amount");
const cashGiven = document.getElementById("cash-given");

const formSubmit = document.getElementById("form-submit");

const numOfNotes = document.querySelectorAll(".num-of-notes");

const notes = [1000, 500, 100, 20, 10, 5, 2, 1];

formSubmit.addEventListener("submit", (e) => {
	e.preventDefault();
	const bill = Number(billGiven.value);
	const cash = Number(cashGiven.value);

	console.log(bill < cash);

	if (bill < 0) {
		alert("Please enter a valid bill amount");
		return;
	} else if (cash < bill) {
		alert("Please enter a valid cash amount");
		return;
	}

	const change = cash - bill;

	calcBillamount(change);
});

function calcBillamount(change) {
	for (var i = 0; i < notes.length; i++) {
		const numberOfNotes = Math.trunc(change / notes[i]);
		change %= notes[i];
		numOfNotes[i].innerText = numberOfNotes;
	}
}
