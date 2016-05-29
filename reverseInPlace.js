// reverses the words in a string but keeps em in the same place
// so gross

function reverseInPlace(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

// > reverseInPlace('I am the good boy');
//  = "I ma eht doog yob"
