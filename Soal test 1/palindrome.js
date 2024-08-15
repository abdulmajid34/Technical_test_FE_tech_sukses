/*
    Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama 
    dengan string yang diinputkan maka return true jika tidak return false
*/
function isPalindrome(str) {
  let words = str.length;
  for (let i = 0; i < words / 2; i++) {
    if (str[i] !== str[words - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("majid"));

module.exports = isPalindrome;
