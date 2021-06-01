const readline = require("prompt-sync");
const prompt=readline();

let pin = prompt("Enter PIN : ");

let pinRegex = RegExp('^[1-9]{1}[0-9]{5}$');

if(pinRegex.test(pin))
	console.log("Valid Pincode");
else
	console.log("Invalid Pincode");
   