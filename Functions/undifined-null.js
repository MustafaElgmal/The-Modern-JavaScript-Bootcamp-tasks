// undfined for variable
let name
name="Mustafa"
if(name===undefined){
    console.log("Undifined value")

}else{
    console.log(name)
}


// undifined for functions arguments

let square=function(num){
    console.log(num)
}

square()



// undifined for functions return defult value

let square=function(num){
    return num*num
}
let value=square()
console.log(value)