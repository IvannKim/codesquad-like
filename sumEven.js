//1에서 100까지 짝수의 합을 구해 봅시다.
function getArrayNum() {
    let array = [];
    for (i = 1; i <= 100; i++) if (i % 2 == 0) array.push(i)
    return array
}

const array = getArrayNum()

let arraySum = array.reduce((arr, crr) => arr + crr);

console.log(arraySum)