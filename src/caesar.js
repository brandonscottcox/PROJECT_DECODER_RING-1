// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //if shift is zero, greator or less than 25/-25 return false
    if (shift < -25 || shift > 25 || shift == 0 || !shift) return false
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    //lowerCase input and split into letters
    let code = input.toLowerCase().split('')
    //map input letters
    return code.map((x)=> {
      if (alphabet.includes(x)){
      let i
      //if encoding find index of input and add shift
      if(encode) {
        i = alphabet.indexOf(x) + shift
      //else subtract shift movement
      }else{
        i = alphabet.indexOf(x) - shift
      //if alphabet + shift is < than 0 add 26
      } if(i < 0) {
        i += 26
      //if alphabet - shift is > than 0 subtract 26
      } if(i > 25) {
        i -= 26
      } return alphabet[i]
    } else return x
    //join letters
    }).join('')
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };