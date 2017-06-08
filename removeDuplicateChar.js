// removes the duplicate chars from a string

function removeDuplicateChar(str) {
  var len = str.length;
  var char;
  var charCount = {};
  var newStr = [];
  for(var i = 0; i < len; i++) {
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  for (var j in charCount) {
    if (charCount[j]==1)
       newStr.push(j);
  }
  return newStr.join('');
}
//
// > removeDuplicateChar('Learn more javascript dude');
//   = "Lnmojvsciptu"
