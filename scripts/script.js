
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

            let selectedLetter = indButton.innerHTML.toLowerCase();
            let found = false
            if (lives > 0) {
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
            else {
                console.log('Game over')
                // document.getElementById('lost').innerHTML = "You Lost!";
            }
        })
    })

}

function updateHangmanPicture() {
    document.getElementById('hangmanPic').src = './images/' + lives + '.jpg';
}

document.querySelector("#playAgain").addEventListener('click', () => {
    location.reload()
})

let lives = 6;
let screenLives = document.createElement('span')
let yourlives = document.createElement('span')

yourlives.innerHTML = "Lives : "
screenLives.innerHTML = lives

document.querySelector("#lives").append(yourlives)
document.querySelector("#lives").append(screenLives)


initialize()

