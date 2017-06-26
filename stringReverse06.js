// Write a function to reverse a string
// but make the reverse function as a string extension 

String.prototype.reverse = function () {
  if(!this || this.length <2) return this;

  return this.split('').reverse().join('');
}

// console.log('All dogs are good boys or girls'.reverse());
// slrig ro syob doog era sgod llA
