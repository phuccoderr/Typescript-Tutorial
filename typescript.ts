// Number type
let so: number; //int, long, float, double => number

// String type
let chuoi: string;

// Boolean type
let tf: boolean = Boolean(""); //check thieu kieu falsy va truelsy

// Object
// - khong nen khai bao
let person: object;
// - nen khai bao
let personOK: {
  name: string;
  age: number;
} = {
  name: "phuc",
  age: 18,
};

// Array Type
let mangChuoi: string[] = [];
let mangChuoiVaNumber: (string | number)[] = [];
//gioi han array || Tuple Type
let mangNameAndAge: [string, number] = ["Phuc", 18];
let mangNameAndAge2: [boolean, string, number];
mangNameAndAge2 = [true, "phuc", 19];
let mangNameAndAge3: [boolean, string, number?];
mangNameAndAge3 = [true, "Phuc"];

// Enum Type
enum API_STATUS {
  PENDING = "PENDING",
  FULLFIELD = "FULLFIELD",
  REJECTD = "REJECTD", //PROMISE
}
let a = API_STATUS.PENDING;

// Any Type
let anyType: any;
anyType = "phuc";

// Function Void Type
const handleLogs = (message: string): void => {
  console.log("message", message);
};
// Function Return Type
const sum = (a: number, b: number): number => {
  return a + b;
};
// Function Never Type || không trả ra gì hết kể cả null hay undefined
const handleException = (error: string): never => {
  throw Error(error);
};

// Union Type cho a và b
function addNumberOrString(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  throw new Error("Parameters must be numbers or strings");
}

// Aliases Type
type ericType = number | string;
function addNumberOrString1(a: ericType, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  throw new Error("Parameters must be numbers or strings");
}

// Rest Parameters
function multiply(n: number, ...rest: number[]): number[] {
  return rest.map((item) => n * item);
}

//OverLoading
function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b: any) {
  return a + b;
}
// console.log("Tuoi = ", addNew(10, 10), " Name = ", addNew("Hoang", "Phuc"));

// Abstract class
abstract class walk {
  abstract walk(): string;
}

// Class
class Parent extends walk {
  protected name: string = "cha";

  constructor(name: string) {
    super();
    this.name = name;
  }

  static callName(): string {
    return this.name;
  }

  do(): string {
    return "do something in parent";
  }

  walk(): string {
    return "Cha đang đi!!";
  }
}
class Student extends Parent {
  age: number;
  public info: string = "info";
  private _token: string = "token";
  readonly birthDate: Date; // like constance

  constructor(name: string, age: number, birthDay: Date) {
    super("cha");
    this.name = name;
    this.age = age;
    this.birthDate = birthDay;
  }

  set token(token: string) {
    this._token = token;
  }
  get token(): string {
    return this._token;
  }

  //Override
  do(): string {
    return `${super.do()} from do something in student`;
  }

  static noi() {
    return "nothing";
  }

  walk(): string {
    return "con đang đi!!!";
  }
  toString() {
    console.log("name = ", this.name);
    console.log("age = ", this.age);
    console.log("birthDate = ", this.birthDate);
    console.log("token = ", this._token);
    console.log("parent", Parent.callName());
  }
}

// const phi = new Student("phuc", 20, new Date(2003, 4, 16));
// phi.token = "chuoimahoa";
// phi.toString();
// console.log("phi: ", phi.do());
// console.log("phi: ", Student.noi());
// console.log("phi walk: ", phi.walk());

// Interface
interface Human {
  firstName: string;
  lastName: string;
}

const phi: Human = {
  firstName: "Phi",
  lastName: "Hoang",
};

console.log("Human: ", phi);
