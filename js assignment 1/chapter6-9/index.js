// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// answer-------

// var a=10;
// document.writeln(`<h1>RESULT</h1>
//     the value of a is:${a}<br>
//     ------------------<br>
//     the value of ++a is:${++a}<br>
//     now the vaslue of a is ${a}
//     <br><br>
//     the value of a++ is:${a}<br>
//     now the vaslue of a is ${++a}
//     <br><br>
//     the value of --a is:${--a}<br>
//      the value of a is:${a}
//      <br><br>
//      the value of a-- is${a}<br>
//      now the value of a is ${--a}`)


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


// answer------------

// --a (current value 1)
// --a (1) - --b(0) + ++b(1) (current value 1)
// 1+ ++b(1) (curent value 2)
// 2 + b--(1) (current value 3)
// final result is 3

// var a=2;
// var b=1;
// var result=--a - --b + ++b + b--;

// document.writeln(`a is ${a}<br>
//     b is ${b}<br>
//     result is ${result}`)



// question 3
// Write a program that takes input a name from user &
// greet the user

// answer---------\


// var userName =prompt("please enter your number?")
// document.writeln("hello "+"wellcome in our web site")





// 4. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


// answer---------

// var num=+prompt("please enter a number?",5);
// if(num==="" || num===null){
//     num=5;
// }
// document.writeln(`<h1>TABLE of ${num}</h1>`)

// for( var i=1; i<=10; i++){
//     document.writeln(num+" x "+i+" = "+ (num*i)+"<br>");

// }



// 5.
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table



// answer------------
var sub1="english";

var sub2="urdu";

var sub3="maths";

var totalMark=100;

var marks1=+prompt("enter a mark from"+sub1);
var marks2=+prompt("enter a mark from"+sub2);
var marks3=+prompt("enter a mark from"+sub3);

var totalObtain= marks1+ marks2+ marks3;
var grandTotal=totalMark*3;
var percentage=(totalObtain/grandTotal)*100;

document.writeln(`<table>
   
    

    <tr><td>${sub1}</td>
    <td>${totalMark}</td>
    <td>${marks1}</td>
    <td>${marks1}%</td></tr>
 
    <tr><td>${sub2}</td>
    <td>${totalMark}</td>
    <td>${marks2}</td>
    <td>${marks2}%</td></tr>

    <tr><td>${sub3}</td>
    <td>${totalMark}</td>
    <td>${marks3}</td>
    <td>${marks3}%</td></tr>

    <tr>
    <th>total</th>
    <th>${grandTotal} </th>
    <th>${totalObtain} </th>
    <th>${percentage}%</th>
    </tr>

</table>`)


