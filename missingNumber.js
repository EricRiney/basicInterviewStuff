// finds the missing number in an array

function missingNumber(arr) {
  var n = arr.length + 1;
  var sum = 0;
  var expectedSum = n * (n + 1) / 2;
  for(var i = 0, len = arr.length; i < len; i++) {
    sum += arr[i];
  }
  return expectedSum - sum;
}

var test = missingNumber([5, 2, 6, 1, 3]);
console.log(test);
//   = 4
