const readline = require("prompt-sync");
const prompt=readline();

let email = prompt("Enter Email : ");

const emailRegex = RegExp('^[A-Z a-z 0-9 !#$%&*.]{1,}[@]{1}[A-Z a-z 0-9 !#$%&*]{1,}[.]{1}[a-z]{2,3}[A-Z a-z 0-9 !#$%&]*$');

if(emailRegex.test(email))
	console.log("Valid Pincode!");
else
	console.log("Invalid Pincode!");