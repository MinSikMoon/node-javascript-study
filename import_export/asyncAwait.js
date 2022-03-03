var prms = new Promise(function(succ, fail){
    setTimeout(() => {
        //succ();
        fail();
    }, 1000);  //1초 뒤에 succ()를 리턴
});

prms.then(function(){
    console.log('성공 ㅎㅎㅎ');
}).catch(function(){
    console.log('fail...');
})