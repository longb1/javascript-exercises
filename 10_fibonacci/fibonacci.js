const fibonacci = function(num) {
    if(num<0){
        return 'OOPS'
    }
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= num; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return n1
};

// Do not edit below this line
module.exports = fibonacci;
