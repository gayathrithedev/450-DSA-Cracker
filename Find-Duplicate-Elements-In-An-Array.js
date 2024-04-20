//Find All Duplicates in an Array

// approach 1:

// step 01: Create two variable, one to store the result and other one to store the occurence of each item
// step 02: Loop through the nums array to check if the number is already existed in the occurences object
// step 03: If its already there then add plus 1 to mark the next occurence
// step 04: If not presented then add the new element to the occurences object and assign its value 1
// step 05; Loop through the occurences object
// step 06: If any key has more than 1 has a value then that particular number(key) is duplicated
// step 07: Push that key value to the result array
// step 08: Return the result array

// Time complexity is O(n)
// Space complexity is O(n)

const findDuplicates1 = (nums) => {
    let result = [];
    let occurences = {}
    for(let i=0; i<nums.length; i++) {
        if(occurences[nums[i]] !== undefined) {
            occurences[nums[i]] = occurences[nums[i]] + 1;
        } else {
            occurences[nums[i]] = 1
        }
    }

    for(let key in occurences) {
        if(occurences[key] > 1) {
            result.push(key)
        }
    }
    return result;
}


// approach 2:

// Time complexity is O(n)
// Space complexity is O(1)
const findDuplicates2 = (nums) => {
    let result = []
    for(let i=0; i<nums.length; i++) {
        const currentNum = nums[i];
        const index = currentNum > 0 ? currentNum-1 : (currentNum * -1) -1;
        console.log(currentNum, nums[index]);
        if(nums[index] > 0) {
            nums[index] = nums[index] * -1;
        } else {
            result.push(nums[index]*1);
        }
    }

    return result;
};

console.log(findDuplicates1([1,2,1,1,1,3,4,5,6,7,2,3]))
console.log(findDuplicates2([1,2,1,1,1,3,4,5,6,7,2,3]))