console.log("hello 124");

// declare variables
var name;
var age;
age = 21;
name = "tanner";


console.log(name);
printAge(20);
printAge(22);
printAge(age);

function printAge(myAge) {
	if (myAge < 21) {
		console.log("can't drink");
	} else if (myAge == 21) {
		console.log("legaly can drink");
	} else {
		console.log("old but can drink");
	}
	// console.log(age);
}

// function display