define(function() { return webpackJsonp([2],{

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var fileA = __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 0));
fileA.then(function (fileA) {
    console.log(fileA.bla);
});
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(user);
/* harmony default export */ __webpack_exports__["default"] = (user);


/***/ })

},[2])});;
//# sourceMappingURL=output.js.map