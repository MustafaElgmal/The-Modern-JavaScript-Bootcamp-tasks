
// Create outer function
const myfunction=()=>{
    // create varible in outer function
    const massege='This is my function'
    // create inner function
    const print=()=>{
        // acess outer function varible
        console.log(massege)
    }
    return print
}
const myprint=myfunction()
myprint()



const createCounter=()=>{
    let counter=0
    return{
        increament(){
            counter++
        },
        decreament(){
            counter--
        },
        getcount(){
            return counter
        }
    }
}
const counter=createCounter()
counter.increament()
counter.decreament()
counter.decreament()
console.log(counter.getcount())



// Adder 


const Adder=(a)=>{
    return(b)=>{
        return a+b

    }

}

const add10=Adder(10)
console.log(add10(-2))


// Tipper Challenage 

const createTipper=(baseTip)=>{
    return(billAmount)=>{
        return baseTip*billAmount

    }


}


const Tip20=createTipper(0.2)
const Tip30=createTipper(0.3)
console.log(Tip20(100))
console.log(Tip30(100))