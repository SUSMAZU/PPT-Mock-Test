
function moveZeroes(nums) {
  let nonZeroIndex = 0; // Pointer to track the position for the next non-zero element

  // Iterate through the array

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
     
 // If the current element is non-zero, swap it with the element at nonZeroIndex

      [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];

      nonZeroIndex++; // Move the nonZeroIndex pointer to the next position
    }
  }
}

const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

const nums2 = [0];
moveZeroes(nums2);
console.log(nums2); // Output: [0]

