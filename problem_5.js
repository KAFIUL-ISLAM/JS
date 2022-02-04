function findPosistive(numbers){
    let newNumbers=[];
    for(let number of numbers){
        if(number>=0){
            newNumbers.push(number);
        }
        else{
            break;
        }
    }
    return newNumbers;
}
console.log(findPosistive([21,38,25,14,1,9,0,8,85,2166,-2,265,-85,2125,-78]));