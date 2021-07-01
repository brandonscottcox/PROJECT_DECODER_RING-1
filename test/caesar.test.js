const caesarModule = require("../src/caesar")
const {expect} = require("chai")
const caesar = caesarModule.caesar

describe("caesar",() => {
    it("If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.",() => {
        const exampleA = caesar("thinkful")
        const exampleB = caesar("thinkful", 26)
        const exampleC = caesar("thinkful", -26)
        const exampleD = caesar("thinkful",0)
        expect(exampleA).to.be.false
        expect(exampleB).to.be.false
        expect(exampleC).to.be.false
        expect(exampleD).to.be.false
    })
    it("Capital letters can be ignored.", () => {
        const example = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
        expect(example).to.be.equal("this is a secret message!")
    })
    it("Spaces should be maintained throughout, as should other non-alphabetic symbols.", ()=> {
        const example = caesar("this is a secret message!", 8)
        expect(example).to.be.equal("bpqa qa i amkzmb umaaiom!")
    })
    it("If a letter is shifted so that it goes off the alphabet, it should wrap around to the front of the alphabet", () => {
        const example = caesar("z", 3)
        expect(example).to.be.equal("c")
    })
})