// Reverse a string

function stringBack (s) {
    var newString = '';
    for (i = s.length -1; i >= 0; i--) {
        newString += s.charAt(i);
    }
    return newString;
}

function removeDups (str) {
    var unique = '';
    for (var i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) != str.indexOf(str[i])) {
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

console.log(remoDups('bananax'));
