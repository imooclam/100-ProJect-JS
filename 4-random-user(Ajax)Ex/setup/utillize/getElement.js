'use strict'

const getElement=(Selection)=>{
  const el =document.querySelector(Selection)
  // console.log(Selection);
  if(el)return el
   throw new Error("NO element Selection")
}
export default getElement