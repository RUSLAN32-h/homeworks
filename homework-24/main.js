// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

let person = {
  name: "Ruslan",
  age: 19,
  isProgrammer: true,
};
console.log("Имя:", person.name);
console.log("Возраст:", person.age);
console.log("Программист:", person.isProgrammer);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ name: "Ruslan" }));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

let task = {
  title: "Изучить JavaScript",
  description: "Пройди все уроки по объектам",
  isCompleted: false,
};

function cloneAndModify(object, modifications) {
  return { ...object, ...modifications };
}

let updatedTask = cloneAndModify(task, {
  isCompleted: true,
  priority: "высокий",
});

for (let key in updatedTask) {
  console.log(`${key}: ${updatedTask[key]}`);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const callAllMethods = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      console.log(`Вызываем метод: ${key}`);
      obj[key]();
    }
  }
};

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  method3() {
    console.log("Метод 3 вызван");
  },
  property: "Это не метод",
};

callAllMethods(myObject);
