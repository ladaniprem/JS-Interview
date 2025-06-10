// ep :-04 namaste js 

/*--> Code Flow in terms of Execution Context
The Global Execution Context (GEC) is created 
(the big box with Memory and Code subparts). 

--> Also GEC is pushed into Call Stack Call Stack : GEC
In first phase of GEC (memory phase), variable x:undefined and
a and b have their entire function code as value
initialized In second phase of GEC (execution phase), when the function 
is called, a new local Execution Context is created.

--> After x = 1 assigned to GEC x, a() is called.

--> So local EC for a is made inside code part of GEC.

--> Call Stack: [GEC, a()] For local EC, a totally different x variable
assigned undefined(x inside a()) in phase 1 , and in phase 2 
it is assigned 10 and printed in console log.

--> After printing, no more commands to run, so a() local EC is removed
from both GEC and from Call stack

--> Call Stack: GEC
--> Cursor goes back to b() function call. Same steps repeat.
--> Call Stack :[GEC, b()] -> GEC (after printing yet another
--> totally different x value as 100 in console log)
--> Finally GEC is deleted and also removed from call stack. 
--> Program ends.

// program 

reference*/
/*var x =10;
a();
b();
console.log(x);

function a(){
    var x = 20;
    console.log(x);
}
function b(){
    var x = 30;
     console.log(x);
}*/

/*output of ep 04 only for two variable call
PS C:\Users\king> node "c:\Prem\coding\code with javascript\js ep3.js"
20
30

output for the three variable 
PS C:\Users\king> node "c:\Prem\coding\code with javascript\js ep3.js"
20
30
10*/