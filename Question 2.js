function firstUniqChar(s) {
  const charFrequency = {};

  // Count the frequency of each character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Find the first character with a frequency of 1

  for (let i = 0; i < s.length; i++) {
   
 const char = s[i];
   
 if (charFrequency[char] === 1) {
      return i;
    }
  }

  return -1; // If no non-repeating character is found
}
console.log(firstUniqChar("leetcode")); // Output: 0

console.log(firstUniqChar("loveleetcode")); // Output: 2

console.log(firstUniqChar("aabb")); // Output: -1