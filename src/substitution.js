// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //create new set of size not length
  function containsDuplicates(array) {
    return (new Set(array)).size !== array.length;
  }
  letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  function substitution(input, alphabet, encode = true) {
    //if contains any duplicates return false
    if (!alphabet || alphabet.length !== 26  || containsDuplicates(alphabet)) {
      return false}

    let temp = input
    input = temp.toLowerCase()
    //split alphabet by letters
    let alphabetArray = alphabet.split("")
    //split input by words
    let split = input.split(" ")
    let sorted = []

    if (encode){
      //split each item into letters
      split.forEach((item) => {
        let inputArray = item.split("")
        //map find index of letters and check if index equals the character
        let keys = inputArray.map((character) => letters.findIndex((value) => value === character)) 
        //map index of alphabetArray
        arranged = keys.map((key) => alphabetArray[key])
        //join letters together and push into empty array
        sorted.push(arranged.join(""))
      })
      
    }
    //if not encoding
    if (!encode){
      //split each item into letters
      split.forEach((item) => {
        let inputArray = item.split("")
        //map find index of letters and check if index equals the character
        let keys = inputArray.map((character) => alphabetArray.findIndex((value) => value === character))
        // map index of letters variable
        arranged = keys.map((key) => letters[key])
        //join letters together and push into empty array
        sorted.push(arranged.join(""))

      })
      
    }
    return sorted.join(" ")
  }

  return {
    substitution,
  };
})();



module.exports = { substitution: substitutionModule.substitution };
