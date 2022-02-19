//1,3,2 출력
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 1000);
// console.log(3);

//순차 실행 기본 패턴 : 구멍뚫기 : call back 지옥 // 이걸 해결하려고 나온게 promise
function firstFunc(secondthing) {
    console.log(1);
    secondthing();
}
function secondFunc() {
    console.log(2);
}
firstFunc(secondFunc);
