
// Read exiting note from localstorage

const getSavedData = () => {
    const DataJeson = localStorage.getItem('note')
    try {

        return DataJeson !== null ? JSON.parse(DataJeson) : []
    } catch {
        return []

    }



}


// save notes in localStorage

const saveNote = (notes) => {
    localStorage.setItem('note', JSON.stringify(notes))
}

// remove note from notes and local storage by id 
const removeNote = (id) => {
    const indx = notes.findIndex((note) => id === note.id)

    if (indx > -1) {
        notes.splice(indx, 1)
    }


}

// Generate the Dom structure for a note

const generateDomNote = (note) => {
    const noteEl = document.createElement('a')
    const textEL = document.createElement('p')
    const statusEL=document.createElement('p')


    note.titles.length > 0 ? textEL.textContent = note.titles : textEL.textContent = "Unnamed Note"
    textEL.classList.add('list-item__title')
    noteEl.appendChild(textEL)


    


    statusEL.textContent=getTime(note.ubdateAt)
    statusEL.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEL)


    noteEl.setAttribute("href", `\edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    
    return noteEl
}

// sortNotes

const sortNotes = (notes, sortby) => {
    switch (sortby) {
        case 'byEdited':
            return notes.sort((a, b) => {
                if (a.ubdateAt > b.ubdateAt) {
                    return -1
                } else if (a.ubdateAt < b.ubdateAt) {
                    return 1
                } else {
                    return 0
                }
            })
            break
        case 'byCreated':
            return notes.sort((a, b) => {
                if (a.createAt > b.createAt) {
                    return -1

                } else if (a.createAt < b.createAt) {
                    return 1

                } else {
                    return 0
                }
            })
            break
        case 'alphabitcal':
            return notes.sort((a, b) => {
                if (a.titles.toLowerCase() > b.titles.toLowerCase()) {
                    return 1

                } else if (a.titles.toLowerCase() < b.titles.toLowerCase()) {
                    return -1


                } else {
                    return 0

                }
            })
            break

    }

}

// Render Applecation code 

const renderNotes = (notes, filters) => {
    const notesEL=document.querySelector("#notes")
    notes = sortNotes(notes, filters.sortby)
    const filterNotes = notes.filter((note) => note.titles.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesEL.innerHTML = " "

    if(filterNotes.length>0){
        filterNotes.forEach(function (note) {
            notesEL.appendChild(generateDomNote(note))
        })

    }else{
        const EL=document.createElement('p')
        EL.textContent='No notes to show'
        EL.classList.add('empty-message')
        notesEL.appendChild(EL)
    }

    

}


// get note that matches of pdage id
const getNote = (noteId) => {
    const note = notes.find((note) => note.id === noteId)

    if (note === undefined) {
        location.assign("\indx.html")

    }
    document.querySelector("#note-title").value = note.titles
    document.querySelector("#note-body").value = note.body
    document.querySelector("#time-edit").textContent = getTime(note.ubdateAt)
    return note
}

//  get last edit

const getTime = (timeStamp) => (`Last edited ${moment(timeStamp).fromNow()}`)



