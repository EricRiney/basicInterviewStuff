// How could you implement cache to save calculation time for a recursive fibonacci function?

var memo = [];

function _fibonacci(n) {
   if(memo[n]){    
    return memo[n];
   }
   else if (n < 2){
     return 1;
   }else{
     fibonacci(n-2) + fibonacci(n-1);
   }
}

