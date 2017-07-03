// Write a sum method which will work properly when invoked using either syntax below.

//console.log(CrazySum01(2,3));   // Outputs 5
//console.log(CrazySum01(2)(3));  // Outputs 5

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

// Tests:
//=================================================
// CrazySum01(null, 8) input
// CrazySum01(8, null) input
// CrazySum01(null) input
//=================================================