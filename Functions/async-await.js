const mypromise=(num)=>new Promise((resolv,reject)=>{
    setTimeout(()=>{
        typeof num === 'number' ? resolv(num*2) : reject('Error')

    },1000)
})


const processData=async ()=>{
    let data=await mypromise(2)
    data=await mypromise(data)
    return data
}
processData().then((data)=>{
   
    console.log(data)

}).catch((err)=>{
    console.log(err)

})