
let gradeCalc = function (totalStudentGrades, totalImpossiableGrades) {
    let studentPercent = (totalStudentGrades / totalImpossiableGrades) * 100
    let leterGrade = ''

    if (studentPercent >= 0 && studentPercent <= 59)
        leterGrade = 'F'

    else if (studentPercent >= 60 && studentPercent <= 69)
        leterGrade = 'D'

    else if (studentPercent >= 70 && studentPercent <= 79)

        leterGrade = 'C'

    else if (studentPercent >= 80 && studentPercent <= 89)
        leterGrade = 'B'

    else
        leterGrade = 'A'

    return `You got a ${leterGrade} (${studentPercent}%)!`
}

let result = gradeCalc(15, 20)
console.log(result)



