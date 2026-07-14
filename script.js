
// ===============================
// MENU MOBILNE
// ===============================


const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});





// ===============================
// ANIMACJE PRZY SCROLLU
// ===============================


const revealElements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }


    });


},{
    threshold:0.15
});



revealElements.forEach(element=>{

    observer.observe(element);

});







// ===============================
// LICZNIKI STATYSTYK
// ===============================


const counters = document.querySelectorAll("[data-number]");

let started = false;



function startCounters(){


    if(started) return;


    counters.forEach(counter=>{


        let target = Number(counter.dataset.number);

        let current = 0;


        let interval = setInterval(()=>{


            current += Math.ceil(target / 60);


            if(current >= target){

                current = target;

                clearInterval(interval);

            }


            counter.textContent = current + (target === 99 ? "%" : "+");


        },30);



    });


    started=true;

}





const statsSection=document.querySelector(".stats");


const statsObserver=new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            startCounters();

        }


    });


});



statsObserver.observe(statsSection);







// ===============================
// EFEKT PISANIA HERO
// ===============================


const heroText =
"Naprawiamy technologię, która napędza Twój świat";


const heroTitle=document.querySelector(".hero h2");


let index=0;


heroTitle.textContent="";


function typing(){


    if(index < heroText.length){


        heroTitle.textContent += heroText[index];

        index++;

        setTimeout(typing,45);


    }


}



window.addEventListener("load",()=>{


    typing();


});








// ===============================
// FAQ ROZWIJANIE
// ===============================


const questions=document.querySelectorAll(".question");


questions.forEach(question=>{


    question.addEventListener("click",()=>{


        question.classList.toggle("open");


    });


});








// ===============================
// EFEKT PARALLAX DLA HERO
// ===============================


window.addEventListener("scroll",()=>{


    const hero=document.querySelector(".hero");


    let scroll=window.scrollY;


    hero.style.backgroundPositionY =
    scroll * 0.3 + "px";


});