const chai = require('chai')
const expect = chai.expect;

const reverseString = require('../problems/reverse-string')

describe('Reverse', function () {

    it('word should be reversed', function () {
        let string = "asdfasdfasdf"
        let solution = string.split("").reverse().join("");
        expect(reverseString(string)).to.equal(solution)
    });

});
