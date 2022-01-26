let getTip=function(totalSpend,percentTip=0.2){
    let spendDollar=totalSpend-(totalSpend*percentTip)
    return spendDollar
}

let totalSpend=200
let spendDollar=getTip(totalSpend)
console.log(spendDollar)

