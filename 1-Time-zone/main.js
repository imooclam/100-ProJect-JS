 
 let hourEl = document.getElementById("hour")
 let minuteEl = document.getElementById("minute")
 let seconedEl = document.getElementById("seconed")
 let ampmEl = document.getElementById("ampm")

 function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    // turn it max 12{}
    if(h >12){
        h-=12
        ampm ="PM"
    }
    // to get  00 decimal
   h=  h<10 ? "0" + h :h
   m=  m<10 ? "0" + m :m
   s=  s<10 ? "0" + s :s
// }comment me to know Diff
    hourEl.innerText = h; 
    minuteEl.innerText= m
    seconedEl.innerText= s
    ampmEl.innerText = ampm;
    // ampmEl(innerText = ampm);
    setTimeout(()=>{

        updateClock()
    },1000)

 }
 updateClock()