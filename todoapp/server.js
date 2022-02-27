const express = require('express'); //라이브러리를 쓰겠다. 
const app = express(); //express 라이브러리에서 express 객체를 만들어 주세요.

app.listen(8080, function () {
    //1. 서버가 열린 후 실행할 코드 
    console.log('listening on 8080');
});

//======================
app.get('/', function (req, res) {
    res.send('반갑습니다.');
})