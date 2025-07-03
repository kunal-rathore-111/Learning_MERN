/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();

  let str2 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z') {

      str2 = str2 + str[i];       // strings add new character like that
    }
  }

  let i = 0, j = str2.length - 1;

  while (i <= j) {
    if (str2[i] != str2[j]) {
      return false;
    }
    else {
      i++, j--;
    }
  }
  return true;
}


module.exports = isPalindrome;
