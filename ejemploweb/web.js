var Person = /** @class */ (function () {
    function Person(n, a) {
        this.name = n;
        this.age = a;
    }
    return Person;
}());
var persons = [];
function addPerson() {
    if (document.getElementById("name").value != null &&
        Number(document.getElementById("age").value) != null &&
        Number(document.getElementById("age").value) > 0) {
        var n = document.getElementById("name").value;
        var a = Number(document.getElementById("age").value);
        persons.push(new Person(n, a));
        console.log("[Nombre: " + n + ", Edad: " + a + "]");
    }
}
function printPerson() {
    console.log(persons.length);
    for (var i; i < persons.length; i++) {
        console.log(i);
        document.write("<p>" + persons[i].name + "  " + persons[i].age + "</p>");
    }
}
