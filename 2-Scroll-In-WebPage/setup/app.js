import get from "./utilize/getElment.js";
// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// const date = document.getElementById("date")

const date = get("#date")
date.textContent= new Date().getFullYear()

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links

const icon = get(".icon")
const header = get("#home")

const toggle=()=>{
  header.classList.toggle("nav-open")
  
}
icon.addEventListener("click",toggle)

// smooth scroll
const links= [ ... document.querySelectorAll("a:link")]
console.log(links);

links.forEach((link)=>{
//  console.log(link);
 link.addEventListener("click",(e)=>{
  e.preventDefault()
  //  Now we want to  read href Attribute out of the link that was clicked
  // const hrefs= e.currentTarget
  const href = link.getAttribute("href")
  
  //  now we have href
  // 1) scroll back to top so scroll Up  is the link in which contain #

  if(href==="#") window.scrollTo({
      behavior:"smooth",
      top:"0"
    })
  
  if(href!=="#"&& href.startsWith("#")){

    console.log(href);
    // lets get Elment we want t scroll to
  // const sectionEl=get(href)
  
  const sectionEl=document.querySelector(href)
  // console.log(sectionEl);
  sectionEl.scrollIntoView({behavior:"smooth"})

  }
  // 3)close mobil Navigaion
  // Note we  chack if links have Navbar-links if does remove nav-open so remove or toggle it doesnt matter
  if(link.classList.contains("navbar-link")){
    header.classList.remove("nav-open")

  }

 })
})
// stikey
const sectionEl=document.querySelector(".sectionAbout")
const nav=document.querySelector(".navb")
 const obs= new IntersectionObserver((entries)=>{

   const ent = entries[0];
   
   console.log(ent);
   if(ent.isIntersecting===false){
    nav.classList.add("sticky")
   }
   if(ent.isIntersecting){
    nav.classList.remove("sticky")
   }
  
  },{
    
      root:null,
      threshold:0,
      rootMargin:"-180px"

  })
  obs.observe(sectionEl) 
 ////////////////////////////////////////
 // ********** fixed navbar ************

// const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link")
 window.addEventListener("scroll", function () {
   const scrollHeight = window.pageYOffset;
   if (scrollHeight > 500) {
     console.log("helo");
 
     topLink.classList.add("show-link");
   } else {
     topLink.classList.remove("show-link");
   }
 });
  // const navHeight = navbar.getBoundingClientRect().height;
  // if (scrollHeight > navHeight) {
  //   navbar.classList.add("fixed-nav");
  // } else {
  //   navbar.classList.remove("fixed-nav");
  // }
  // setup back to top link
