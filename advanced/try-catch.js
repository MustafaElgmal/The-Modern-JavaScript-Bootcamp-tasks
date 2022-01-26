const gettim=(amount)=>{
    if(typeof amount==='number'){
        return amount*0.25
    }else{
        throw Error("arguments should be number")

    }
   
}

try{
    console.log(gettim(true))

}catch(e){
    console.log("Error")

}

console.log("Done")