// What is function hoisting in JavaScript?

var foo = function foo(){ 
 	return 12; 
}; 
// In JavaScript, variable and functions are hoisted. 
// Let's take function hoisting first. Basically, 
// the JavaScript interpreter looks ahead to find 
// all variable declarations and then hoists them 
// to the top of the function where they're declared. For example:

foo(); // Here foo is still undefined 
var foo = function foo(){ 
 	return 12; 
}; 

// Behind the scene of the code above looks like this:

var foo = undefined;
    foo(); // Here foo is undefined 
 	   foo = function foo(){
 	      / Some code stuff
      }
 var foo = undefined;
 	 foo = function foo(){
 	     / Some code stuff
    }
    foo(); // Now foo is defined here