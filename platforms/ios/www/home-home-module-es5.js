(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"grey-bg\" no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n\n  <ion-slide class=\"full-slide\">\n    <ion-img src=\"assets/logo small.png\" class=\"logo\"></ion-img>\n    <ion-slides pager=\"true\">\n      <ion-slide>\n        <ion-card class=\"tutorial-first-card\">\n          <ion-img class=\"circle-img\" src=\"/assets/registrate.png\"></ion-img>\n          <ion-card-content class=\"service-info\">\n            Regístrate.\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card class=\"tutorial-first-card\">\n          <ion-img class=\"circle-img\" src=\"/assets/cel.png\"></ion-img>\n          <ion-card-content class=\"service-info\">\n            Observa y comenta las noticias.\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card class=\"tutorial-first-card\">\n          <ion-img class=\"circle-img\" src=\"/assets/news.png\"></ion-img>\n          <ion-card-content class=\"service-info\">\n            Vota con conciencia.\n          </ion-card-content>\n          <!-- <ion-button (click)=\"openPage()\" class=\"start-btn\">COMENZAR</ion-button> -->\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n\n        <ion-card class=\"tutorial-first-card\">\n          <ion-img class=\"circle-img\" src=\"/assets/vote.png\"></ion-img>\n          <ion-card-content class=\"service-info\">\n            Vota ahora.\n          </ion-card-content>\n          <ion-button expand=\"block\" (click)=\"openWelcome()\" class=\"start-btn\">COMENZAR\n          </ion-button>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </ion-slide>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grey-bg {\n  --background: #333333;\n}\n\n.logo {\n  position: absolute;\n  top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  width: 150px;\n  height: 90px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.circle-img {\n  width: 300px;\n  height: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.service-info {\n  font-family: \"Poppins\", sans-serif;\n  color: white;\n  font-size: 20px;\n}\n\n.start-btn {\n  --background: #FFDF02;\n  --background-activated: rgb(219, 190, 0);\n  color: #333333;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 400;\n}\n\nion-slides {\n  padding-bottom: 20px;\n  --bullet-background: white;\n  --bullet-background-active: #FFDF02;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0RvY3VtZW50cy9HaXRIdWIvdHV2b3RvLWFwcC9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLHFCQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZXktYmcge1xuICAtLWJhY2tncm91bmQ6ICMzMzMzMzM7XG59XG5cbi5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuXG4uY2lyY2xlLWltZyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNlcnZpY2UtaW5mbyB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc3RhcnQtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZERjAyO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2IoMjE5LCAxOTAsIDApO1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNGRkRGMDI7XG59IiwiLmdyZXktYmcge1xuICAtLWJhY2tncm91bmQ6ICMzMzMzMzM7XG59XG5cbi5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmNpcmNsZS1pbWcge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5zZXJ2aWNlLWluZm8ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc3RhcnQtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRkZERjAyO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2IoMjE5LCAxOTAsIDApO1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI0ZGREYwMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HomePage = /** @class */ (function () {
    function HomePage(navigate, modalCtrl, router) {
        this.navigate = navigate;
        this.modalCtrl = modalCtrl;
        this.router = router;
    }
    HomePage.prototype.openWelcome = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"],
                            cssClass: 'transition-modal',
                            componentProps: {
                                value: 123
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map