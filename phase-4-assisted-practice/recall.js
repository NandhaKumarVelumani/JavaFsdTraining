"strict mode";

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const person = {
  name: "Nandha",
  returnName: function () {
    return this.name;
  },
};
const person2 = {
  name: "Kumar",
  returnName: () => this.name,
};

// console.log(person.returnName());
// console.log(person2.returnName());

const useMap = () => num.map((el) => el * 3);
const useFilter = () => num.filter((el) => el >= 5);
const useReduce = () => num.reduce((el, acc) => (acc += el));
const useSome = () => num.some((el) => el > 2);
const useEvery = () => num.every((el) => el > 1);

const arrManipulation = function () {
  let firstNumEl = num.shift();
  //   console.log(firstNumEl);

  let newLen = num.unshift(1);
  //   console.log(newLen);

  let sliceArr = num.slice(0, 3);
  //   console.log(sliceArr);

  let spliceArr = num.splice(0, 1, 1, 2, 3);
  console.log(num);
};

// console.log(useMap());
// console.log(useFilter());
// console.log(useReduce());
// console.log(useSome());
// console.log(useEvery());

arrManipulation();

const person3 = JSON.stringify(person); //for deep copy
const person4 = Object.assign(person); //for shallow copy

//ES6 features
//Object destructuring
/* const personObj = {
  name: "Nandha",
  age: 22,
};

const { name, age } = personObj;
// name = "dkn"; //throws error
console.log(name); */

/* const response = {
  count: 10,
  data: [
    { firstName: "Nandha", lastName: "Kumar" },
    { firstName: "Nandha2", lastName: "Kumar2" },
  ],
};

const {
  count,
  data: [{ firstName, lastName }, { firstName2, lastName2 }],
} = response;
console.log(firstName);
console.log(firstName2); //throws undefined */

/* //Array destructuring
const [a,b,,d,[e,f]] = [1,2,3,4, [1,2]];
console.log(d);
console.log(f); */

/* //Property shorthand
const name = "nandha";
const age = 22;

let person5 = {
  name: name,
  age: age,
}; //not necessary

person5 = {
  name,
  age,
};

console.log(person5.name); */


/* //dynamic property
const varName = "Model";

const car = {
  [varName.toLowerCase()] : "Swift"
} 

console.log(car.model); */

/*
//spread operator
const fruits1 = ["apple", "orange"];
const fruits2 = ["mango"];
const moreFruits = [...fruits1, ...fruits2];

console.log(moreFruits);

//rest operator
const add = function(...numbers){
  return numbers.reduce((el, acc) => acc+=el)
}

console.log(add(1,2,3));
*/