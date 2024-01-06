/* Дан массив строк [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`]
Необходимо написать функцию, которая бы удаляла бы из массива все строки,
которые нельзя перевести в дату (можно:10-02-2022 11/12/2023)
и возвращала бы новый массив вида:
- [`10-02-2022`, `12-11-2023`] */

const datesArr = [
  `10-02-2022`,
  `тест`,
  `11/12/2023`,
  `00/13/2022`,
  `41/12/2023`,
  "2-12-2024",
  "01/12/2020",
  "32/13/0000",
  "gjgjjgjgj",
];

let realDatesArr = [];

function filterOfRealDates(arr) {
  arr.map((element) => {
    let realDate = new Date(element);

    if (realDate == "Invalid Date") {
      realDate = "";
    } else {
      console.log("дата", realDate);
      const month = "" + (realDate.getMonth() + 1);
      const day = "" + realDate.getDate();
      const year = realDate.getFullYear();

      return realDatesArr.push([day, month, year].join("-"));
    }
  });
}

filterOfRealDates(datesArr);
console.log(realDatesArr); // ['2-10-2022', '12-11-2023', '12-2-2024', '12-1-2020']
