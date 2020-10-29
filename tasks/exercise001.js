// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.
// More examples in the test cases below.

// Good luck!

function singles(arr){
    if (arr === undefined) throw new Error("array is required");
    
    //reorder the array to ascending order
    arr.sort((a, b) => a - b);

    //create an empty array called uniqueArray
    let uniqueArray = [];
    
    //loop through arr. On each element check if the previous or next element is equal to current element. if not, push current elememnt to uniqueArray
        arr.forEach((number, index)=> {    
            (number == arr[index-1] || number == arr[index+1]) ? null : uniqueArray.push(number);
            });
        
        //if uniqueArray is empty return 0 else return sum of elements in newArray
        return (uniqueArray.length === 0) ? 0 : uniqueArray.reduce((total, currentNumber ) => total + currentNumber);
        }

module.exports = {
    singles
};
