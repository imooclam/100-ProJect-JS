'use strict'
import get from "./utillize/getElement.js";
import getUser from "./utillize/fetch.js";
import displayUser from "./utillize/displayUser.js";

const URL= 'https://randomuser.me/api/'

const img =get(".user-imgs")
const value =get(".user-value")
const title =get(".user-title")
const btn =get(".btn")
 const  btns= [...document.querySelectorAll(".icon")]

//  const displayUser=(person)=>{
//    img.src=person.image
//   value.textContent = person.name;
//   value.classList.add("email")

//   title.textContent = `My name is`;
//   btns[0].classList.add("active")
//   btns[1].classList.add("email")
//   btns.forEach((btn)=>{ 
//     btn.classList.remove("active")
   
//   })
//   btns.forEach(btn=>{
//   const label=btn.dataset.label
//     console.log(btn);
//     console.log(label);
    
//     btn.addEventListener("click",()=>{
//       console.log(person[label]);
//       value.textContent = person[label];
//       value.classList.add("email")
//       title.textContent = `${label}`;
//       btns.forEach((btn)=>{
//         btn.classList.remove("active")
//       })
//       btn.classList.add("active")
//     })

//   })
   
// }
const showUser= async()=>{
 const person = await getUser()
 displayUser(person)
 console.log(person);
}
 window.addEventListener("DOMContentLoaded",showUser)
 btn.addEventListener("click",showUser)