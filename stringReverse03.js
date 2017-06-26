// Write a function to reverse a string with some 
// half index kinda bullshit

function reverse(str) {
  str = str.split('');
  var len = str.length,
      halfIndex = Math.floor(len / 2) - 1,
      revStr;
  for (var i = 0; i <= halfIndex; i++) {
    revStr = str[len - i - 1];
    str[len - i - 1] = str[i];
    str[i] = revStr;
  }
  return str.join('');
}
        
// console.log(reverse("All dogs are good boys or girls"));
// slrig ro syob doog era sgod llA