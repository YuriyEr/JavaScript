// задание объекта
var sample = {
    valOne: 1,
    valtwo: 3,
    valThree: 'Some value',
    method: function () {
        return (this.valThree + " = " + (this.valOne + this.valtwo));
    }
};

// способ два
var sampleTwo = new Object();
sampleTwo.someInfo = 'привет привет, пример вычесления в методе с результатом';
sampleTwo.myMethod = function () {
};

// способ три - несколько объектов
function prototypeEx(name, surname) {
    this.name = name
    return this.name + " " + surname;
}
var clientOne = prototypeEx('Igor', 'Fedotov');
var clientTwo = prototypeEx('Yuriy', 'Sidorov');

// this = safe по аналогии с ООП (обращается к корневому объекту и его свойствам)

// изменение объекта
sample.valThree = sampleTwo.someInfo;
// удаление объекта
delete clientTwo.surname;

var input = document.getElementById('objEx');
input.textContent = sample.method();

