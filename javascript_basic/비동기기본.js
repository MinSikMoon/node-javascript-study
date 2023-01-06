function displayA() {
    console.log('displayA');
}
function displayB() {
    console.log('displayB');
}
function delayedDisplayB() {
    setTimeout(() => {
        console.log('delayedDisplayB');
    }, 1000);
}

function displayC() {
    console.log('displayC');
}

function callBackDisplayB(callbackFunc) {
    setTimeout(() => {
        console.log('delayedDisplayB');
        callbackFunc();
    }, 1000);
}

// console.log('==========test1=============')
// displayA()
// displayB()
// displayC()


// console.log('==========test2=============')
// displayA()
// delayedDisplayB()
// displayC()


console.log('==========js 비동기 처리 방식 1 : 콜백=============')
displayA()
callBackDisplayB(displayC)