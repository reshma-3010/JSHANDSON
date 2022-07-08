//Q.Find the winner
//You are given a string S consisting of two letters A and D,where each character represents the winner of N games played between Aditya and Danish,where letter A represents the win of 
//Aditya and letter D represents the win of Danish.You need to find out the that which player wins the maximum number of games or there is a draw between them.
 
var Game_Winner = (S) => 
{
  let countOne=0;
  let countTwo=0;
  for(let i=0;i<S.length; i++){
    if(S.charAt(i)=='A'){
     countOne+=1; 
    }
    else{
      countTwo+=1;
    }}
  
  if(countOne>countTwo){
    return ('Aditya');
  }
  else if(countOne<countTwo){
    return ('Danish');
    
  }
  else{
    return ('Draw');
  }
  
  
}
 
console.log(Game_Winner('ADDAAADDDDD'));
console.log(Game_Winner('ADDAAADD'));