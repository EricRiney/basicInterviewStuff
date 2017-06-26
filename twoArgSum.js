// Write a sum method which will work properly when invoked using either syntax below.

//console.log(sum(2,3));   // Outputs 5
//console.log(sum(2)(3));  // Outputs 5

function CrazySum01(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { 
        return x + y; 
    };
  }
}

function CrazySum02(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { 
        return x + y; 
    };
  }
}