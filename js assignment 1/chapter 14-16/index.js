// question 1---------

// Declare an empty array using JS literal notation to store
// student names in future.

// answer----------

// var student = [];


// question 2-------------

// 2. Declare an empty array using JS object notation to store
// student names in future.

// answer----------

// var studentNames = [];

// question 3----------

// 3. Declare and initialize a strings array.

// answer------

// let fruit = ["apple","banana","grapes","orange"];

// question 4-------------

// 4. Declare and initialize a numbers array.

// answer--------

// var arr =[1,2,3,4,5];

// question 5----------

// 5. Declare and initialize a boolean array

// answer------

// var arr = [true,false];

// question 6---------

// 6. Declare and initialize a mixed array.

// answer-------

// var arr = ["john",1,true];


// question 7----
 
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// answer------------

// var qualification =["ssc","hsc","bcs","bs","bcom","ms","m.","phil","phd"];
// document.writeln("<h1>QUALIFICATIONS:</h1>");
// for(var i=0; i < qualification.length;i++){
//     document.writeln("<p>"+ (i+1) + ")" + qualification[i] + "</p>");
// }

// question 8------

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// answer------------

// // var students =["Michael","John","Tony"];
// var score = [320,230,480]; 
// var total = 500;

// for (var i = 0; i< students.length; i++) {
// var percentage = (score[i]/total)*100;
// document.writeln(`Score of ${students[i] } is ${score[i]} . Percentage is : ${percentage}%`);
//  document.writeln(`<br> `) 

//   }


// question 9------------

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// answer-------------

// var color=["red","blue","green","yellow"];
//   document.writeln(`<h3>Initial colours: ${color }</h3>`);

// //   a'''''''''''''''''''''''''''''

// var colorToAddStart =prompt("strting color");
// color.unshift(colorToAddStart);
// document.writeln(`<h3>ubdated(added to start):${color}</h3>`);

// // b''''''''''''''''''

// var colorToEnd =prompt("ending colour");
// color.push(colorToEnd);
// document.writeln(`<h3>ubdated(added to end):${color} </h3>`);

// // c'''''''''''''''

// var colorToAddStart =prompt("starting add 2 color");
// color.unshift(colorToAddStart);
// document.writeln(`<h3>updated(added to start):${color}</h3>`);

// // d''''''''''''''

// var colorToDelStart =prompt("delete color");
// color.push(colorToDelStart);
// document.writeln(`<h3>updated(delete to start):${color}</h3>`);

// // e'''''''''''''''

// var colorToDelStart =prompt("delete color");
// color.pop(colorToDelStart);
// document.writeln(`<h3>updated(delete to start):${color}</h3>`);

// // f''''''''''''''''

// var indexToAdd =prompt("ks index p color add krna h");
// var newColorName =prompt("add to color");
// color.slice(indexToAdd,0,newColorName);
// document.writeln(<h3>update${indexToAdd}:${color}</h3>);

// // g''''''''''''''''''''

// var indexToDlt =prompt("ks index p color dlt krna h");
// var dltColor =prompt("DLT to color");
// color.splice(indexToDlt,dltColor);
// document.writeln(<h3>update${indexToDlt}:${color}</h3>);


// question 10-----------

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// answer------------


// var scores = [320, 230, 480, 120];

// document.writeln(`Original Scores: ${scores }  <br><br>`);

// scores.sort(function(a,b){return a-b;});

// document.writeln(`Sorted Scores (Ascending):  ${scores }`);

// question 11-------------

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// answer-------

// var cities =["Karach ","Lahore","Islamabad ","Quetta","Peshawar"];
// var cityCopy = cities.slice(2,4');
// document.writeln(`<h3>Cities List:  </h3><h3>${cities }</h3>`);
// document.writeln(`<h3>Selected Cities:</h3> <h3> ${cityCopy }</h3>`);

// question 12---------

// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


// answer------

// var arr = ["This" , " is ","  my ","  cat"]; 
// var string = arr.join("");
// document.writeln(`<h3>Array:  </h3><h3>${arr }</h3>`);
// document.writeln(`<h3>String:</h3> <h3> ${string }</h3>`);


// question 13-------
//13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


// answer-------------

// var arr =[];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer ");
// arr.push("Monitor");
// document.writeln(`<h3>Devices:  </h3><h3>${arr }</h3>`);

// document.writeln(`<h3>Out:  </h3><h3>${arr.shift() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.shift() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.shift() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.shift() }</h3>`);


// question 14------------

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

// answer---------

// var arr =[];
// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer ");
// arr.push("Monitor");
// document.writeln(`<h3>Devices:  </h3><h3>${arr }</h3>`);

// document.writeln(`<h3>Out:  </h3><h3>${arr.pop() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.pop() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.pop() }</h3>`);
// document.writeln(`<h3>Out:  </h3><h3>${arr.pop() }</h3>`);


// question 15-------------

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

// answer-----------


  var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
 document.writeln("<select>");
for (var i = 0; i < phones.length; i++) {
   document.writeln(`<option> ${phones[i] } </option>`);

    
 }
document.writeln("</select>");