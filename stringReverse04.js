// Write a function to reverse a string with  
// but like do it in a recursive way

function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

// console.log(reverse("All dogs are good boys or girls"));
// slrig ro syob doog era sgod llA