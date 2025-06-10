/*
ep :06 undefined vs not defined

--> In first phase (memory allocation) JS assigns each variable 
a placeholder called undefined.

--> undefined is when memory is allocated for the variable, but no value is assigned yet.

--> If an object/variable is not even declared/found in memory allocation phase, and tried to access it then it is Not
defined Not Defined !== Undefined When variable is declared but not assigned value, its current value is undefined. 
But when the variable itself is not declared but called in code, then it is not defined JS is a loosely typed / weakly typed language. 

-->  It doesn't attach variables to any datatype. 

--> We can say var a = 5,and then change the value to boolean a = true or string a = 'hello' later on.

--> Never assign undefined to a variable manually. Let it happen on it's own accord
*/

/*
--> program and output 

console.log(a);//undefinde the value is not empty value that takes up time being 
var a =7;//revered memory when debug the value of put in the debuger a that show it the undefined 
console.log(x);//not defined because I am not defined the x values
console.log(a);//run it properly and print the value it 7.

var a;// js is the wekely type language 
console.log(a);//undefined 
a=10;
console.log(a);//10
a = "hello world ";
console.log(a);//hello world 

a = undefined; //undefined is variable which is kept inside of the placeholder 
console.log(a);//don't do mistake 
*/