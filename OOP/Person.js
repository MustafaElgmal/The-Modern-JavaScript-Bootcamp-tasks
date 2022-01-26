

class person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes

    }
    getbio() {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => {

            bio += `${this.firstName} likes ${like} .`
        })


        return bio

    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]

    }
    set age(age) {
        this._age = age

    }
    set likes(likes) {
        this._likes = likes

    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends person{
    constructor(firstName,lastName,age,likes,postion){
        super(firstName,lastName,age,likes)
        this._postion=postion
    }
    getbio(){
        return `${this.fullName} is ${this._postion}`
    }
    getYearLeft(){
        return 65-this.age
    }
    set postion(position){
        this._postion=position
    }
}


class student extends person{
    constructor(firstName,lastName,age,likes,grade){
        super(firstName,lastName,age,likes)
        this.grade=grade
    }
    getbio(){
        return this.grade>=70? `${this.fullName} is passing in the exam`:`${this.fullName} is failing in the exam`
    }
    updateGrade(change){
        this.grade+=change
    }
   
}

const me=new Employee()
me.fullName="Mustafa Adel"
me.postion='Enginner'
console.log(me.getbio())



