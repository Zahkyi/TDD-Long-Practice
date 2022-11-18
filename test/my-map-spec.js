const chai = require('chai');
const expect = chai.expect;

const myMap = require('../problems/my-map')

describe('My Map', function () {
    it('Should operate like map method', function () {
        // let testArray = [1, 2, 3];
        // let myCallback = (el) => el * 2;

        expect(myMap([1, 2, 3], (el) => el * 2)).to.eql([2, 4, 6]);

        // expect(testArray).to.equal([1, 2, 3])

    });
});
