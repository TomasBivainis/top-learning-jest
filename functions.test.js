const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./functions");

test("capitalize", () => {
  expect(capitalize("kid")).toBe("Kid");
  expect(capitalize("Kid")).toBe("Kid");
});

test("reverse", () => {
  expect(reverseString("kid")).toBe("dik");
  expect(reverseString("LaMo")).toBe("oMaL");
  expect(reverseString("aa")).toBe("aa");
  expect(reverseString("aA")).toBe("Aa");
});

test("calculator", () => {
  expect(calculator.add(3, 5)).toEqual(8);
  expect(calculator.subtract(10, 5)).toEqual(5);
  expect(calculator.subtract(3, 5)).toEqual(-2);
  expect(calculator.divide(8, 4)).toEqual(2);
  expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
  expect(calculator.divide(10, 3)).toBeCloseTo(3.3);
  expect(calculator.multiply(3, 5)).toEqual(15);
  expect(() => calculator.divide(3, 0)).toThrow();
});

test("caesarCipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(() => analyzeArray([])).toThrow();
});
