// Given a positive integer N, count the total number of zeros
// contained in the integers in the range 1 to N, inclusive.

function countZero(n){
  var count = 0;
  while(n > 0){
   count += Math.floor(n/10);
   n = n/10;
  }
  return count;
}

 console.log(countZero(2014));
//   = 223
