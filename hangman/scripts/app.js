// ===========================================================Start Game=======================================================================
const puzzleEL=document.querySelector('#puzzle')
const guessEL=document.querySelector('#guesses')
const resetEL=document.querySelector('#reset')

let Game=startGame(puzzleEL,guessEL)



window.addEventListener('keypress',(e)=>{
  if(Game._status==='Playing'){
      let letter=String.fromCharCode(e.charCode)
      Game.makeGuess(letter)
      generateEl(Game,puzzleEL,guessEL)
      console.log(e.charCode)

  }

  
  

})


resetEL.addEventListener('click',(e)=>{
  startGame(puzzleEL,guessEL)

})

















// ===========================================================End Game=======================================================================

// call getpuzzle by use call back 

// getPuzzle('2',(error,data)=>{
//   if(error){
//     console.log(`Error : ${error}`)

//   }else{
//     console.log(data.puzzle)

//   }

// })


// call getpuzzle by use peomises

// getpuzzle('2').then((data)=>{
//   console.log(data.puzzle)

// },(error)=>{
//   console.log(error)

// })


// call getpuzzle by use fetch



// getCurrentCountry().then((country)=>{
//   console.log(country.name.common)
// }).catch((error)=>{
//   console.log(`Error: ${error}`)
// })


// getLocation().then((location)=>{

//   return getCountry(location.country)

// }).then((country)=>{
//   console.log(country.name.common)
// }).catch((error)=>{
//   console.log(`Error : ${error}`)
// })


// getPuzzle('2').then((data)=>{
//   console.log(data)
// }).catch((error)=>{
//   console.log(`Error: ${error}`)

// })














