
const btnPrev = document.querySelector('.prevArr'),
      btnNext = document.querySelector('.nextArr')


let slideIndex = 1;
let sliderImgs=['sl1.jpg', 'sl2.jpg', 'sl3.jpg', 'sl4.jpg', 'sl5.jpg'];

const changeSlide=(num)=>{
    let slide=document.querySelector('.slide');
    slideIndex+=num;
    if(slideIndex>sliderImgs.length){
        slideIndex=1;

    }else if(slideIndex<1){
        slideIndex=sliderImgs.length;
    }
    slide.style.background=`url(img/${sliderImgs[slideIndex-1]}) no-repeat center/cover`;
}
btnPrev.addEventListener('click', ()=> changeSlide(-1))
btnNext.addEventListener('click', ()=> changeSlide(1))

//________________________________

const btnShowModalWindow=document.querySelector('.afisha')
      modalWindow=document.querySelector('.modal_window')
//modal window open
const showModalWindow=()=>{

    modalWindow.classList.add('active')
    setTimeout(()=>{
        modalWindow.style.opacity=1
    },0)
}

btnShowModalWindow.addEventListener('click', showModalWindow)

// modalWindowClouse
const clouseModalWindow=(e)=>{
    let self=e.target
    if(self.classList.contains('modal_window')){
        setTimeout(()=>{
            modalWindow.classList.remove('active')
            
        }, 500)
         modalWindow.style.opacity=0
   }
}
document.addEventListener('click', clouseModalWindow)

//   -------------- 
  
   
const txt=document.querySelector('.text')
const tel=document.querySelector('.tel')
const sub=document.querySelector('.submit')

class User{
    constructor(name, tel, date){
        this.name=name,
        this.tel=tel,
        this.date=date
    }
}

let userName=null
let userTel=null
let userDate=null
sub.addEventListener('click',()=>{
    if(txt.value.length >0 && tel.value.length>0){
       const visit=new Date();
             let when = visit.toLocaleString();
             console.log(when);
             userName=txt.value;
             userTel=tel.value;
        const userNew=new User(userName, userTel, when)
        console.log(userNew)
        modalWindow.classList.remove('active')
    }
    else{
        alert ('fill the form')   
    }    
})
   
//------------second window------

// function outNum(num, elem){
//     let run=document.querySelector("."+ elem);
//     let n=0;
//     let interval=setInterval(()=>{
//          n=n+10;
//          if(n==num){
//             clearInterval(interval)
//     }
//         run.innerHTML= n;
//     },
//        80);
// }  
//         outNum(1600, 'number1');
//         outNum(350, 'number2');


const step=20;
const time=2000;
function outNum(num, elem){
    let run=document.querySelector("."+ elem );
    let n=0;
    let test=Math.round(time / (num / step));
    let interval=setInterval(()=>{
         n=n+10;
         if(n==num){
            clearInterval(interval)
    }
        run.innerHTML= n;
    },
       test 
       );
    }
        outNum(1600, 'number1');
        outNum(350,  'number2');
        
// --------------------------
// window.addEventListener('load', main)
// function main(){
//     const zoomEls = document.getElementsByClassName('zoom_el')
//     for (const zoomEl of zoomEls){
//         zoomEl.addEventListener('click', (e)=>{
//             const el = e.currentTarget
//             const poster = el.parentElement.parentElement
//             poster.classList.add('zoom')
//             poster.addEventListener('mousemove', zoom)
//             poster.addEventListener('mouseleave', stopZoom, {once: true})
//         })
//     }
// }
// function stopZoom(e){
//     const zoomer = e.currentTarget
//     zoomer.removeEventListener('mousemove', zoom)
//     zoomer.classList.remove('zoom')
// }
// const ZOOM_RATIO = 100;
// function zoom(e){
//     let zoomer = e.currentTarget;
//     const offsetX = e.offsetX ?? e.touches[0].pageX
//     const offsetY = e.offsetY ?? e.touches[0].pageY
//     x = offsetX/zoomer.offsetWidth * ZOOM_RATIO
//     y = offsetY/zoomer.offsetHeight * ZOOM_RATIO
//     zoomer.style.backgroundPosition = x + '% ' + y + '%';
// }
// ------------------------------- сейтбек делал

//                             ======увеличить картинку====

    const allElements=document.querySelectorAll('.zoom_el');
    
    allElements.forEach((e)=>{
        e.addEventListener('click', ()=>{
            const backgroundName=e.getAttribute('data-name');
            const boddy=document.querySelector('body');
            const modalSlider=document.createElement('div');
            modalSlider.classList.add('modal_slider');

            modalSlider.innerHTML=`<nav class="navv"> </nav>`
            boddy.appendChild(modalSlider);
            const navv=document.querySelector('.navv');
            navv.style.cssText=`width: 90%;
                                height: 90%;
                                background:url(img/${backgroundName}) no-repeat center/cover;
                                `
                
                    navv.addEventListener('click', function(){
                    modalSlider.remove()
                })
        })
    })
    

// _______------------------------------------


const allTxt = 'Hello world!'
let text = document.querySelector('.hello')
let i = 0
const typeJS = () => {
  let x = setInterval(() => {
    if (i < allTxt.length) {
      text.innerHTML += allTxt[i]
      i++
     // console.log(i)
    }
    if (i > allTxt.length - 1) {
      clearInterval(x)
      setTimeout(() => {
        let j = allTxt.length - 1
        let y = setInterval(() => {
          if (j >= 0) {
            text.innerHTML = text.innerHTML.slice(0, j)
            j--
          } else {
            clearInterval(y)
          }
        }, 50)
      }, 2000)
    }
  }, 50)
}
setInterval(typeJS, 1000)

// -----------------------------

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault()
      let elementClick = this.getAttribute("href") 
      let destination = document.querySelector(elementClick).offsetTop
      window.scroll({
        top: destination,
        behavior: 'smooth'
      })
    })
  })
//---------------------------------


// #about
let h2 = document.querySelectorAll('h2');

const just = ()=> {
    for(let i=0; i<h2.length; i++){
    let windowHeight = window.innerHeight
    let h2info = h2[i].getBoundingClientRect()
  if ((h2info.top > 0) && (h2info.top < windowHeight)) {
    h2[i].classList.add('animate');
  } else {
    h2[i].classList.remove('animate');
  }
    }
  
}
window.addEventListener('scroll', just);

// добавление анимации при скроле вниз


//---------------------

//для получения данных

const nameA=document.querySelector('.imiya')
const company=document.querySelector('.company')
const phone=document.querySelector('.phone')
const po4ta=document.querySelector('.po4ta')
const msm=document.querySelector('.msm')
const btnn=document.querySelector('.btnn')
const form2=document.querySelector('.form2')

let newP=[]

class Person{
    constructor(name, company, phone, email, msm){
        this.personname=name,
        this.personcompany=company,
        this.personphone=phone,
        this.personemail=email,
        this.personmsm=msm
    }
    
}
    btnn.addEventListener('click', (e)=>{
        e.preventDefault()
        if(newP.length>2){
            alert("no more users")
        }else{
            const client=new Person(nameA.value, company.value, phone.value, po4ta.value, msm.value)

        newP.push(client)
        
        console.log(client)
        console.log(newP)
        
        }
        form2.reset()
    })
    





