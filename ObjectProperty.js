//How to use ternary operator and map function


habits = [{ 'leer' : 24}, {'comer': 52}, {'bailar':60}]



habits.map((eachHabit, i)=>{
    console.log(eachHabit)

    eachHabit['leer'] !== undefined ? console.log('leer found') : console.log('property not found')


})