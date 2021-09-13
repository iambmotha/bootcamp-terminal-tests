let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function(){

    it('should say 21 years ago', function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });

});