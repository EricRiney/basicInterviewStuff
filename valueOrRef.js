// Does JavaScript pass parameters by value or by reference?

// Answer: Primitive type (string, number, etc.) are passed by value 
// and objects are passed by reference. If you change a property of the passed object, 
// the change will be affected. However, you assign a new object to the passed object, 
// the changes will not be reflected.

var num = 10,
    name = "Addy Osmani",
    obj1 = {
      value: "first value"
    },
    obj2 = {
     value: "second value"
    },
    obj3 = obj2;
 
function change(num, name, obj1, obj2) {
    num = num * 10;
    name = "Paul Irish";
    obj1 = obj2;
    obj2.value = "new value";
}
 
change(num, name, obj1, obj2);
 
console.log(num); // 10
console.log(name);// "Addy Osmani"
console.log(obj1.value);//"first value"
console.log(obj2.valuee);//"new value"
console.log(obj3.valuee);//"new value"  