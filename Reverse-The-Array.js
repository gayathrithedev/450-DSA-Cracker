// approach 1
// Array reverse using an extra array

// step: 01 -> Create an empty new array
// step: 02 -> Loop through the original array 
// step: 03 -> Assign the values of original array to new array from opposite end
// step: 04 -> return the new array

// Time complexity is O(n)
// Space complexity is O(n)
const reverseArray01 = (arr) => {
    const result = [];
    for(let i=arr.length-1; i>=0; i--) {
        result.push(arr[i]);
    }
    return result;
}
console.log(reverseArray01([1,2,3]));


// approach 2
// Array reverse using a Loop

// step: 01 -> Loop through the array using start and end
// step: 02 -> Swap the start and end element
// step: 03 -> Move the start towards end and end elemnt towards the start until they meet each other

// Time complexity is O(n)
// Space complexity is O(1)
const reverseArray02 = (arr) => {

    for(let i=0; i<arr.length-1; i++) {
        let start = i;
        let end = arr.length-i-1;
        if(start!==end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
        }
    }   

    return arr;
}

console.log(reverseArray02([1,2,3]));



// approach 03
// Array reverse using inbuilt method

// step: 01 -> use reverse method

// Time complexity is O(n)
// Space complexity is O(1)
const reverseArray03 = (arr) => {
    const result = arr.reverse();
    return result
}
console.log(reverseArray03([1,2,3]));