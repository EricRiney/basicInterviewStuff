// Write a function to remove duplicate members from an array

function removeDuplicate(arr) {
  var exists = {};
  var outArr = [];
  var elm;

  for(var i = 0; i < arr.length; i++) {
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
   }
  }
  return outArr;
}

var test =  removeDuplicate([1,3,3,3,1,5,6,7,8,1]);
//   = [1, 3, 5, 6, 7, 8]
