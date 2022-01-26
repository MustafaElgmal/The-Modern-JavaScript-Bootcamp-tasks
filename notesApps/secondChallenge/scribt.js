const todos=[{
    text:"Order cat food",
    compelted:false
},{
    text:"Clean Kitchen",
    compelted:true
},{
    text:"Buy food",
    compelted:true

},{
    text:"Do work",
    compelted:false
},{
    text:"Exerces",
    compelted:true
}]
const counter=todos.filter(function(todo){
    return !todo.compelted
})
const newParagraph=document.createElement("h2")
newParagraph.textContent=`You have ${counter.length} Todos left`
document.querySelector("body").appendChild(newParagraph)

todos.forEach(function(todo){
    const newParagraph=document.createElement("p")
    newParagraph.textContent=todo.text
    document.querySelector("body").appendChild(newParagraph)

})




