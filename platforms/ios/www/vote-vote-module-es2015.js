(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vote-vote-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vote/vote.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vote/vote.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-logo\">\n  <ion-img src=\"assets/logo small.png\" class=\"logo\"></ion-img>\n  <h1 class=\"news-title\">TU VOTO</h1>\n</div>\n\n<ion-content class=\"grey-bg\">\n\n  <ion-card class=\"wrapper\">\n\n    <ion-item ion-button detail=\"false\" routerLink=\"/candidate\" style=\"--background: transparent;\" lines=\"full\">\n      <ion-icon class=\"arrow-right\" slot=\"end\" ios=\"ios-arrow-dropright-circle\" md=\"md-arrow-dropright-circle\">\n      </ion-icon>\n      <ion-label class=\"vote-title\">\n        Gobernador Interino\n      </ion-label>\n      <ion-img style=\"width: 30px; height: 30px;\" src=\"assets/fuego.png\"></ion-img>\n    </ion-item>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-tab-bar slot=\"bottom\"\n  style=\"padding-top: 10px; padding-bottom: 20px; --background: #333333; border-top: 1px solid rgba(128, 128, 128, 0.452)\">\n  <ion-tab-button (click)=\"openPage()\">\n    <img src=\"assets/Noticias.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: white; font-family: 'Poppins', sans-serif;\">Noticias</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button (click)=\"openPage2()\">\n    <img src=\"assets/tuvotoyellow.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: #FFDF02; font-family: 'Poppins', sans-serif;\">Tu Voto</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"profile\" (click)=\"openProfile()\">\n    <img src=\"assets/Estadisticas.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: white; font-family: 'Poppins', sans-serif;\">Estadísticas</ion-label>\n  </ion-tab-button>\n\n\n  <ion-tab-button (click)=\"openOthers()\">\n    <img src=\"assets/perfil.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: white; font-family: 'Poppins', sans-serif;\">Perfil</ion-label>\n  </ion-tab-button>\n\n\n\n</ion-tab-bar>"

/***/ }),

/***/ "./src/app/vote/vote.module.ts":
/*!*************************************!*\
  !*** ./src/app/vote/vote.module.ts ***!
  \*************************************/
/*! exports provided: VotePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotePageModule", function() { return VotePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vote_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vote.page */ "./src/app/vote/vote.page.ts");







const routes = [
    {
        path: '',
        component: _vote_page__WEBPACK_IMPORTED_MODULE_6__["VotePage"]
    }
];
let VotePageModule = class VotePageModule {
};
VotePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_vote_page__WEBPACK_IMPORTED_MODULE_6__["VotePage"]]
    })
], VotePageModule);



/***/ }),

/***/ "./src/app/vote/vote.page.scss":
/*!*************************************!*\
  !*** ./src/app/vote/vote.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grey-bg {\n  --background: #333333;\n}\n\n.logo {\n  position: absolute;\n  top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  width: 150px;\n  height: 90px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.sticky-logo {\n  width: 100%;\n  height: 160px;\n  background: #333333;\n}\n\n.wrapper {\n  margin: 0;\n  margin-bottom: 20px;\n  border-radius: 0;\n}\n\n.news-title {\n  color: white;\n  font-weight: 700;\n  font-size: 20px;\n  margin-left: 30px;\n  margin-top: 120px;\n}\n\n.vote-title {\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  color: #ffdf02;\n  font-size: 13px;\n  margin-top: 20px;\n}\n\n.arrow-right {\n  color: #ffdf02;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rlc2t0b3AvdHUtdm90by9zcmMvYXBwL3ZvdGUvdm90ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZvdGUvdm90ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdm90ZS92b3RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmV5LWJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5zdGlja3ktbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4ud3JhcHBlciB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLm5ld3MtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xufVxuXG4udm90ZS10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICNmZmRmMDI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmFycm93LXJpZ2h0IHtcbiAgY29sb3I6ICNmZmRmMDI7XG59XG5cbi8vIC5pdGVtLWRldGFpbC1pY29uIC5pb3MgLmh5ZHJhdGVkIHtcbi8vICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuLy8gfSIsIi5ncmV5LWJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5zdGlja3ktbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4ud3JhcHBlciB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLm5ld3MtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xufVxuXG4udm90ZS10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZmZGYwMjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYXJyb3ctcmlnaHQge1xuICBjb2xvcjogI2ZmZGYwMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/vote/vote.page.ts":
/*!***********************************!*\
  !*** ./src/app/vote/vote.page.ts ***!
  \***********************************/
/*! exports provided: VotePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotePage", function() { return VotePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let VotePage = class VotePage {
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
};
VotePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__["NativePageTransitions"] }
];
VotePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vote',
        template: __webpack_require__(/*! raw-loader!./vote.page.html */ "./node_modules/raw-loader/index.js!./src/app/vote/vote.page.html"),
        styles: [__webpack_require__(/*! ./vote.page.scss */ "./src/app/vote/vote.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__["NativePageTransitions"]])
], VotePage);



/***/ })

}]);
//# sourceMappingURL=vote-vote-module-es2015.js.map