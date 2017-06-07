// finds the first non-repeating char in a string

function firstNonRepeatChar(str) {
  var len = str.length;
  var char;
  var charCount = {}
  for(var i =0; i<len; i++) {
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  for (var j in charCount) {
    if (charCount[j]==1)
       return j;
  }
}

var meow = firstNonRepeatChar('the quick brown fox jumps then quickly blow air');
console.log(meow);
//  = "f"
