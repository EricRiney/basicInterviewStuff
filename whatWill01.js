// What will be the output of the code below?

var bar = true;
console.log(bar + 0);   
console.log(bar + "xyz");  
console.log(bar + true);  
console.log(bar + false);   

// The code will output:
// 1 
// "truexyz" 
// 2
// 1 

// Here's a general guideline for addition operators:
// Number + Number -> Addition
// Boolean + Number -> Addition
// Boolean + Number -> Addition
// Number + String -> Concatenation
// String + Boolean -> Concatenation
// String + String -> Concatenation