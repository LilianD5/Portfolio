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

// Function Affichage Titre

const helloSpans = document.querySelectorAll('#hello span');
const title = document.querySelector('#title');
const portfolio = document.querySelector('#portfolio');

const contentSection1 = document.querySelector('.content-s1');

function homepageAnim(){
    window.addEventListener('load', () => {

        btnNext[0].classList.add('show');
        contentSection1.classList.add('show');

        const TL = gsap.timeline({paused: true});

        TL
        .staggerFrom(helloSpans, 3, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
        .from(title, 1.5, {top: -40, opacity: 0, ease: "power3.out"}, 1.5)
        .from(portfolio, 2, {left: -80, opacity: 0, ease: "power2.out"}, 1)
        .from(btnNext[0], 0.3, {opacity: 0, ease: "power2.out"});

        TL.play();
    })
}

if(document.cookie !== 'animControl=skip'){

    homepageAnim();

    document.cookie = 'animControl=skip';

} else {
    btnNext[0].classList.add('show');
    contentSection1.classList.add('show');
}

// Function Affichage du projet

const projects = document.querySelectorAll('.content-s2__projects');
const githubLink = document.querySelector('.content-s2__project-target__see-github');
let windowWidth = window.innerWidth;

function selectProjects(){
    projects.forEach(element => {
        element.addEventListener('click', function(){

            element.classList.toggle('project-selected');
            githubLink.classList.toggle('none');

            projects.forEach(element => {
                element.classList.toggle('pointer-event-none');
            });

            element.classList.toggle('pointer-event-none');
        })
    });
}

if(windowWidth > 768){
    selectProjects();
}

window.addEventListener('resize', function(){

    let newWindowWidth = window.innerWidth;

    if(newWindowWidth> 768){
        selectProjects();
    }
})

// Function calcul du left btn section 4

let btnS4 = Array.from(document.getElementsByClassName('btns-s4'));
// console.log(btnS4);

function left(){

    let windowWidth = window.innerWidth;
    let limitSize = windowWidth * 0.85;

    console.log(windowWidth);
    console.log(limitSize);

    if(limitSize > 1400){

        let left = (windowWidth - 1400) / 2;
        // console.log(left);
        btnS4.forEach(element => {
            element.style.left = left + "px";
        });
        

    } else if(windowWidth > 768) {

        let left = (windowWidth * 7.5) / 100;
        btnS4.forEach(element => {
            element.style.left = left + "px";
        });

    } else {
        let left = (windowWidth * 4) / 100;
        btnS4.forEach(element => {
            element.style.left = left + "px";
        });
    }
}

window.addEventListener('resize', function(){
    left();
})

left();

// Function ouverture/fermeture formulaire de contact

const btnContact = document.getElementById('btn-contact');
const btnBackForm = document.getElementById('btn-back-form');
const form = document.getElementById('form');

// console.log(btnContact);
// console.log(form);

function openForm(){
    btnContact.addEventListener('click', function(){
        form.classList.add('show');
    })
}

function closeForm(){
    btnBackForm.addEventListener('click', function(){
        form.classList.remove('show');
    })
}

openForm();

closeForm();

// Function close modal

const btnClose = document.getElementById('close-modal');
const modal = document.getElementById('modal');

function closeModal(){
    btnClose.addEventListener('click', () => {
        modal.classList.add('none');
    })
}

closeModal();




