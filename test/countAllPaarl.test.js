let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllpaarl function', function(){

    it('should count 3 from paarl', function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));   
    });
    it('should count 2 from paarl', function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });

});