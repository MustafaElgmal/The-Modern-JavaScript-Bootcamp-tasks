// // DOM Document object Model

// // query and remove 
// // const p=document.querySelector("P")
// // p.remove()

// // query and remove all 

// const ps=document.querySelectorAll("p")
// ps.forEach(function(p){
//     const tex=p.textContent
//     console.log(tex)
//     // p.remove()

// })

// // Creat new element into Document
// const newParagraph=document.createElement('p')
// newParagraph.textContent="This in a new element javaScribt"

// //  Add element in body 

// document.querySelector("body").appendChild(newParagraph)

// // button

// document.querySelector("button").addEventListener("click",function(e){
//     e.target.textContent="Click on button"
//     console.log("Hey")
// })

document.querySelector('#Create-note').addEventListener('click',function(e){
    const not=document.createElement('p')
    not.className="note"
    not.textContent="mostafa"
    document.querySelector('body').appendChild(not)

})
document.querySelector("#Remove-All").addEventListener('click',function(e){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})
document.querySelector("#text_note").addEventListener('input',function(e){
    console.log(e.target.value)
})




