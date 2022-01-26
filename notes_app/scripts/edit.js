const noteId = location.hash.substring(1)
const dateEl = document.querySelector("#time-edit")
let notes = getSavedData()
let note = getNote(noteId)
document.querySelector('#note-title').addEventListener('input', function (e) {
    note.titles = e.target.value
    note.ubdateAt = moment().valueOf()
    dateEl.textContent = getTime(note.ubdateAt)
    saveNote(notes)
})
document.querySelector("#note-body").addEventListener('input', function (e) {
    note.body = e.target.value
    note.ubdateAt = moment().valueOf()
    dateEl.textContent = getTime(note.ubdateAt)
    saveNote(notes)

})
document.querySelector('#remove').addEventListener('click', function (e) {
    removeNote(note.id)
    saveNote(notes)
    location.assign('\indx.html')
})

document.querySelector('#add').addEventListener('click',function(e){
    saveNote(notes)
    location.assign('\indx.html')

})


window.addEventListener('storage', function (e) {
    if (e.key === 'note') {
        notes = JSON.parse(e.newValue)
        note = getNote(noteId)

    }
})
dateEl.textContent = getTime(note.ubdateAt)
