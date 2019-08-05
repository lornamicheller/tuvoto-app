(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-news-info-news-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/info-news/info-news.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/info-news/info-news.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-logo\">\n  <ion-buttons class=\"arrow-position\">\n    <ion-back-button class=\"arrow-back\" defaultHref=\"/news\" text=\"\"></ion-back-button>\n  </ion-buttons>\n  <ion-img src=\"assets/logo small.png\" class=\"logo\"></ion-img>\n</div>\n\n<ion-content class=\"grey-bg\">\n\n  <ion-card class=\"picture-news\">\n    <h1 class=\"news\">Bad Bunny y Residente llegan a la marcha</h1>\n    <img class=\"image-new\" src=\"assets/bbres.jpg\">\n    <div class=\"divider\"></div>\n  </ion-card>\n\n  <ion-card style=\"margin-top: 0; margin-bottom: 0;\">\n\n    <p class=\"news-content\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempora nisi natus\n      maxime\n      consequatur totam\n      praesentium minus modi voluptatum reiciendis repellendus vero voluptate, mollitia nobis impedit odio dicta nam\n      doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi obcaecati quibusdam libero quia\n      temporibus omnis in accusantium voluptas ab nobis itaque quod nisi iure fugit, neque sequi vitae! Nulla,\n      eveniet!\n      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit rerum atque tempore dolor ut\n      quod? Minus numquam unde quas itaque laudantium reprehenderit. Voluptate necessitatibus eum incidunt fugit\n      possimus iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque atque incidunt nesciunt nisi\n      expedita quas sunt, autem necessitatibus eaque, velit quaerat animi aspernatur quibusdam cum laudantium placeat\n      ipsam! Ut, ea!\n    </p>\n  </ion-card>\n\n  <ion-grid style=\"padding: 0; padding-left: 15px; margin-bottom: 20px;\">\n      <ion-row>\n        <ion-col size=\"1\" style=\"padding: 0;\">\n          <img class=\"icons\" ion-button src=\"assets/view copy.png\">\n          <!-- <img class=\"icons\" ion-button src=\"assets/view copy 3.png\">  -->\n          <!-- ICON  SE USARÁ CUANDO LA PERSONA PRESIONE EL BOTÓN, CAMBIARÁ DE COLOR -->\n        </ion-col>\n        <ion-col class=\"content-icon\">\n          22.4k\n        </ion-col>\n        <ion-col size=\"1\" style=\"padding: 0;\">\n          <img class=\"icons\" ion-button src=\"assets/view copy 2.png\">\n          <!-- <img class=\"icons\" ion-button src=\"assets/view copy 4.png\">  -->\n          <!-- ICON  SE USARÁ CUANDO LA PERSONA PRESIONE EL BOTÓN, CAMBIARÁ DE COLOR -->\n        </ion-col>\n        <ion-col class=\"content-icon\">\n          22.4k\n        </ion-col>\n        <ion-col size=\"1\" style=\"padding: 0;\">\n          <img class=\"icons\" ion-button src=\"assets/coment.png\">\n          <!-- <img class=\"icons\" ion-button src=\"assets/coment copy.png\">  -->\n          <!-- ICON  SE USARÁ CUANDO LA PERSONA PRESIONE EL BOTÓN, CAMBIARÁ DE COLOR -->\n        </ion-col>\n        <ion-col class=\"content-icon\">\n          22.4k\n        </ion-col>\n        <ion-col size=\"1\" style=\"padding: 0;\">\n          <img class=\"icons\" ion-button src=\"assets/respost.png\">\n          <!-- <img class=\"icons\" ion-button src=\"assets/respost copy.png\">  -->\n          <!-- ICON  SE USARÁ CUANDO LA PERSONA PRESIONE EL BOTÓN, CAMBIARÁ DE COLOR -->\n        </ion-col>\n        <ion-col class=\"content-icon\">\n          22.4k\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n\n\n\n\n<ion-tab-bar slot=\"bottom\"\n  style=\"padding-top: 10px; padding-bottom: 20px; --background: #333333; border-top: 1px solid rgba(128, 128, 128, 0.452);\">\n  <ion-tab-button (click)=\"openPage()\">\n    <img src=\"assets/Noticias yellow.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: #FFDF02; font-family: 'Poppins', sans-serif;\">Noticias</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button (click)=\"openPage2()\">\n    <img src=\"assets/tuvoto.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: white; font-family: 'Poppins', sans-serif;\">Tu Voto</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"profile\" (click)=\"openProfile()\">\n    <img src=\"assets/Estadisticas.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: white; font-family: 'Poppins', sans-serif;\">Estadísticas</ion-label>\n  </ion-tab-button>\n\n\n  <ion-tab-button (click)=\"openOthers()\">\n    <img src=\"assets/perfil.png\" width=\"30px\" height=\"30px\">\n    <ion-label style=\"color: white; font-family: 'Poppins', sans-serif;\">Perfil</ion-label>\n  </ion-tab-button>\n\n\n\n</ion-tab-bar>"

/***/ }),

/***/ "./src/app/info-news/info-news.module.ts":
/*!***********************************************!*\
  !*** ./src/app/info-news/info-news.module.ts ***!
  \***********************************************/
/*! exports provided: InfoNewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoNewsPageModule", function() { return InfoNewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_news_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-news.page */ "./src/app/info-news/info-news.page.ts");







var routes = [
    {
        path: '',
        component: _info_news_page__WEBPACK_IMPORTED_MODULE_6__["InfoNewsPage"]
    }
];
var InfoNewsPageModule = /** @class */ (function () {
    function InfoNewsPageModule() {
    }
    InfoNewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_info_news_page__WEBPACK_IMPORTED_MODULE_6__["InfoNewsPage"]]
        })
    ], InfoNewsPageModule);
    return InfoNewsPageModule;
}());



/***/ }),

/***/ "./src/app/info-news/info-news.page.scss":
/*!***********************************************!*\
  !*** ./src/app/info-news/info-news.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grey-bg {\n  --background: #333333;\n}\n\n.logo {\n  position: absolute;\n  top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  width: 150px;\n  height: 90px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.sticky-logo {\n  width: 100%;\n  height: 160px;\n  background: #333333;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.452);\n}\n\n.wrapper {\n  margin-top: 0;\n  margin-bottom: 20px;\n  border-radius: 0;\n}\n\n.picture-news {\n  padding-bottom: 10px;\n  border-radius: 0;\n  --background: #333333;\n  margin: 0;\n}\n\n.news-title {\n  color: white;\n  font-weight: 700;\n  font-size: 20px;\n  margin-left: 30px;\n  margin-top: 120px;\n}\n\n.news {\n  font-family: \"Poppins\", sans-serif;\n  color: #ffdf02;\n  font-size: 15px;\n  font-weight: 700;\n  text-align: center;\n}\n\n.image-new {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  box-shadow: 0 12px 6px -6px black;\n}\n\n.content-icon {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 13px;\n  padding: 0;\n  margin-top: 10px;\n  color: white;\n}\n\n.icons {\n  width: 20px;\n  height: 20px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-top: 10px;\n}\n\n.news-content {\n  text-align: justify;\n  font-size: 13px;\n  color: white;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.divider {\n  margin-top: 20px;\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px solid rgba(128, 128, 128, 0.452);\n}\n\n.arrow-back {\n  position: absolute;\n  color: white;\n  top: 60px;\n  left: 15px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0Rlc2t0b3AvdHUtdm90by9zcmMvYXBwL2luZm8tbmV3cy9pbmZvLW5ld3MucGFnZS5zY3NzIiwic3JjL2FwcC9pbmZvLW5ld3MvaW5mby1uZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxpQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBRUEsZ0JBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1EQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2luZm8tbmV3cy9pbmZvLW5ld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZXktYmcge1xuICAtLWJhY2tncm91bmQ6ICMzMzMzMzM7XG59XG5cbi5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLnN0aWNreS1sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTYwcHg7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDUyKTtcbn1cblxuLndyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ucGljdHVyZS1uZXdzIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIC0tYmFja2dyb3VuZDogIzMzMzMzMztcbiAgbWFyZ2luOiAwO1xufVxuXG4ubmV3cy10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG59XG5cbi5uZXdzIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmRmMDI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2UtbmV3IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJveC1zaGFkb3c6IDAgMTJweCA2cHggLTZweCBibGFjaztcbn1cblxuLmNvbnRlbnQtaWNvbiB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29ucyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmV3cy1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG59XG5cbi5kaXZpZGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQ1Mik7XG59XG5cbi5hcnJvdy1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRvcDogNjBweDtcbiAgbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufSIsIi5ncmV5LWJnIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5zdGlja3ktbG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQ1Mik7XG59XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnBpY3R1cmUtbmV3cyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICAtLWJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIG1hcmdpbjogMDtcbn1cblxuLm5ld3MtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xufVxuXG4ubmV3cyB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNmZmRmMDI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2UtbmV3IHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJveC1zaGFkb3c6IDAgMTJweCA2cHggLTZweCBibGFjaztcbn1cblxuLmNvbnRlbnQtaWNvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pY29ucyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uZXdzLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uZGl2aWRlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40NTIpO1xufVxuXG4uYXJyb3ctYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDYwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/info-news/info-news.page.ts":
/*!*********************************************!*\
  !*** ./src/app/info-news/info-news.page.ts ***!
  \*********************************************/
/*! exports provided: InfoNewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoNewsPage", function() { return InfoNewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var InfoNewsPage = /** @class */ (function () {
    function InfoNewsPage(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    InfoNewsPage.prototype.ngOnInit = function () {
    };
    InfoNewsPage.prototype.openPage = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot('/news');
    };
    InfoNewsPage.prototype.openPage2 = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot('/vote');
    };
    InfoNewsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__["NativePageTransitions"] }
    ]; };
    InfoNewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info-news',
            template: __webpack_require__(/*! raw-loader!./info-news.page.html */ "./node_modules/raw-loader/index.js!./src/app/info-news/info-news.page.html"),
            styles: [__webpack_require__(/*! ./info-news.page.scss */ "./src/app/info-news/info-news.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_2__["NativePageTransitions"]])
    ], InfoNewsPage);
    return InfoNewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=info-news-info-news-module-es5.js.map