// Program 1.
let myVar = 5;
console.log(myVar);

// Program 2.
let myString = "Hello, world!";
alert(myString);

// Program 3.
let num1 = 5;
let num2 = 10;
let userNum = prompt("Enter a number");
userNum = Number.parseInt(userNum);
let sum = num1 + num2 + userNum;
console.log(sum);

// Program 4.
let myBoolean = true;
if (myBoolean==true) {
    console.log("It's True.");
}
else{
    console.log("It's False.");
}

// Program 5.
let num=36;
num%=2
if (num==0) {
    console.log("It's Even.");
} else {
    console.log("It's odd.");
}

// Program 6.
let string1 = "Hello, " ;
let string2 = "World!" ;
let result = string1 + string2 ;
console.log(result);

// Program 7.
let n1= 10;
let n2= 11;
let resultOfMulyiple = n1 * n2 ;
console.log(resultOfMulyiple);

// Program 8.
let passCode= prompt("Enter your password");
if (passCode=="password") {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

// Program 9.
let number1 = parseInt(prompt("Enter number 1."));
let number2 = parseInt(prompt("Enter number 2."));
let number3 = parseInt(prompt("Enter number 3."));
if (number1 >= number2 && number1 >= number3) {
    console.log("Number 1 is the largest");
} 
else if (number2 >= number1 && number2 >= number3) {
    console.log("Number 2 is the largest");
} 
else{
    console.log("Number 3 is the largest");
}

// Program 10
let stringNum1 = prompt("string1");
let stringNum2 = prompt("string2");
if (stringNum1 == stringNum2) {
    alert("The Strings are same.");
} 
else {
    alert("The Strings are not same.");
}