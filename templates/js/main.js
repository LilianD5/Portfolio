// Function changement de bloc avec bouton

let btnNext = document.getElementsByClassName('btn-next');
let btnBack = document.getElementsByClassName('btn-back');
let target = document.getElementsByClassName('section');

function changeBlock(button, target) {
    button.addEventListener("click", function () {
        target.scrollIntoView();
    })
};

// Bloc 1
// Vers 2
changeBlock(btnNext[0], target[1]);

// Bloc 2 
// Vers 1
changeBlock(btnBack[0], target[0]);

// Vers 3
changeBlock(btnNext[1], target[2]);

// Bloc 3 
// Vers 2
changeBlock(btnBack[1], target[1]);

// Vers 4
changeBlock(btnNext[2], target[3]);

// Bloc 4
// Vers 3
changeBlock(btnBack[2], target[2]);


// Function Animation Text Typing
// First Animation

let blocTitle = ["My name is lilian and this is my portfolio !"];
let blocHello = ["Hello ! ", "And welcome !"];
let blocText = ["in this websites, you'll find : ", "my resume, ", "some projects i worked on, ", "and other things you might find useful. ", "Or not. "];
let blocEnd = ["So... ", "", "Let's get started, shall we ?"];

let blocTextContainer = document.getElementById('typing-text');
let blocTitleContainer = document. getElementById('typing-title');
let blocHelloContainer = document. getElementById('typing-hello');
let blocEndContainer = document.getElementById('typing-end');

async function textTyping(blocSentence, container, delayLetters = 40, delayBloc = 700) {
    for (const element of blocSentence) {
        let letters = element.split("");
        let lettersLength = letters.length;
        let i = 0;
        while (i < lettersLength) {
            await waitDelay(delayLetters);
            let divTyping = container;
            divTyping.append(letters[i]);
            i++
        }
        await waitDelay(delayBloc);
    }
    return;
}

function waitDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

setTimeout(() => {
    textTyping(blocHello, blocHelloContainer);
}, 1000);

setTimeout(() => {
    textTyping(blocTitle, blocTitleContainer)
}, 4000);

setTimeout(() => {
    textTyping(blocText, blocTextContainer);
}, 8000);

setTimeout(() => {
    textTyping(blocEnd, blocEndContainer);
}, 19000);