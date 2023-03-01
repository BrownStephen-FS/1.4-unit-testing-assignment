const obscureCreditCard = require("./creditCard");

describe("Credit Card Module tests", () => {
  test("Expecting 12 digit credit card to be obscured", () => {
    expect(obscureCreditCard("123456789012")).toEqual("********9012");
  });

  test("Expecting 13 digit credit card to be obscured", () => {
    expect(obscureCreditCard("1234567890123")).toEqual("*********0123");
  });

  test("Expecting 14 digit credit card to be obscured", () => {
    expect(obscureCreditCard("12345678901234")).toEqual("**********1234");
  });

  test("Expecting 15 digit credit card to be obscured", () => {
    expect(obscureCreditCard("123456789012345")).toEqual("***********2345");
  });

  test("Expecting 16 digit credit card to be obscured", () => {
    expect(obscureCreditCard("1234567890123456")).toEqual("************3456");
  });

  test("Expecting error to be returned for 11 digits", () => {
    expect(obscureCreditCard("12345678901")).toEqual("Invalid Credit Card");
  });

  test("Expecting error to be returned for 17 digits", () => {
    expect(obscureCreditCard("12345678901234567")).toEqual("Invalid Credit Card");
  });

  test("Expecting error for not string requested", () => {
    expect(obscureCreditCard(12345678901)).toMatch(/Error: String expected, .+ submitted./);
  });
});
