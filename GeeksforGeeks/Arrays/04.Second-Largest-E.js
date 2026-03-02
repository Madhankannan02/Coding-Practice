arr = [10, 10, 10];

function SecondLargestFinder(arr) {
    let largest = 0;
    for (let i = 0; i < arr.length; i++){
        if (largest > arr[i]){
            largest = largest;
        } else {
            largest = arr[i];
        }
    }
    //return largest;
    let secondLargest = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        } else {
            continue;
        }
    }
    return (secondLargest===0) ? -1 : secondLargest;
}

console.log(SecondLargestFinder(arr));
