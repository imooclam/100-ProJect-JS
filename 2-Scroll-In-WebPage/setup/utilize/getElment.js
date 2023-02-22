
const getElement=(selector)=>{
 const el= document.querySelector(selector)
 console.log(el);
 if(el)return el
throw new Error (" Element is not exsist")
}
export default getElement