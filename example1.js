let rev = 0;
let num = 32243;
let Digit;

while(num!=0){
    Digit = num % 10;
    rev = rev * 10 + Digit;
    num = Math.floor(num/10);
}

console.log("Reverse number:"+rev);