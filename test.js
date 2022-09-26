var peopleArr =[
    {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
    {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"},
    {"firstName":"Millard", "lastName":"Fillmore","age":50,"hairColor":"Brown"},
    {"firstName":"Maria", "lastName":"Smith","age":62,"hairColor":"Brown"}
  ]

let total = peopleArr.map((eachObj)=>eachObj.age)

console.log(total)