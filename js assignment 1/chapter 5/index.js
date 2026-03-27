// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser


// answer-----------
// var sum1=3;
// var sum2=5;
// var total=sum1+sum2;
// document.writeln("sum of " +sum1 +" and "+sum2 +" is " + total );


// Repeat task1 for subtraction, multiplication, division &
// modulus


// answer--------

//////////////////////////////////////////  Subtraction
//var num1 = 3;
// var num2 =5;
// var sum = num1 - num2;
// document.writeln("The subtraction of " + num1 + " and " + num2 + " is " + sum) ;


//////////////////////////////////////////  Multiplication
//var num1 = 3;
// var num2 =5;
// var sum = num1 * num2;
// document.writeln("The multiplicatioin of " + num1 + " and " + num2 + " is " + sum) ;



//////////////////////////////////////////  Division
//var num1 = 3;
// var num2 =5;
// var sum = num1 / num2;
// document.writeln("The division of " + num1 + " and " + num2 + " is " + sum) ;



////////////////////////////////////////// Modulus
//var num1 = 3;
// var num2 =5;
// var sum = num1 % num2;
// document.writeln("The modulus of " + num1 + " and " + num2 + " is " + sum) ;



// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.


// answer-----------

// a) var value;

// b)document.writeln("value bafter variable declartion is:" + value)

// c)value=5;

// d)document.writeln("initial value :"+ value);

//  e)var value++;

// f) document.writeln("<br>value after increment is : " + value );  

// g) var value+7;

// h) document.writeln("<br>value after addition is : " + value );  

// i)var value--;

// J) document.writeln("<br>value after decrement is : " + value ); 

// k) var remainder = value % 3;

// l)// document.writeln("<br>The remainder is : " + remainder ); 



// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output



// answer------------

// var ticket=600;
// var  total=ticket * 5;
// document.writeln("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");


// 5. Write a script to display multiplication table of any
// number in your browser. 


// answer------------


// var num =4;
// document.writeln("table of "+num + "<br>");
// for(var i=1; i <=10; i++){
//     document.writeln(num+ " x " + i+" = "+ num*i+ "<br>");
// }



// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:


// answer------------

//  var celsius = 25;
// var fahrenheit = (celsius *9/5) + 32;
// document.writeln(celsius + "°C is " + fahrenheit + "°F <br><br>");

// var fahrenheit2 = 70;
//  var celsius2 = (fahrenheit2 - 32) * 5/9;
// document.writeln(fahrenheit2 + "°F is " + celsius2 + "°C <br><br>");



// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.


// answer-------------

// var item1=650;
// var quantity1=3;

// var item2=100;
// var quantity2 =7;
//  var shipping=100;

//   var totalCost = (item1*quantity1) + (item2*quantity2) + shipping;
//  document.writeln(`    <h1>Shopping Cart Receipt</h1> <br>
//   <p>price of item 1 : ${ item1}</p>
//      <p>Quantity of 1 : ${quantity1 }</p>
//      <p>price of item 2 : ${item2}</p>
//    <p>Quantity of 2 : ${quantity2}</p>
//       <p>Shipping charges : ${shipping}</p><br>
//        <p>Total cost of your order is : ${totalCost}</p>

//      `)




// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// answer-----------

// var totalmark =980;
// var obtmark=804;
// percentage =(obtmark/totalmark)*100;

// document.writeln(` <h1>MARK SHEET</h1>
//     <p>total mark = ${totalmark}
//     <p>obtain mark = ${obtmark}
//    <p>percentage : ${ percentage }</p>`)



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


// answer-----------

// document.writeln(`    <h1>Currency in PKR</h1> <br>
//      <p>total currency in PKR is :${ 10 * 104.80 + 25 * 28 }</p>
     
//      `)


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


// aNSWER----------

// var num=25;
// document.writeln(`<p> ${num+5*10/2}</p>`)


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.


// answer-------

// var year = 2016;
// var birthYear = 1992;
// var age1 = year-birthYear;
// var age2 = age1-1;
// document.writeln(`They are either ${age2} or ${age1} years old.`);

// document.writeln(`<h1>Age calculator</h1> <br>
//       <p>Current year :${ year }</p>
//         <p>Birth year :${birthYear}</p>
//           <p>Age :${ age1 }</p>`);



// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// answer---------------

// var radius = 20;
// var pi = 3.142;
// var circum = 2 * pi * radius;
// var area = pi* radius*radius;

// document.writeln(`    <h1>The Geometrizer</h1> <br>
//     <p>Radius of circle : ${ radius }</p>
//      <p>The circumference is : ${circum }</p>
//      <p>The area is : ${ area }</p>
     
//     `)


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


// answer---------------

// var snack= "chocolate chip";
// var age = 15;
// var maxAge = 65;
// var est = 3;
// var calc= (maxAge-age)* est *365;

// document.writeln(`<h1>The Lifetime Supply Calculator</h1>

//     <p>Favourite Snack: ${ snack }</p>
//     <p>Current age: ${age}</p>
//     <p>Estimated Maximum Age: ${ maxAge }</p>
//     <p>Amount of snacks per day: ${est }</p>
//     <p>You will need  ${calc } chocolate chip to last you until the ripe old age of 65</p>`)
