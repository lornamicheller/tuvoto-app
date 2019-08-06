(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statistics-statistics-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/statistics/statistics.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/statistics/statistics.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-logo\">\n  <!-- <ion-buttons class=\"arrow-position\">\n    <ion-back-button class=\"arrow-back\" defaultHref=\"/vote\" text=\"\"></ion-back-button>\n  </ion-buttons> -->\n  <ion-img src=\"assets/logo small.png\" class=\"logo\"></ion-img>\n  <h1 class=\"news-title\">ENCUESTAS</h1>\n</div>\n\n<ion-content class=\"grey-bg\">\n\n  <ion-card class=\"wrapper\">\n\n    <ion-card class=\"card-box\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">\n            <img class=\"avatar\" src=\"assets/lugaro.jpg\">\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-card class=\"color-bar\"></ion-card>\n          </ion-col>\n          <ion-col class=\"result\" size=\"2\">\n            90%\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <h1 class=\"title\">Candidatura a la Gobernación</h1>\n    </ion-card>\n\n    <ion-card class=\"card-box\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">\n            <img class=\"avatar\" src=\"assets/bernier.jpg\">\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-card class=\"color-bar2\"></ion-card>\n          </ion-col>\n          <ion-col class=\"result\" size=\"2\">\n            50%\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <h1 class=\"title\">Candidatura a la Gobernación</h1>\n    </ion-card>\n\n    <ion-card class=\"card-box\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">\n            <img class=\"avatar\" src=\"assets/cidre.jpg\">\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-card class=\"color-bar2\"></ion-card>\n          </ion-col>\n          <ion-col class=\"result\" size=\"2\">\n            50%\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <h1 class=\"title\">Candidatura a la Gobernación</h1>\n    </ion-card>\n\n    <ion-card class=\"card-box\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"2\">\n            <img class=\"avatar\" src=\"assets/manuel.jpg\">\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-card class=\"color-bar2\"></ion-card>\n          </ion-col>\n          <ion-col class=\"result\" size=\"2\">\n            50%\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <h1 class=\"title\">Candidatura a la Gobernación</h1>\n    </ion-card>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-tab-bar slot=\"bottom\"\n  style=\"padding-top: 10px; padding-bottom: 20px; --background: #333333; border-top: 1px solid rgba(128, 128, 128, 0.452)\">\n  <ion-tab-button (click)=\"openPage()\">\n    <img src=\"assets/Noticias.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: white; font-family: 'Poppins', sans-serif;\">Noticias</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button (click)=\"openPage2()\">\n    <img src=\"assets/tuvoto.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: white; font-family: 'Poppins', sans-serif;\">Tu Voto</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"profile\" (click)=\"openStatistics()\">\n    <img src=\"assets/estadistica yellow.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: #FFDF02; font-family: 'Poppins', sans-serif;\">Estadísticas</ion-label>\n  </ion-tab-button>\n\n\n  <ion-tab-button (click)=\"openOthers()\">\n    <img src=\"assets/perfil.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: white; font-family: 'Poppins', sans-serif;\">Perfil</ion-label>\n  </ion-tab-button>\n\n\n\n</ion-tab-bar>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _statistics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./statistics.page */ "./src/app/statistics/statistics.page.ts");







const routes = [
    {
        path: '',
        component: _statistics_page__WEBPACK_IMPORTED_MODULE_6__["StatisticsPage"]
    }
];
let StatisticsPageModule = class StatisticsPageModule {
};
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



/***/ }),

/***/ "./src/app/statistics/statistics.page.scss":
/*!*************************************************!*\
  !*** ./src/app/statistics/statistics.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grey-bg {\n  --background: #333333;\n}\n\n.logo {\n  position: absolute;\n  top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  width: 150px;\n  height: 90px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.sticky-logo {\n  width: 100%;\n  height: 160px;\n  background: #333333;\n}\n\n.wrapper {\n  margin: 0;\n  margin-bottom: 20px;\n  border-radius: 0;\n}\n\n.news-title {\n  color: white;\n  font-weight: 700;\n  font-size: 20px;\n  margin-left: 30px;\n  margin-top: 120px;\n}\n\n.card-box {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.arrow-back {\n  position: absolute;\n  color: white;\n  top: 60px;\n  left: 15px;\n  font-size: 15px;\n}\n\n.title {\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 13px;\n  text-align: center;\n  margin-top: 5px;\n}\n\n.avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.color-bar {\n  height: 30px;\n  background: #ffdf02;\n  border-radius: 0;\n  margin: 0;\n  margin-top: 5px;\n  width: 90%;\n}\n\n.color-bar2 {\n  height: 30px;\n  background: #ffdf02;\n  border-radius: 0;\n  margin: 0;\n  margin-top: 5px;\n  width: 50%;\n}\n\n.result {\n  font-family: \"Poppins\", sans-serif;\n  color: white;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0RvY3VtZW50cy9HaXRIdWIvdHV2b3RvLWFwcC9zcmMvYXBwL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFDRSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlzdGljcy9zdGF0aXN0aWNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmV5LWJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5zdGlja3ktbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4ud3JhcHBlciB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLm5ld3MtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xufVxuXG4uY2FyZC1ib3gge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5cbi5hcnJvdy1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRvcDogNjBweDtcbiAgbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5hdmF0YXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyXG59XG5cbi5jb2xvci1iYXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmRmMDI7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4uY29sb3ItYmFyMiB7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZGYwMjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5yZXN1bHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59IiwiLmdyZXktYmcge1xuICAtLWJhY2tncm91bmQ6ICMzMzMzMzM7XG59XG5cbi5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLnN0aWNreS1sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ubmV3cy10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG59XG5cbi5jYXJkLWJveCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5hcnJvdy1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRvcDogNjBweDtcbiAgbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmF2YXRhciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jb2xvci1iYXIge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmRmMDI7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4uY29sb3ItYmFyMiB7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZGYwMjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5yZXN1bHQge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let StatisticsPage = class StatisticsPage {
    constructor(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    ngOnInit() {
    }
    openPage() {
        let options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot('/news');
    }
    openPage2() {
        let options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot('/vote');
    }
    openStatistics() {
        let options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot('/statistics');
    }
};
StatisticsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__["NativePageTransitions"] }
];
StatisticsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-statistics',
        template: __webpack_require__(/*! raw-loader!./statistics.page.html */ "./node_modules/raw-loader/index.js!./src/app/statistics/statistics.page.html"),
        styles: [__webpack_require__(/*! ./statistics.page.scss */ "./src/app/statistics/statistics.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__["NativePageTransitions"]])
], StatisticsPage);



/***/ })

}]);
//# sourceMappingURL=statistics-statistics-module-es2015.js.map