//Find minimum and maximum element in an array
//Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.

// step 01: -> If n is 1 then return arr[0] as min and max
// step 02: -> If n is > 1 then create two variables such as min and max
// step 03: -> Loop through the array and check if the current element is either lesser than min or greater than max
// step 04: -> assign the values respectively based on the if condition
// step 05: -> return the min and max in an array 

// Time complexity is O(n)
// Space complexity is O(1)

const getMinMax = (arr,n) => {
    if(n==1) {
        return [arr[0],arr[0]];
    }
        let min = arr[0];
        let max = arr[0];
        for(let i=0; i<arr.length; i++) {
            console.log(arr[i]);
            if(min > arr[i]) {
                min = arr[i]
            }
            if(max < arr[i]) {
                max = arr[i]
            }
        }
        return [min, max];
}

console.log(getMinMax([4, 1, 8, 9, 13, 12, 14, 7
],8));