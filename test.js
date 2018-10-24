let arr = [1, 1];

function pascal(arr) {
    arr = [
        arr[0],
        arr[arr.length - 1]
    ]
    for (let i = 0; i < arr.length - 1; i++) {
        arr.splice(arr.length - 1, 0, arr[i] + arr[i + 1])
    }

}
pascal(arr)