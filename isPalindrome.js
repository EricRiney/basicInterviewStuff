// Write a function to verify a word as palindrome
// Remember:
// If you reverse a word and it becomes same as the previous word, it is called palindrome

function isPalindrome(str) {
  var len = str.length;
  for(var i = 0; i < len/2; i++){
    if (str[i] != str[len -1 -i])
       return false;
  }
  return true;
}

var test = isPalindrome('madam');
console.log(test);
//   = true
// > isPalindrome('toyota')
//   = false

// Tests:
//=================================================
// taco cat input
// meow input
// null input -> return false
// non-String input -> false
// empty string behavior
//=================================================