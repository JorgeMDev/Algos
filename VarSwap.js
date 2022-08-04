//How to swap variables

var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = 0; //always need to use a temp var when swapping variables values to avoid overwritting and making both variables the same

temp = fruit1;

fruit1 = fruit2;

fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

//Write a function reverse(arr) to reverse an array, if we were given ["a", "b", "c", "d", "e"];

function reverse(arr){

    var newArr = [] ;//new array to store de values in reverse order

    for (var i = arr.length - 1; i > -1; i--){ //iterate over the arr given in reverse

        newArr.push(arr[i]) //method push will add the current index value into the new array
    }
        return newArr //swapping arrays
    
    }

var result = reverse(["a", "b", "c", "d", "e"]) //testing case

console.log(result)

//Write a function reverse(arr) to reverse an array, if we were given ["a", "b", "c", "d", "e"]     wWITHOUT USING METHODS AND USING THE SAME ARRAY;
function reverseTwo(arr){
    var temp = []

    for (i =0; i < arr.length;i++){

        temp[i] = arr[arr.length-i-1];
    }
    return temp
}

var result = reverseTwo(["a", "b", "c", "d", "e"]) //testing case

console.log(result)
