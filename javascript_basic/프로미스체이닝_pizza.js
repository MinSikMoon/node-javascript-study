/*
1. 피자 주문.
2. 피자 도우 준비
3. 토핑 완료
4. 굽기 완료
5. 피자 준비 완료
*/


const step1 = () => {
    return new Promise((succ, fail) => {
        succ('1. 피자를 주문 시작');
    })
}

const step2 = (msg) => {
    console.log(msg);
    return new Promise((succ, fail) => {
        setTimeout(() => {
            succ('2. 피자 도우 준비 완료');
        }, 3000);
    })
}

const step3 = (msg) => {
    console.log(msg);
    return new Promise((succ, fail) => {
        setTimeout(() => {
            succ('3. 피자 토핑 준비 완료');
        }, 1000);
    })
}
const step4 = (msg) => {
    console.log(msg);
    return new Promise((succ, fail) => {
        setTimeout(() => {
            succ('4. 피자 굽는중');
        }, 2000);
    })
}
const step5 = (msg) => {
    console.log(msg);
    return new Promise((succ, fail) => {
        setTimeout(() => {
            succ('5. 피자가 나왔습니다.');
        }, 1000);
    })
}


step1() //1. step1 promise가 fullfilled가 되면/ succ뒤에 붙은 메시지를 줄테니, msg => step(msg) 라는 함수를 실행시켜라 
    .then(msg => step2(msg)) // step2가 fullfilled가 되면 '2.피자 도우 준비 완료' 메시지를 넘겨줄테니/ then 다음의/ msg =>step3(msg) 함수를 실행시켜라
    .then(msg => step3(msg))
    .then(msg => step4(msg))
    .then(msg => step5(msg)) // step5가 fullfilled가 되면 5.피자가 나왔습니다 라는 msg를 넘겨줄테니, then안의 console.log(msg)함수를 실행시켜라.
    .then(msg => console.log(msg));