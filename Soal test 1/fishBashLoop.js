/*
    Question no 1:
    Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, 
    dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", 
    cetak cukup salah satu dari kondisi tersebut, 
    cetak menggunakan console log atau sejenisnya.
*/
function fishBashLoop(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 15 === 0) {
      console.log("fish bash");
    } else if (i % 3 === 0) {
      console.log("fish");
    } else if (i % 5 === 0) {
      console.log("bash");
    } else {
      console.log(i);
    }
  }
}
console.log(fishBashLoop(20));

module.exports = fishBashLoop;
