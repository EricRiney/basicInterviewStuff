// the question of questions
// "Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the number 
// and for the multiples of five print “Buzz”. 
// For numbers which are multiples of both three and five print “FizzBuzz”."

function fizBiz(number) {
    for (var i = 1; i <= number; i++) {
        if (i % 15 == 0)
            console.log("fizzbizz");
        else if (i % 5 == 0)
            console.log("bizz");
        else if (i % 3 == 0)
            console.log("fizz");
        else
            console.log(i)
    }
}
//console.log(fizBiz(100));
