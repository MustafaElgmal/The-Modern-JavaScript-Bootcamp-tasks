

// define ordany function to squre

// const squre=function(num){
//     return num*num
// }

// define arrow function

// const squre=(num)=>{
//     return num*num

// }

// define another arrow function the best 

const squre = (num) => num * num

console.log(squre(5))

const people = [{
    name: "Mustafa",
    age: 22

}, {
    name: "Omnia",
    age: 25
}, {
    name: "Ahmed",
    age: 10
}, {
    name: "Ziad",
    age: 9
}]

// filter people that have age under 20 years

// const under20=people.filter(function(person){
//     return person.age<20
// })

// const under20=people.filter((person)=>{
//     return person.age<20
// })

const under20 = people.filter((person) => person.age < 5)
console.log(under20)

const age22 = people.find((person) => person.age === 20)
console.log(age22)


