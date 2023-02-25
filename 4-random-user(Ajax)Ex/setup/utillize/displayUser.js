import get from './getElement.js';

const URL= 'https://randomuser.me/api/'

const img =get(".user-imgs")
const value =get(".user-value")
const title =get(".user-title")
const btn =get(".btn")
 const  btns= [...document.querySelectorAll(".icon")]

 const displayUser=(person)=>{
   img.src=person.image
  value.textContent = person.name;
  title.textContent = `My name is`;
  btns.forEach((btn)=>{ 
    btns[0].classList.add("active")
    btn.classList.remove("active")
 })
  btns.forEach(btn=>{
  const label=btn.dataset.label
    console.log(btn);
    console.log(label);
    
    btn.addEventListener("click",()=>{
      console.log(person[label]);
      value.textContent = person[label];
      title.textContent = `${label }`;
      btns.forEach((btn)=>{
        btn.classList.remove("active")
      })
      btn.classList.add("active")
    })

  })
   
}
export default displayUser;