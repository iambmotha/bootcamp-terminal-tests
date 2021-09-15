module.exports = function countAllFromTown(par1, par2){
    var fromtown = par1.split(',')
    var count = 0
  
for (var j=0;j<fromtown.length;j++){
        var place = fromtown[j].trim()
            if(place.startsWith(par2)){
             count++
      }
  }
return count
}