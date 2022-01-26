let Resturant = {
    name: "Kaber Sophe",
    capacity: 100,
    guestCount: 0,
    setParty: function (party) {
        if (this.checkAvailabilty)
            this.guestCount += party
        else
            console.log("Please wait , No seats Available!")
    },
    removeParty: function (party) {
        if (this.guestCount != 0)
            this.guestCount -= party
        else
            console.log("No people in Resturant!")

    },
    checkAvailabilty: function (party) {
        return party <= (this.capacity - this.guestCount)
    },
    resetResturant: function () {
        this.guestCount = 0
    }

}

Resturant.setParty(4)
Resturant.setParty(70)
console.log(Resturant.checkAvailabilty(30))
Resturant.removeParty(4)
console.log(Resturant.checkAvailabilty(30))
Resturant.resetResturant()
console.log(Resturant.checkAvailabilty(100))

let isVaildPassword = function (password) {
    return password.length > 8 && !password.includes("password")
}
console.log(isVaildPassword("12345"))
