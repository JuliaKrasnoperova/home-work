function convertedSum(
  sum = 1000,
  currency = "RUB",
  targetCurrency = "USD",
  rateUSD = 100
) {
  if (currency === "RUB" && targetCurrency === "USD") {
    return console.log(
      `Ваша валюта: ${sum}${currency}. Вы получите ${
        sum / rateUSD
      }${targetCurrency}`
    );
  } else if (currency === "AED" && targetCurrency === "USD") {
    return console.log(
      `Ваша валюта: ${sum}${currency}. Вы получите ${
        sum / rateUSD
      }${targetCurrency}`
    );
  } else if (!currency && targetCurrency === "USD") {
    return console.log("Выберите верную валюту!");
  } else if (currency != "RUB" && targetCurrency === "USD") {
    return console.log("Выберите верную валюту!");
  } else if (currency != "AED" && targetCurrency === "USD") {
    return console.log("Выберите верную валюту!");
  }
}

convertedSum(1500, "RUB", "USD"); // Ваша валюта: 1500RUB. Вы получите 15USD
convertedSum(30000, "AED", "USD", 60); // Ваша валюта: 30000AED. Вы получите 500USD
convertedSum(5000, "", "USD"); // Выберите верную валюту!
convertedSum(1000, "CNY", "USD"); // Выберите верную валюту!
