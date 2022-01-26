const data={
    get location(){
        return this._location
    },
    set location(value){
        this._location=value.trim()


    }
  
}

data.location='Hekwan'
console.log(data.location)