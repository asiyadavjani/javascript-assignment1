// question 1
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// answer------------

// var city=prompt("enter your city name");
// if(city.toLowerCase() ==="karachi"){alert("wellcome to city of light")};



// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


// answer------------

// var gender=prompt("enter your gender:");
// if(gender .toLowerCase()==="male"){alert("good morning sir")};
// if(gender .toLowerCase()==="female"){alert("good morning maam")};


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


// answer----------------

//  var colour=prompt("enter your signal colour:");
//  if(colour .toLowerCase()==="red"){alert("must stop")};
//  if(colour .toLowerCase()==="yellow"){alert("ready to move")};
//  if(colour .toLowerCase()==="green"){alert(" move now")};


// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

// answer---------

// var fuel=prompt("enter your raiming fuel:");
//  if(fuel .toLowerCase()==="0.25litres") {alert("Please refill the fuel in your car")};



// question 5--------
// . Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");}
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }



// answer--------------

// var a=4;
// if (++a === 5){
//  alert("given condition for variable a is true"); }
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// } 
//  var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// if(c === 14){ 
// alert("condition 4 is true"); 
// } 
//  var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } 
//  if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// }
//  if("car" < "cat"){ 
// alert("car is smaller than cat"); 
// }




// question 6-----------

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:


// answer==============



//  var marks1 =+prompt("Enter marks obtained in subject 1:");
//  var marks2 =+prompt("Enter marks obtained in subject 2:");
//  var marks3 =+prompt("Enter marks obtained in subject 3:");
//  var totalMarks =300;

//  var obtainedMarks = marks1 + marks2 + marks3;
//  var percentage = (obtainedMarks / totalMarks) * 100;

//  var grade, remarks;

//  if (percentage >= 80) {
//   grade = "A-one";
//   remarks = "Excellent";
// } else if (percentage >= 70) {
//   grade = "A";
//   remarks = "Good";
//  } else if (percentage >= 60) {
//   grade = "B";
//  remarks = "You need to improve";
//  } else {
//    grade = "Fail";
//    remarks = "Sorry";
// }

//  document.writeln(`<h2>Result:</h2>
//  Total Marks: ${totalMarks }    <br>
//  Marks Obtained: ${obtainedMarks }    <br>
// Percentage: ${percentage }  %<br>
//  Grade:  ${grade }   <br>
//  Remarks: ${remarks }    <br>`);


// /////////question 7

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// anser------------


// var secretNum =7;
// var userGuess=+prompt("1 se 10 k drmiyan ak number guess krn?");

// if( secretNum===userGuess){
// alert("Bingo! Correct answer");
// }
// else if(userGuess+1===secretNum ) {alert("Close enough to the correct answer");}
// else{
//      alert("try again");
//  }




// question 8

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3..



// answer-----------------

// var num = +prompt("Enter a number:");

// if (num % 3 === 0) {
//     alert(num + " is divisible by 3");
// } else {
//     alert(num + " is not divisible by 3");
// }


// 9. Write a program that checks whether the given input is an
// even number or an odd number.


// answer---------

// var num = +prompt("Enter a number:");

// if (num % 2 === 0) {
//     alert(num + " is an even number");
// } else {
//     alert(num + " is an odd number");
// }




// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// answer--------------

// var temp = +prompt("Enter the temperature in °C:");

// if (temp > 40) {
//     alert("It is too hot outside.");
// } else if (temp > 30) {
//     alert("The Weather today is Normal.");
// } else if (temp > 20) {
//     alert("Today's Weather is cool.");
// } else if (temp > 10) {
//     alert("OMG! Today's weather is so Cool.");
// } else {
//     alert("It's very cold today!");
// }






//11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user


// answer-------------------

// var num1 = +prompt("Enter first number:");
// var num2 = +prompt("Enter second number:");
// var operator = prompt("Enter operation (+, -, *, /, %):");
// var result;

// if (operator === "+") {
//     result = num1 + num2;
// } else if (operator === "-") {
//     result = num1 - num2;
// } else if (operator === "*") {
//     result = num1 * num2;
// } else if (operator === "/") {
//     result = num1 / num2;
// } else if (operator === "%") {
//     result = num1 % num2;
// } else {
//     alert("Invalid operator!");
// }

// if (result !== undefined) {
//     alert("Result: " + result);
// }
      


