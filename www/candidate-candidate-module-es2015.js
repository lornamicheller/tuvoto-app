(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["candidate-candidate-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/candidate/candidate.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/candidate/candidate.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-logo\">\n    <ion-buttons class=\"arrow-position\">\n        <ion-back-button class=\"arrow-back\" defaultHref=\"/vote\" text=\"\"></ion-back-button>\n      </ion-buttons>\n  <ion-img src=\"assets/logo small.png\" class=\"logo\"></ion-img>\n  <h1 class=\"news-title\">TU VOTO</h1>\n</div>\n\n<ion-content class=\"grey-bg\">\n\n  <ion-card class=\"wrapper\">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/lugaro.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">Alexandra Lúgaro</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome2()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/bernier.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">David Bernier</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/cidre.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">Manuel Cidre</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/maria.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">María de Lourdes</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/manuel.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">Manuel Natal</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/thomas.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">Thomas Rivera Schatz</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/yulin.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">Carmen Yulín</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n        <ion-col style=\"padding: 0;\" size=\"6\">\n          <ion-card ion-button (click)=\"openWelcome()\" class=\"candidate-box\">\n            <ion-img class=\"candidate-pic\" src=\"assets/pedro.jpg\"></ion-img>\n          </ion-card>\n          <p class=\"candidate-name\">Pedro Pierluisi</p>\n          <!-- <ion-img ion-button class=\"vote-icon\" src=\"assets/voto gris.png\"></ion-img>  -->\n          <!-- BOTÓN SE ENCIENDE CUANDO ELIGES CANDIDATO-->\n\n          <ion-img ion-button class=\"vote-icon\" src=\"assets/voto.png\"></ion-img>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-button (click)=\"presentPopover()\" class=\"vote-btn\" expand=\"full\">VOTA</ion-button>\n\n<ion-tab-bar slot=\"bottom\"\n  style=\"padding-top: 10px; padding-bottom: 20px; --background: #333333; border-top: 1px solid rgba(128, 128, 128, 0.452)\">\n  <ion-tab-button (click)=\"openPage()\">\n    <img src=\"assets/Noticias.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: white; font-family: 'Poppins', sans-serif;\">Noticias</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button (click)=\"openPage2()\">\n    <img src=\"assets/tuvotoyellow.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: #FFDF02; font-family: 'Poppins', sans-serif;\">Tu Voto</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"profile\" (click)=\"openStatistics()\">\n    <img src=\"assets/Estadisticas.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: white; font-family: 'Poppins', sans-serif;\">Estadísticas</ion-label>\n  </ion-tab-button>\n\n\n  <ion-tab-button (click)=\"openOthers()\">\n    <img src=\"assets/perfil.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: white; font-family: 'Poppins', sans-serif;\">Perfil</ion-label>\n  </ion-tab-button>\n\n\n\n</ion-tab-bar>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _candidate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./candidate.page */ "./src/app/candidate/candidate.page.ts");







const routes = [
    {
        path: '',
        component: _candidate_page__WEBPACK_IMPORTED_MODULE_6__["CandidatePage"]
    }
];
let CandidatePageModule = class CandidatePageModule {
};
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



/***/ }),

/***/ "./src/app/candidate/candidate.page.scss":
/*!***********************************************!*\
  !*** ./src/app/candidate/candidate.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grey-bg {\n  --background: #333333;\n}\n\n.logo {\n  position: absolute;\n  top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  width: 150px;\n  height: 90px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.sticky-logo {\n  width: 100%;\n  height: 160px;\n  background: #333333;\n}\n\n.wrapper {\n  margin: 0;\n  margin-bottom: 20px;\n  border-radius: 0;\n}\n\n.news-title {\n  color: white;\n  font-weight: 700;\n  font-size: 20px;\n  margin-left: 30px;\n  margin-top: 120px;\n}\n\n.vote-title {\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #ffdf02;\n  font-size: 13px;\n  margin-top: 20px;\n}\n\n.arrow-right {\n  color: #ffdf02;\n}\n\n.candidate-box {\n  width: 150px;\n  height: 150px;\n  margin-bottom: 5px;\n}\n\n.candidate-pic {\n  width: 150px;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.candidate-name {\n  margin: 0;\n  text-align: center;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.vote-icon {\n  width: 30px;\n  height: 30px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.vote-btn {\n  margin: 0;\n  height: 60px;\n  --background: #ffdf02;\n  --background-activated: #ffdf02;\n  color: #333333;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n}\n\n.arrow-back {\n  position: absolute;\n  color: white;\n  top: 60px;\n  left: 15px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0RvY3VtZW50cy9HaXRIdWIvdHV2b3RvLWFwcC9zcmMvYXBwL2NhbmRpZGF0ZS9jYW5kaWRhdGUucGFnZS5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUvY2FuZGlkYXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jYW5kaWRhdGUvY2FuZGlkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmV5LWJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5zdGlja3ktbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4ud3JhcHBlciB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLm5ld3MtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xufVxuXG4udm90ZS10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmZmRmMDI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmFycm93LXJpZ2h0IHtcbiAgY29sb3I6ICNmZmRmMDI7XG59XG5cbi5jYW5kaWRhdGUtYm94IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jYW5kaWRhdGUtcGljIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlclxufVxuXG4uY2FuZGlkYXRlLW5hbWUge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4udm90ZS1pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnZvdGUtYnRuIHtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDYwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZGYwMjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2ZmZGYwMjtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hcnJvdy1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRvcDogNjBweDtcbiAgbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufSIsIi5ncmV5LWJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5zdGlja3ktbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4ud3JhcHBlciB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLm5ld3MtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xufVxuXG4udm90ZS10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZmZGYwMjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYXJyb3ctcmlnaHQge1xuICBjb2xvcjogI2ZmZGYwMjtcbn1cblxuLmNhbmRpZGF0ZS1ib3gge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNhbmRpZGF0ZS1waWMge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY2FuZGlkYXRlLW5hbWUge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi52b3RlLWljb24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4udm90ZS1idG4ge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogNjBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZkZjAyO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZmZkZjAyO1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYXJyb3ctYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDYwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _candidate_info_candidate_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././candidate-info/candidate-info.component */ "./src/app/candidate-info/candidate-info.component.ts");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _second_candidate_second_candidate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .././second-candidate/second-candidate.component */ "./src/app/second-candidate/second-candidate.component.ts");
/* harmony import */ var _popover2_popover2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .././popover2/popover2.component */ "./src/app/popover2/popover2.component.ts");









let CandidatePage = class CandidatePage {
    constructor(navigate, modalCtrl, nativePageTransitions, popoverController) {
        this.navigate = navigate;
        this.modalCtrl = modalCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.popoverController = popoverController;
    }
    ngOnInit() {
    }
    openWelcome() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _candidate_info_candidate_info_component__WEBPACK_IMPORTED_MODULE_3__["CandidateInfoComponent"],
                cssClass: 'transition-modal',
                componentProps: {
                    value: 123
                }
            });
            return yield modal.present();
        });
    }
    openWelcome2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _second_candidate_second_candidate_component__WEBPACK_IMPORTED_MODULE_5__["SecondCandidateComponent"],
                cssClass: 'transition-modal',
                componentProps: {
                    value: 123
                }
            });
            return yield modal.present();
        });
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
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _popover2_popover2_component__WEBPACK_IMPORTED_MODULE_6__["Popover2Component"],
                event: ev,
                translucent: true
            });
            return yield popover.present();
        });
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
CandidatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
CandidatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-candidate',
        template: __webpack_require__(/*! raw-loader!./candidate.page.html */ "./node_modules/raw-loader/index.js!./src/app/candidate/candidate.page.html"),
        styles: [__webpack_require__(/*! ./candidate.page.scss */ "./src/app/candidate/candidate.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])
], CandidatePage);



/***/ })

}]);
//# sourceMappingURL=candidate-candidate-module-es2015.js.map