const readline = require("prompt-sync");
const prompt=readline();

let email = prompt("Enter Email : ");

const emailRegex = RegExp('^([A-Z a-z 0-9]+)[A-Z a-z 0-9 !@#$%&*.]*$');

if(emailRegex.test(email))
	console.log("Valid Pincode!");
else
	console.log("Invalid Pincode!");