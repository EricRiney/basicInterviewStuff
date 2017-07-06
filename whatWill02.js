// What will be the output of the following code?

var output = (function(x){
    delete x;
    return x;
})(0);
console.log(output);

// The output would be 0. 

// The delete operator is used to delete properties from an object. 
// Here x is not an object but a local variable.
// Delete operators don't affect local variables.
