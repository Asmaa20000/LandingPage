/* #################################################################################### */
// Toggle Spin
document.querySelector(".ToogleSetting .fa-gear").onclick = function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".settingBox").classList.toggle("open");
};

let LandingPage = document.querySelector(".landingPage");
let arrayImages = ["Imgs/library-869061_640.jpg","Imgs/library-4317851_640.jpg", "Imgs/1.jpg", "Imgs/3.jpg", "Imgs/4.jpg"];

// Background option
let backGroundOption = true;

// Variable to control the interval
let backgroundInterval;

// Function to randomize image
function randomizeImage() {
    // Clear the previous interval if it exists
    clearInterval(backgroundInterval);

    if (backGroundOption === true) {
        backgroundInterval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * arrayImages.length);
            LandingPage.style.backgroundImage = `url(${arrayImages[randomNumber]})`;
        }, 3000);
    }
}

// Initial call to randomizeImage
randomizeImage();


// Switch Colors
const ColorsLi = document.querySelectorAll(".ColorsList li");

ColorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
        localStorage.setItem("ColorsList", e.target.dataset.color);
        HandleActiveState(e)
    });
});

// let mainColor = localStorage.getItem("ColorsList");
// console.log(mainColor);
// if (mainColor !== null) {
//     document.documentElement.style.setProperty('--main--color', mainColor);
// }

// Switch Background
const RandomBackEle = document.querySelectorAll(".RandomBackground span");
// Loop through all spans
RandomBackEle.forEach(span => {
    // Click event for every span
    span.addEventListener("click", (e) => {
        // Remove the "active" class from all spans
        // e.target.parentElement.querySelectorAll(".active").forEach(element => {
        //     element.classList.remove("active");
        // });

        // // Add the "active" class to the clicked span
        // e.target.classList.add("active");
        HandleActiveState(e);

        // Check if the data-background attribute is 'Yes' or 'No'
        if (e.target.dataset.background === 'Yes') {
            backGroundOption = true;
            randomizeImage();
        } else {
            backGroundOption = false;
            clearInterval(backgroundInterval);
        }
    });
});
 /* #################################################################################### */
// Select Skills
let ourSkills= document.querySelector(".Skills");
window.onscroll= function(){
    //skill offset top
    let SkilloffsetTop= ourSkills.offsetTop;
    // Skills outer Height
    let SkillsOuterHeight=ourSkills.offsetHeight;
    //window height
    let windowHeight= this.innerHeight;
    //window Scroll top
    let WindowScrollTop = window.scrollY;
    if(WindowScrollTop > (SkilloffsetTop+ SkillsOuterHeight-windowHeight)){
let allSkills= document.querySelectorAll(".skill-box .Skill-progress span");
allSkills.forEach(skill=>{
    skill.style.width=skill.dataset.progress;

});
    }

}
/* #################################################################################### */
//gallery pop up
let ourGallery= document.querySelectorAll(".gallery img");
ourGallery.forEach(img=>{
    img.addEventListener('click',(e)=>{
        let overlay= document.createElement("div");
        overlay.className='popup-overlay';
        document.body.appendChild(overlay);
        //create popup box
        let popupbox=document.createElement("div");
        popupbox.className='popup-box';
        //create the img
        let popupImg= document.createElement("img");
        //set img source
        popupImg.src= img.src;
        //add img to popup box
        popupbox.appendChild(popupImg);
         //add  popup box to body
         document.body.appendChild(popupbox);
         if(img.alt!==null){
            let imgHeading= document.createElement("h3");
            let imgtext=document.createTextNode(img.alt);
            imgHeading.appendChild(imgtext);
            popupbox.appendChild(imgHeading);

         }
        let closebuttonSpan=document.createElement("span");
        let closebuttonText= document.createTextNode("x");
        closebuttonSpan.appendChild(closebuttonText);
        closebuttonSpan.className='close-button';
    popupbox.append(closebuttonSpan);

    });
});
//closse popup
document.addEventListener('click', function(e){
    if(e.target.className=='close-button'){
        e.target.parentNode.remove();
       document.querySelector(".popup-overlay").remove();
    }
});
/* #################################################################################### */
//select all links--------------
const allLinks= document.querySelectorAll(".lists a");
const allBullets=document.querySelectorAll(".nav-bullets .bullet");

function ScrollToSomewhere(elements){
    elements.forEach(element=>{
    
        element.addEventListener("click",(e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior:'smooth'
            });
        });
    });
}
ScrollToSomewhere(allBullets);
ScrollToSomewhere(allLinks);
//handle active state
function HandleActiveState(ev){
ev.target.parentElement.querySelectorAll(".active").forEach(element=>{
    element.classList.remove("active");
});
ev.target.classList.add("active");
}
/* #################################################################################### */
//Toggle Menue
let toggleBtn= document.querySelectorAll(".headerArea .toggle-menue");
let tLinks= document.querySelector(".lists");
toggleBtn.onclick= function(){
    e.stopPropagation();
    this.classList.toggle("menue-active");
    tLinks.classList.toggle("open");
}
//Click anywhere outside menue and toggle buttons
document.addEventListener("click", (e)=>{
    if(e.target !==toggleBtn && e.target!== tLinks){
        if(tLinks.classList.contains("open")){
            toggleBtn.classList.toggle("menue-active");
            tLinks.classList.toggle("open");
        }


    }
})
tLinks.onclick= function(e){
    e.stopPropagation();
}