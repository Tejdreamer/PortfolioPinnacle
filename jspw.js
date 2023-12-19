// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');


menuIcon.onclick=() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// scroll section

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll= () => {


   
    sections.forEach(sec => {
         let top =window.scrollY;  // current position
         let offset = sec.offsetTop-100;  
         let height = sec.offsetHeight;
         let id = sec.getAttribute('id');

         if(top>= offset && top< offset+height)
         {
            // active nav bar links 

            navlinks.forEach(navl => {
                   navl.classList.remove('active')
                   document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

               //  active sections for animation on scroll 
         sec.classList.add('show-animate');
         }
         //  to use animation that repeats on scroll
         else{
                 sec.classList.remove('show-animate');
         }

        

    });

    // sticky header
    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    
    // remove toggle icon and nabbar when click navbarlinks (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
     
   // footer sliding animation

    

}


let btn=document.querySelector('button');
let inputs = document.querySelectorAll("input");
let txt=document.querySelector("textarea")

btn.addEventListener('click', () => {
    inputs.forEach(input => input.value='');
    txt.value='';
})


// const scriptURL = '<https://script.google.com/macros/s/AKfycbyYzDKTjC7T4kc1VpXmUV0vIhSUS4N-6F2RProy9DE/dev>' // add your own app script link here
// const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById("msg")

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//         msg.innerHTML = "Message sent successfully"
//         setTimeout(function(){
//             msg.innerHTML = ""
//         },5000)
//         form.reset()
//     })
//     .catch(error => console.error('Error!', error.message))
// })
