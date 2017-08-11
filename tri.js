// Write me a function that receives three integer inputs 
// for the lengths of the sides of a triangle and returns 
// one of four values to determine the triangle type 
// (1=scalene, 2=isosceles, 3=equilateral, 4=error). 
// Generate test cases for the function assuming another developer coded the function 

// Triangle test function
function triTest(a, b, c) {
    if ((a + b > c) && (b + c > a) && (c + a > b)) {
        if (a == b && b == c && c == a) {
            return 'equilateral';
        }
        else if (a != b && b != c && c != a) {
            return 'scalene';
        } 
        else {
            return 'isosceles';
        }
    }
    return 'error';
}

// tests
console.log(triTest(-5,-5,-5)); // error
console.log(triTest(0,0,0)); // error
console.log(triTest(2,5,4)); // scalene
console.log(triTest(5,5,5)); // equilateral
console.log(tri(5,5,2)); // isosceles
console.log(triTest(2,5,2)); // error

