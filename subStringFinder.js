// Write a function to match a substring of a string

function subStringFinder(str, subStr) {
  var idx = 0;
  var i = 0;
  var j = 0;
  var len = str.length;
  var subLen = subStr.length;

   for(i; i < len; i++) {
      if(str[i] == subStr[j]) {
         j++;
      } else {
         j = 0;
      }
      if(j == 0) {
        idx = i;
      } 
      else if (j == subLen) {
        return idx;
      }
  }
  return -1;
}

console.log(subStringFinder('abbcdabbbbbck', 'ab'));
//   = 0
console.log(subStringFinder('abbcdabbbbbck', 'bck'));
//   = 9

//doesn't work for this one.
// > subStringFinder('abbcdabbbbbck', 'bbbck')
//   = -1
