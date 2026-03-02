arr = [1, 8, 7, 56, 90];

function largestFinder(arr) {
    let largest = 0;
    for (let i = 0; i < arr.length; i++){
        
        if (largest > arr[i]){
            largest = largest;
        } else {
            largest = arr[i];
        }
    }
    return largest;
}