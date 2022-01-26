// get todo from localStorage and store in my array

let gettodos =  ()=> {
    let todoJson = localStorage.getItem('todo')
    try{
        return todoJson !== null?JSON.parse(todoJson):[]

    }catch{
        return []

    }
    

}

// set todo in localStrogae

const settodo =  (todos)=> {
    localStorage.setItem('todo', JSON.stringify(todos))
}


// remove todo by id 

const removeTodo=(id)=>{
    const indx=todos.findIndex((todo)=>id===todo.id)
    
    if(indx>-1){
        todos.splice(indx,1)
    }
}


// count not completed to do

const count =  (filtertodos)=> {
    const incompleted = filtertodos.filter( (todo)=>!todo.completed) 
    
    return incompleted.length
}


// generate header 

const generateHeadDom =  (filtersTodos)=> {
    const El = document.createElement('h1')
    El.classList.add('list-title')
    const pluer=count(filtersTodos)>1?'Todos':'Todo'
    if(count(filtersTodos)>0){
        El.textContent = `You have ${count(filtersTodos)} ${pluer} left`
        

    }
    return El
    
    


}

// generate paragraph

const generateDomTodos = (todo)=> {
    const todoEl=document.createElement('label')
    const containerEL=document.createElement('div')
    const checkboxEL=document.createElement('input')
    const textEL=document.createElement('span')
    const buttonEL=document.createElement('button')

    checkboxEL.type='checkbox'
    checkboxEL.checked=todo.completed
    containerEL.appendChild(checkboxEL)
    checkboxEL.addEventListener('change',(e)=>{
        e.target.checked?todo.completed=true:todo.completed=false

    
        settodo(todos)
        renderTodos(todos,filters)
    })


    textEL.textContent=todo.text
    containerEL.appendChild(textEL)


    todoEl.classList.add('list-item')
    containerEL.classList.add('list-item__container')
    todoEl.appendChild(containerEL)


    buttonEL.textContent='remove'
    buttonEL.classList.add('button','button--text')
    todoEl.appendChild(buttonEL)
    buttonEL.addEventListener('click',function(e){
        removeTodo(todo.id)
        settodo(todos)
        renderTodos(todos,filters)
    })

    
    


    
   
   
    return todoEl

}



// render 


const renderTodos = (todos, filters)=> {
    const todoEl=document.querySelector("#todos")

    const filtersTodos = todos.filter((todo)=> {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })
    todoEl.innerHTML = ""
    todoEl.appendChild(generateHeadDom(filtersTodos))

    if(filtersTodos.length>0){
      

        filtersTodos.forEach( (todo)=> {
           todoEl.appendChild(generateDomTodos(todo))
        })

    }else{
        const EL=document.createElement('p')
        EL.textContent="No to-dos to show"
        EL.classList.add('empty-message')
        todoEl.appendChild(EL)

    }


    




    


}

