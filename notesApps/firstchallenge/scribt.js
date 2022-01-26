
const ps=document.querySelectorAll("p")
ps.forEach(function(p){
    const tex=p.textContent.toLowerCase()
     if(tex.includes("the")){
         p.remove()
     }
   
})
