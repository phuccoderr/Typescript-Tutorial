var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Number type
var so; //int, long, float, double => number
// String type
var chuoi;
// Boolean type
var tf = Boolean(""); //check thieu kieu falsy va truelsy
// Object
// - khong nen khai bao
var person;
// - nen khai bao
var personOK = {
    name: "phuc",
    age: 18,
};
// Array Type
var mangChuoi = [];
var mangChuoiVaNumber = [];
//gioi han array || Tuple Type
var mangNameAndAge = ["Phuc", 18];
var mangNameAndAge2;
mangNameAndAge2 = [true, "phuc", 19];
var mangNameAndAge3;
mangNameAndAge3 = [true, "Phuc"];
// Enum Type
var API_STATUS;
(function (API_STATUS) {
    API_STATUS["PENDING"] = "PENDING";
    API_STATUS["FULLFIELD"] = "FULLFIELD";
    API_STATUS["REJECTD"] = "REJECTD";
})(API_STATUS || (API_STATUS = {}));
var a = API_STATUS.PENDING;
// Any Type
var anyType;
anyType = "phuc";
// Function Void Type
var handleLogs = function (message) {
    console.log("message", message);
};
// Function Return Type
var sum = function (a, b) {
    return a + b;
};
// Function Never Type || không trả ra gì hết kể cả null hay undefined
var handleException = function (error) {
    throw Error(error);
};
// Union Type cho a và b
function addNumberOrString(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Parameters must be numbers or strings");
}
function addNumberOrString1(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Parameters must be numbers or strings");
}
// Rest Parameters
function multiply(n) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return rest.map(function (item) { return n * item; });
}
function addNew(a, b) {
    return a + b;
}
// console.log("Tuoi = ", addNew(10, 10), " Name = ", addNew("Hoang", "Phuc"));
// Abstract class
var walk = /** @class */ (function () {
    function walk() {
    }
    return walk;
}());
// Class
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    function Parent(name) {
        var _this = _super.call(this) || this;
        _this.name = "cha";
        _this.name = name;
        return _this;
    }
    Parent.callName = function () {
        return this.name;
    };
    Parent.prototype.do = function () {
        return "do something in parent";
    };
    Parent.prototype.walk = function () {
        return "Cha đang đi!!";
    };
    return Parent;
}(walk));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, birthDay) {
        var _this = _super.call(this, "cha") || this;
        _this.info = "info";
        _this._token = "token";
        _this.name = name;
        _this.age = age;
        _this.birthDate = birthDay;
        return _this;
    }
    Object.defineProperty(Student.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (token) {
            this._token = token;
        },
        enumerable: false,
        configurable: true
    });
    //Override
    Student.prototype.do = function () {
        return "".concat(_super.prototype.do.call(this), " from do something in student");
    };
    Student.noi = function () {
        return "nothing";
    };
    Student.prototype.walk = function () {
        return "con đang đi!!!";
    };
    Student.prototype.toString = function () {
        console.log("name = ", this.name);
        console.log("age = ", this.age);
        console.log("birthDate = ", this.birthDate);
        console.log("token = ", this._token);
        console.log("parent", Parent.callName());
    };
    return Student;
}(Parent));
var phi = {
    firstName: "Phi",
    lastName: "Hoang",
};
console.log("Human: ", phi);
