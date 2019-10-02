class Person{
    name: string;
    age: number;

    constructor(n:string, a:number){
        this.name = n;
        this.age = a;
    }
}

let persons:Person[] = []; 

function addPerson(){
    if ((<HTMLInputElement>document.getElementById("name")).value!=null&&
    Number((<HTMLInputElement>document.getElementById("age")).value)!=null&&
    Number((<HTMLInputElement>document.getElementById("age")).value)>0){
       let n = (<HTMLInputElement>document.getElementById("name")).value;
       let a = Number((<HTMLInputElement>document.getElementById("age")).value);
       persons.push(new Person(n,a));
       console.log("[Nombre: "+n+", Edad: "+a+"]");
    }
}

function printPerson(){
    console.log(persons.length);
    for (var i; i<persons.length; i++){
        console.log(i);
        document.write("<p>"+persons[i].name+"  "+persons[i].age+"</p>");
    }
    
    
}

