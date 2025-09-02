// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
  //return Math.max(a, b, c);

  let max = a >= b ? a : b;
  max = max >= c ? max : c;
  return max;
}