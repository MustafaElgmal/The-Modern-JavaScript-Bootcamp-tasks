// callback

const getDataCallback=(num,callback)=>{
    setTimeout(()=>{
        if(typeof num==='number'){
            callback(undefined,num*2)
        }else{
            callback('Error',undefined)
        }
     

    },300)
}

getDataCallback(2,(err,data)=>{
    if(err){
        console.log(err)

    }else{
        getDataCallback(data,(err,data)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }

        })
    }

})


// promises


const mypromise=(num)=>new Promise((resolv,reject)=>{
    setTimeout(()=>{
        typeof num === 'number' ? resolv(num*2) : reject('Error')

    },1000)
})

mypromise(2).then((data)=>{
    mypromise(data).then((data)=>{
        console.log(data)

    },(err)=>{
        console.log(err)

    })
    

},(err)=>{
    console.log(err)

})


// promises chaining

mypromise(10).then((data)=>{
    return mypromise(data)
}).then((data)=>{
    return mypromise(data)
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

