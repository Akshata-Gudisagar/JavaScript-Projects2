function nearest_round_number(num) { 
while (num % 10) 
 

if(num%10>=5){
    num++;
}
else if(num%10<=5){
num--;
}
 return num;
 } 
 console.log(nearest_round_number(62));
  console.log(nearest_round_number(592));