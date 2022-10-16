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

function ElectroDevice (description, amper, volt){
    this.description = description,
        this.amper = amper,
        this.volt = volt,
        this.enabled = false
}

ElectroDevice.prototype.getWatt = function (){
    // console.log(this.amper + ' ' + this.volt);
    let res = this.amper * this.volt;
    return res.toFixed(2)
}

//
function Lamp (description, amper, volt, type){
    this.description = description,
        this.amper = amper,
        this.volt = volt,
        this.type = type
}

Lamp.prototype = new ElectroDevice();

//
function Computer (description, amper, volt, operatingSystem){
    this.description = description,
        this.amper = amper,
        this.volt = volt,
        this.operatingSystem = operatingSystem
}

Computer.prototype = new ElectroDevice();

//
const samsungLamp = new Lamp('Светодиодная лампа фирмы Самсунг', 0.1, 12, 'LED')

const msiComputer = new Computer('От MSI', 25, 12, 'GNU/Linux')

console.log(samsungLamp.getWatt());
console.log(msiComputer.getWatt());
console.log(`Электроприбор включен? ${msiComputer.enabled}`);