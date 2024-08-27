function BMI(mass, height) {
    return mass / (height * height)
}

mass_Marks1 = 79
height_Marks1 = 1.69
mass_Marks2 = 95
height_Marks2 = 1.88
mass_John1 = 92
height_John1 = 1.95
mass_John2 = 85
height_John2 = 1.76

if (BMI(mass_Marks1, height_Marks1) > BMI(mass_John1, height_John1)) {
    markHigherBMI = true
    console.log(`Mark's (${BMI(mass_Marks1, height_Marks1)}) BMI higer than John's (${BMI(mass_John1, height_John1)})`)
} else {
    markHigherBMI = false
    console.log(`John's (${BMI(mass_John1, height_John1)}) BMI higer than Mark's (${BMI(mass_Marks1, height_Marks1)})`)
}


if (BMI(mass_Marks2, height_Marks2) > BMI(mass_John2, height_John2)) {
    markHigherBMI = true
    console.log(`Mark's (${BMI(mass_Marks2, height_Marks2)}) BMI higer than John's (${BMI(mass_John2, height_John2)})`)
} else {
    markHigherBMI = false
    console.log(`John's (${BMI(mass_John2, height_John2)}) BMI higer than Mark's (${BMI(mass_Marks2, height_Marks2)})`)
}