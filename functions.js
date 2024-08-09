function capitalize(word) {
  word = word[0].toUpperCase() + word.slice(1);
  return word;
}

function reverseString(string) {
  let ret = "";

  for (let i = string.length - 1; i >= 0; i--) {
    ret += string[i];
  }

  return ret;
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    if (b === 0) throw Error("Cannot divide by 0.");
    return Math.round((a / b) * 10) / 10;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

function caesarCipher(string, diff) {
  let ret = "";
  const intervalLength = "z".charCodeAt(0) - "a".charCodeAt(0) + 1;
  diff = diff % intervalLength;

  for (let i = 0; i < string.length; i++) {
    if (
      !("a" <= string[i] && string[i] <= "z") &&
      !("A" <= string[i] && string[i] <= "Z")
    ) {
      ret += string[i];
      continue;
    }

    let code = string.charCodeAt(i);
    code += diff;

    if ("a" <= string[i] && string[i] <= "z" && code > "z".charCodeAt(0))
      code -= intervalLength;
    else if ("A" <= string[i] && string[i] <= "Z" && code > "Z".charCodeAt(0))
      code -= intervalLength;

    ret += String.fromCharCode(code);
  }

  return ret;
}

function analyzeArray(array) {
  if (array.length === 0) throw Error("Empty array.");

  let ret = {};

  ret.length = array.length;
  let sum = 0;
  let min = array[0];
  let max = array[0];

  array.forEach((number) => {
    min = Math.min(min, number);
    max = Math.max(max, number);
    sum += number;
  });

  ret.min = min;
  ret.max = max;
  ret.average = sum / ret.length;

  return ret;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
