

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// sroll section active link
let section = document.querySelector('section');
let navlinks = document.querySelector('header nav a');


window.onscroll = ()=>{
sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if(top>=offset && top< offset+height){
        navlinks.forEach.apply(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href"=' + id +']').classList.add('active');
        })
    }
});
// sticky navbar

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY>100);


//  remove toggle icon and navbar
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

};
 

// Scroll reveal
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});
ScrollReveal().reveal('.home-content, heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, -portfolio-box, .contact form', {origin:'button'});
ScrollReveal().reveal('.home-contact h1, .about-content', {origin:'left'});
ScrollReveal().reveal('home-contact p, .about-content',{origin: 'right'});

//typed js
const typed = new Typed('.multiple-text',{
    strings:['MERN Stack Developer','Full Stack Web Developer','Graphics Designer','Coding Lover' ],
    typeSpeed:70,
    backSpeed:70,
    backDely:1000,
    loop:true,
})

 