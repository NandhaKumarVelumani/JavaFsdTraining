const ans = (function add(a, b){
    return a+b;
})(1,2);

console.log(ans);

//ways of creating function expressions
const func1 = function(){
    return "hello";
}

!function func2(){
    return "";
}

function func3(){
    return "helloworld";
}

const stm = `${func1()} hi`;
const stm2 = `${func3()} hi`;
console.log(stm2);