confirm("We have no intention of protecting your data.  We're just going to sell it to Russian-block hackers");
var userPhone = prompt("Please enter your phone number in the following format: ###-###-####.");
console.log(userPhone.charAt(3) === "-" && userPhone.charAt(7) === "-" && userPhone.length === 12);
var birthDate = prompt("Thank you for your phone number." + "\n" + "Please enter your date of birth in the following format: MM/YY/DD.");
console.log(birthDate.charAt(2) === "/" && birthDate.charAt(5) === "/" && birthDate.length === 8);
var userZip = prompt("Thank you for your date of birth." +"\n" + "Please enter your Zip Code as ##### or #####-####.");
console.log(userZip.length === 5 || (userZip.length === 10 && userZip.charAt(5) === "-"));
var userState = prompt("Thank you for your zip code." + "\n" + "Please enter your state of residence here i.e. CO for Colorado:");
console.log(userState.length === 2);
console.log(userState.toUpperCase()); 
var marriageStatus = prompt("Thank you for entering your state of residence." + "\n" + "Are you married?" + "\n" + "Please enter YES or NO.")
console.log(marriageStatus.toUpperCase());
alert("Thank you for your information." + "\n" + "Goodbye"); 


// separate
// if(userZip.length === 5 || (userZip.length === 10 && userZip.charAt(5) === "-")) {
// 	console.log("Valid user zip");
// } else {
// 	console.log("Your zip is invalid!");
// }
