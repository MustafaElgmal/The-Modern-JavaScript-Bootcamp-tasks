let Book={
    title:"Cypersecurity",
    authur:"Mustafa Elgmal",
    numberPages:200

}

let otherBook={
    title:"1990",
    authur:"Ahmed",
    numberPages:100

}
let getSummry=function(book){
    return{
        summary:`This book is ${book.title} by ${book.authur}`,
        summaryPages:`This book is ${book.title} by ${book.authur} and have ${book.numberPages} Pages`
    }
}
let firstBook=getSummry(Book)
let secondBook=getSummry(otherBook)
console.log(firstBook.summary)
console.log(secondBook.summaryPages)