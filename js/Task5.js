/* Переписать консольное приложение из предыдущего юнита на классы.*/

/* Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео.
Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку.
Посчитайте потребляемую мощность (передайте аргумент).

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.

План:

    Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
    Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
    У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
    Создайте экземпляры каждого прибора.
    Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)
*/

class ElectroDevice {
    constructor (description, amper, volt){
        this.description = description;
        this.amper = amper;
        this.volt = volt;
        this.enabled = false;
    }

    getWatt(){
        let res = this.amper * this.volt;
        return res.toFixed(2)
    }
}

//
class Lamp extends ElectroDevice {
    constructor (description, amper, volt, type, colorLight){
        super(description, amper, volt);
        this.type = type;
        this.colorLight = colorLight;
    }
}

//
class Computer extends ElectroDevice {
    constructor (description, amper, volt, operatingSystem){
        super(description, amper, volt);
        this.operatingSystem = operatingSystem
    }
}

//
const samsungLamp = new Lamp('Светодиодная лампа фирмы Самсунг', 0.1, 12, 'LED', 'yellow')

const msiComputer = new Computer('От MSI', 25, 12, 'GNU/Linux')

console.log(`Ватт - ${samsungLamp.getWatt()}`);
console.log(`Текст - ${samsungLamp.description} Амперы - ${samsungLamp.amper} Тип ${samsungLamp.type}`);
console.log(`Ватт - ${msiComputer.getWatt()}`);
console.log(`Текст - ${msiComputer.description} Амперы - ${msiComputer.amper} ОС- ${msiComputer.operatingSystem}`);
