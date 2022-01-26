
let notes = getSavedData()

const filters = {
    searchText: "",
    sortby: "byEdited"
}

renderNotes(notes, filters)

document.querySelector("#searchText").addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector("#create-note").addEventListener("click", function (e) {
    e.preventDefault()
    const timeSteamp = moment().valueOf()
    ID = uuidv4()
    notes.push({
        id: ID,
        titles: '',
        body: '',
        createAt: timeSteamp,
        ubdateAt: timeSteamp

    })
    saveNote(notes)
    location.assign(`H:/compitition/The%20Modern%20JavaScript%20Bootcamp/notes_app/edit.html#${ID}`)


})
document.querySelector("#filters-by").addEventListener("change", function (e) {
    filters.sortby = e.target.value
    renderNotes(notes, filters)

})
window.addEventListener('storage', function (e) {
    if (e.key === 'note') {
        notes = JSON.parse(e.newValue)
        saveNote(notes)
        renderNotes(notes, filters)
    }
})




