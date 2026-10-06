function reverseString(text) {
  return text.split("").reverse().join("");
}

function isPalindrome(text) {
  return text === reverseString(text);
}

// Test reverseString
console.log(reverseString("hello"));
console.log(reverseString("cat"));
console.log(reverseString("world"));

// Test isPalindrome
console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));