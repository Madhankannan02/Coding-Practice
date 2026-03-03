/* Search an element in an array
You are given an array A of size N and an element X. Your task is to find whether the array A contains the element X or not. */

let arr = [7,3,5,2,1];
let search = [5,3];

let result = "";

for (let i=0; i<search.length; i++){
    //console.log(search[i]);
    for (let j=0; j<arr.length; j++){
        //console.log(arr[j]);
        if(arr[j] === search[i]){
            continue;
        }else{
            result = "NO";
            break;
        }
    }
    result = "YES";
}

console.log(result);