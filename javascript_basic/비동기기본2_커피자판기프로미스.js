/*  
[promise 패턴]
- 정의부 / 활용부 2개를 만든다. 클래스 정의 및 객체의 활용과 같다. Promise 이렇게 보니 그냥 클래스네
- 정의부에는 아래 3개를 정의한다.
 - 1) 조건 - 2) 조건 성공/실패시 특정함수에 넘겨줄 result값을 정의한다. 
 - 1와 2는 선후 관계이다. 
*/

//1. promise 정의부
const order = new Promise((res, rej) => {
    let coffee = prompt('어떤 커피를 주문하시겠습니까?', '아메리카노');
    if (coffee != null && coffee != "") { //coffee 변수 공백체크
        document.querySelector('#start').textContent = `${coffee} 주문접수 완료`;
        setTimeout(() => {
            res(coffee); //정상주문이라면 무얼할지 1초뒤 실행 //res가 실행되면 상태가 fullfilled가 된다.  
        }, 1000);
    } else {
        rej('coffee 주문이 제대로 들어가지 않았습니다.'); //비정상 주문이라면 : 저런 text를 넘겨준다. //rej가 실행되면 상태가 rejected가 된다.
    }
});


//1.1 promise에 장착할 성공함수 정의
const successFunc = function (msg) {
    document.querySelector('#success').textContent = `${msg}가 나왔습니당`;
}
//1.2. promise에 장착할 실패함수 정의
const failFunc = function (msg) {
    document.querySelector('#fail').textContent = msg;
}

//2. promise 활용부 : promise를 켜고 성공/실패 함수를 장착하자
order
    .then(successFunc)
    .catch(failFunc);