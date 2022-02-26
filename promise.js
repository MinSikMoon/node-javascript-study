//1. 일단 promise 하나 만든다. 
var promThing = new Promise(function (성공, 실패) {
    //성공(); //이 함수 불리면 성공판정
    //실패();
    var 어려운연산 = 1 + 1;
    성공(어려운연산);
});
//2. promise는 성공/실패 판정 기계다. 
// 성공 : then, 실패 : catch, 모두 : finally

//2. promThing에 then이라는 걸로 만든다.
promThing.then(function (result) {
    //promThing이 성공할 경우 실행할 코드
    console.log('wow 성공이군요', result);
}).catch(function () {
    console.log('ㅠㅜ 실패');
})


//순차적으로 실행시키기 2번째

// 성공, 실패 분기 함수
var test = function (num) {
    return new Promise((succ, fail) => {
        succ(num);
    });
}

var prom1 = test(1);

// prom1.then((result) => {
//     console.log(result);
//     test(2);
// }).then((result2) => {
//     console.log(result2); //이게 왜 undefined일까
// });

test(1).then((result) => {
    console.log(result);
    return new Promise(function (succ, fail) {
        succ(2);
    }); //이렇게 하면 잘됨
}).then((result) => {
    console.log(result);
});