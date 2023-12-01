/* Palindrome checker
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward,
 ignoring punctuation, case, and spacing.*/

function palindrome(str) {
  let reg = /[\W_]/g; //Regex to remove spaces, symbols etc
  let regStr = str.replace(reg, "").toLowerCase();
  let splitStr = regStr.split("").reverse().join("");

  return regStr === splitStr;
}

console.log(palindrome("Race Car"));
