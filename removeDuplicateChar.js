// Write a function that removes the duplicate chars from a string

function removeDuplicateChar(str) {
  var len = str.length;
  var char;
  var charCount = [];
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
    if (charCount[j] == 1)
       newStr.push(j);
  }
  return newStr.join('');
}

console.log(removeDuplicateCharToo('anaconda'));


function removeDuplicateCharToo(str) {
  var unique = '';
  for (var i = 0; i < str.length; i++) {
    //if(unique.indexOf(str[i])==-1){                     // takes one out 
    if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) { // takes both out
      unique += str[i];
    }
  }
  return unique;
}

console.log(removeDuplicateCharToo('baraban'));
// console.log(find_unique_characters('anaconda'));