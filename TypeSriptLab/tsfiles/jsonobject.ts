class Employee {
    no:string;
    name: string;
}

//var jsonObject = { "no": "0001", "name": "ian" };
//var x = (<Employee>this.jsonObject);
//alert(x.no);

//var jsonstr = '{"no":"0001","name":"ian"}';
//var x= <Employee>JSON.parse(jsonstr);
//alert(x.no);

var jsonObjects = [
    { "no": "001", "name": "ian" },
    { "no": "002", "name": "andy" },
    { "no": "003", "name": "steve" }
];

for (var item of jsonObjects)
{
    var x = (<Employee>item);
    console.log(x.no);
}

