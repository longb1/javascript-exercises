const removeFromArray = function(array,...args) {
    
    for(let i =0;i<args.length;i++){
        if(array.includes(args[i])==true){
            array.splice(array.indexOf(args[i]),1)
        }else{
            continue
        }    
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
