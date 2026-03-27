// question 1-------

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// answer------

// var arr = [
//     [],
//     [],
//     []
// ];


// question 2----------

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// answer------------

// var arr =[
// [0,1,2,3],
// [1,0,1,2],
// [2,1,0,1],
// ];
// for (var i =0; i < arr.length;i++){
// document.writeln(`${arr[i].join("")}<br>`)
// }

// question 3--------------

// 3. Write a program to print numeric counting from 1 to 10.

// answer--------

// for(var i=1;i<=10;i++){
// document.writeln(i+ "<br>"); 
// }

// question 4----------

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// answer---------

// var table =+prompt("please enter a table");
// var length =+prompt("plese enter a tablee length");

// document.writeln("Table of "+table + "<br><br>");
// for(var i=1; i<=length;i++){
//     document.writeln(table+ " x "+ i +" = " + table*i + "<br>");

// }

// question 5------

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// answer-----------


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"] ;
// for (var i = 0; i < fruits.length; i++) {
//     document.writeln(fruits[i]+"<br><br>");  
// }
// for (var i = 0; i < fruits.length; i++) {
    
//     document.writeln(`Element at Index ${i} is ${fruits[i]}<br><br>`);
// }



// question 6------------

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// answer----------
//  a---------------------

// document.writeln("<h1>counting</h1>");
// for(var i=1; i<=15; i++){
//  if(i<15){
//          document.writeln(i+",");
//  }
// else{  document.writeln(i);}
// }
// // b--------------

// document.writeln("<h1>reverse counting</h1>");
// for (var i = 10; i >=1; i--) {
//      if (i  >1) {
//          document.writeln(i+",");
//    }
//     else{
//         document.writeln(i);
//      }
//    }

//    c--------------

//  document.writeln (`<h3> Even: </h3>`);
//   for (var i = 0; i <=20; i++) {
//     if (i % 2 === 0) {
//          if (i  <20) {
//          document.writeln(i+",");
//     }
//     else{
//          document.writeln(i);
//     }
//     }
  
//   }

//   //////////////////////////// d

//  document.writeln (`<h3> Odd: </h3>`);
//   for (var i = 0; i <=20; i++) {
//     if (i % 2 !== 0) {
//          if (i  <19) {
//          document.writeln(i+",");
//     }
//     else{
//          document.writeln(i);
//     }
//     }
  
//   }


//   //////////////////////////// e

//  document.writeln (`<h3> Series:</h3>`);
//   for (var i = 2; i <=20; i+=2) {
   
//          if (i  <20) {
//          document.writeln(i+"k,");
//     }
//     else{
//          document.writeln(i+"k");
//     }
    
  
//   }


// question 7--------------

//  7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// answer----------

// 




// for (var i = 0; i < items.length; i++) {
//     if (user === items[i]) {
//         isItemFound = true;
//     document.writeln(`${user} is <b>avaible</b> at Index ${i} in our bakery  <br><br>`);
// break;
//     }
 
//     }

// if (isItemFound === false) {
//     document.writeln(` We are sorry ${user} is <b>not avaible</b> in our bakery  <br><br>`); 
// }


// QUESTION 8------

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// ANSWER-----------


// var a  = [24, 53, 78, 91, 12];
//    9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
// document.writeln(`Array items ${a} <br><br>`);

//   var largest = a[0];
//   for (var i = 0; i < a.length; i++) {
//     if (a[i]> largest) {
//         largest= a[i];
   
   
//     }
    
//   }
//    document.writeln(` The largest number is ${largest} `); 


// question 9---------

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// answer----------

//  var a = [24,53,78,91,12];

//  document.writeln(`Array items ${a} <br><br>`);

//  var smallest =a[0];
//  for(var i =0; i <a.length;i++){
//   if (a[i]< smallest) {
//         smallest= a[i];
   
   
//   }
    
//  }
//     document.writeln(` The smallest number is ${smallest} `); 


// question 10--------

// 10. Write a program to print multiples of 5 ranging 1 to
// 100

// answer----------

// for (var i= 1; i <= 100; i++) {
//      if (i % 5 === 0) {
//          if (i  <100) {
//          document.writeln(i+",");
//     }
//     else{
//          document.writeln(i);
//     }
//     }
    
// }
