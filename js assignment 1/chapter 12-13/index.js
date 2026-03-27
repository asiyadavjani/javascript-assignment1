// question 1------------

// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


// answer--------

// var char = prompt("Enter a character:");
// var ascii =char.charCodeAt(0);

// if(ascii >=48 && ascii <=57){
//     document.writeln("it is a number");
// }
// else if(ascii >=65 && ascii <=90){
//     document.writeln("it is an upper case letter");
// }
// else if(ascii >=97 && ascii <=122){
//     document.writeln("it is a lower case letter");
    
// }



// question 2------------

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


// answer------

// var num1 =+prompt("enter a number");
// var num2 =+prompt("enter a number");
//  if(num1>num2){document.writeln(`${num1} is greater`);}
//  else if(num1<num2){document.writeln(`${num2} is greater`);}
// else{document.writeln(`Both numbers are equal`)}





// question 3---------

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// answer------------

// var num = +prompt("enter a number");
// if(num > 0){
//     document.writeln(`${num}is positive`);
// }
// else if(num< 0){
//     document.writeln(`${num}is negative`);
// }
// else{
//     document.writeln(`${num} is zero`)};



// question 4----------

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise


// answer------------

// var char = prompt("Enter a character").toLocaleLowerCase();
// if (char.length === 1) {
//     if (char === "a" || char === "e"|| char === "i"|| char === "o"|| char === "u" ) {
//          document.writeln(`${char} is a vowel`);
//     }
//     else{
//          document.writeln(`${char} is not a vowel`);
//     }
// }
//  else{
//          document.writeln(`Please Enter only one Character`);
//     }



// question 5-------------

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// answer----------

// var correctPass = "my password";
// var userPass = prompt("enter a pasword");

// if(!userPass){
//     document.writeln("please enter a pasword");}
//   else if(userPass===correctPass){
// document.writeln("correct! too good");
//   }
// else{
// document.writeln("sorry incoorect password");
// }


// question 6------------

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


// answer------------

// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; }
// else { 
// greeting = "Good evening"; 
// }
// document.writeln(greeting)



// question 7---------

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// answer-------

// var time = prompt("Enter time in 24-hour format (e.g., 1900):");

// var hours = time.slice(0, 2);
// var minutes = time.slice(2, 4);

// var period;

// if (hours === 0) {
//     hours = 12;
//     period = "AM";
// } 
// else if (hours < 12) {
//     period = "AM";
// } 
// else if (hours === 12) {
//     period = "PM";
// } 
// else {
//     hours = hours - 12;
//     period = "PM";
// }

// document.writeln(hours + ":" + minutes + " " + period);