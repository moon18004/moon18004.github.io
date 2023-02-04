'use strict';
const navbar = document.querySelector('header');
const menu = document.querySelector('.header-inner');
const navbarHeight = navbar.getBoundingClientRect().height;
console.log(navbarHeight);
document.addEventListener('scroll', ()=>{
  if(window.scrollY>navbarHeight){
      navbar.classList.add('dark');
      menu.classList.add('dark');
  }
  else{
      navbar.classList.remove('dark');
      menu.classList.remove('dark');
  }
})
// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
const homeContainer = document.querySelector('.home__container');
document.addEventListener('scroll', ()=> {
    homeContainer.style.opacity= 1.2-window.scrollY/homeHeight;
    // console.log(window.scrollY);
    // console.log(homeHeight);
    // console.log(1.25-window.scrollY/homeHeight);  
})

// Text animation

new TypeIt(".home__contents h2", {
  speed:80,
  startDelay: 900,
  loop:true
}).type("A student majoring in software engineering at BYUI.", {delay: 1000})
  .delete(51, { delay: 1000})
  .type("I am currently dedicated to web development.", {delay:3000})
  .go();

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.menu');
navbarMenu.addEventListener('click', (event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if (link == null){
        return;
    }
    // navbarMenu.classList.remove('open');
    console.log(link);
    scrollIntoView(link);
})

// UI Tab
const tab = document.querySelectorAll('.ui-menu p');
const uiItems = document. querySelectorAll('.ui-items');
const ui = document.querySelector('.ui__container');
// console.log(uiItems);
document.addEventListener('click', (e)=>{
  if(e.target.parentNode.className=='ui-menu'){
    tab.forEach(element=> element.classList.remove('active'));
    e.target.classList.add('active');
    uiItems.forEach(element=> element.classList.remove('active'));
    const data = e.target.getAttribute('data-alt');
    document.getElementById(data).classList.add('active');
    // console.log(getComputedStyle(uir).width);
    if(getComputedStyle(ui).width < "769"){
      console.log(getComputedStyle(ui).width);
      if (data == 'tab4'){
        document.querySelector('.ui-contents').style.height = "750px";
      }
      else{
        document.querySelector('.ui-contents').style.height = "1100px";
      }
    }
    else{}
    
  }
})

// Works Tab
const work_tab = document.querySelectorAll('.btn p');
const workSlider = document.querySelector('.works__slider');
// console.log(uiItems);
document.addEventListener('click', (e)=>{
  if(e.target.parentNode.className=='btn'){
    work_tab.forEach(element=> element.classList.remove('active'));
    e.target.classList.add('active');
    const data = e.target.getAttribute('data-alt');

    // const ws = document.querySelector('.works__slider')[0];
    console.log(getComputedStyle(workSlider).width);
    if (getComputedStyle(workSlider).width > "768"){
      // console.log("width > 768")
      if(data=="work-tab1"){
        workSlider.style.top = "0";
      }
      else if(data=="work-tab2"){
        workSlider.style.top = "-640px";
      }
      else if(data=="work-tab3"){
        workSlider.style.top = "-1280px";
      }
    }
    else{
      // console.log("width < 768")
      if(data=="work-tab1"){
        workSlider.style.top = "0";
      }
      else if(data=="work-tab2"){
        workSlider.style.top = "-400px";
      }
      else if(data=="work-tab3"){
        workSlider.style.top = "-800px";
      }
    }
    
    
  }
})


function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}
// wow js
const wow = new WOW(
  {
  boxClass:     'wow',      // default
  mobile:       true,       // default
  offset:       150,        
  live:         true        // default
}
)
wow.init();

/* Header Trigger */
$('.trigger').click(function(){
  $(this).toggleClass('active')
  $('.menu').toggleClass('active')
})
$('.menu a, section').click(function(){
  $('.menu, .trigger').removeClass('active')
})