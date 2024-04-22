const findMinimum = (arr, k) => {
    const sortedArr = arr.sort();
    return sortedArr[k-1]
}

console.log(findMinimum([2,3,5,4,1,6,7], 4));

const findMaxium = (arr, k) => {
    const sortedArr = arr.sort();
    const reverseArr = sortedArr.reverse();
    return reverseArr[k-1]
}
console.log(findMaxium([2,3,5,4,1,6,7], 2));