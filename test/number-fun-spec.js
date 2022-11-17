const chai = require('chai');
const { reciprocal, returnsThree } = require('../problems/number-fun');
const expect = chai.expect;

describe("returnsThree", function() {
    it("Should return 3", function() {
        expect(returnsThree()).to.equal(3);
    });
});

describe("Returns reciprocal", function() {
    it("Should return the reciprocal of given number", function() {
        expect(reciprocal(4)).to.equal(0.25);
        expect(reciprocal(2)).to.equal(0.5);
        expect(reciprocal(8)).to.equal(0.125);
    });
});
