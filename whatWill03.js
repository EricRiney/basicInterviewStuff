// What will be the output of the following code?

var x = 1;
var output = (function(){
    delete x;
    return x;
  })();
  
  console.log(output);

  // > 1 
  // The delete operator is used to delete the property of an object. 
  // Here x is not an object, but rather it's the global variable of type number.