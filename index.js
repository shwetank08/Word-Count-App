const textarea = document.querySelector('textarea');
const wordcount = document.querySelector('.wordcount');
// const input = document.querySelector('#input')
let words = 0;

function isWord(c){
    if (typeof c !== 'string') {
        return false;
    }
    
    return /^[a-zA-Z]+$/.test(c);
}


function handleWord(){
    let txt = textarea.value;
    let c = txt[txt.length - 1];
    words = isWord(c)?words+=1:words;
    wordcount.innerHTML = `Word Count - ${words}`;
}

function handleReset(){
    words = 0;
    textarea.value="";
    wordcount.innerHTML = `Word Count - ${words}`;
}