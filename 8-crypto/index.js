function crypto(password) {
  // Переделала строку в массив
  const stringToArr = password.split("");
  console.log("Строка -> Массив:", stringToArr);

  const reversedArr = [];
  stringToArr.forEach((elem) => {
    reversedArr.unshift(elem);
  });

  console.log(stringToArr); // оригинальный массив
  console.log(reversedArr); // массив наоборот

  const arrToStr = reversedArr.join("");
  console.log("Перевернутый пароль -> Строка:", arrToStr);
}

crypto("hello");

function check(newPassword, oldPassword) {
  const newPasswordArr = newPassword.split("");

  const initialArr = [];
  newPasswordArr.forEach(function (elem) {
    initialArr.unshift(elem);
  });

  console.log(initialArr); // вернули массив в первоначальный вид

  const newPasswordStr = initialArr.join("");
  console.log(newPasswordStr); // перевели массив в строку

  if (newPasswordStr === oldPassword) {
    console.log("Вы ввели правильный пароль.");
  } else {
    console.log("Введите корректный пароль.");
  }
}
check("olleh", "hello");
