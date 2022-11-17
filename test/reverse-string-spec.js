const chai = require('chai')
const expect = chai.expect;

const reverseString = require('../problems/reverse-string')

describe('Reverse', function () {

    it('word should be reversed', function () {
        expect(reverseString("fun")).to.equal("nuf")
    });

});
