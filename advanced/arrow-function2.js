// arrow function is inregular 
// some mistake in regular function to use arrow function

const add=function(){
    return arguments[0]+arguments[1]
}

// mistake

// const add=()=>{
//     return arguments[0]+arguments[1]
// }

console.log(add(11,22,34,55))


const car={
    color:"red",
    getcolor:function(){
        return `car is ${this.color}`
    }
}

// mistake

// const car={
//     color:"red",
//     getcolor:()=>{
//         return `car is ${this.color}`
//     }
// }



console.log(car.getcolor())


