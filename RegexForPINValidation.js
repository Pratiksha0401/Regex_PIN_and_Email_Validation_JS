
let pin = 'A400088';

let pinRegex = RegExp('^[1-9]{1}[0-9]{5}$');

if(pinRegex.test(pin))
	console.log("Valid Pincode !");
else
	console.log("Invalid Pincode !");
   