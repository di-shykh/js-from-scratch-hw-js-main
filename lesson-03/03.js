// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
  //return Math.max(a, b, c);
  let max = a;
  if (b - a >= 0) {
    max = b;
  }
  if (c - b >= 0) {
    max = c;
  }
  return max;
}