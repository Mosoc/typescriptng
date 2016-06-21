class Dictionary {
    [index: number]: Person;
}
class Person {
    name: string;
    age: number;
}

function test() {

    var persons = new Dictionary();

    var ian = new Person();
    ian.name = 'ian';
    ian.age = 18
    persons[0] = ian;

    var andy = new Person();
    andy.name = 'andy';
    andy.age = 18
    persons[1] = andy;

    for (var item in persons) {
        console.log(item);
        console.log(persons[item].name);
        console.log(persons[item].age);
    }
}

test();
