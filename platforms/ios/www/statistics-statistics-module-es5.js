(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statistics-statistics-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/statistics/statistics.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/statistics/statistics.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>statistics</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/statistics/statistics.module.ts":
/*!*************************************************!*\
  !*** ./src/app/statistics/statistics.module.ts ***!
  \*************************************************/
/*! exports provided: StatisticsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPageModule", function() { return StatisticsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _statistics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statistics.page */ "./src/app/statistics/statistics.page.ts");







var routes = [
    {
        path: '',
        component: _statistics_page__WEBPACK_IMPORTED_MODULE_6__["StatisticsPage"]
    }
];
var StatisticsPageModule = /** @class */ (function () {
    function StatisticsPageModule() {
    }
    StatisticsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_statistics_page__WEBPACK_IMPORTED_MODULE_6__["StatisticsPage"]]
        })
    ], StatisticsPageModule);
    return StatisticsPageModule;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.page.scss":
/*!*************************************************!*\
  !*** ./src/app/statistics/statistics.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/statistics/statistics.page.ts":
/*!***********************************************!*\
  !*** ./src/app/statistics/statistics.page.ts ***!
  \***********************************************/
/*! exports provided: StatisticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPage", function() { return StatisticsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatisticsPage = /** @class */ (function () {
    function StatisticsPage() {
    }
    StatisticsPage.prototype.ngOnInit = function () {
    };
    StatisticsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! raw-loader!./statistics.page.html */ "./node_modules/raw-loader/index.js!./src/app/statistics/statistics.page.html"),
            styles: [__webpack_require__(/*! ./statistics.page.scss */ "./src/app/statistics/statistics.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatisticsPage);
    return StatisticsPage;
}());



/***/ })

}]);
//# sourceMappingURL=statistics-statistics-module-es5.js.map