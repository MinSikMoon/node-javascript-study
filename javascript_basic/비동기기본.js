function displayA() {
    console.log(`displayA`);
}

function displayB() {
    console.log(`displayB`);
}

function delayedDisplayB() {
    setTimeout(() => {
        console.log(`delayedDisplayB`);
    }, 1000);
}

function displayC() {
    console.log(`displayC`);
}

function callBackDisplayB(callbackFunc) {
    setTimeout(() => {
        console.log(`delayedDisplayB`);
        callbackFunc();
    }, 1000);
}

//===================[비동기학습]=====================
console.log(`==========자바스크립트 비동기 현상1=============`)
// displayA()
// displayB()
// displayC()


console.log(`==========자바스크립트 비동기 현상2=============`)
// displayA()
// delayedDisplayB()
// displayC()

//자바스크립트의 비동기 함수의 동기화 전략은? 총3개 : 콜백 / 프로미스 / 어웨이트

//---------------------> 비동기 방식의 동기화 전략 1 : 콜백
// (콜백) 목적 : 함수 간 실행순서를 고정하기 위해서, 함수의 인자로 선행, 또는 후행 함수를 받는 방식
console.log(`==========js 비동기 처리 방식 1 : 콜백=============`)
// displayA()
// callBackDisplayB(displayC)


// (콜백 : 단점) 콜백 지옥
// (콜백 예제) 커피주문기
//1.(커피주문 예제) a 커피를 주문하면 2초뒤 준비 완료 뜨게 하기
function order(nameOfCoffee, callbackFunc) {
    console.log(`${nameOfCoffee}을 주문하셨습니다.`)
    setTimeout(() => {
        callbackFunc(nameOfCoffee)
    }, 2000);
}

function alertCoffeeReady(nameOfCoffee) {
    console.log(`${nameOfCoffee}가 준비되었습니다.`)
}

//order(`고구마라떼`, alertCoffeeReady);

//---------------------> 비동기 방식의 동기화 전략 2 : 프로미스 promise
// (배경 및 의의) : 콜백의 과도한 사용 시 유지보수가 어려운 문제 해결을 위해 탄생, 어떤 조건함수가 성공시 실행할 콜백함수와, 실패시 실행할 콜백 함수를 분기
// (기본형) : new Promise(resolve, reject) / new Promise (ifSuccess, ifFail)

// (promise 예제1) 피자 주문
let doYouLikePizza = false;

// promise 정의부
const pizzaPro = new Promise((ifSuccess, ifFail) => {   //특정 조건에 따라 실행되어야 될 함수를 정의하는 정의부이다. 
    if (doYouLikePizza) {
        ifSuccess('피자를 주문합시다.')
    } else {
        ifFail('피자를 주문하지 않겠습니다. ')
    }
});

// promise 사용부 // 정의부에서 넘겨주는 파라미터를 result로 받아서 활용한다. 
pizzaPro
    .then(result => console.log(result))
    .catch(result => console.log(result))
    .finally(() => console.log('예제 종료')); //함수형태가 아닌 console 바로 넣으면 마지막에 실행안되는 현상 왜일까?
// (promise 예제 2) 커피주문기 promise로 만들어 보기 
const coffeePro = new Promise((resolve, reject) => {

});

