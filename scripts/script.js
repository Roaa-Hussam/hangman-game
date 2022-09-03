
function initialize() {

    fetch("https://random-word-api.herokuapp.com/word?number=1")
        .then(res => res.json())
        .then(data => {
            displayWord(data)
            buttonSelector(data)
        })

}


function displayWord(gotWord) {


    console.log(gotWord)
    gotWord.forEach(a => {
        a.split('').forEach(e => {
            blankWords = document.createElement('span')
            blankWords.innerHTML = "_";
            document.querySelector('#blanks').append(blankWords)
        })
    })

}



function buttonSelector(gotWord) {

    document.querySelectorAll("#letter > button").forEach((indButton) => {
        indButton.addEventListener('click', () => {

            let blanleft = winCodition();
            console.log (blanleft)
            let selectedLetter = indButton.innerHTML.toLowerCase();
            let found = false

            if (lives > 0 && blanleft>0) {
                if (indButton.className !== "clicked") {
                    gotWord.forEach((complWord) => {
                        complWord.split('').forEach((currentLetter, letIndx) => {
                            if (selectedLetter === currentLetter) {
                                console.log(currentLetter)
                                console.log(document.querySelectorAll("#blanks > span")[letIndx])
                                document.querySelectorAll("#blanks > span")[letIndx].innerHTML = selectedLetter;

                                found = true;
                            }
                        })
                    })


                    if (found == false) {
                        lives = lives - 1;
                        screenLives.innerHTML = lives
                        updateHangmanPicture();
                    }

                    indButton.className = "clicked"
                }
            }

            blanleft = winCodition();

            if (lives == 0) {
                console.log('Game over')
                condition.innerHTML = " You Lost !";
                condition.className = "lost"
            }
            if (blanleft == 0){
                console.log('You Won')
                condition.innerHTML = " You WON !";
                condition.className = "won"
            }

        })
    })

}

function updateHangmanPicture() {
    document.getElementById('hangmanPic').src = './images/' + lives + '.png';
}

document.querySelector("#playAgain").addEventListener('click', () => {
    location.reload()
})


function winCodition(numOfBlanks)
{

    numOfBlanks = 0;
  let nn = document.querySelectorAll("#blanks > span").forEach((e)=> {if(e.innerHTML=="_"){numOfBlanks++ } } )
  return numOfBlanks
} 

let lives = 10;
let screenLives = document.createElement('span')
let yourlives = document.createElement('span')
let condition = document.createElement('span')

yourlives.innerHTML = "Lives : "
screenLives.innerHTML = lives

document.querySelector("#lives").append(yourlives)
document.querySelector("#lives").append(screenLives)
document.querySelector("#lives").append(condition)


initialize()

