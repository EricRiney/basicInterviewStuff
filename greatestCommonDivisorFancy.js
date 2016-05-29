// finds teh greatest common divisor between two ints
// super fancy
//found it in a book

function greatestCommonDivisor(a, b) {
   if(b == 0)
     return a;
   else
     return greatestCommonDivisor(b, a%b);
}
