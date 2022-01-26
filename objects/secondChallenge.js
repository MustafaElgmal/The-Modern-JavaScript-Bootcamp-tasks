let tempConverterFromFrahToCelAndKel=function(fahrinate){
    let celsius = (fahrinate- 32) * 5 / 9
    let kelvin = (fahrinate + 459.67) * 5 / 9
    return{
        fah:fahrinate,
        cel:celsius,
        kel:kelvin
    }
}

let temp=tempConverterFromFrahToCelAndKel(50)
console.log(temp.fah)
console.log(temp.cel)
console.log(temp.kel)
