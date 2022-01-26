let isVaildPassword = function (password) {
    return password.length > 8 && !password.includes("password")
}
console.log(isVaildPassword("12345"))