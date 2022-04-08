const sumAll = function(num1,num2) {
    
    if(num1>num2){
        [num1, num2] = [num2, num1];
    }
    
    if (typeof(num1)!='number'|| typeof(num2)!='number'){
        return 'ERROR'
    } else if (num1<0 || num2<0){
        return 'ERROR'
    }else{
        let allNums = []
        while(num1<=num2){
            allNums.push(num1)
            num1++;
        };

        const sum = allNums.reduce((accumulator,currentValue) => accumulator + currentValue); //adds all numbers

        return sum
    };

    
};

// Do not edit below this line
module.exports = sumAll;
