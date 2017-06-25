// Write a function to find the greatest common divisor of two numbers
// super fancy
// found it in a book

function greatestCommonDivisor(a, b) {
   if(b == 0) {
     return a;
   } else {
     return greatestCommonDivisor(b, a%b);
   }
}
