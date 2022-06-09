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

const projects = document.querySelectorAll('.projects');
const githubLink = document.querySelector('.see-github');

function selectProjects(){
    projects.forEach(element => {
        element.addEventListener('click', function(){
            element.classList.toggle('project-selected');
            githubLink.classList.toggle('none');
        })
    });
}

selectProjects();