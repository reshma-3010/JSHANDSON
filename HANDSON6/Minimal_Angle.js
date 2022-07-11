//Q.Find the Smaller angle
//PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter angle formed between hour and minute hand at any given time.
var Minimal_Angle = (h, m) => 
{
   h = h % 12;
  
  var hm = 0.5 * m, 
      hh = 30 * h, 
      ma = 6 * m, 
      sum = Math.abs(hm + hh - ma); 
  return  sum;

       
};
 
console.log(Minimal_Angle(12,00));
console.log(Minimal_Angle(6,0));