// Write a simple function to tell whether 2 is passed as a parameter or not?

function isTwoPassed(){
  var args = Array.prototype.slice.call(arguments);
  return args.indexOf(2) != -1;
}

console.log(isTwoPassed(1,4)) //false
console.log(isTwoPassed(5,3,1,2)) //true