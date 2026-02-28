// Задание 1.
// Дан массив пользователей:
// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
//]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
  if (users.length === 0) return 0;

  let totalAge = 0;
  for (let i = 0; i < users.length; i++) {
    totalAge += users[i].age;
  }

  return totalAge / users.length;
}

console.log("Средний возраст пользователей:", getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

function getAllAdmins(users) {
  const admins = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === true) {
      admins.push(users[i]);
    }
  }

  return admins;
}
console.log("Администраторы:", getAllAdmins(users));
// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n) {
  if (n === undefined) {
    return [arr[0]];
  }

  if (n === 0) {
    return [];
  }

  if (n > arr.length) {
    console.error(
      `Ошибка: запрошено ${n} элементов, но в массиве только ${arr.length}`,
    );
    n = arr.length;
  }

  return arr.slice(0, n);
}
const numbers = [1, 2, 3, 4, 5];

console.log(first(numbers, 3));
console.log(first(numbers, 5));
console.log(first(numbers, 10));
