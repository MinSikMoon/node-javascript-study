/*
1. displayHello
*/
function displayHello() {
    console.log('hello');
}

async function displayHelloAsync() { //async를 붙이는 순간 promise를 return하게 된다. 
    console.log('hello');
}

/*
2. promise 체이닝으로 예제 만들어보기
*/
function whatsYourFavorite() {
    let fav = 'javascript';
    return new Promise((res, rej) => {
        res(fav);
    })
}
async function whatsYourFavoriteAsync() {
    let fav = 'javascript';
    return fav;
}

function displaySubject(subject) {
    return new Promise((res, rej) => {
        res(`hello, ${subject}`);
    });
}

async function displaySubjectAsync(subject) {
    return `hello, ${subject}`;
}

whatsYourFavorite()
    .then((result) => displaySubject(result))
    .then((result) => { console.log(result) });

whatsYourFavorite()
    .then(displaySubject)
    .then(console.log);

whatsYourFavoriteAsync()
    .then(displaySubjectAsync)
    .then(console.log);


/*
2. await
- 프로미스 체이닝이 너무 길어지면 소스 이해가 어려워지기 시작한다. 
- await는 이전 프로미스 결과를 받아서 다음 프로미스로 연결시키는 과정의 가시성을 개선했다. 
- await는 async함수에서만 사용할 수 있다. 
- 즉 async는 2가지로 쓰일 수 있는데
--1) promise 반환
--2) await 예약어와 같이 써서 비동기방식 처리 제어에 쓰인다. 
- await는 잠깐 기다리라는 뜻으로
- async 함수에서만 쓰일 수 있어 async init() 함수를 따로 만들어 그 안에서 await로 프로미스 실행 순서를 지정해주면 된다. 
*/

async function step1(subject) {
    return subject;
}

async function step2(subject) {
    return `hello async, ${subject}`;
}

async function init() {
    const response = await step1('python');
    const result = await step2(response); //await가 없었다면 그냥 
    console.log(result);
}

init(); // async는 그냥 비동기 처럼 코드를 짜고 싶을때 쓰면 되는구만 ㅎㅎ, 다만 reject를 고려해야될때는 promise로 가면 되겠군.