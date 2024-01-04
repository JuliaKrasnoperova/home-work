// Алгоритм Луна

/* 
1. Каждую вторую цифру, если количество цифр четное, умножаем на 2
2. Если результат этого умножения <=9, то оставляем как есть, а если > 9, то тогда мы вычиатем 9
3. Складываем получившиеся числа
4. Если сумма кратна 10, то резульат засчитан, карта прошла алгоритм. Если нет, то алгоритм не пройден.
*/

const card = "4561-2612-1234-5464";
const card1 = "4561-2612-1234-5467";

function numberValidation(number) {
  number = number.replaceAll("-", "");

  const arr = [];

  for (let i = 0; i < number.length; i++) {
    if (i % 2 == 0) {
      if (number[i] * 2 <= 9) {
        arr.push(number[i] * 2);
      } else if (number[i] * 2 > 9) {
        arr.push(number[i] * 2 - 9);
      }
    } else {
      arr.push(parseInt(number[i]));
    }
  }

  const sum = arr.reduce(function (acc, val) {
    return acc + val;
  });

  if (sum % 10 == 0) {
    console.log("Номер карты прошел валидацию!");
  } else {
    console.log("Введите корректный номер карты!");
  }
}

numberValidation(card); // Введите корректный номер карты!
numberValidation(card1); // Номер карты прошел валидацию!
