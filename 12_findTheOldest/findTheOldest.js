const findTheOldest = function(people) {
    let year=new Date().getFullYear();
    let ageArray=[]
    for(let i=0;i<people.length;i++){
        if(people[i].hasOwnProperty('yearOfDeath')==true){
            ageArray.push(people[i].yearOfDeath-people[i].yearOfBirth)
        }else{
            ageArray.push(year-people[i].yearOfBirth)
        }
    }
    return people[ageArray.indexOf(Math.max(...ageArray))]
};

// Do not edit below this line
module.exports = findTheOldest;
