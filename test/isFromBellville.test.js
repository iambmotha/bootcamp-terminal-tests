let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function(){

    it('should say this plate is from Bellville', function(){
        assert.equal(true, isFromBellville('CY 123'));
        //assert.equal('CY', true);
    });

});