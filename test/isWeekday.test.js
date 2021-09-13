let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekday function', function(){

    it('should say Monday is a weekday', function(){
        assert.equal(isWeekday('Monday'), true);
    });

});