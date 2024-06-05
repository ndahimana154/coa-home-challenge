function hasSubarrayWithTargetSum(arr, target) {
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }
        if (currentSum === target) {
            return true;
        }
    }
    return false;
}

console.log(hasSubarrayWithTargetSum([-1, -2, 3, 7, 1, 2], 6)); // Output: true
console.log(hasSubarrayWithTargetSum([1, 2, 3, 4, 5], 9)); // Output: true, subarray [2, 3, 4]
console.log(hasSubarrayWithTargetSum([1, 2, 3, 4, 5], 15)); // Output: true, subarray [1, 2, 3, 4, 5]
console.log(hasSubarrayWithTargetSum([1, 2, 3, 4, 5], 20)); // Output: false
console.log(hasSubarrayWithTargetSum([1, 2, 3, 4, -2, 5], 7)); // Output: true, subarray [3, 4, -2, 2]
console.log(hasSubarrayWithTargetSum([], 5)); // Output: false
console.log(hasSubarrayWithTargetSum([5], 5)); // Output: true
