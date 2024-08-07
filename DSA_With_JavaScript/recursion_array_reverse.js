let arr = [5, 1, 2, 8, 4, 7, 25, 44, 14, 57];
// console.log(arr.reverse()); // short cut key for reverse array

function reverse(start, end) {
  if (start <= end) {
    reverse(start + 1, end - 1);
  }
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  return arr;
}
let a = reverse(0, arr.length - 1);
console.log(a)
