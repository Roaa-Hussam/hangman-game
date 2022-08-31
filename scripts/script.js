
function initialize() {
    
    fetch("https://random-word-api.herokuapp.com/word?number=1")
        .then(res => res.json())
        .then(data => {displayWord(data)})

    }


function displayWord(gotWord) {


    console.log(gotWord)
    gotWord.forEach(a => {a.split('').forEach(e => {
    blankWords = document.createElement('span')
    blankWords.innerHTML = "_";
    document.querySelector('#blanks').append(blankWords)
    })
})
    buttonSelector(gotWord)
 
}

function buttonSelector(gotWord) {
    document.querySelectorAll("#letter > button").forEach((indButton)=>{
        indButton.addEventListener('click', ()=>{
            let selectedLetter = indButton.innerHTML.toLowerCase();
            
            gotWord.forEach((complWord) => {complWord.split('').forEach((currentLetter,letIndx) => {
            if (selectedLetter === currentLetter)
            {
                console.log(currentLetter)
                console.log(document.querySelectorAll("#blanks > span")[letIndx])
                document.querySelectorAll("#blanks > span")[letIndx].innerHTML = selectedLetter;
            }
                })
            })

        


        })
    })
}


initialize()

