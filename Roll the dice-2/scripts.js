var image = document.getElementById('dice')

var result = document.getElementById('result')

var score = document.getElementById('scoreValue')

var count = 0



image.addEventListener('click',()=>{

    var diceRoll = Math.floor( Math.random() * 6 ) +1;

    switch(diceRoll){

        case 1 :

        case 2 :

        case 3 :

        case 4 :

        case 5 :

        case 6 : image.src = "/img/dice"+diceRoll+".png"

                 count=count+diceRoll

                 score.innerText = count

                 if(count>=30)

                 {

                    result.innerText="Congratulations!!!! you WON the game..."

                 }



    }

})