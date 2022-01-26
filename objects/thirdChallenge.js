let Myaccount={
    name:"Mustafa",
    expenses:0,
    income:0
}
let setExpenses=function(account,expenses){
    account.expenses+=expenses
}
let setIncome=function(account,income){
    account.income=+income
}
let getSummary=function(account){
    let balance=account.income-account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income}in income. $${account.expenses} in expenses`
   
}

let restAcount=function(account){
    account.expenses=0
    account.income=0
}
setIncome(Myaccount,2000)
setExpenses(Myaccount,2.50)
setExpenses(Myaccount,160)
console.log(getSummary(Myaccount))
restAcount(Myaccount)
console.log(getSummary(Myaccount))
