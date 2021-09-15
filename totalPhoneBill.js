module.exports = function totalPhoneBill(bill){
    var phonebill = bill.split(',');
    let sum = 0
  for (var j=0;j<phonebill.length;j++){
    var bills = phonebill[j].trim();
    
        if (bills.startsWith('sms')){sum += 0.65}
    else if(bills.endsWith('l')){sum += 2.75}
      }
    return 'R'+ sum.toFixed(2)
  }