# Number Type
~~~
let so: number; //int, long, float, double => number
~~~
# String Type
~~~
let chuoi: string;
~~~
# Boolean Type
~~~
let tf: boolean = Boolean(""); //check thieu kieu falsy va truelsy
~~~
# Object
~~~
let person: object;
let personOK: { name: string; age: number; } = {
  name: "phuc",
  age: 18,
};
~~~
# Array Type
~~~
let mangChuoi: string[] = [];
let mangChuoiVaNumber: (string | number)[] = [];
let mangNameAndAge3: [boolean, string, number?];
~~~
# Enum Type
~~~
enum API_STATUS {
  PENDING = "PENDING",
  FULLFIELD = "FULLFIELD",
  REJECTD = "REJECTD", //PROMISE
}
~~~
# Any Type
~~~
let anyType: any;
~~~
# Function
- void
~~~
const handleLogs = (message: string): void => {
  console.log("message", message);
};
~~~
- Return
~~~
const sum = (a: number, b: number): number => {
  return a + b;
};
~~~
- Never
~~~
const handleException = (error: string): never => {
  throw Error(error);
};
~~~
# Aliases Type
~~~
type ericType = number | string;
~~~
# Rest Parameters
~~~
function multiply(n: number, ...rest: number[]): number[] {
  return rest.map((item) => n * item);
}
console.log(multiply(1,10,20)); // output [10,20]
~~~
# Interface
~~~
interface Person {
  firstName: string;
  lastName: string;
}
~~~
