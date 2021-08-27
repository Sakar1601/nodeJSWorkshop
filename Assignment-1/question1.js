// Implement the following function which should return as mentioned above
// const twoSum = (nums, target) => {
    
// };
// console.log(twoSum([2,7,11,15], 9))  //Output : [0,1]

const twoSumObject = (inputArray,target) => {
    let checkArray = {};
    for(var i=0; i<inputArray.length; i++){
        if(!checkArray.hasOwnProperty(target-inputArray[i]))
        {
            checkArray[inputArray[i]] = i;
        }
        else{
            return [checkArray[target-inputArray[i]],i];
        }
    }
}

const twoSumMap = (_inputArray, _target) => {
    const hashMap = new Map();
    for(var i=0; i<_inputArray.length; i++)
    {
        let complement = _target - _inputArray[i];
        if(hashMap.has(complement))
        {
            return [hashMap.get(complement),i]
        }
        hashMap.set(_inputArray[i],i);
    }
}

console.log(twoSumObject([2,7,11,15],9));
console.log(twoSumMap([2,8,4,5],9));