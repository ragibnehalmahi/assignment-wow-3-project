kilometerToMeter:

function kilometerToMeter(kilometer){
var  meter= kilometer * 1000;
return meter;
 }
  
  var nanaMeter = kilometerToMeter(2);
 console.log(nanaMeter);
 



  hotelCost:
  var day = 22;
 var hotelCost = 0 ;
 if (day <= 10){
  hotelCost = day * 100 ;
 }else if (day <= 20 ){
  var firstPart = 10 * 100 ;
  var remaining = day - 10 ;
  var secondPart = remaining * 80;
  hotelCost  = firstPart + secondPart ;
 }else {
  var firstPart = 10 *100 ;
  var secondPart =10 * 80;
  var remaining =day -20 ;
  var thirdPart = remaining * 50;
  hotelCost = firstPart + secondPart + thirdPart;
 }
 console.log(hotelCost);
 


 budgetalculator:
 var watch = watch * 50;
 var mobile = mobile * 100;
 var laptop = laptop * 500;
 var total = watch + mobile + loptop;
 return total;
}
var result = budgetCalculator(3, 3, 3);
console.log(result);

 megaFriend:
