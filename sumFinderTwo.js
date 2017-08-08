// Write a function that, from a unsorted array, checks whether there
// are any two numbers that will sum up to a given number

function sumFinder(arr, sum) {
  var differ = {};
  var len = arr.length;
  var substract;

  for(var i = 0; i < len; i++) {
     substract = sum - arr[i];
     if(differ[substract])
       return true;
     else
       differ[arr[i]] = true;
  }

  return false;
}

console.log(sumFinder([6,4,3,2,1,7], 9));
//   = true
// > sumFinder([6,4,3,2,1,7], 2);
//   = false
