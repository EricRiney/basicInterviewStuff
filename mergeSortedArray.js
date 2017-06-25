//Given two sorted lists of numbers in increasing order, write a function that
//merges them into a single list of numbers which is also sorted

function mergeSortedArray(a, b) {
  var merged = [],
      aElm = a[0],
      bElm = b[0],
      i = 1,
      j = 1;

  if(a.length ==0)
    return b;
  if(b.length ==0)
    return a;
  /*
  if aElm or bElm exists we will insert to merged array
  (will go inside while loop)
  to insert: aElm exists and bElm doesn't exists
  or both exists and aElm < bElm
  this is the critical part of the example
  */
  while(aElm || bElm) {
   if((aElm && !bElm) || aElm < bElm) {
     merged.push(aElm);
     aElm = a[i++];
   } else {
     merged.push(bElm);
     bElm = b[j++];
   }
  }
  return merged;
}

var test = mergeSortedArray([2,5,6,9], [1,2,3,29]);
console.log(test);
//  = [1, 2, 2, 3, 5, 6, 9, 29]
