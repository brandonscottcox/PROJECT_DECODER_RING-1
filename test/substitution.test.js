const substitutionModule = require("../src/substitution")
const {expect} = require("chai")
const substitution = substitutionModule.substitution

describe("substitution",() => {
    it("The input could include spaces and letters as well as special characters",() => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        const expected = "message"
        
        expect(actual).to.be.equal(expected)
        
    })
    it("Spaces should be maintained throughout",() => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        expect(actual).to.be.equal("elp xhm xf mbymwwmfj dne")
    })
    it("It ignores capital letters",() => {
        const actual = substitution("THINKFUL","xoyqmcgrukswaflnthdjpzibev")
        
        expect(actual).to.be.equal("jrufscpw")
    })
    it("The alphabet parameter must be a string of exactly 26 characters, which could include special characters",() => {
        const actualA = substitution("thinkful", "short")
        const actualB = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
        
        expect(actualA).to.be.false
        expect(actualB).to.be.equal("y&ii$r&")

    })
    it("All of the characters in the alphabet parameter must be unique",() => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
        
        expect(actual).to.be.false
    })


})