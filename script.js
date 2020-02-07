/* ----------------------------splice-----------------------------------------------*/
let arr = ['Привет', 'now', 'something', 'will be', 'delete'];
console.log('method splice \n' + arr);

arr.splice(1,2 , 'hello', 'hello'); //удаляет два элемента, начиная с первого и вместо них добавляет два хелло
console.log('method splice \n' + arr);

arr.splice(1,0 , 'how', 'are', 'you'); //если у второго параметра поставить 0, то он не будет удалять, а просто добавит новые элементы
console.log('method splice \n' + arr);
/* -----------------------------slice------------------------------------------------*/

let arr2 = ["t", "e", "s", "t"];

arr2.slice(1,2); // копирует элементы от 1 индекса до 2(не включительно)
console.log(arr2);

/* ---------------------------concat------------------------------------------------*/

let arr3 = [2,3];
console.log(arr3.concat(arr2, [6,7])); //добавляет все к массиву, конкат может принимать хоть сколько значений.

/* -----------------------forEach------------------------------------------------*/

let arr4 = [1,2,3,4,5];
arr4.forEach((item, index, array) => {
    console.log(`${item} has index:  ${index} in ${array}`);
});

/* -----------------indexOf/lastIndexOf и includes------------------------*/

let arr5 = [1, 'hi', 'sick', 45, true];
console.log(arr5.indexOf(true));
console.log(arr5.includes(45));

/* -----------------Find------------------------*/
let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let user = users.find(item => item.id == 2);
  
  console.log(user.name);

  /* -----------------Filter------------------------*/
  let users2 = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  // возвращает массив, состоящий из двух первых пользователей
  let someUsers = users2.filter(item => item.name < 3);
  
  console.log(someUsers ); // 2

/* -----------------MAP------------------------*/
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6