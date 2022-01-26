class Hangman{
    constructor(word,remingGuess){
        this._word=word.toLowerCase().split('')
        this._remingGuess=remingGuess
        this._guessLetters=[]
        this._status='Playing'
    }
    set word(word){
        this._word=word
    }
    set remingGuess(remingGuess){
        this._remingGuess=remingGuess
    }
    getPuzzle(){
        let puzzle=''
        this._word.forEach((letter)=>{
            if(this._guessLetters.includes(letter)||letter===' '){
                puzzle+=letter
                
            }else{
                puzzle+='*'
            }
        })
        return puzzle
    }
    makeGuess(guess){
        let letter=guess.toLowerCase()
        if(!this._guessLetters.includes(letter)){
            if(this._word.includes(letter)){
                this._guessLetters.push(letter)
            }else{
                if(this._remingGuess>0){
                    this._remingGuess--
                }
            }

        }
        this.recalculatorStatus()

        

    }

    recalculatorStatus(){

        const finished=this._word.every((letter)=>this._guessLetters.includes(letter)||letter===' ')
        if(this._remingGuess===0){
            this._status='Faild'
        }else if(finished){
            this._status='Finished'
        }else{
            this._status='Playing'
        }
        
        

    }

    getStatusMassage(){
        let massage=''
        if(this._status==='Playing'){
            massage=`Guesses left : ${this._remingGuess}`

        }else if(this._status==='Faild'){
            massage=`Nice try! The word was "${this._word.join('')}",`

        }else{
            massage=`Great work! You passed the word`

        }
        return massage
    }
}






