let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Bongani correctly', function(){
        assert.equal('Hello, Bongani', greet('Bongani'));
    });
    it('should greet Benny correctly', function(){
        
        assert.equal('Hello, Benny', greet('Benny'));
    });
});