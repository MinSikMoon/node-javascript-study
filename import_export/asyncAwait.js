// 1. 
var prms = new Promise(function (succ, fail) {
    setTimeout(() => {
        //succ();
        fail();
    }, 1000);  //1초 뒤에 succ()를 리턴
});

prms.then(function () {
    console.log('성공 ㅎㅎㅎ');
}).catch(function () {
    console.log('fail...');
})

//async를 쓰면 new Promise()를 대체할 수 있다. 
//async는 function에 쓸수 있다.
async function hardThing() { //async를 뱉음으로 써 hardThing은 성공과 실패를 뱉는 판별기가 된다. 
    return 1 + 1; //성공후 2를 뱉어준다. 
}

hardThing().then(function (elem) {
    console.log('async 성공', elem);
})

//2. async에 성공 쓸수 있는가?
async function func2(succ, fail){
    fail();
}

// func2.then(function(){ //async에 then 쓰니까 에러남
//     console.log('hihi');
// }).catch(function(){
//     console.log('fail');
// })

