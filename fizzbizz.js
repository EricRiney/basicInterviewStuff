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
console.log(fizBiz(100));