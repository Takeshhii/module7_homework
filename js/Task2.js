/* Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.
*/

function hasProperty (str, obj) {
    let res = false;
    // Запускаем цикл по элементам обьекта
    for (let key in obj) {
        // Делаем проверку, сравниваем значение переменной str с значением переменной key
        if (str === key) {
            res = true;
        }
    }

    return res;
}
// Создаем обьект с некоторыми свойствами
const phone = {
    memorySize: "128gb",
    OSversion: "16",
}
// Создаем обьект с прототипом
const iPhone = Object.create(phone);
// Добовляем обьекту несколько собственных свойств
iPhone.Age = "13";
iPhone.Color = "blue";

// Вызываем функцию, в которую передаем выше созданный обьект, для вывода в консоль списка собственных свойств
console.log('Свойства 1 obj')
console.log(hasProperty('Color', phone));
console.log('Свойства 2 obj');
console.log(hasProperty('Color', iPhone));