let count = 5
let random =Math.floor(Math.random()*10);
console.log(random);

function guess(){
    const getcounterElement = document.querySelector('.count')
    var guess= document.getElementById("inp").value
    const show_message = document.getElementById('message')
    const card = document.querySelector('.flip-card-inner')
    const text = document.querySelector('.text')

 console.log(random)
    if(count > 0){
        count =count- 1;
        getcounterElement.innerHTML=count;

    }
    if (guess < 1 || guess > 10) {
        alert("Please enter a no between 1 and 10");

    }
    if (guess==random){
        console.log(card)
        text.innerHTML=`Yipeee You Won `
        card.style.transform ="rotateY(180deg)"
    }
    else if(count==0){
        text.innerHTML = "Game Over!"
        card.style.transform = "rotateY(180deg)"


    }else{
        show_message.innerHTML = `You Guess wrong number❌ ${guess}`
    }
};