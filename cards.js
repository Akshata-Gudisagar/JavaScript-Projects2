// function guessNumber() {

//     // generating a random integer from 1 to 10
//     const random = Math.floor(Math.random() * 10) + 1;
// //Math.floor () function rounds down a number to the next smallest integer

//     // take input from the user
//     // let count=1;
//     let number = parseInt(prompt('Guess a number from 1 to 10: '));
// let count=0;
//     // take the input until the guess is correct
//     while(number !== random) {


//         alert('Not Matched');
//         count++;
//         if (count<=5){
//             alert('Total no of chances u took:'+count);
//         number = parseInt(prompt('Guess a number from 1 to 10: '));
//         }
//         // alert('Better luck next time');
//         // alert('Total no of chances u took:'+count);
//     }

//     if(number == random) {
//         alert('Good Work.');
//     }



// }

// guessNumber();


var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var random = Math.floor(Math.random() * 100) + 1;
// console.log(random);
var no_of_guesses = 0;
var guessed_nums = [];


function play() {
    var user_guess = document.getElementById("guess").value;

    if (user_guess < 1 || user_guess > 100) {
        alert("Please enter a no between 1 and 100");

    }
    else {
        guessed_nums.push(user_guess);
        no_of_guesses += 1;
       
        if (no_of_guesses <= 5) {
            
            if (user_guess < random) {
                msg1.textContent = "Your guess is too low"
                msg2.textContent = "No.of guessess:" + no_of_guesses;
                msg3.textContent = "Guessed number are:" + guessed_nums;
            }
            else if (user_guess > random) {
                msg1.textContent = "Your guess is too high"
                msg2.textContent = "No.of guessess:" + no_of_guesses;
                msg3.textContent = "Guessed number are:" + guessed_nums;
            }
            else if (user_guess == random) {
                msg1.textContent = "Yippie You Win"
                msg2.textContent = "";
                msg3.textContent = "You Guessed it in:" + no_of_guesses + "guessess";
                document.getElementById("my_btn").disabled = true
            }
            
        }
        else{
            msg1.textContent=""
            msg2.textContent=""
            no_of_guesses=0;
            msg3.textContent="Game over!"
            document.getElementById("guess").value=""
           
        
        }

    }
}
