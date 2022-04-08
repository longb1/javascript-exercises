const palindromes = function (str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
    if (joinArray.toLowerCase().replace(regex,"")==str.toLowerCase().replace(regex,"")){
        return true
    }else{
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
