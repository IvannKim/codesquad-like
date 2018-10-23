//문자열 계산기
// 사용자가 입력한 값에 따라 사칙연산을 계산할 수 있는 계산기를 구현한다.
// 예를 들어 "2 + 3 * 4 / 2"와 같은 순서로 값을 입력하는 경우 실행 결과 값인 10을 출력해야 한다.
// 사용자가 입력할 수 있는 값의 수는 제한되어 있지 않다.
// 나눗셈의 결과 값은 정수로 값이 떨어지지 않더라도 정수 값만 사용하는 것으로 한다.

function getExpression() {
    let expression = prompt("식을 적어보세요");
    return expression;
}

function calculateFirstExpression(expression) {
    let result;
    if (expression.includes("+")) {
        let [first, second] = expression.split("+")
        result = first * 1 + second * 1
    }
    if (expression.includes("-")) {
        let [first, second] = expression.split("-")
        result = first * 1 - second * 1
    }
    if (expression.includes("*")) {
        let [first, second] = expression.split("*")
        result = first * 1 * second * 1
    }
    if (expression.includes("/")) {
        let [first, second] = expression.split("/")
        result = first * 1 / second * 1
    }
    return result;
}
function getSecondExpression(result) {
    let sndInputStr = prompt(`${result}에 이어서 연산해 임마`);
    return sndInputStr;
}
function calculateSecondExpression(result) {
    let sndResult = result;
    while (true) {
        let sndInputStr = getSecondExpression(sndResult);
        if (sndInputStr.includes("+")) {
            let [, number] = sndInputStr.split("+")
            sndResult += number * 1
        }
        if (sndInputStr.includes("-")) {
            let [, number] = sndInputStr.split("-")
            sndResult -= number * 1
        }
        if (sndInputStr.includes("*")) {
            let [, number] = sndInputStr.split("*")
            sndResult *= number * 1
        }
        if (sndInputStr.includes("/")) {
            let [, number] = sndInputStr.split("/")
            sndResult /= number * 1
        }
        if (sndInputStr.includes("q")) {
            printResult(sndResult)
            break;
        }
    }
    return sndResult;
}
function printResult(sndResult) {
    alert(`이게 결과야 임마 ${sndResult}`)
}

function main() {
    let expression = getExpression();
    let result = calculateFirstExpression(expression);
    calculateSecondExpression(result);
}
main();
