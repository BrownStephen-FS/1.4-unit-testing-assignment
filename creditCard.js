const obscureCreditCard = (creditCardNum) => {
  let obscureCreditCardNumber;
  if (typeof creditCardNum === "string") {
    if (creditCardNum.length >= 12 && creditCardNum.length <= 16) {
      if (creditCardNum.length === 12) {
        obscureCreditCardNumber = `${creditCardNum
          .substring(0, 8)
          .replace(/\d/g, "*")}${creditCardNum.substring(8, 12)}`;
        return obscureCreditCardNumber;
      } else if (creditCardNum.length === 13) {
        obscureCreditCardNumber = `${creditCardNum
          .substring(0, 9)
          .replace(/\d/g, "*")}${creditCardNum.substring(9, 13)}`;
        return obscureCreditCardNumber;
      } else if (creditCardNum.length === 14) {
        obscureCreditCardNumber = `${creditCardNum
          .substring(0, 10)
          .replace(/\d/g, "*")}${creditCardNum.substring(10, 14)}`;
        return obscureCreditCardNumber;
      } else if (creditCardNum.length === 15) {
        obscureCreditCardNumber = `${creditCardNum
          .substring(0, 11)
          .replace(/\d/g, "*")}${creditCardNum.substring(11, 15)}`;
        return obscureCreditCardNumber;
      } else if (creditCardNum.length === 16) {
        obscureCreditCardNumber = `${creditCardNum
          .substring(0, 12)
          .replace(/\d/g, "*")}${creditCardNum.substring(12, 16)}`;
        return obscureCreditCardNumber;
      }
    } else {
      return "Invalid Credit Card";
    }
  } else {
    return `Error: String expected, ${typeof creditCardNum} submitted.`;
  }
};

module.exports = obscureCreditCard;
