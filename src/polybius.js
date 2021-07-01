// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const encodeAlphabet = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    "(i/j)": 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };
  const polyAlphabet2 = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function _encoder(input) {
    let encodeArr = [];
    for (let char of input) {
      let lowerChar = char.toLowerCase();
      //accounting for special case of 'i' and 'j' as they are a shared key
      if (lowerChar === "i" || lowerChar === "j") {
        encodeArr.push("42");
      //checking to ensure the current character is alphabetic
      } else if (lowerChar.match(/[a-z]/)) {
        encodeArr.push(encodeAlphabet[lowerChar]);
      //accounting for any non-alphabetic character and pushing them to encodeArr
      } else {
        encodeArr.push(lowerChar);
      }
    }
    return encodeArr.join("");
  }

//check to see if the length of all numbers (excluding spaces) is even)
//loop through input two numbers at a time
//if input has a space take away one number from index of input
//else add looped input to x position
//add looped input + 1 to input on y position
//put x and y together
//add x and y of polyAlphabet to endMessage

function _decoder(input) {
//check to see if the length of all numbers (excluding spaces) is even)
if (input.replace(/\s/g, "").length % 2 !== 0) return false;
let endMessage = "";
//loop through input itterates 2 numbers at a time
for (let i = 0; i < input.length; i += 2) {
  //if input has a space remove one itteration
  if (input[i] === " ") {
    endMessage += input[i];
    i = i - 1;
    //else x = first number
    // y = number + 1
  } else {
    const x = input[i];
    const y = input[i + 1];
    //add x + y together as a literal
    const letterPos = `${x}${y}`;
    // add index value of alphabet to string
    endMessage += polyAlphabet2[letterPos];
  }
}
return endMessage;
}

  function polybius(input, encode = true) {
    //if not encode return decoder function
    //else return encoder function
    if (!encode) {
      return _decoder(input);
    } else {
      return _encoder(input);
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
