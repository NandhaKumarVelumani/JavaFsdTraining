function returnAdd(a, b){
    const add = function(){
        return a+b;
    }
    return add;
}

const addFunc = returnAdd(1,2);
console.log(addFunc());