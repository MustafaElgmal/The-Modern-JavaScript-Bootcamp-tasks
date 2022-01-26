// malti arguments

let add=function(a,b,c){
    return a+b+c
}

console.log(add(10,2,4))

// defult arguments


let getScoreTest=function(name,score=0){
    console.log(name)
    console.log(score)
}
getScoreTest("mustafa")
getScoreTest("Ahmed",100)