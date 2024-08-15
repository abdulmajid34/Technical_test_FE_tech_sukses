/*
    Buatlah fungsi dengan input array integer untuk mengurutkan angka dari 
    kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript
*/

function sortArray(arr, order) {
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (order === "asc") {
        if (arr[j] < arr[idx]) {
          idx = j;
        }
      } else if (order === "desc") {
        if (arr[j] > arr[idx]) {
          idx = j;
        }
      }
    }
    let result = arr[i];
    arr[i] = arr[idx];
    arr[idx] = result;
  }
  return arr;
}

console.log(sortArray([1, 4, 5, 6, 7, 9, 8, 2, 3], "desc"));

module.exports = sortArray;
