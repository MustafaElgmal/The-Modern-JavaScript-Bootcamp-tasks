
let todos = gettodos()


const filters = {
    searchText: "",
    hideCompleted: false
}


renderTodos(todos, filters)


document.querySelector("#searchText").addEventListener("input", function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})


document.querySelector("#formName").addEventListener("submit", function (e) {
    const text=e.target.elements.todo.value.trim()
    e.preventDefault()
    if(text!==''){
        todos.push({
            id:uuidv4(),
            text: text,
            completed: false
    
        })
        settodo(todos)
        renderTodos(todos, filters)

    }
   
    e.target.elements.todo.value = ""

})



document.querySelector("#hideCompleted").addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
