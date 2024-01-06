/* Напишите функцию, которая принимает:
-Массив чисел
-Функцию удаления элементов
И возвращает отфильтрованный массив. При этом функция удаления элементов принимает
число и возвращает true, если его надо удалить и false, если надо оставить */

// функция удаления элемента со значением 6
function deleteElements(arr, value) {
  let index = 0;
  while (index < arr.length) {
    if (arr[index] === value) {
      console.log("index arr", arr[index]);
      arr.splice(index, 1);
    } else {
      index++;
    }
  }
  return arr;
}

function filter(arr, value, fn) {
  console.log(fn.name);
  const res = fn(arr, value);
  return res;
}

let res = filter([1, 3, 5, 6, 1, 3, 5, 6, 1, 3, 5, 6], 6, deleteElements);
console.log("res", res);
