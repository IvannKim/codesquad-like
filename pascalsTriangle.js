// 파스칼의 삼각형

// let inputNumbersOfArray = prompt('출력하고싶은 배열의 갯수를 입력하세요.');
let inputNumbersOfArray = 4;

function pascalsTriangle(number) {
    let pascalArray = [];

    //n번째 배열에 n개의 길이를 가진 배열을 만드는 반복문
    for (i = 0; i < number; i++) {

        for (j = 0; j < number + 1; j++) {
            if (j === 0) {
                pascalArray.push(1);
                console.log(pascalArray)
            } else {
                // pascalArray.push(pascalArray[])

            }
        }
    }
}

pascalsTriangle(inputNumbersOfArray)