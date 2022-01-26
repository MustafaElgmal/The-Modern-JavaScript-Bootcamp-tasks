// ===========================================================Start Game=======================================================================


const generateEl=(Game,puzzleEL,guessEL)=>{
    puzzleEL.innerHTML=''
    guessEL.textContent=Game.getStatusMassage()
    const puzzle=Game.getPuzzle()
    const letters=puzzle.split('')
    letters.forEach((letter)=>{
        const EL=document.createElement('span')
        EL.textContent=letter
        puzzleEL.appendChild(EL)
    })

  
    

}


const getPuzzle= async (wordCount)=>{
    const response=await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if(response.status===200){
        const data=await response.json()
        return data.puzzle

    }else{
        throw new Error('Unable to find the puzzle')
    }
}

const startGame=async(puzzleEL,guessEL)=>{
    const puzzle=await getPuzzle('2')
    Game=new Hangman(puzzle,5)
    generateEl(Game,puzzleEL,guessEL)
   
  }







// ===========================================================End Game=======================================================================


// getPuzzle by use Callback


// const getPuzzle=(wordCount,callback)=>{
//     const request=new XMLHttpRequest()
//     request.addEventListener('readystatechange',(e)=>{
//         if(e.target.readyState===4&&e.target.status===200){
//             const data=JSON.parse(e.target.responseText)
            
//             callback(undefined,data)

//         }else if(e.target.readyState===4){
//             callback('Unable to find the puzzle',undefined)

//         }
//     })
//     request.open('GET',`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// }



// getPuzzle by use promises



// const getpuzzle=(wordCount)=>new Promise((resolve,reject)=>{
//     const request=new XMLHttpRequest()
//     request.addEventListener('readystatechange',(e)=>{
//         if(e.target.readyState===4&&e.target.status===200){
//             const data=JSON.parse(e.target.responseText)
//             resolve(data)

//         }else if(e.target.readyState===4){
//             reject('Unable to find the puzzle')

//         }
        
        
//     })
//     request.open('GET',`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })



// getpuzzle by use fetch

// const getPuzzle=(wordCount)=> fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`,{}).then((response)=>{
//     if(response.status===200){
//         return response.json()

//     }else{
//         throw new Error('Unable to find the puzzle')
//     }

// })


// getpuzle by use async/await 








const getCountry=async (countryCode)=>{
    const response=await fetch('https://restcountries.com/v3.1/all')
    if(response.status===200){
        const data=await response.json()
        return data.find((country)=>country.cca2===countryCode)
        
    }else{
        throw new Error('Unable to find the country')
    }
}



const getLocation=async()=>{
    const response=await fetch('https://ipinfo.io/156.222.11.194\?token=20bbe672602099')

    if(response.status===200){
        return response.json()

    }else{
        throw new Error('Unable to find this location')
    }
    
}


const getCurrentCountry=async()=>{
    const location=await getLocation()
    return  getCountry(location.country)
    
}

   
   
   
    
  
