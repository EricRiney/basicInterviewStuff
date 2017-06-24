// Reverse a string

function stringBack (s) {
    var newString = '';
    for (i = s.length -1; i >= 0; i--) {
        newString += s.charAt(i);
    }
    return newString;
}

function findUnique (str) {
    var unique = '';
    for (var i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
            unique += str[i];
        }
    }
    return unique;
}

function remoDups (str) {
    var unique = '';
    for (var i = 0; i < str.length; i++) {
        if (!unique.includes(str[i])) {
            unique += str[i];
        }
    }
    return unique;
}

function firstNonRep(str) {
    var length = str.length;
    var char = '';
    var charCount = [];
    for (var i = 0; i < length; i++) {
        char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        }
        else 
        charCount[char] = 1;
    }
    //console.log(charCount);
    for (var letter in charCount) {
        if (charCount[letter]==1)
            return letter;
  }
}

function isPrime(num) {
    var divsor = 2;
    while (divsor < num) {
        if (num % divsor) {
            return false;
        } else {
            divsor++;
        }
    }
    return true;
}

function isPal(str) {
    var len = str.length
    for (var i = 0; i <= len/2; i++) {
        if (str[i] != str[len-1-i]) {
            return false;
        }
    }
    return false;
}

function ctZero(num) {
    var zeros = 0;
    while (num > 0) {
        zeros += Math.floor(num/10);
        num = num/10
    }
    return zeros;
}

console.log(ctZero(10));


//console.log(isPal("anahkhh"));

//console.log(cars);

//console.log(remoDups('bananax'));
//console.log(findUnique("bananaz"));
