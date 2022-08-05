//function to find if the array is palindrome (spelled the same if read foward or backwards)


function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;  //saves the value to the right that need to be compared
        if(arr[left] != arr[right]) {   //compare first and last values of array, if are different then the array is not a palindrome
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!"; //in case all are equal, the loop ends and return pal indrome
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);