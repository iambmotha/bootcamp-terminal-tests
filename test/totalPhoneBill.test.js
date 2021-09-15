let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', function(){

    it('should return the total price of 2 calls and 2 sms is R7.45', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('should return the total price of 1 call and 1 sms is R3.40', function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it('should return the total price of 2 sms is R1.30', function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

});