/* Написать функцию, которая принимает объект query параметров и возвращает строку для вставки */

// search=Вася&take=10

const obj = {
  search: "Вася",
  take: 10,
};

function returnStr(obj) {
  console.log("массив ключей", Object.keys(obj));

  const str = Object.keys(obj)
    .map((key) => {
      return `${key}=${obj[key]}`;
    })
    .join("&");

  console.log(str);
}

returnStr(obj);
