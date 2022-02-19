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

var prom1 = new Promise((succ, fail) => {
    succ(1);
});

prom1.then((result) => {
    console.log(result);
    return new Promise((succ, fail) => { //return new Promise() 뒤에 then을 계속 이어붙일 수 있다. 
        succ(2);
    });
}).then((result) => {
    console.log(result);
});