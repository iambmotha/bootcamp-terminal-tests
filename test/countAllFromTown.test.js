let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');

describe('The countAllFromTown function', function(){

    it('should return how many 3 from stellies', function(){
        assert.equal(fromStellies, 3)
    });

    it('should return how many from 1 from Kuilsriver', function(){
        assert.equal(fromKuilsriver, 1)
    });

});