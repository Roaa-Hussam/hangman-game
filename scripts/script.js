
function initialize() {
    
    fetch("https://random-word-api.herokuapp.com/word?number=1")
        .then(res => res.json())
        .then(data => {displayWord(data)})

    }


function displayWord(gotWord) {

    // span = document.createElement("span")
    // span.innerHTML=gotWord;
    // document.querySelector('#blanks').append(span)

    
    gotWord.forEach(a => {a.split('').forEach(e => {
    blankWords = document.createElement('span')
    blankWords.innerHTML = e;
    document.querySelector('#blanks').append(blankWords)
    })
})

    // document.querySelector('#blanks').append(span)
    buttonSelector(gotWord)
 
}

function buttonSelector(gotWord) {
    document.querySelectorAll("#letter > button").forEach((e)=>{
        e.addEventListener('click', ()=>{
            let selectedLetter = e.innerHTML;
            
            gotWord.forEach((a) => {a.split('').forEach((e,b) => {
                let currentLetter = e.toUpperCase() ;
                   console.log(currentLetter)
            if (selectedLetter === currentLetter)
            {
                console.log('found letter')
                console.log(b)
            }
                })
            })

        


        })
    })
}


initialize()

