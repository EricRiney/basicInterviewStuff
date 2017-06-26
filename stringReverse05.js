// Write a function to reverse a string
// but like do it in a recursive way
// and make it pretty

function reverse(str){
  if(!str || str.length <2) return str;
  return str.split('').reverse().join('');
}

// console.log(reverse("All dogs are good boys or girls"));
// slrig ro syob doog era sgod llA
