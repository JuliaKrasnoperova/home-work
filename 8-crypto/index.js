function crypto(password) {
  let stringToArr = password.split("");
  console.log("Строка -> Массив:", stringToArr);
  [firstLetter, secondLetter, thirdLetter, ...otherLetters] = stringToArr;

  for (let index = 0; index < stringToArr.length; index++) {
    const oldTask = stringToArr[index];
    stringToArr.splice(index, 1);
    stringToArr.unshift(oldTask);
  }
  console.log("Перевернутый пароль:", stringToArr);

  const arrToStr = stringToArr.join("");
  console.log("Перевернутый пароль -> Строка:", arrToStr);
}

crypto("hello");
crypto("password");

function check(newPassword, oldPassword) {
  const newPasswordArr = Array.from(newPassword);

  for (let index = 0; index < newPasswordArr.length; index++) {
    const oldTask = newPasswordArr[index];
    newPasswordArr.splice(index, 1);
    newPasswordArr.unshift(oldTask);
  }
  console.log("Новый пароль = изначальный пароль", newPasswordArr);
  const newPasswordStr = newPasswordArr.join("");

  if (newPasswordStr === oldPassword) {
    console.log("Вы ввели правильный пароль.");
  } else {
    console.log("Введите корректный пароль.");
  }
}

check("olleh", "hello"); // Вы ввели правильный пароль.
check("drowssap", "passwordqqq"); // Введите корректный пароль.
