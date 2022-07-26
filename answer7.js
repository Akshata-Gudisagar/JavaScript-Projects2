// function three_digit_armstrong_number() 
// {
//  for (var i = 1; i < 10; ++i) 
//  {
//    for (var j = 0; j < 10; ++j) 
//      {
//         for (var k = 0; k < 10; ++k)
//         {
//  //Math.pow () function returns a number raised to a certain power.
//           var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
//           var plus = (i * 100 + j * 10 +  k);
//           if (pow == plus) 
//            {     
//              console.log(pow);
//             }
//          }
//        }
//     }
//   }
// three_digit_armstrong_number();



let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');



let temp = number;//371

while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;//1

    sum += remainder * remainder * remainder;//1
//The while loop continues iterating and dividing the number by 10 until the number is 0.
    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer//37
}

if (sum == number) {
    alert(`${number} is an Armstrong number`);
}
else {
    alert(`${number} is not an Armstrong number.`);
}





 