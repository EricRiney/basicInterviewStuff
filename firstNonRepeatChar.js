// finds the first non-repeating char in a string

function firstNonRepeatChar(str) {
  var len = str.length;
  var char = '';
  var charCount = {};
  for(var i =0; i<len; i++) {
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  console.log(charCount);
  for (var letter in charCount) {
    if (charCount[letter]==1)
       return letter;
  }
}

var meow = firstNonRepeatChar('the quick brown fox jumps then quickly blow air');
console.log(meow);
//  = "f"
