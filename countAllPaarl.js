module.exports = function countAllPaarl(regnum){
    var paarl = regnum.split(',');
    var counter = 0
  for (var j=0;j<paarl.length;j++){
    var reg = paarl[j].trim();
        if (reg.startsWith('CJ')){
        counter++;
         }
      }
    return counter
  }