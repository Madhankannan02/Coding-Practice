arr = [10, 8, 30];
x = 5;

const indexs = arr.includes(x);

function finder(arr, x){
    if (indexs) {
        return arr.indexOf(x);
    }else {
        return -1;
    }
}

console.log(finder(arr, x));