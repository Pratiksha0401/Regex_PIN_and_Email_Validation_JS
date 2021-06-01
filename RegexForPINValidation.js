const readline = require("prompt-sync");
const prompt=readline();

let pin = prompt("Enter PIN : ");

let pinRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');

if(pinRegex.test(pin))
	console.log("Valid Pincode !");
else
	console.log("Invalid Pincode !");
   