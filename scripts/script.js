function initialize() {
    fetch("https://random-word-api.herokuapp.com/word?number=1")
        .then(res => res.json())
        .then(data => displayWord(data))
}


function displayWord(word) {
    console.log(word)
    blanks = document.getElementById('blanks');
    let splitWords = word.map((e) => { return e.split('').join(' ') })

    console.log(splitWords)
    let h = splitWords.map((a) => {

        span = document.createElement('span');
        console.log(a)
        span.innerHTML = a;
        blanks.append(span)
    })

}

initialize()