// Write a function to find the largest sum of any two elements

function topSum(arr) {
  var biggest = arr[0];
  var second = arr[1];
  var len = arr.length;

  if (len<2) return null;
  
  if (biggest<second){
    biggest = arr[1];
    second = arr[0];
  }

  for(var i = 2; i < len; i++) {
    if(arr[i] > biggest) {
      second = biggest;
      biggest = arr[i];
    }
    else if (arr[i]>second) {
      second = arr[i];
    }
  }
 return biggest + second;
}
