(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["candidate-candidate-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/candidate/candidate.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/candidate/candidate.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-logo\">\n  <ion-img src=\"assets/logo small.png\" class=\"logo\"></ion-img>\n  <h1 class=\"news-title\">TU VOTO</h1>\n</div>\n\n<ion-content class=\"grey-bg\">\n\n  <ion-card class=\"wrapper\">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/lugaro.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">Alexandra Lúgaro</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome2()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/bernier.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">David Bernier</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/cidre.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">Manuel Cidre</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/maria.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">María de Lourdes</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/manuel.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">Manuel Natal</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/thomas.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">Thomas Rivera Schatz</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/yulin.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">Carmen Yulín</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/pedro.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">Pedro Pierluisi</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-button (click)=\"presentPopover()\" class=\"vote-btn\" expand=\"full\">VOTA</ion-button>\n\n<ion-tab-bar slot=\"bottom\"\n  style=\"padding-top: 10px; padding-bottom: 20px; --background: #333333; border-top: 1px solid rgba(128, 128, 128, 0.452)\">\n  <ion-tab-button (click)=\"openPage()\">\n    <img src=\"assets/Noticias.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: white; font-family: 'Poppins', sans-serif;\">Noticias</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button (click)=\"openPage2()\">\n    <img src=\"assets/tuvotoyellow.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: #FFDF02; font-family: 'Poppins', sans-serif;\">Tu Voto</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"profile\" (click)=\"openProfile()\">\n    <img src=\"assets/Estadisticas.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: white; font-family: 'Poppins', sans-serif;\">Estadísticas</ion-label>\n  </ion-tab-button>\n\n\n  <ion-tab-button (click)=\"openOthers()\">\n    <img src=\"assets/perfil.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: white; font-family: 'Poppins', sans-serif;\">Perfil</ion-label>\n  </ion-tab-button>\n\n\n\n</ion-tab-bar>"

/***/ }),

/***/ "./src/app/candidate/candidate.module.ts":
/*!***********************************************!*\
  !*** ./src/app/candidate/candidate.module.ts ***!
  \***********************************************/
/*! exports provided: CandidatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatePageModule", function() { return CandidatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _candidate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./candidate.page */ "./src/app/candidate/candidate.page.ts");







var routes = [
    {
        path: '',
        component: _candidate_page__WEBPACK_IMPORTED_MODULE_6__["CandidatePage"]
    }
];
var CandidatePageModule = /** @class */ (function () {
    function CandidatePageModule() {
    }
    CandidatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_candidate_page__WEBPACK_IMPORTED_MODULE_6__["CandidatePage"]]
        })
    ], CandidatePageModule);
    return CandidatePageModule;
}());



/***/ }),

/***/ "./src/app/candidate/candidate.page.scss":
/*!***********************************************!*\
  !*** ./src/app/candidate/candidate.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grey-bg {\n  --background: #333333;\n}\n\n.logo {\n  position: absolute;\n  top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  width: 150px;\n  height: 90px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.sticky-logo {\n  width: 100%;\n  height: 160px;\n  background: #333333;\n}\n\n.wrapper {\n  margin: 0;\n  margin-bottom: 20px;\n  border-radius: 0;\n}\n\n.news-title {\n  color: white;\n  font-weight: 700;\n  font-size: 20px;\n  margin-left: 30px;\n  margin-top: 120px;\n}\n\n.vote-title {\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #ffdf02;\n  font-size: 13px;\n  margin-top: 20px;\n}\n\n.arrow-right {\n  color: #ffdf02;\n}\n\n.candidate-box {\n  width: 150px;\n  height: 150px;\n  margin-bottom: 5px;\n}\n\n.candidate-pic {\n  width: 150px;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.candidate-name {\n  margin: 0;\n  text-align: center;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.vote-icon {\n  width: 30px;\n  height: 30px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.vote-btn {\n  margin: 0;\n  height: 60px;\n  --background: #ffdf02;\n  --background-activated: #ffdf02;\n  color: #333333;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rlc2t0b3AvdHUtdm90by9zcmMvYXBwL2NhbmRpZGF0ZS9jYW5kaWRhdGUucGFnZS5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUvY2FuZGlkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY2FuZGlkYXRlL2NhbmRpZGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JleS1iZyB7XG4gIC0tYmFja2dyb3VuZDogIzMzMzMzMztcbn1cblxuLmxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uc3RpY2t5LWxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbn1cblxuLndyYXBwZXIge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5uZXdzLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMjBweDtcbn1cblxuLnZvdGUtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmZkZjAyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5hcnJvdy1yaWdodCB7XG4gIGNvbG9yOiAjZmZkZjAyO1xufVxuXG4uY2FuZGlkYXRlLWJveCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY2FuZGlkYXRlLXBpYyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXJcbn1cblxuLmNhbmRpZGF0ZS1uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLnZvdGUtaWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi52b3RlLWJ0biB7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICAtLWJhY2tncm91bmQ6ICNmZmRmMDI7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmZmRmMDI7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufSIsIi5ncmV5LWJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5zdGlja3ktbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4ud3JhcHBlciB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLm5ld3MtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xufVxuXG4udm90ZS10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZmZGYwMjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYXJyb3ctcmlnaHQge1xuICBjb2xvcjogI2ZmZGYwMjtcbn1cblxuLmNhbmRpZGF0ZS1ib3gge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNhbmRpZGF0ZS1waWMge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY2FuZGlkYXRlLW5hbWUge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi52b3RlLWljb24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4udm90ZS1idG4ge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogNjBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZkZjAyO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZkZjAyO1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/candidate/candidate.page.ts":
/*!*********************************************!*\
  !*** ./src/app/candidate/candidate.page.ts ***!
  \*********************************************/
/*! exports provided: CandidatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatePage", function() { return CandidatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _candidate_info_candidate_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././candidate-info/candidate-info.component */ "./src/app/candidate-info/candidate-info.component.ts");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _second_candidate_second_candidate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .././second-candidate/second-candidate.component */ "./src/app/second-candidate/second-candidate.component.ts");
/* harmony import */ var _popover2_popover2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .././popover2/popover2.component */ "./src/app/popover2/popover2.component.ts");









var CandidatePage = /** @class */ (function () {
    function CandidatePage(navigate, modalCtrl, nativePageTransitions, popoverController) {
        this.navigate = navigate;
        this.modalCtrl = modalCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.popoverController = popoverController;
    }
    CandidatePage.prototype.ngOnInit = function () {
    };
    CandidatePage.prototype.openWelcome = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _candidate_info_candidate_info_component__WEBPACK_IMPORTED_MODULE_3__["CandidateInfoComponent"],
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
    CandidatePage.prototype.openWelcome2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _second_candidate_second_candidate_component__WEBPACK_IMPORTED_MODULE_5__["SecondCandidateComponent"],
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
    CandidatePage.prototype.openPage = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot('/news');
    };
    CandidatePage.prototype.openPage2 = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot('/vote');
    };
    CandidatePage.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover2_popover2_component__WEBPACK_IMPORTED_MODULE_6__["Popover2Component"],
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CandidatePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
    ]; };
    CandidatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-candidate',
            template: __webpack_require__(/*! raw-loader!./candidate.page.html */ "./node_modules/raw-loader/index.js!./src/app/candidate/candidate.page.html"),
            styles: [__webpack_require__(/*! ./candidate.page.scss */ "./src/app/candidate/candidate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
    ], CandidatePage);
    return CandidatePage;
}());



/***/ })

}]);
//# sourceMappingURL=candidate-candidate-module-es5.js.map