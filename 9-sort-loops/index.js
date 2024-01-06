/* 
Дан массив чисел const arr = [1, 40, -5, 10, 0];
Написать функцию, которая сортирует данный массив при помощи циклов.

подсказка:
- нужно использовать 2 цикла, вложенных друг в друга,
- нужно сравнивать и менять элементы
*/

const arr = [1, 40, -5, 10, 0];

function sort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
    }
  }
}

sort(arr);
console.log(arr);
