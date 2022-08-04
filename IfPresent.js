// Could we determine if a certain value was present? 
// Write a function called isPresent2d(arr2d, value) that returns true
// if the value is present and false otherwise

function isPresent2d(arr2d,value){
    console.log(value)
    for (var i = 0; i < arr2d.length; i++){
        for (var j = 0; j < arr2d[i].length; j++){         
            if (arr2d[i][j] === value){
                return true
            }
           
        }
    }
    return false
}

var result = isPresent2d([ [2, 5, 8],[3, 6, 1],[5, 7, 7] ], 3)
console.log(result)

//Flattern Array
// Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from inside the sub-arrays.
//  Don't assume the array will always be the same size, or that the sub-arrays are all the same length (the array might be jagged). 
//  Don't use built-in methods like Array.prototype.flat() but feel free to use .push(value) and/or .pop() where needed.

function flatttenArr(arr2di){
    var newArr = []
    for (var i = 0; i < arr2di.length; i++){
        for (var j = 0; j < arr2di[i].length; j++){         
                newArr.push(arr2di[i][j])          
        }
    }
    return newArr
}

var result = flatttenArr([ [2, 5, 8],[3, 6, 1],[5, 7, 7] ])
console.log(result)






