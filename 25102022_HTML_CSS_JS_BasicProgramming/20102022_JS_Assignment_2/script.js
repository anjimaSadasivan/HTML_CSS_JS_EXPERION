var image = document.getElementById('dice')



image.addEventListener('click',()=>{

    var diceRoll = Math.floor( Math.random() * 6 ) +1;

    if(diceRoll==1)image.src = "/img/dice1.png"

    else if(diceRoll==1)image.src = "/img/dice1.png"

    else if(diceRoll==2)image.src = "/img/dice2.png"

    else if(diceRoll==3)image.src = "/img/dice3.png"

    else if(diceRoll==4)image.src = "/img/dice4.png"

    else if(diceRoll==5)image.src = "/img/dice5.png"

    else if(diceRoll==6)image.src = "/img/dice6.png"

})