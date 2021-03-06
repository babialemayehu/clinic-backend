(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"head-color {{data.color}}\" ></div>\n<div class=\"container\" style=\"width: 400px; padding: 0px 10% 0px 10%;\"> \n  <h5 style=\"margin-top: 0px\">{{data.title}}</h5> \n  <p [innerHTML]=\"data.message\"></p>\n  \n  <strong>\n    <button (click)=\"confirm()\" mat-button class=\"right white black-text \">OK</button>\n    <button *ngIf=\"data.dialog == 'confirm'\" (click)=\"close()\" mat-button class=\"right white black-text \">CANCLE</button>\n  </strong>\n\n</div> "

/***/ }),

/***/ "./src/app/alert/alert.component.scss":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head-color {\n  position: relative;\n  width: 100%;\n  height: 5px;\n  background-color: red;\n  top: -24px; }\n"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(thisDialog, data) {
        this.thisDialog = thisDialog;
        this.data = data;
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.prototype.close = function () {
        this.thisDialog.close({
            responce: false,
            data: null
        });
    };
    AlertComponent.prototype.confirm = function () {
        this.thisDialog.close({
            responce: true,
            data: this.data.data
        });
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/alert/alert.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-sidenav [$auth]=\"$auth\" [profilePic]=\"profilePic\"></app-sidenav>\n<app-floating-action-btn></app-floating-action-btn>\n<!-- <app-context></app-context> -->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _setup_dialog_setup_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup-dialog/setup-dialog.component */ "./src/app/setup-dialog/setup-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_dialog, _user) {
        this._dialog = _dialog;
        this._user = _user;
        this.title = 'admin2';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.addEventListener('DOMContentLoaded', function () {
            M.AutoInit();
        });
        this._user.authUser().subscribe(function (result) {
            _this.$auth = result;
            _this.profilePic = result.profile_pic;
            if (result.setup_step >= 0) {
                _this._dialog.open(_setup_dialog_setup_dialog_component__WEBPACK_IMPORTED_MODULE_3__["SetupDialogComponent"], {
                    width: '400px',
                    data: {
                        step: result.setup_step,
                        disableClose: true
                    }
                });
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! string */ "./node_modules/string/lib/string.js");
/* harmony import */ var string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _floating_action_btn_floating_action_btn_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./floating-action-btn/floating-action-btn.component */ "./src/app/floating-action-btn/floating-action-btn.component.ts");
/* harmony import */ var _registeration_form_registeration_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./registeration-form/registeration-form.component */ "./src/app/registeration-form/registeration-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user-table/user-table.component */ "./src/app/user-table/user-table.component.ts");
/* harmony import */ var _context_context_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./context/context.component */ "./src/app/context/context.component.ts");
/* harmony import */ var _lib_context_menu_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../lib/context-menu.module */ "./src/lib/context-menu.module.ts");
/* harmony import */ var _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./context-menu/context-menu.component */ "./src/app/context-menu/context-menu.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _user_profile_modal_user_profile_modal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user-profile-modal/user-profile-modal.component */ "./src/app/user-profile-modal/user-profile-modal.component.ts");
/* harmony import */ var _user_profile_route_user_profile_route_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user-profile-route/user-profile-route.component */ "./src/app/user-profile-route/user-profile-route.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _change_password_route_change_password_route_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./change-password-route/change-password-route.component */ "./src/app/change-password-route/change-password-route.component.ts");
/* harmony import */ var _patinet_view_patinet_view_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./patinet-view/patinet-view.component */ "./src/app/patinet-view/patinet-view.component.ts");
/* harmony import */ var _recent_visits_recent_visits_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./recent-visits/recent-visits.component */ "./src/app/recent-visits/recent-visits.component.ts");
/* harmony import */ var _card_title_card_title_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./card-title/card-title.component */ "./src/app/card-title/card-title.component.ts");
/* harmony import */ var _queue_min_queue_min_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./queue-min/queue-min.component */ "./src/app/queue-min/queue-min.component.ts");
/* harmony import */ var _queue_queue_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./queue/queue.component */ "./src/app/queue/queue.component.ts");
/* harmony import */ var _visits_visits_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./visits/visits.component */ "./src/app/visits/visits.component.ts");
/* harmony import */ var _setup_dialog_setup_dialog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./setup-dialog/setup-dialog.component */ "./src/app/setup-dialog/setup-dialog.component.ts");
/* harmony import */ var _upload_profile_pic_upload_upload_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./upload_profile_pic/upload/upload.component */ "./src/app/upload_profile_pic/upload/upload.component.ts");
/* harmony import */ var _upload_profile_pic_route_route_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./upload_profile_pic/route/route.component */ "./src/app/upload_profile_pic/route/route.component.ts");
/* harmony import */ var _drugs_drugs_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./drugs/drugs.component */ "./src/app/drugs/drugs.component.ts");
/* harmony import */ var _drugs_drugs_table_drugs_table_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./drugs/drugs-table/drugs-table.component */ "./src/app/drugs/drugs-table/drugs-table.component.ts");
/* harmony import */ var _orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./orders-table/orders-table.component */ "./src/app/orders-table/orders-table.component.ts");
/* harmony import */ var _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./orders-list/orders-list.component */ "./src/app/orders-list/orders-list.component.ts");
/* harmony import */ var _ordered_drugs_ordered_drugs_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ordered-drugs/ordered-drugs.component */ "./src/app/ordered-drugs/ordered-drugs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// SERVICE PROVIDERS


// context menu

// import { ContextMenu } from './context/context.menu';






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_12__["SidenavComponent"],
                _floating_action_btn_floating_action_btn_component__WEBPACK_IMPORTED_MODULE_13__["FloatingActionBtnComponent"],
                _registeration_form_registeration_form_component__WEBPACK_IMPORTED_MODULE_14__["RegisterationFormComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_19__["UsersComponent"],
                _user_table_user_table_component__WEBPACK_IMPORTED_MODULE_21__["UserTableComponent"],
                _context_context_component__WEBPACK_IMPORTED_MODULE_22__["ContextComponent"],
                _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_24__["ContextMenuComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_25__["UserProfileComponent"],
                _user_profile_modal_user_profile_modal_component__WEBPACK_IMPORTED_MODULE_26__["UserProfileModalComponent"],
                _user_profile_route_user_profile_route_component__WEBPACK_IMPORTED_MODULE_27__["UserProfileRouteComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_28__["SettingsComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_29__["ChangePasswordComponent"],
                _change_password_route_change_password_route_component__WEBPACK_IMPORTED_MODULE_30__["ChangePasswordRouteComponent"],
                _patinet_view_patinet_view_component__WEBPACK_IMPORTED_MODULE_31__["PatinetViewComponent"],
                _recent_visits_recent_visits_component__WEBPACK_IMPORTED_MODULE_32__["RecentVisitsComponent"],
                _card_title_card_title_component__WEBPACK_IMPORTED_MODULE_33__["CardTitleComponent"],
                _queue_min_queue_min_component__WEBPACK_IMPORTED_MODULE_34__["QueueMinComponent"],
                _queue_queue_component__WEBPACK_IMPORTED_MODULE_35__["QueueComponent"],
                _visits_visits_component__WEBPACK_IMPORTED_MODULE_36__["VisitsComponent"],
                _setup_dialog_setup_dialog_component__WEBPACK_IMPORTED_MODULE_37__["SetupDialogComponent"],
                _upload_profile_pic_upload_upload_component__WEBPACK_IMPORTED_MODULE_38__["UploadComponent"],
                _upload_profile_pic_route_route_component__WEBPACK_IMPORTED_MODULE_39__["RouteComponent"],
                _drugs_drugs_component__WEBPACK_IMPORTED_MODULE_40__["DrugsComponent"],
                _drugs_drugs_table_drugs_table_component__WEBPACK_IMPORTED_MODULE_41__["DrugsTableComponent"],
                _orders_table_orders_table_component__WEBPACK_IMPORTED_MODULE_42__["OrdersTableComponent"],
                _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_43__["OrdersListComponent"],
                _ordered_drugs_ordered_drugs_component__WEBPACK_IMPORTED_MODULE_44__["OrderedDrugsComponent"]
                // ContextMenu,
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_2__["appRoutes"]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
                _lib_context_menu_module__WEBPACK_IMPORTED_MODULE_23__["ContextMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
            ],
            entryComponents: [
                _registeration_form_registeration_form_component__WEBPACK_IMPORTED_MODULE_14__["RegisterationFormComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"],
                // ContextMenu, 
                _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_24__["ContextMenuComponent"],
                _user_profile_modal_user_profile_modal_component__WEBPACK_IMPORTED_MODULE_26__["UserProfileModalComponent"],
                _setup_dialog_setup_dialog_component__WEBPACK_IMPORTED_MODULE_37__["SetupDialogComponent"]
            ],
            providers: [
                _service_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card-title/card-title.component.html":
/*!******************************************************!*\
  !*** ./src/app/card-title/card-title.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contain\">\n  <div class=\"titel\"> <strong><b>{{_titel}}</b></strong></div>\n  <div class=\"icon\">\n    <mat-icon \n    (click)=\"action()\" \n    mat-icon-button \n    [matMenuTriggerFor]=\"appMenu\"\n    style=\"font-size: 18px;width: 18px;height: 18px;cursor: pointer;\">\n      {{_icon}}\n    </mat-icon>\n  </div>\n  <mat-menu #appMenu=\"matMenu\">\n    <button mat-menu-item \n    *ngFor=\"let option of options\"\n    (click)=\"select(option.value)\"\n    class=\"option\">\n      <mat-icon class=\"option-icon\" *ngIf=\"option.icon != ''\">{{option.icon}}</mat-icon>\n      <span>{{option.text}}</span>\n    </button>\n  </mat-menu>\n</div>"

/***/ }),

/***/ "./src/app/card-title/card-title.component.scss":
/*!******************************************************!*\
  !*** ./src/app/card-title/card-title.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contain {\n  width: 100%; }\n\n.titel {\n  display: inline-flex;\n  width: 90%; }\n\n.icon {\n  display: inline-flex;\n  width: 10%; }\n\n.option {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/card-title/card-title.component.ts":
/*!****************************************************!*\
  !*** ./src/app/card-title/card-title.component.ts ***!
  \****************************************************/
/*! exports provided: CardTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitleComponent", function() { return CardTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardTitleComponent = /** @class */ (function () {
    function CardTitleComponent() {
        this._icon = "more_vert";
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(CardTitleComponent.prototype, "titel", {
        set: function (val) {
            this._titel = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardTitleComponent.prototype, "icon", {
        set: function (val) {
            this._icon = val;
        },
        enumerable: true,
        configurable: true
    });
    CardTitleComponent.prototype.ngOnInit = function () {
    };
    CardTitleComponent.prototype.action = function () {
        this.onClick.emit();
    };
    CardTitleComponent.prototype.select = function (value) {
        this.onSelect.emit(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CardTitleComponent.prototype, "titel", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CardTitleComponent.prototype, "icon", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CardTitleComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardTitleComponent.prototype, "onClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardTitleComponent.prototype, "onSelect", void 0);
    CardTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-title',
            template: __webpack_require__(/*! ./card-title.component.html */ "./src/app/card-title/card-title.component.html"),
            styles: [__webpack_require__(/*! ./card-title.component.scss */ "./src/app/card-title/card-title.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardTitleComponent);
    return CardTitleComponent;
}());



/***/ }),

/***/ "./src/app/change-password-route/change-password-route.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/change-password-route/change-password-route.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s12 m6 l6 offset-m3 offset-l3\">\n        <mat-card class=\"form-container\" >\n          <app-change-password (stauts)=\"onStatusChange($event)\"></app-change-password>\n        </mat-card>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/change-password-route/change-password-route.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/change-password-route/change-password-route.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  margin-top: 10%; }\n"

/***/ }),

/***/ "./src/app/change-password-route/change-password-route.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/change-password-route/change-password-route.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChangePasswordRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordRouteComponent", function() { return ChangePasswordRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangePasswordRouteComponent = /** @class */ (function () {
    function ChangePasswordRouteComponent(_route) {
        this._route = _route;
    }
    ChangePasswordRouteComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordRouteComponent.prototype.onStatusChange = function (status) {
        if (status) {
            this._route.navigate(['/settings']);
        }
    };
    ChangePasswordRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password-route',
            template: __webpack_require__(/*! ./change-password-route.component.html */ "./src/app/change-password-route/change-password-route.component.html"),
            styles: [__webpack_require__(/*! ./change-password-route.component.scss */ "./src/app/change-password-route/change-password-route.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ChangePasswordRouteComponent);
    return ChangePasswordRouteComponent;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\" [class.hide]=\"!loading\" >\n  <div class=\"indeterminate\"></div>\n</div>\n<section>\n  <h5>Change password</h5>\n  <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"onSubmit()\" >\n    <mat-form-field *ngIf=\"!hideCurrentP\">\n      <input matInput placeholder=\"Current password\" (focusout)=\"checkPassword()\"  type=\"password\" formControlName=\"current_password\"> \n      <mat-error *ngIf=\"current_password.errors?.required && current_password.touched\">\n        This field is required\n      </mat-error>\n      <mat-error *ngIf=\"current_password.errors?.invalidPassword && current_password.touched\">\n        This is invalid password\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"New password\"  type=\"password\" formControlName=\"new_password\"> \n      <mat-error *ngIf=\"new_password.errors?.required && new_password.touched\">\n        This field is required\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Confirm password\"  type=\"password\" formControlName=\"confirm_password\"> \n      <mat-error *ngIf=\"confirm_password.errors?.required && confirm_password.touched\">\n        This field is required\n      </mat-error>\n    \n      <mat-error *ngIf=\"confirm_password.errors?.confimation && confirm_password.touched\">\n        Password don't match \n      </mat-error>\n    </mat-form-field>\n    <button mat-button [disabled]='changePasswordForm.invalid' type=\"submit\" color=\"primary\" class=\"right\">CHANGE</button>\n  </form>\n\n</section>\n"

/***/ }),

/***/ "./src/app/change-password/change-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ "./src/app/change-password/validation.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_common_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/common-message.service */ "./src/app/service/common-message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(formBuilder, _user, _message) {
        this.formBuilder = formBuilder;
        this._user = _user;
        this._message = _message;
        this.hideCurrentP = false;
        this.loading = false;
        this.stauts = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ChangePasswordComponent.prototype, "setOnly", {
        set: function (i) {
            this.hideCurrentP = i;
            if (i === true) {
                this.changePasswordForm = this.formBuilder.group({
                    new_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    confirm_password: ['', [_validation__WEBPACK_IMPORTED_MODULE_2__["confirmValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changePasswordForm = this.formBuilder.group({
            current_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            new_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            confirm_password: ['', [_validation__WEBPACK_IMPORTED_MODULE_2__["confirmValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.changePasswordForm.controls.new_password.valueChanges
            .subscribe(function (x) { _this.changePasswordForm.controls.confirm_password.updateValueAndValidity(); });
    };
    ChangePasswordComponent.prototype.checkPassword = function () {
        var _this = this;
        this._user.currentPassword(this.changePasswordForm.controls.current_password.value)
            .subscribe(function (responce) { }, function (error) {
            if (error.status == 406)
                _this.changePasswordForm.controls.current_password.setErrors({ invalidPassword: true });
        });
    };
    ChangePasswordComponent.prototype.confirm = function (confirm) {
        var newPass = this.changePasswordForm.value.new_password;
        if (newPass == confirm.value) {
            return ({ validConfirm_password: true });
        }
        else {
            return (null);
        }
    };
    ChangePasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loading = true;
        var form = this.changePasswordForm.controls;
        this._user.changePassword(form.current_password.value, form.new_password.value)
            .subscribe(function (restponce) {
            _this.loading = false;
            _this._message.httpSuccess('Changed your password');
            _this.stauts.emit(true);
        }, function (error) {
            _this.loading = false;
            _this._message.httpError(error);
            if (error.status == 406) {
                _this.changePasswordForm.controls.current_password.setErrors({ invalidPassword: true });
            }
            _this.stauts.emit(false);
        });
    };
    Object.defineProperty(ChangePasswordComponent.prototype, "current_password", {
        get: function () { return this.changePasswordForm.get('current_password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordComponent.prototype, "new_password", {
        get: function () { return this.changePasswordForm.get('new_password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangePasswordComponent.prototype, "confirm_password", {
        get: function () { return this.changePasswordForm.get('confirm_password'); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChangePasswordComponent.prototype, "stauts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ChangePasswordComponent.prototype, "setOnly", null);
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _service_common_message_service__WEBPACK_IMPORTED_MODULE_4__["CommonMessageService"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/change-password/validation.ts":
/*!***********************************************!*\
  !*** ./src/app/change-password/validation.ts ***!
  \***********************************************/
/*! exports provided: confirmValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmValidator", function() { return confirmValidator; });
function confirmValidator(control) {
    if (control.value !== '' && (control.value !== null || control.value !== undefined)) {
        var password = control.root.get('new_password');
        if (control.value != password.value) {
            return { confimation: true };
        }
        ;
    }
    return null;
}


/***/ }),

/***/ "./src/app/context-menu/context-menu.component.html":
/*!**********************************************************!*\
  !*** ./src/app/context-menu/context-menu.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card [@menu]=\"_state\" (@menu.done)=\"_onAnimationDone($event)\" style=\"cursor: pointer;\">\n    <mat-list>\n        <mat-list-item *ngFor=\"let item of items.items;let i=index\" \n        (click)=\"onClick({index:i,data:items.data})\">\n            <i class=\"icon small material-icons\" [class.danger-text]='item.icon == \"delete\"'>{{item.icon}}</i>\n            <span class=\"text\">{{item.text}}</span>\n        </mat-list-item>\n    </mat-list>\n</mat-card>"

/***/ }),

/***/ "./src/app/context-menu/context-menu.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/context-menu/context-menu.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  padding: 0px;\n  padding-bottom: 1em;\n  padding-top: 1em;\n  width: 180px; }\n  .mat-card .mat-list-item-content {\n    height: 30px;\n    padding-top: 4px;\n    padding-bottom: 4px; }\n  .mat-card .mat-list-item:hover {\n    background: #eeeeee; }\n  .mat-card .icon {\n    padding: 5px;\n    font-size: 1.5rem;\n    opacity: .8; }\n  .mat-card .text {\n    margin-left: 1.2em;\n    font-size: 1em; }\n  .mat-card .mat-list {\n    padding-top: 0px; }\n"

/***/ }),

/***/ "./src/app/context-menu/context-menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/context-menu/context-menu.component.ts ***!
  \********************************************************/
/*! exports provided: ContextMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuComponent", function() { return ContextMenuComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_context_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/context-menu.service */ "./src/lib/context-menu.service.ts");
/* harmony import */ var _lib_context_menu_injector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/context-menu-injector */ "./src/lib/context-menu-injector.ts");
/* harmony import */ var _lib_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/menu.component */ "./src/lib/menu.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContextMenuComponent = /** @class */ (function (_super) {
    __extends(ContextMenuComponent, _super);
    function ContextMenuComponent(menuPackage, contextMenuService) {
        var _this = _super.call(this, menuPackage, contextMenuService) || this;
        _this.menuPackage = menuPackage;
        _this.contextMenuService = contextMenuService;
        _this.items = menuPackage.context;
        return _this;
    }
    ContextMenuComponent.prototype.onClick = function (e) {
        // console.log(e); 
        this.contextMenuService.closeAll(e);
    };
    ContextMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-context-menu',
            template: __webpack_require__(/*! ./context-menu.component.html */ "./src/app/context-menu/context-menu.component.html"),
            styles: [__webpack_require__(/*! ./context-menu.component.scss */ "./src/app/context-menu/context-menu.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('menu', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, marginTop: '0px', visibility: 'visible' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('exit, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, marginTop: '-15px' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('120ms ease-in')),
                ]),
            ],
            host: {
                '[@menu]': '_state',
                '(@menu.done)': '_onAnimationDone($event)',
            }
        }),
        __metadata("design:paramtypes", [_lib_context_menu_injector__WEBPACK_IMPORTED_MODULE_3__["MenuPackage"],
            _lib_context_menu_service__WEBPACK_IMPORTED_MODULE_2__["ContextMenuService"]])
    ], ContextMenuComponent);
    return ContextMenuComponent;
}(_lib_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]));



/***/ }),

/***/ "./src/app/context/context.component.html":
/*!************************************************!*\
  !*** ./src/app/context/context.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center\">Right click to see menu</p>\n<div class=\"d-flex flex-row justify-content-around bd-highlight\">\n  <div class=\"p-4 p-md-5 bd-highlight bg-light border rounded target\"\n    [contextMenuTrigger]=\"menu\" \n    [menuContext]=\"items\"\n    (menuAction)=\"handleClose('this si firm menu')\" class='card' >\n    Basic Menu\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/context/context.component.scss":
/*!************************************************!*\
  !*** ./src/app/context/context.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/context/context.component.ts":
/*!**********************************************!*\
  !*** ./src/app/context/context.component.ts ***!
  \**********************************************/
/*! exports provided: ContextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextComponent", function() { return ContextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context-menu/context-menu.component */ "./src/app/context-menu/context-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContextComponent = /** @class */ (function () {
    function ContextComponent() {
        this.menu = _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_1__["ContextMenuComponent"];
    }
    ContextComponent.prototype.ngOnInit = function () {
    };
    ContextComponent.prototype.handleClose = function (e) {
        console.log('laskdfjlasdkf');
    };
    ContextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-context',
            template: __webpack_require__(/*! ./context.component.html */ "./src/app/context/context.component.html"),
            styles: [__webpack_require__(/*! ./context.component.scss */ "./src/app/context/context.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContextComponent);
    return ContextComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" style=\"text-align: center\">\n    \n    <mat-card style=\"padding: 25% 15%\">\n      <h2 style=\"color: gray\">\n        Dashboard\n      </h2>\n      <h3 style=\"color: lightgray\">\n        Data is yet to be aggrigated\n      </h3>\n    </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/drugs/drugs-table/drugs-table-datasource.ts":
/*!*************************************************************!*\
  !*** ./src/app/drugs/drugs-table/drugs-table-datasource.ts ***!
  \*************************************************************/
/*! exports provided: DrugsTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugsTableDataSource", function() { return DrugsTableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var DrugsTableDataSource = /** @class */ (function (_super) {
    __extends(DrugsTableDataSource, _super);
    function DrugsTableDataSource(paginator, sort, data) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = data;
        return _this;
    }
    DrugsTableDataSource.prototype.connect = function () {
        var _this = this;
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    DrugsTableDataSource.prototype.disconnect = function () { };
    DrugsTableDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    DrugsTableDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'Drug': return compare(a.drug.name, b.drug.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                case 'date': return compare(a.created_at, b.created_at, isAsc);
                case 'quantity': return compare(a.ordered_quantity, b.ordered_quantity, isAsc);
                default: return 0;
            }
        });
    };
    return DrugsTableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/drugs/drugs-table/drugs-table.component.css":
/*!*************************************************************!*\
  !*** ./src/app/drugs/drugs-table/drugs-table.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/drugs/drugs-table/drugs-table.component.html":
/*!**************************************************************!*\
  !*** ./src/app/drugs/drugs-table/drugs-table.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n    <ng-container matColumnDef=\"no\">\n      <th mat-header-cell *matHeaderCellDef> No </th>\n      <td mat-cell *matCellDef=\"let order\"> {{$orders.indexOf(order)+1}} </td>\n    </ng-container>\n  \n    <ng-container matColumnDef=\"drug\">\n      <th mat-header-cell *matHeaderCellDef> Drug </th>\n      <td mat-cell *matCellDef=\"let order\"> {{order.drug.name}} </td>\n    </ng-container>\n  \n    \n    <ng-container matColumnDef=\"quantity\">\n      <th mat-header-cell *matHeaderCellDef> Quantity </th>\n      <td mat-cell *matCellDef=\"let order\"> {{order.orderd_quantity}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"adjusted\">\n      <th mat-header-cell *matHeaderCellDef> Adjusted </th>\n      <td mat-cell *matCellDef=\"let order\"> {{order.adjusted_quantity}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator\n    [length]=\"dataSource.data.length\"\n    [pageIndex]=\"0\"\n    [pageSize]=\"50\"\n    [pageSizeOptions]=\"[25, 50, 100, 250]\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/drugs/drugs-table/drugs-table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/drugs/drugs-table/drugs-table.component.ts ***!
  \************************************************************/
/*! exports provided: DrugsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugsTableComponent", function() { return DrugsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _drugs_table_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drugs-table-datasource */ "./src/app/drugs/drugs-table/drugs-table-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrugsTableComponent = /** @class */ (function () {
    function DrugsTableComponent() {
        this.orders = [];
        this.displayedColumns = ['no', 'drug', 'quantity', 'adjusted'];
    }
    DrugsTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _drugs_table_datasource__WEBPACK_IMPORTED_MODULE_2__["DrugsTableDataSource"](this.paginator, this.sort, this.orders);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DrugsTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DrugsTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DrugsTableComponent.prototype, "orders", void 0);
    DrugsTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drugs/drugs-table',
            template: __webpack_require__(/*! ./drugs-table.component.html */ "./src/app/drugs/drugs-table/drugs-table.component.html"),
            styles: [__webpack_require__(/*! ./drugs-table.component.css */ "./src/app/drugs/drugs-table/drugs-table.component.css")]
        })
    ], DrugsTableComponent);
    return DrugsTableComponent;
}());



/***/ }),

/***/ "./src/app/drugs/drugs.component.html":
/*!********************************************!*\
  !*** ./src/app/drugs/drugs.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  drugs works!\n</p>\n"

/***/ }),

/***/ "./src/app/drugs/drugs.component.scss":
/*!********************************************!*\
  !*** ./src/app/drugs/drugs.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/drugs/drugs.component.ts":
/*!******************************************!*\
  !*** ./src/app/drugs/drugs.component.ts ***!
  \******************************************/
/*! exports provided: DrugsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrugsComponent", function() { return DrugsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DrugsComponent = /** @class */ (function () {
    function DrugsComponent() {
    }
    DrugsComponent.prototype.ngOnInit = function () {
    };
    DrugsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drugs',
            template: __webpack_require__(/*! ./drugs.component.html */ "./src/app/drugs/drugs.component.html"),
            styles: [__webpack_require__(/*! ./drugs.component.scss */ "./src/app/drugs/drugs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DrugsComponent);
    return DrugsComponent;
}());



/***/ }),

/***/ "./src/app/floating-action-btn/floating-action-btn.component.html":
/*!************************************************************************!*\
  !*** ./src/app/floating-action-btn/floating-action-btn.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"FAB\" (click)=\"open()\" (mouseenter)=\"open()\" (mouseleave)=\"close()\">\n  <ul id=\"options\" class=\"options\">\n    <!-- <li (click)=\"action.emit(4)\">\n      <button mat-mini-fab class=\"red\">\n        <img src=\"assets/speaker.svg\" style=\"width: 1.4rem;\"/>\n      </button>\n    </li> -->\n\n    <!-- <li (click)=\"action.emit(3)\">\n      <button mat-mini-fab class=\"yellow\">\n        <img src=\"assets/drug.svg\" style=\"width: 1.4rem;\"/>\n      </button>\n    </li>\n\n    <li (click)=\"action.emit(2)\">\n      <button mat-mini-fab class=\"green\">\n        <img src=\"assets/flask-full.svg\" style=\"width: 1.4rem;\"/>\n      </button>\n    </li> -->\n\n    <li (click)=\"openRagistrationFrom()\">\n      <button mat-mini-fab class=\"blue white-text\">\n        <mat-icon>person_add</mat-icon>\n      </button>\n    </li>\n  </ul>\n  <button mat-fab color=\"accent\" class=\"white-text\" (hover)=\"console.log('hover')\">\n    <mat-icon>add</mat-icon>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/floating-action-btn/floating-action-btn.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/floating-action-btn/floating-action-btn.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes options {\n  from {\n    margin-bottom: -22px;\n    opacity: 0; }\n  to {\n    margin-top: 12px;\n    opacity: 1; } }\n\n@keyframes options {\n  from {\n    margin-bottom: -22px;\n    opacity: 0; }\n  to {\n    margin-top: 12px;\n    opacity: 1; } }\n\n@-webkit-keyframes optionsRev {\n  from {\n    margin-top: 12px;\n    opacity: 1; }\n  to {\n    margin-bottom: -22px;\n    opacity: 0; } }\n\n@keyframes optionsRev {\n  from {\n    margin-top: 12px;\n    opacity: 1; }\n  to {\n    margin-bottom: -22px;\n    opacity: 0; } }\n\n#FAB {\n  position: fixed;\n  right: 16px;\n  bottom: 52px; }\n\n#FAB .options {\n    list-style: none; }\n\n#FAB .options li {\n      text-align: center;\n      margin-bottom: 12px;\n      opacity: 0; }\n\n#FAB .open li {\n    opacity: 1;\n    -webkit-animation-name: options;\n            animation-name: options;\n    -webkit-animation-delay: 0s;\n            animation-delay: 0s;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear; }\n\n#FAB .close li {\n    -webkit-animation-name: optionsRev;\n            animation-name: optionsRev;\n    -webkit-animation-delay: 0s;\n            animation-delay: 0s;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear; }\n"

/***/ }),

/***/ "./src/app/floating-action-btn/floating-action-btn.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/floating-action-btn/floating-action-btn.component.ts ***!
  \**********************************************************************/
/*! exports provided: FloatingActionBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatingActionBtnComponent", function() { return FloatingActionBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _registeration_form_registeration_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../registeration-form/registeration-form.component */ "./src/app/registeration-form/registeration-form.component.ts");
/* harmony import */ var _service_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/role.service */ "./src/app/service/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FloatingActionBtnComponent = /** @class */ (function () {
    function FloatingActionBtnComponent(registrationDialog, _roles) {
        this.registrationDialog = registrationDialog;
        this._roles = _roles;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FloatingActionBtnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._roles.getRoles().subscribe(function (result) {
            _this.roles = result;
        });
    };
    FloatingActionBtnComponent.prototype.openRagistrationFrom = function () {
        var dialog = this.registrationDialog.open(_registeration_form_registeration_form_component__WEBPACK_IMPORTED_MODULE_2__["RegisterationFormComponent"], {
            width: '600px',
            data: {
                roles: this.roles,
            },
        });
        dialog.afterClosed().subscribe(function (responce) {
            console.log(responce);
        });
    };
    FloatingActionBtnComponent.prototype.open = function () {
        var options = document.getElementById('options');
        options.classList.remove('close');
        options.classList.add('open');
    };
    FloatingActionBtnComponent.prototype.close = function () {
        setTimeout(function () {
            var options = document.getElementById('options');
            options.classList.remove('open');
            options.classList.add('close');
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FloatingActionBtnComponent.prototype, "action", void 0);
    FloatingActionBtnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-floating-action-btn',
            template: __webpack_require__(/*! ./floating-action-btn.component.html */ "./src/app/floating-action-btn/floating-action-btn.component.html"),
            styles: [__webpack_require__(/*! ./floating-action-btn.component.scss */ "./src/app/floating-action-btn/floating-action-btn.component.scss")],
            providers: [_service_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _service_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]])
    ], FloatingActionBtnComponent);
    return FloatingActionBtnComponent;
}());



/***/ }),

/***/ "./src/app/model/RootURL.ts":
/*!**********************************!*\
  !*** ./src/app/model/RootURL.ts ***!
  \**********************************/
/*! exports provided: RootURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootURL", function() { return RootURL; });
var RootURL = "";


/***/ }),

/***/ "./src/app/model/User.ts":
/*!*******************************!*\
  !*** ./src/app/model/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, worker_id, first_name, father_name, grand_father_name, gender, role_id, email, phone, role, profile_pic, setup_step, created_at, updated_at) {
        this.id = id;
        this.worker_id = worker_id;
        this.first_name = first_name;
        this.father_name = father_name;
        this.grand_father_name = grand_father_name;
        this.gender = gender;
        this.role_id = role_id;
        this.email = email;
        this.phone = phone;
        this.role = role;
        this.profile_pic = profile_pic;
        this.setup_step = setup_step;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"primary\" >\n  <div class=\"container\">\n      <div class=\"nav-wrapper\">\n          <a href=\"#\" class=\"brand-logo\">DMU Clinic</a>\n          <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n            <li *ngFor=\"let item of menuItems\"><a [routerLink]=\"item.href\">{{item.text}}</a></li>\n          </ul>\n      </div>\n  </div>\n  <div>\n    <span href=\"#\" data-target=\"slide-out\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></span>\n  </div>\n  <div class=\"container \">\n    <span class='right hide-on-large-only '>\n          <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n            <mat-icon>more_vert</mat-icon>\n          </button>\n    </span>\n  </div>\n\n</nav>\n\n<mat-menu #appMenu=\"matMenu\">\n  <button mat-menu-item [routerLink]=\"item.href\" *ngFor=\"let item of menuItems\">{{item.text}}</button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#menuDropdown {\n  width: auto !important; }\n\nnav {\n  margin-bottom: 20px;\n  height: 56px !important;\n  line-height: 56px; }\n\nnav a {\n    height: 56px !important;\n    line-height: 50px; }\n\nnav #nav-mobile {\n    height: 56px !important;\n    line-height: 56px; }\n\nnav #nav-mobile > li {\n      height: 56px !important;\n      line-height: 56px; }\n\nnav #nav-mobile > li > a {\n        height: 56px !important;\n        line-height: 56px; }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.menuItems = [
            { href: 'users', text: 'Users' },
            { href: 'drugs', text: 'Drugs' }
        ];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/ordered-drugs/ordered-drugs.component.html":
/*!************************************************************!*\
  !*** ./src/app/ordered-drugs/ordered-drugs.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col m12\">\n    <app-orders-table [orders]=\"$durg_orders\"></app-orders-table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/ordered-drugs/ordered-drugs.component.scss":
/*!************************************************************!*\
  !*** ./src/app/ordered-drugs/ordered-drugs.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ordered-drugs/ordered-drugs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ordered-drugs/ordered-drugs.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderedDrugsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedDrugsComponent", function() { return OrderedDrugsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/order.service */ "./src/app/service/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderedDrugsComponent = /** @class */ (function () {
    function OrderedDrugsComponent(_order, _activeRoute) {
        this._order = _order;
        this._activeRoute = _activeRoute;
        this.$durg_orders = [];
    }
    OrderedDrugsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activeRoute.params.subscribe(function (param) {
            _this._order.orderedDrugs(param.order_id).subscribe(function (drug_orders) { _this.$durg_orders = drug_orders; });
        });
    };
    OrderedDrugsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ordered-drugs',
            template: __webpack_require__(/*! ./ordered-drugs.component.html */ "./src/app/ordered-drugs/ordered-drugs.component.html"),
            styles: [__webpack_require__(/*! ./ordered-drugs.component.scss */ "./src/app/ordered-drugs/ordered-drugs.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OrderedDrugsComponent);
    return OrderedDrugsComponent;
}());



/***/ }),

/***/ "./src/app/orders-list/orders-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/orders-list/orders-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div classs=\"contatiner\">\n  <div class=\"row\">\n    <div class=\"col m8 offset-m2\">\n      <h5>Orders</h5>\n      <mat-list>\n        <mat-list-item *ngFor=\"let $order of $orders\" style=\"margin: 16px 0px\">\n          <a [routerLink]=\"['/ordered drugs/'+$order.id]\" style=\"width: 100%;\"> \n              <mat-card id=\"order\"  style=\"width: 100%;padding: 16px 36px; \">\n                <span>{{($orders.indexOf($order)+1)+ \". \"}}</span>\n                <span>{{$order.order.first_name + \" \" + $order.order.father_name}}</span>\n                <span class=\"secondery\">{{\"  \"}}({{$order.order.role.name}})</span>\n                <span class=\"secondery right\">{{$order.created_at}}</span>\n              </mat-card>\n            </a>\n        </mat-list-item>\n      </mat-list>\n    </div>\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/orders-list/orders-list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/orders-list/orders-list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#order:hover {\n  background: #eeeeee; }\n\n#order {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/orders-list/orders-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/orders-list/orders-list.component.ts ***!
  \******************************************************/
/*! exports provided: OrdersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersListComponent", function() { return OrdersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/order.service */ "./src/app/service/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersListComponent = /** @class */ (function () {
    function OrdersListComponent(_order) {
        this._order = _order;
        this.$orders = [];
    }
    OrdersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._order.getOrders().subscribe(function (responce) { _this.$orders = responce; });
    };
    OrdersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders-list',
            template: __webpack_require__(/*! ./orders-list.component.html */ "./src/app/orders-list/orders-list.component.html"),
            styles: [__webpack_require__(/*! ./orders-list.component.scss */ "./src/app/orders-list/orders-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]])
    ], OrdersListComponent);
    return OrdersListComponent;
}());



/***/ }),

/***/ "./src/app/orders-table/orders-table.component.html":
/*!**********************************************************!*\
  !*** ./src/app/orders-table/orders-table.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <table mat-table [dataSource]=\"orderDataSource\" *ngIf=\"$orders.length > 0\"\n        class=\"mat-elevation-z0\">\n        \n          <ng-container matColumnDef=\"autorize\">\n            <th mat-header-cell *matHeaderCellDef>\n              <mat-checkbox (change)=\"selectAll($event)\" [checked]=\"all\"></mat-checkbox>\n            </th>\n            <td mat-cell *matCellDef=\"let order\">\n              <mat-checkbox \n              (change)=\"select($event, order)\" \n              [checked]=\"order.selected\"\n              [disabled]=\"order.issued_by != null\"></mat-checkbox>\n            </td>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"no\">\n            <th mat-header-cell *matHeaderCellDef> No </th>\n            <td mat-cell *matCellDef=\"let order\"> {{$orders.indexOf(order)+1}} </td>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"drug\">\n            <th mat-header-cell *matHeaderCellDef> Drug </th>\n            <td mat-cell *matCellDef=\"let order\"> {{order.drug.name}} </td>\n          </ng-container>\n        \n          \n          <ng-container matColumnDef=\"quantity\">\n            <th mat-header-cell *matHeaderCellDef> Quantity </th>\n            <td mat-cell *matCellDef=\"let order\"> {{order.ordered_quantity}} </td>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"autorized\">\n            <th mat-header-cell *matHeaderCellDef> Authorized </th>\n            <td mat-cell *matCellDef=\"let order\"> \n              <mat-icon *ngIf=\"order.autorized_by == null\" style='color:red'>clear</mat-icon>\n              <mat-icon *ngIf=\"order.autorized_by != null\" style='color:green'>check</mat-icon>\n            </td>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"ordered_quantity\">\n              <th mat-header-cell *matHeaderCellDef>Ordered Quantity </th>\n              <td mat-cell *matCellDef=\"let order\"> {{order.ordered_quantity}} </td>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"adjusted_quantity\">\n              <th mat-header-cell *matHeaderCellDef>Ajusted Quantity </th>\n              <td mat-cell *matCellDef=\"let order\">\n                <input type=\"number\" \n                name=\"adjusted_quantity\" \n                value=\"{{order.ordered_quantity}}\" \n                style=\"width: 80px\"\n                [formControl]=\"adjustedQuantity\"\n                (change)=\"order.adjusted_quantity = adjustedQuantity.value\"\n                *ngIf=\"!order.selected\"/> \n\n                <span *ngIf=\"order.selected\"\n                #adjustedQuantity>{{order.adjusted_quantity}}</span>\n              </td>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"issued_quantity\">\n              <th mat-header-cell *matHeaderCellDef> Issued Quantity </th>\n              <td mat-cell *matCellDef=\"let order\"> {{order.issued_quantity}} </td>\n          </ng-container>\n          \n          <ng-container matColumnDef=\"batch_number\">\n              <th mat-header-cell *matHeaderCellDef>Batch </th>\n              <td mat-cell *matCellDef=\"let order\"> {{order.batch_number}} </td>\n          </ng-container>\n          \n      \n          <ng-container matColumnDef=\"is_recived\">\n            <th mat-header-cell *matHeaderCellDef> Is recived </th>\n            <td mat-cell *matCellDef=\"let order\"> \n              <mat-icon *ngIf=\"order.recived_at == null\" style='color:red'>clear</mat-icon>\n              <mat-icon *ngIf=\"order.recived_at != null\" style='color:green'>check</mat-icon>\n            </td>\n          </ng-container>\n        \n          <ng-container matColumnDef=\"expier_at\">\n              <th mat-header-cell *matHeaderCellDef>Expire date </th>\n              <td mat-cell *matCellDef=\"let order\"> {{order.expier_at}} </td>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"recived_at\">\n              <th mat-header-cell *matHeaderCellDef>Recived at </th>\n              <td mat-cell *matCellDef=\"let order\"> {{order.recived_at}} </td>\n          </ng-container>\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          \n      </table> \n</div>\n<div class=\"row\" *ngIf=\"$orders.length != 0\">\n  <button \n    class=\"right white-text primary\" \n    mat-button color=\"primary\" \n    style=\"margin-right: 2em\"\n    (click)=\"autorize()\">Autorize</button>\n</div>\n  <div class=\"row\" *ngIf=\"$orders.length == 0\">\n    <div class=\"center\" style=\"width: 100%; opacity: 0.8\">\n      <h6><strong class=\"tertiary center\">\n        <B>There is no order yet</B>\n      </strong></h6>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/orders-table/orders-table.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/orders-table/orders-table.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orders-table/orders-table.component.ts":
/*!********************************************************!*\
  !*** ./src/app/orders-table/orders-table.component.ts ***!
  \********************************************************/
/*! exports provided: OrdersTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersTableComponent", function() { return OrdersTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/order.service */ "./src/app/service/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrdersTableComponent = /** @class */ (function () {
    function OrdersTableComponent(_dialog, _order, _activeRoute, _route, _user) {
        this._dialog = _dialog;
        this._order = _order;
        this._activeRoute = _activeRoute;
        this._route = _route;
        this._user = _user;
        this.orderDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.$orders = [];
        this.$selectedOrders = [];
        this.adjustedQuantity = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.displayedColumns = [
            'autorize',
            'no',
            'drug',
            'quantity',
            //  'autorized',
            'ordered_quantity',
            'adjusted_quantity',
            'issued_quantity',
            'expier_at',
            'is_recived',
            'recived_at'
        ];
    }
    OrdersTableComponent.prototype.ngOnChanges = function () {
        this.$orders = this.orders;
        this.orderDataSource.data = this.orders;
        this.refresh();
    };
    OrdersTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._user.authUser().subscribe(function (user) {
            _this.$auth = user;
        });
    };
    OrdersTableComponent.prototype.select = function (e, order) {
        order.selected = e.checked;
        this.refresh();
    };
    OrdersTableComponent.prototype.selectAll = function (e) {
        this.$orders.forEach(function (order) {
            if (order.issued_by != null) {
                if (e.checked) {
                    order.selected = true;
                }
                else
                    order.selected = false;
            }
        });
        this.orderDataSource.data = this.orders;
    };
    OrdersTableComponent.prototype.refresh = function () {
        var temp = true;
        this.$orders.forEach(function (order) {
            order.adjusted_quantity = order.ordered_quantity;
            if (!order.selected) {
                temp = false;
            }
        });
        this.all = temp;
    };
    OrdersTableComponent.prototype.autorize = function () {
        var _this = this;
        var dialogRef = this._dialog.open(_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"], {
            width: "400px",
            data: {
                message: "Are you shure you want to autorize the checked drugs",
                dialog: "confirm"
            }
        });
        //let orders = this.$selectedOrders; 
        dialogRef.afterClosed().subscribe(function (response) {
            if (response.responce) {
                _this._order.autorize(_this.$orders)
                    .subscribe(function (r) {
                    console.log("successs");
                    _this._route.navigate(["/drugs"]);
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrdersTableComponent.prototype, "orders", void 0);
    OrdersTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders-table',
            template: __webpack_require__(/*! ./orders-table.component.html */ "./src/app/orders-table/orders-table.component.html"),
            styles: [__webpack_require__(/*! ./orders-table.component.scss */ "./src/app/orders-table/orders-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _service_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], OrdersTableComponent);
    return OrdersTableComponent;
}());



/***/ }),

/***/ "./src/app/patinet-view/patinet-view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/patinet-view/patinet-view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"width: 100%\">\n  <h5 style=\"display: inline\">{{(patient)?.first_name}} {{(patient)?.father_name}} {{(patient)?.grand_father_name}}</h5>\n  <!-- <strong class=\"right\"><span style=\"margin-right: 24px\">{{(patient)?.reg_id}}</span> \n  </strong><br> -->\n  <br>\n  <strong class=\"secondery\">{{((patient)?.department)?.name}} Department</strong><br>\n  <strong class=\"secondery\">Id number {{(patient)?.reg_id}}</strong><br>\n\n    <div class=\"col m6 l6 s12\">\n      <section>\n        <strong>Borned at </strong><span>{{(patient)?.birth_date}}</span><br>\n        <strong>Dorm </strong> <span>B {{(patient)?.dorm_block}} D {{(patient)?.dorm_room_number}}</span><br>\n        <strong>Registerd </strong><span>{{(patient)?.registerd_at}}</span><br>\n      </section>\n    </div>\n    <div class=\"col m6 l6 s12\" style=\"border: 1px solid #ededed;margin: -20px; padding: 16px\">\n      <app-recent-visits [patient]=\"patient\" icon=\"launch\"></app-recent-visits>\n    </div> \n</div>"

/***/ }),

/***/ "./src/app/patinet-view/patinet-view.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/patinet-view/patinet-view.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  margin-top: 10%; }\n"

/***/ }),

/***/ "./src/app/patinet-view/patinet-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/patinet-view/patinet-view.component.ts ***!
  \********************************************************/
/*! exports provided: PatinetViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatinetViewComponent", function() { return PatinetViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PatinetViewComponent = /** @class */ (function () {
    function PatinetViewComponent() {
    }
    PatinetViewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PatinetViewComponent.prototype, "patient", void 0);
    PatinetViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patinet-view',
            template: __webpack_require__(/*! ./patinet-view.component.html */ "./src/app/patinet-view/patinet-view.component.html"),
            styles: [__webpack_require__(/*! ./patinet-view.component.scss */ "./src/app/patinet-view/patinet-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PatinetViewComponent);
    return PatinetViewComponent;
}());



/***/ }),

/***/ "./src/app/queue-min/queue-min.component.html":
/*!****************************************************!*\
  !*** ./src/app/queue-min/queue-min.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"titel\">\n  <app-card-title titel=\"Patients queue\" icon=\"launch\" (onClick)=\"maximaize()\"></app-card-title>\n</div>\n<mat-list>\n\n  <mat-list-item *ngFor=\"let queue of queues\">\n    <span id=\"id\"><pre>{{(queue)?.patient.reg_id}}</pre></span>\n    <i class=\"right small secondery\">{{(queue)?.humanWaitingTime}}</i>\n  </mat-list-item> \n</mat-list>\n<div class=\"center\" *ngIf=\"queues.length == 0\" style=\"margin: 24px 0px; width: 100%; opacity: 0.8\">\n  <h6><strong class=\"secondery center\"><B>There is no patient in the queue</B></strong></h6>\n</div>"

/***/ }),

/***/ "./src/app/queue-min/queue-min.component.scss":
/*!****************************************************!*\
  !*** ./src/app/queue-min/queue-min.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titel {\n  width: 100%;\n  margin-bottom: 16px; }\n\n.mat-lit, .mat-list .mat-list-item {\n  width: 100%;\n  height: 28px; }\n\n.mat-lit .mat-list-item-content, .mat-list .mat-list-item .mat-list-item-content {\n    padding: 0px !important; }\n\n.mat-lit i, .mat-list .mat-list-item i {\n    position: absolute;\n    right: 0px; }\n\n.mat-lit #id, .mat-list .mat-list-item #id {\n    font-size: 1rem; }\n\n.mat-list-item-content {\n  padding: 0px !important; }\n"

/***/ }),

/***/ "./src/app/queue-min/queue-min.component.ts":
/*!**************************************************!*\
  !*** ./src/app/queue-min/queue-min.component.ts ***!
  \**************************************************/
/*! exports provided: QueueMinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueMinComponent", function() { return QueueMinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_patient_queue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/patient-queue.service */ "./src/app/service/patient-queue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueueMinComponent = /** @class */ (function () {
    function QueueMinComponent(_queue, _router) {
        this._queue = _queue;
        this._router = _router;
        this.queues = [];
        this.options = [
            { icon: "", text: "one", value: 1, data: "" },
            { icon: "", text: "two", value: 2, data: "" },
            { icon: "", text: "three", value: 3, data: "" },
            { icon: "", text: "for", value: 4, data: "" },
        ];
    }
    Object.defineProperty(QueueMinComponent.prototype, "loadTriggr", {
        set: function (value) {
            this.load();
        },
        enumerable: true,
        configurable: true
    });
    QueueMinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.load();
        setInterval(function () {
            _this.load();
        }, 10000);
        //console.log(this.options); 
    };
    QueueMinComponent.prototype.load = function () {
        var _this = this;
        this._queue.queue_list(7).subscribe(function (responce) {
            _this.queues = responce;
        });
    };
    QueueMinComponent.prototype.maximaize = function () {
        this._router.navigate(['/queue']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], QueueMinComponent.prototype, "loadTriggr", null);
    QueueMinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-queue-min',
            template: __webpack_require__(/*! ./queue-min.component.html */ "./src/app/queue-min/queue-min.component.html"),
            styles: [__webpack_require__(/*! ./queue-min.component.scss */ "./src/app/queue-min/queue-min.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_patient_queue_service__WEBPACK_IMPORTED_MODULE_1__["PatientQueueService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QueueMinComponent);
    return QueueMinComponent;
}());



/***/ }),

/***/ "./src/app/queue/queue-datasource.ts":
/*!*******************************************!*\
  !*** ./src/app/queue/queue-datasource.ts ***!
  \*******************************************/
/*! exports provided: QueueDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueDataSource", function() { return QueueDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var QueueDataSource = /** @class */ (function (_super) {
    __extends(QueueDataSource, _super);
    function QueueDataSource(paginator, sort, data) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = data;
        return _this;
    }
    QueueDataSource.prototype.connect = function () {
        var _this = this;
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    QueueDataSource.prototype.disconnect = function () { };
    QueueDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    QueueDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            var a_name = (a.patient.first_name + " " + a.patient.father_name + " " + a.patient.grand_father_name);
            var b_name = (b.patient.first_name + " " + b.patient.father_name + " " + b.patient.grand_father_name);
            switch (_this.sort.active) {
                case 'reg_id': return compare(a.patient.reg_id, b.patient.reg_id, isAsc);
                case 'name': return compare(a_name, b_name, isAsc);
                case 'humanWaitingTime': return compare(+a.humanWaitingTime, +b.humanWaitingTime, isAsc);
                default: return 0;
            }
        });
    };
    return QueueDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/queue/queue.component.css":
/*!*******************************************!*\
  !*** ./src/app/queue/queue.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/queue/queue.component.html":
/*!********************************************!*\
  !*** ./src/app/queue/queue.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"mat-elevation-z8 col m8 s12 offset-m2\">\n        <table mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n          <!-- Id Column -->\n          <ng-container matColumnDef=\"reg_id\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Registral id</th>\n            <td mat-cell *matCellDef=\"let row\">{{row.patient.reg_id}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n            <td mat-cell *matCellDef=\"let row\">{{row.patient.first_name}} {{row.patient.father_name}} {{row.patient.grand_father_name}} </td>\n          </ng-container>\n\n          <!-- Name Column -->\n          <ng-container matColumnDef=\"humanWaitingTime\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Arrival</th>\n            <td mat-cell *matCellDef=\"let row\">{{row.humanWaitingTime}}</td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n\n        <mat-paginator #paginator\n          [length]=\"dataSource.data.length\"\n          [pageIndex]=\"0\"\n          [pageSize]=\"50\"\n          [pageSizeOptions]=\"[25, 50, 100, 250]\">\n        </mat-paginator>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/queue/queue.component.ts":
/*!******************************************!*\
  !*** ./src/app/queue/queue.component.ts ***!
  \******************************************/
/*! exports provided: QueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueComponent", function() { return QueueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _queue_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queue-datasource */ "./src/app/queue/queue-datasource.ts");
/* harmony import */ var _service_patient_queue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/patient-queue.service */ "./src/app/service/patient-queue.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QueueComponent = /** @class */ (function () {
    function QueueComponent(_queue) {
        this._queue = _queue;
        this.displayedColumns = ['reg_id', 'name', 'humanWaitingTime'];
    }
    QueueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _queue_datasource__WEBPACK_IMPORTED_MODULE_2__["QueueDataSource"](this.paginator, this.sort, []);
        this._queue.queue_list().subscribe(function (responce) {
            _this.dataSource = new _queue_datasource__WEBPACK_IMPORTED_MODULE_2__["QueueDataSource"](_this.paginator, _this.sort, responce);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], QueueComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], QueueComponent.prototype, "sort", void 0);
    QueueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-queue',
            template: __webpack_require__(/*! ./queue.component.html */ "./src/app/queue/queue.component.html"),
            styles: [__webpack_require__(/*! ./queue.component.css */ "./src/app/queue/queue.component.css")]
        }),
        __metadata("design:paramtypes", [_service_patient_queue_service__WEBPACK_IMPORTED_MODULE_3__["PatientQueueService"]])
    ], QueueComponent);
    return QueueComponent;
}());



/***/ }),

/***/ "./src/app/recent-visits/recent-visits.component.html":
/*!************************************************************!*\
  !*** ./src/app/recent-visits/recent-visits.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card-title id=\"title\" titel=\"Recent visits to physician\" (onClick)=\"open()\" icon=\"launch\"></app-card-title>\n<mat-list style=\"width: 100%\"> \n  <mat-list-item *ngFor=\"let visit of visits\">\n   \n    <strong> {{visit.physician.first_name + \" \"+ visit.physician.father_name}}</strong>\n    <i class=\"secondery right\">{{visit.humanWaitingTime}}</i>\n  </mat-list-item>\n</mat-list>\n\n<div class=\"container center\" *ngIf=\"isEmpty\" style=\"margin: 24px 0px; width: 100%; opacity: 0.8\">\n  <h6><strong class=\"secondery center\"><B>This is first visit</B></strong></h6>\n</div>"

/***/ }),

/***/ "./src/app/recent-visits/recent-visits.component.scss":
/*!************************************************************!*\
  !*** ./src/app/recent-visits/recent-visits.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-item {\n  height: 36px !important; }\n  .mat-list-item i {\n    position: absolute;\n    right: 0px;\n    font-size: .9em; }\n  #titel {\n  margin-bottom: 16px; }\n"

/***/ }),

/***/ "./src/app/recent-visits/recent-visits.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/recent-visits/recent-visits.component.ts ***!
  \**********************************************************/
/*! exports provided: RecentVisitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentVisitsComponent", function() { return RecentVisitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_patient_queue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/patient-queue.service */ "./src/app/service/patient-queue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecentVisitsComponent = /** @class */ (function () {
    function RecentVisitsComponent(_queue, _router) {
        this._queue = _queue;
        this._router = _router;
        this.isThereVisit = false;
        this.isEmpty = true;
    }
    Object.defineProperty(RecentVisitsComponent.prototype, "patient", {
        set: function (value) {
            var _this = this;
            if (value) {
                this.reg_id = value.reg_id;
                this._queue.visits(value.reg_id, 5).subscribe(function (responce) {
                    _this.visits = responce;
                    _this.isThereVisit = true;
                    if (responce.length > 0) {
                        _this.isEmpty = false;
                    }
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    RecentVisitsComponent.prototype.ngOnInit = function () {
    };
    RecentVisitsComponent.prototype.open = function () {
        if (this.reg_id)
            this._router.navigate(['/visits/' + this.reg_id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RecentVisitsComponent.prototype, "patient", null);
    RecentVisitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recent-visits',
            template: __webpack_require__(/*! ./recent-visits.component.html */ "./src/app/recent-visits/recent-visits.component.html"),
            styles: [__webpack_require__(/*! ./recent-visits.component.scss */ "./src/app/recent-visits/recent-visits.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_patient_queue_service__WEBPACK_IMPORTED_MODULE_1__["PatientQueueService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RecentVisitsComponent);
    return RecentVisitsComponent;
}());



/***/ }),

/***/ "./src/app/registeration-form/registeration-form.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/registeration-form/registeration-form.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\" [class.hide]=\"!loading\" >\n  <div class=\"indeterminate\"></div>\n</div>\n<div class=\"form-conatiner\" [class.form-loading]=\"loading\">\n  <mat-icon matDialogClose class=\"right\" style=\"margin-right: 1.5em; cursor: pointer\" (click)=\"thisDialog.close()\" >close</mat-icon>\n  <header class=\"container\">\n      <h5>Create User </h5> \n  </header>\n  <div layout layout-fill ng-app=\"context-menu\">\n    \n  <form id=\"registartionForm\" class=\"container\" (ngSubmit)=\"onSubmit()\" [formGroup]='regForm' > \n    <div class=\"row\">\n      <mat-form-field class=\"col m12\">\n        <input matInput formControlName=\"worker_id\" placeholder=\"worker_id\" class=\"browser-default uppercase\"> \n        <mat-error *ngIf=\"worker_id.invalid && worker_id.touched\">\n          This field is required\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field  class=\"col m6\">\n        <input matInput formControlName=\"first_name\" placeholder=\"First Name\" class=\"capitalize\">\n       <mat-error *ngIf=\"first_name.invalid && first_name.touched\">\n          This field is required\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"col m6\">\n        <input matInput formControlName='father_name' placeholder=\"Father Name\" class=\"capitalize\">\n        <mat-error *ngIf=\"father_name.invalid && father_name.touched\">\n          This field is required\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"col m12\">\n        <input matInput formControlName=\"grand_father_name\" placeholder=\"Grand Father Name\" class=\"capitalize\"> \n        <mat-error *ngIf=\"grand_father_name.invlaid && grand_father_name.touched\">\n          This field is required\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"col m6\">\n        <mat-select formControlName=\"gender\" placeholder=\"Gender\">\n          <mat-option value=\"Male\">Male</mat-option>\n          <mat-option value=\"Female\">Female</mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"gender.invlaid && gender.touched\">\n          This field is required\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"col m6\">\n        <mat-select  formControlName=\"role_id\" placeholder=\"Role\">\n          <mat-option *ngFor=\"let _role of data.roles\" [value]=\"_role.id\">\n            {{_role.name}}\n          </mat-option>\n        </mat-select>\n       \n        <mat-error *ngIf=\"role_id.invlaid && role_id.touched\">\n          This field is required\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"col m12\">\n        <input matInput formControlName=\"email\" placeholder=\"email\"> \n        <mat-error *ngIf=\"email.errors?.required && email.touched\">\n          This field is required\n        </mat-error>\n        <mat-error *ngIf=\"email.errors?.email && email.touched\">\n          You have provided invaild email\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"col m12\">\n        <input matInput formControlName=\"phone\" placeholder=\"phone\" > \n        <mat-error *ngIf=\"phone.invalid && phone.touched\">\n          This field is required\n        </mat-error>\n      </mat-form-field> \n\n      <div class=\"col m12\">\n        <button type=\"submit\" [disabled]='regForm.invalid' class=\"weves-effect weves-light btn blue white-text right\">Submit</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/registeration-form/registeration-form.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/registeration-form/registeration-form.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registeration-form/registeration-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/registeration-form/registeration-form.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationFormComponent", function() { return RegisterationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/role.service */ "./src/app/service/role.service.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_common_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/common-message.service */ "./src/app/service/common-message.service.ts");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/User */ "./src/app/model/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var RegisterationFormComponent = /** @class */ (function () {
    function RegisterationFormComponent(thisDialog, data, formBuilder, _route, _user, _message) {
        this.thisDialog = thisDialog;
        this.data = data;
        this.formBuilder = formBuilder;
        this._route = _route;
        this._user = _user;
        this._message = _message;
        this.loading = false;
        this.regOprationMode = 'new';
    }
    Object.defineProperty(RegisterationFormComponent.prototype, "value", {
        set: function (user) {
            this.regForm.setValue(user);
        },
        enumerable: true,
        configurable: true
    });
    RegisterationFormComponent.prototype.ngOnInit = function () {
        this.regForm = this.formBuilder.group({
            id: [''],
            worker_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            father_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            grand_father_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            role_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        if (typeof this.data.user !== 'undefined') {
            this.regForm.patchValue(this.data.user);
            this.regOprationMode = 'update';
        }
    };
    RegisterationFormComponent.prototype.onSubmit = function () {
        this.loading = true;
        if (this.regOprationMode != 'update') {
            this._new();
        }
        else {
            this.update();
        }
    };
    RegisterationFormComponent.prototype._new = function () {
        var _this = this;
        this._user.postCreateUser(this.regForm.value).subscribe(function (responce) {
            // window.location.href="/user"; 
            _this._route.navigate(['/' + responce.worker_id]);
            _this.thisDialog.close({ responce: true, opration: 'create', data: responce });
            _this._message.httpSuccess('created account for <b> ' + responce.first_name);
        }, function (error) {
            _this.loading = false;
            _this._message.httpError({ responce: false, operation: 'create', data: error });
        });
    };
    RegisterationFormComponent.prototype.update = function () {
        var _this = this;
        this._user.updateUser(this.regForm.value).subscribe(function (responce) {
            //window.location.href="/user"; 
            _this.thisDialog.close({ responce: true, opration: 'update', data: responce });
            _this._message.httpSuccess('created account for <b> ' + responce.first_name);
        }, function (error) {
            _this.loading = false;
            _this._message.httpError({ responce: false, operation: 'update', data: error });
        });
    };
    Object.defineProperty(RegisterationFormComponent.prototype, "worker_id", {
        get: function () { return this.regForm.get("worker_id"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterationFormComponent.prototype, "first_name", {
        get: function () { return this.regForm.get("first_name"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterationFormComponent.prototype, "father_name", {
        get: function () { return this.regForm.get("father_name"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterationFormComponent.prototype, "grand_father_name", {
        get: function () { return this.regForm.get("grand_father_name"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterationFormComponent.prototype, "gender", {
        get: function () { return this.regForm.get("gender"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterationFormComponent.prototype, "role_id", {
        get: function () { return this.regForm.get("role_id"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterationFormComponent.prototype, "email", {
        get: function () { return this.regForm.get("email"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterationFormComponent.prototype, "phone", {
        get: function () { return this.regForm.get("phone"); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_User__WEBPACK_IMPORTED_MODULE_7__["User"]),
        __metadata("design:paramtypes", [_model_User__WEBPACK_IMPORTED_MODULE_7__["User"]])
    ], RegisterationFormComponent.prototype, "value", null);
    RegisterationFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registeration-form',
            template: __webpack_require__(/*! ./registeration-form.component.html */ "./src/app/registeration-form/registeration-form.component.html"),
            styles: [__webpack_require__(/*! ./registeration-form.component.scss */ "./src/app/registeration-form/registeration-form.component.scss")],
            providers: [_service_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"], _service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]],
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _service_common_message_service__WEBPACK_IMPORTED_MODULE_6__["CommonMessageService"]])
    ], RegisterationFormComponent);
    return RegisterationFormComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _change_password_route_change_password_route_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password-route/change-password-route.component */ "./src/app/change-password-route/change-password-route.component.ts");
/* harmony import */ var _queue_queue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queue/queue.component */ "./src/app/queue/queue.component.ts");
/* harmony import */ var _visits_visits_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visits/visits.component */ "./src/app/visits/visits.component.ts");
/* harmony import */ var _upload_profile_pic_route_route_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload_profile_pic/route/route.component */ "./src/app/upload_profile_pic/route/route.component.ts");
/* harmony import */ var _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders-list/orders-list.component */ "./src/app/orders-list/orders-list.component.ts");
/* harmony import */ var _ordered_drugs_ordered_drugs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ordered-drugs/ordered-drugs.component */ "./src/app/ordered-drugs/ordered-drugs.component.ts");









var appRoutes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_1__["UsersComponent"] },
    { path: 'drugs', component: _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_7__["OrdersListComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"] },
    //{path: ':worker_id', component: UserProfileRouteComponent}, 
    { path: 'queue', component: _queue_queue_component__WEBPACK_IMPORTED_MODULE_4__["QueueComponent"] },
    { path: 'visits/:reg_id', component: _visits_visits_component__WEBPACK_IMPORTED_MODULE_5__["VisitsComponent"] },
    { path: 'search/:reg_id', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'settings/change profile picture', component: _upload_profile_pic_route_route_component__WEBPACK_IMPORTED_MODULE_6__["RouteComponent"] },
    { path: 'settings/change password', component: _change_password_route_change_password_route_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordRouteComponent"] },
    { path: 'ordered drugs/:order_id', component: _ordered_drugs_ordered_drugs_component__WEBPACK_IMPORTED_MODULE_8__["OrderedDrugsComponent"] },
];


/***/ }),

/***/ "./src/app/service/common-message.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/common-message.service.ts ***!
  \***************************************************/
/*! exports provided: CommonMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonMessageService", function() { return CommonMessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonMessageService = /** @class */ (function () {
    function CommonMessageService() {
    }
    CommonMessageService.prototype.httpError = function (error) {
        var message = '';
        if (error.status == 0)
            message = "Error: Please check your connection!";
        else if (error.status == 406)
            message = "Error: " + error.message;
        else if (error.status == 500)
            message = "Error: we have got some problem please try again letter";
        else
            message = "Some error occured";
        M.toast({
            classes: 'red white-text',
            html: '<strong>' + message + '</strong>'
        });
    };
    CommonMessageService.prototype.httpSuccess = function (message) {
        if (message === void 0) { message = "made the request"; }
        M.toast({
            classes: 'green white-text',
            // @ts-ignore
            html: "<strong>You have succefully " + message + " </b></strong>"
        });
    };
    CommonMessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CommonMessageService);
    return CommonMessageService;
}());



/***/ }),

/***/ "./src/app/service/order.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/order.service.ts ***!
  \******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_RootURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/RootURL */ "./src/app/model/RootURL.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = /** @class */ (function () {
    function OrderService(_http) {
        this._http = _http;
        this.root = _model_RootURL__WEBPACK_IMPORTED_MODULE_2__["RootURL"];
    }
    OrderService.prototype.newOrder = function (orders) {
        var URL = this.root + "/ajax/post/order/new";
        return this._http.post(URL, { orders: orders });
    };
    OrderService.prototype.getOrderOfPharmacy = function () {
        var URL = this.root + "/ajax/get/order/get order to store";
        return this._http.get(URL);
    };
    OrderService.prototype.getUserOrders = function () {
        var URL = this.root + "/ajax/get/order/user orders";
        return this._http.get(URL);
    };
    OrderService.prototype.orderedDrugs = function (order_id) {
        var URL = this.root + "/ajax/get/order/ordered drugs/" + order_id;
        return this._http.get(URL);
    };
    OrderService.prototype.getOrders = function () {
        var URL = this.root + "/ajax/get/order/get all";
        return this._http.get(URL);
    };
    OrderService.prototype.autorize = function (autorizedOrders) {
        var URL = this.root + "/ajax/update/order/autorize";
        return this._http.put(URL, autorizedOrders);
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/service/patient-queue.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/patient-queue.service.ts ***!
  \**************************************************/
/*! exports provided: PatientQueueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientQueueService", function() { return PatientQueueService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_RootURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/RootURL */ "./src/app/model/RootURL.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientQueueService = /** @class */ (function () {
    function PatientQueueService(_http) {
        this._http = _http;
        this.root = _model_RootURL__WEBPACK_IMPORTED_MODULE_2__["RootURL"];
    }
    PatientQueueService.prototype.queue = function (patient_id) {
        var URL = this.root + "/ajax/post/queue/add/" + patient_id;
        return this._http.post(URL, {});
    };
    PatientQueueService.prototype.dequeue = function (patient_id) {
        var URL = this.root + "/ajax/post/queue/remove" + patient_id;
        return this._http.put(URL, {});
    };
    PatientQueueService.prototype.remove = function (patinet_id) {
        var URL = this.root + "/ajax/delete/queue/" + patinet_id;
        return this._http.delete(URL, {});
    };
    PatientQueueService.prototype.visits = function (patient_regId, limit) {
        if (limit === void 0) { limit = -1; }
        var URL = this.root + "/ajax/get/queue/visits/" + patient_regId + "/" + limit;
        return this._http.get(URL);
    };
    PatientQueueService.prototype.queue_list = function (limit) {
        if (limit === void 0) { limit = -1; }
        var URL = this.root + "/ajax/get/queue/patients in queue/" + limit;
        return this._http.get(URL);
    };
    PatientQueueService.prototype.isQueued = function (patient_id) {
        var URL = this.root + "/ajax/get/queue/is in queue/" + patient_id;
        return this._http.get(URL);
    };
    PatientQueueService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PatientQueueService);
    return PatientQueueService;
}());



/***/ }),

/***/ "./src/app/service/role.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/role.service.ts ***!
  \*****************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_RootURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/RootURL */ "./src/app/model/RootURL.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleService = /** @class */ (function () {
    function RoleService(http) {
        this.http = http;
        this.root = _model_RootURL__WEBPACK_IMPORTED_MODULE_2__["RootURL"];
    }
    RoleService.prototype.getRoles = function () {
        var $url = this.root + "/ajax/get/roles except admin";
        return this.http.get($url);
    };
    RoleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RoleService);
    return RoleService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_RootURL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/RootURL */ "./src/app/model/RootURL.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.root = _model_RootURL__WEBPACK_IMPORTED_MODULE_2__["RootURL"];
    }
    UserService.prototype.postCreateUser = function (data) {
        var $url = this.root + "/ajax/post/create user";
        return this.http.post($url, data);
    };
    UserService.prototype.updateUser = function (data) {
        var $url = this.root + "/ajax/update/user";
        return this.http.put($url, data);
    };
    UserService.prototype.authUser = function () {
        var $url = this.root + "/ajax/get/auth user";
        return this.http.get($url);
    };
    UserService.prototype.getUsers = function (pagination, from) {
        if (pagination === void 0) { pagination = 25; }
        if (from === void 0) { from = 1; }
        var $url = this.root + "/ajax/get/users";
        return this.http.get($url);
    };
    UserService.prototype.totalUsers = function () {
        var $url = this.root + "/ajax/get/total users";
        return this.http.get($url);
    };
    UserService.prototype.userProfile = function (workerId) {
        var $url = this.root + "/ajax/get/user profile/" + workerId;
        return this.http.get($url);
    };
    UserService.prototype.deleteUser = function (id) {
        var $url = this.root + "/ajax/delete/user/" + id;
        return this.http.delete($url);
    };
    UserService.prototype.currentPassword = function (password) {
        var $url = this.root + "/ajax/post/isCurrentPassword";
        return this.http.post($url, { currentPassword: password });
    };
    UserService.prototype.changePassword = function (current, newPassword) {
        var $url = this.root + "/ajax/update/password";
        return this.http.put($url, { currentPassword: current, newPassword: newPassword });
    };
    UserService.prototype.uploadPic = function (img) {
        var $url = this.root + "/ajax/file/upload/profile pic";
        var fd = new FormData();
        fd.append('image', img, img.name);
        return this.http.post($url, fd);
    };
    UserService.prototype.logout = function () {
        var $url = this.root + "/ajax/post/logout";
        return this.http.post($url, {});
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s12 m6 l6 offset-m3 offset-l3\">\n      <mat-card>\n        <mat-list>\n          <mat-list-item routerLink=\"change password\" class=\"waves-effect\"><i class=\"material-icons\">vpn_key</i> <p>Change password</p></mat-list-item>\n          <mat-list-item routerLink=\"change profile picture\" class=\"waves-effect\"><i class=\"material-icons\">account_circle</i><p>Change profile picture</p></mat-list-item>\n          <mat-list-item (click)=\"goto('change password')\" class=\"waves-effect\"><i class=\"material-icons\">vpn_key</i></mat-list-item>\n          <mat-list-item (click)=\"goto('change password')\" class=\"waves-effect\"><i class=\"material-icons\">vpn_key</i></mat-list-item>\n        </mat-list>\n      </mat-card>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-item p {\n  margin-left: 7%; }\n\n.mat-card {\n  padding: 0px;\n  padding-top: 6%;\n  padding-bottom: 6%;\n  margin-top: 15%; }\n\n.mat-list-item {\n  padding-left: 5%; }\n\n.mat-list-item:hover {\n  background-color: #dbdbdb; }\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(_route) {
        this._route = _route;
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.goto = function (loc) {
        this._route.navigate(['/settings/' + loc]);
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/setup-dialog/setup-dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/setup-dialog/setup-dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf=\"step == 0\">\n    <app-change-password (status)=\"updateStatus($event)\"></app-change-password>\n  </div>\n  <div class=\"row\" *ngIf=\"step == 1\">\n    <app-upload (status)=\"updateStatus($event)\"></app-upload>\n  </div>\n  <div class=\"row\" *ngIf=\"step == 2\">\n    <section id=\"welcome\">\n      <h3>Well come</h3>\n      <button mat-flat-button color=\"primary\" (click)=\"dialogRef.close()\">CONTINUE</button>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/setup-dialog/setup-dialog.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/setup-dialog/setup-dialog.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#welcome {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/setup-dialog/setup-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/setup-dialog/setup-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: SetupDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupDialogComponent", function() { return SetupDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SetupDialogComponent = /** @class */ (function () {
    function SetupDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    SetupDialogComponent.prototype.ngOnInit = function () {
        this.step = this.data.step;
    };
    SetupDialogComponent.prototype.updateStatus = function (status) {
        if (status) {
            this.step++;
        }
    };
    SetupDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup-dialog',
            template: __webpack_require__(/*! ./setup-dialog.component.html */ "./src/app/setup-dialog/setup-dialog.component.html"),
            styles: [__webpack_require__(/*! ./setup-dialog.component.scss */ "./src/app/setup-dialog/setup-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], SetupDialogComponent);
    return SetupDialogComponent;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.html":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"slide-out\" class=\"sidenav\">\n    <li><div class=\"user-view\">\n      <div class=\"background\">\n        <img [src]=\"profilePic\">\n      </div>\n      <a href=\"#user\"><img class=\"circle\" [src]=\"profilePic\"></a>\n      <a href=\"#name\"><span class=\"white-text name\">{{($auth)?.first_name}} {{($auth)?.father_name}}</span></a>\n      <a href=\"#email\"><span class=\"white-text email\">{{($auth)?.worker_id}}</span></a>\n    </div></li>\n    <li><a href=\"#\" style=\"padding-right: 0px\"><i class=\"material-icons\">mail_outline</i>{{ ($auth)?.email }}</a></li>\n    <li><a href=\"#\"><i class=\"material-icons\">phone</i>{{ ($auth)?.phone }}</a></li>\n    <li><div class=\"divider\"></div></li>\n    <li><a class=\"subheader\"></a></li>\n    <li><a class=\"waves-effect\" routerLink=\"/settings\"><i class=\"material-icons\">settings</i>Setings</a></li>\n    <li><a class=\"waves-effect\" (click)=\"logout()\"><i class=\"material-icons\">launch</i>Log out</a></li>\n  </ul>"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background > img {\n  position: relative;\n  width: 300px;\n  filter: blur(5px);\n  -webkit-filter: blur(5px); }\n\n.user-view .white-text {\n  font-size: 1.1em;\n  text-shadow: 0 0 11px #000, 0 0 15px #000; }\n"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/User */ "./src/app/model/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(_user) {
        this._user = _user;
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.logout = function () {
        this._user.logout().subscribe(function (success) {
            window.location.href = success.redirectTo;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('profileImageContainer'),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "profileImageContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_User__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], SidenavComponent.prototype, "$auth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SidenavComponent.prototype, "profilePic", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/sidenav/sidenav.component.scss")],
            providers: [_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
        }),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/upload_profile_pic/route/route.component.html":
/*!***************************************************************!*\
  !*** ./src/app/upload_profile_pic/route/route.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s12 m6 l6 offset-m3 offset-l3\">\n        <mat-card class=\"form-container\" >\n          <div class=\"progress\" [class.hide]=\"!loading\" >\n            <div class=\"indeterminate\"></div>\n          </div>\n          <app-upload (status)=\"onUpload()\"></app-upload>\n        </mat-card>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/upload_profile_pic/route/route.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/upload_profile_pic/route/route.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  margin-top: 15%; }\n"

/***/ }),

/***/ "./src/app/upload_profile_pic/route/route.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/upload_profile_pic/route/route.component.ts ***!
  \*************************************************************/
/*! exports provided: RouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponent", function() { return RouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouteComponent = /** @class */ (function () {
    function RouteComponent() {
        this.loading = false;
    }
    RouteComponent.prototype.ngOnInit = function () {
    };
    RouteComponent.prototype.onUpload = function (observ) {
        this.loading = ('waiting' == observ);
    };
    RouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route',
            template: __webpack_require__(/*! ./route.component.html */ "./src/app/upload_profile_pic/route/route.component.html"),
            styles: [__webpack_require__(/*! ./route.component.scss */ "./src/app/upload_profile_pic/route/route.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RouteComponent);
    return RouteComponent;
}());



/***/ }),

/***/ "./src/app/upload_profile_pic/upload/upload.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/upload_profile_pic/upload/upload.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div id=\"profile\">\n    <img [src]=\"pic\"/>\n  </div>\n  <input type=\"file\" hidden #image (change)=\"selected($event)\">\n  <button mat-flat-button (click)=\"image.click()\" color=\"primary\">Upload profile picture</button>\n</section>"

/***/ }),

/***/ "./src/app/upload_profile_pic/upload/upload.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/upload_profile_pic/upload/upload.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  width: 100%;\n  text-align: center; }\n\n#profile img {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/upload_profile_pic/upload/upload.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/upload_profile_pic/upload/upload.component.ts ***!
  \***************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadComponent = /** @class */ (function () {
    function UploadComponent(_user) {
        this._user = _user;
        this.pic = "/storage/avatar.jpg";
        this.status = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._user.authUser().subscribe(function (result) {
            _this.pic = result.profile_pic;
        });
    };
    UploadComponent.prototype.selected = function (img) {
        var _this = this;
        var obs = this._user.uploadPic(img.target.files[0]);
        this.status.emit('waiting');
        obs.subscribe(function (user) {
            _this.pic = user.profile_pic;
            _this.status.emit(true);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UploadComponent.prototype, "status", void 0);
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/upload_profile_pic/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/upload_profile_pic/upload/upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/user-profile-modal/user-profile-modal.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/user-profile-modal/user-profile-modal.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-profile [user]='data.user' ></app-user-profile>"

/***/ }),

/***/ "./src/app/user-profile-modal/user-profile-modal.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/user-profile-modal/user-profile-modal.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  padding-left: 0px;\n  padding-right: 0px; }\n"

/***/ }),

/***/ "./src/app/user-profile-modal/user-profile-modal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/user-profile-modal/user-profile-modal.component.ts ***!
  \********************************************************************/
/*! exports provided: UserProfileModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModalComponent", function() { return UserProfileModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var UserProfileModalComponent = /** @class */ (function () {
    function UserProfileModalComponent(thisDialog, data) {
        this.thisDialog = thisDialog;
        this.data = data;
    }
    UserProfileModalComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    UserProfileModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile-modal',
            template: __webpack_require__(/*! ./user-profile-modal.component.html */ "./src/app/user-profile-modal/user-profile-modal.component.html"),
            styles: [__webpack_require__(/*! ./user-profile-modal.component.scss */ "./src/app/user-profile-modal/user-profile-modal.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], UserProfileModalComponent);
    return UserProfileModalComponent;
}());



/***/ }),

/***/ "./src/app/user-profile-route/user-profile-route.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/user-profile-route/user-profile-route.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"container\">\n  <app-user-profile [user]=\"user\" ></app-user-profile>\n</mat-card>"

/***/ }),

/***/ "./src/app/user-profile-route/user-profile-route.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/user-profile-route/user-profile-route.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  padding-left: 0px;\n  padding-right: 0px;\n  margin-top: 10%; }\n"

/***/ }),

/***/ "./src/app/user-profile-route/user-profile-route.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/user-profile-route/user-profile-route.component.ts ***!
  \********************************************************************/
/*! exports provided: UserProfileRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileRouteComponent", function() { return UserProfileRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileRouteComponent = /** @class */ (function () {
    function UserProfileRouteComponent(route, _user) {
        var _this = this;
        this.route = route;
        this._user = _user;
        this.route.params.subscribe(function (param) {
            _this._user.userProfile(param.worker_id).subscribe(function (responce) {
                _this.user = responce;
            });
        });
    }
    UserProfileRouteComponent.prototype.ngOnInit = function () {
    };
    UserProfileRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile-route',
            template: __webpack_require__(/*! ./user-profile-route.component.html */ "./src/app/user-profile-route/user-profile-route.component.html"),
            styles: [__webpack_require__(/*! ./user-profile-route.component.scss */ "./src/app/user-profile-route/user-profile-route.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserProfileRouteComponent);
    return UserProfileRouteComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\" style=\"margin:auto\" id=\"primary-profile\"> \n    <div class=\"row center-align\" styel=\"margin-bottom\" >\n        <div class=\"col m6 s12 align-right\" id=\"primary-profile-pic\">\n            <img [src]=\"'http://clinic/img/'+(user)?.profile_pic\" alt=\"\" class=\"profile-pic circle responsive-img\"> \n        </div>\n        <div class=\"col m6 s12 align-left\" id=\"primary-profile-text\" >\n            <div>\n                <strong> {{(user)?.first_name +\" \"+ (user)?.father_name +\" \"+ (user)?.grand_father_name | uppercase }}</strong>\n                <span class=\"secondery\" style=\"display: block\">{{ (((user)?.gender) == 'male')?'He ':'She ' +' workes as '+ (user)?.role }}</span>\n                <span class=\"small secondery\" style=\"display:block\">Woeker id {{ (user)?.worker_id }}</span>   \n            </div>              \n        </div>\n        \n    </div>\n    <div class=\"row\" id=\"personal-profile\">\n\n        <div class=\"col m6 s12\">\n            <div>\n                \n                <div><span class=\"material-icons\">mail_outline</span></div><div><span>{{(user)?.email}}</span></div> \n            </div>\n            \n        </div>\n        <div class=\"col m6 s12\"> \n            <div>\n                \n                    <div><span class=\"material-icons\">phone</span> </div><div><span>{{(user)?.phone}}</span></div>\n            </div>\n            \n        </div>\n    </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-pic {\n  width: 150px; }\n\n.row:first-child {\n  margin-bottom: 0px; }\n\n#primary-profile-text {\n  text-align: left; }\n\n#primary-profile-pic {\n  text-align: right; }\n\n#personal-profile {\n  margin-top: 5%; }\n\n#personal-profile div.col {\n    padding: 3px; }\n\n#personal-profile div.col > div {\n    border: 1px solid #ddd;\n    border-radius: 3px;\n    padding: 14px; }\n\n#personal-profile strong {\n    line-height: 2px;\n    padding-left: 4px; }\n\n@media only screen and (max-width: 768px) {\n  #primary-profile-text {\n    text-align: center; }\n  #primary-profile-pic {\n    text-align: center; } }\n\n@media only screen and (min-width: 601px) {\n  #primary-profile-text {\n    text-align: left;\n    position: relative;\n    height: 150px; }\n    #primary-profile-text div {\n      position: absolute;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%); } }\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/User */ "./src/app/model/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(route, _user) {
        this.route = route;
        this._user = _user;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_User__WEBPACK_IMPORTED_MODULE_3__["User"])
    ], UserProfileComponent.prototype, "user", void 0);
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user-table/user-table-datasource.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-table/user-table-datasource.ts ***!
  \*****************************************************/
/*! exports provided: UserTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTableDataSource", function() { return UserTableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var UserTableDataSource = /** @class */ (function (_super) {
    __extends(UserTableDataSource, _super);
    function UserTableDataSource(paginator, sort, data) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = data;
        return _this;
    }
    UserTableDataSource.prototype.connect = function () {
        var _this = this;
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    UserTableDataSource.prototype.disconnect = function () { };
    UserTableDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    UserTableDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'name': return compare(a.first_name, b.first_name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                case 'role': return compare(a.role, b.role, isAsc);
                case 'gender': return compare(a.gender, b.gender, isAsc);
                default: return 0;
            }
        });
    };
    return UserTableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/user-table/user-table.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-table/user-table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conatiner\" id=\"search\">\n  <form id=\"registartionForm\" class=\"container\" [formGroup]='searchForm' > \n      <table>\n        <tr>\n          <td style=\"width: 75%;\">\n            <mat-form-field>\n            <input matInput formControlName=\"search\" placeholder=\"Search\" class=\"browser-default\"> \n            </mat-form-field>\n          </td>\n          <td width=\"25%\">\n            <mat-form-field>\n              <mat-select placeholder=\"Filter by role\" formControlName=\"role\">\n                <mat-option value=\"\">All</mat-option>\n                <mat-option *ngFor=\"let role of roles\" [value]=\"role.id\">\n                  {{role.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n  </form>\n</div>\n<mat-card style=\"padding: 5%\" *ngIf=\"message.isThere\" id=\"tableMessage\">\n  <p class=\"container align-center larg\" [class]=\"(message)?.class\">{{(message)?.text}}</p>\n</mat-card>\n\n<div class=\"mat-elevation-z8\" id=\"users-table\" [hidden]=\"(message.isThere)\">\n   \n  <table mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n\n    <!-- Profile pic  Column -->\n    <ng-container matColumnDef=\"profile_pic\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>profile pic</th>\n      <td mat-cell *matCellDef=\"let row\"><img [src]=\"'/storage/'+row.profile_pic\" class=\"profile-pic circle reponsive-img\"/></td>\n    </ng-container>\n\n    <!-- Id Column -->\n    <ng-container matColumnDef=\"worker_id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Worker Id</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.worker_id}}</td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.first_name + \" \"+ row.father_name+ \" \" + row.grand_father_name}}</td>\n    </ng-container>\n        \n    <!-- Role Column -->\n    <ng-container matColumnDef=\"role\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Role</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.role}}</td>\n    </ng-container>\n\n    <!-- Gender Column -->\n    <ng-container matColumnDef=\"gender\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Gender</th>\n      <td mat-cell *matCellDef=\"let row\">{{row.gender}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" \n    [contextMenuTrigger]=\"contextMenu\" \n    [menuContext]=\"{items: menuItems, data: row }\"\n    (menuAction)=\"onContextMenu($event)\"\n    (click)=\"userProfile(row)\"\n    ></tr>\n  </table>\n\n  <mat-paginator #paginator\n    [length]=\"dataSource.data.length\"\n    [pageIndex]=\"0\"\n    [pageSize]=\"50\"\n    [pageSizeOptions]=\"[5, 50, 100, 250]\">\n  </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/user-table/user-table.component.scss":
/*!******************************************************!*\
  !*** ./src/app/user-table/user-table.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search {\n  margin-left: 5%;\n  margin-right: 5%; }\n  #search .mat-input-element {\n    font-size: 1.2em;\n    font-weight: 450; }\n  #search td {\n    padding-top: 0px;\n    padding-bottom: 0px; }\n  .mat-form-field-wrapper {\n  margin-bottom: 0px;\n  padding-bottom: 0px; }\n  #tableMessage {\n  padding: 5%;\n  text-align: center;\n  font-size: 1.2em; }\n  .profile-pic {\n  width: 40px;\n  height: 40px;\n  margin-top: 4px;\n  padding: 0px; }\n"

/***/ }),

/***/ "./src/app/user-table/user-table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-table/user-table.component.ts ***!
  \****************************************************/
/*! exports provided: UserTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTableComponent", function() { return UserTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-table-datasource */ "./src/app/user-table/user-table-datasource.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _registeration_form_registeration_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../registeration-form/registeration-form.component */ "./src/app/registeration-form/registeration-form.component.ts");
/* harmony import */ var _service_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/role.service */ "./src/app/service/role.service.ts");
/* harmony import */ var _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context-menu/context-menu.component */ "./src/app/context-menu/context-menu.component.ts");
/* harmony import */ var _user_profile_modal_user_profile_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-profile-modal/user-profile-modal.component */ "./src/app/user-profile-modal/user-profile-modal.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! string */ "./node_modules/string/lib/string.js");
/* harmony import */ var string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(string__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var UserTableComponent = /** @class */ (function () {
    function UserTableComponent(modal, _roles, _user, _formBuilder) {
        this.modal = modal;
        this._roles = _roles;
        this._user = _user;
        this._formBuilder = _formBuilder;
        this.contextMenu = _context_menu_context_menu_component__WEBPACK_IMPORTED_MODULE_7__["ContextMenuComponent"];
        this.message = {
            isThere: false,
            class: '',
            text: '',
        };
        this.menuItems = [
            { icon: 'edit', text: 'Edit' },
            { icon: 'visibility', text: 'View profile' },
            { icon: 'delete', text: 'Remove user' },
        ];
        this.displayedColumns = ["profile_pic", 'worker_id', 'name', 'role' /*, 'gender' , 'email' , 'phone'*/];
    }
    UserTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _user_table_datasource__WEBPACK_IMPORTED_MODULE_3__["UserTableDataSource"](this.paginator, this.sort, []);
        this._user.getUsers().subscribe(function (data) {
            _this.users = data;
            _this.dataSource = new _user_table_datasource__WEBPACK_IMPORTED_MODULE_3__["UserTableDataSource"](_this.paginator, _this.sort, data);
        });
        this._roles.getRoles().subscribe(function (result) {
            _this.roles = result;
        });
        this.searchForm = this._formBuilder.group({
            search: '',
            role: ''
        });
        this.searchForm.valueChanges.subscribe(function (key) {
            var filtered;
            if (key.role == '')
                filtered = _this.search(key.search);
            else
                filtered = _this.search(key.search).filter(function (v, i, a) { return v.role_id == key.role; });
            if (filtered.length == 0) {
                _this.message = { isThere: true, class: "danger-text", text: "No results found" };
            }
            else {
                _this.message.isThere = false;
            }
            _this.dataSource = new _user_table_datasource__WEBPACK_IMPORTED_MODULE_3__["UserTableDataSource"](_this.paginator, _this.sort, filtered);
        });
    };
    UserTableComponent.prototype.search = function (key) {
        key = key.toLowerCase();
        var start = this.users.filter(function (value, inxex, arr) {
            return string__WEBPACK_IMPORTED_MODULE_10__((value.worker_id).toLowerCase()).startsWith(key) ||
                string__WEBPACK_IMPORTED_MODULE_10__((value.first_name + " " + value.father_name + " " + value.grand_father_name).toLowerCase()).startsWith(key);
        });
        var contains = this.users.filter(function (value, index, arr) {
            return (string__WEBPACK_IMPORTED_MODULE_10__((value.worker_id).toLowerCase()).contains(key) ||
                string__WEBPACK_IMPORTED_MODULE_10__((value.first_name + " " + value.father_name + " " + value.grand_father_name).toLowerCase()).contains(key))
                &&
                    !(string__WEBPACK_IMPORTED_MODULE_10__((value.worker_id).toLowerCase()).startsWith(key) ||
                        string__WEBPACK_IMPORTED_MODULE_10__((value.first_name + " " + value.father_name + " " + value.grand_father_name).toLowerCase()).startsWith(key));
        });
        return start.concat(contains);
    };
    UserTableComponent.prototype.editUser = function (responce) {
        var _this = this;
        var registerDialog = this.modal.open(_registeration_form_registeration_form_component__WEBPACK_IMPORTED_MODULE_5__["RegisterationFormComponent"], {
            width: '600px',
            data: {
                roles: this.roles,
                user: responce.data
            },
        });
        registerDialog.afterClosed().subscribe(function (responce) {
            if (responce.responce) {
                var i = _this.users.findIndex(function (value) {
                    return (responce.data.id == value.id);
                });
                _this.users[i] = responce.data;
                _this.dataSource = new _user_table_datasource__WEBPACK_IMPORTED_MODULE_3__["UserTableDataSource"](_this.paginator, _this.sort, _this.users);
            }
        });
    };
    UserTableComponent.prototype.userProfile = function ($user) {
        return this.modal.open(_user_profile_modal_user_profile_modal_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileModalComponent"], {
            width: '600px',
            data: {
                user: $user
            },
        });
        // profileDialog.afterClosed().subscribe(
        //   responce => {
        //     console.log(responce) ; 
        //   }
        // ) ;
    };
    UserTableComponent.prototype.removeUser = function (responce) {
        var _this = this;
        var deleteDialog = this.modal.open(_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"], {
            data: {
                title: "Remove User",
                message: "Are you shure? Do you want to remove <b>" + responce.data.first_name + " " + responce.data.father_name + "</b>",
                dialog: "confirm",
                data: responce.data,
            }
        });
        deleteDialog.afterClosed().subscribe(function (confirmed) {
            if (confirmed.responce) {
                _this._user.deleteUser(confirmed.data.id).subscribe(function (responce) {
                    var newTableData = _this.users.filter(function (value, index, arr) {
                        return value != confirmed.data;
                    });
                    _this.dataSource = new _user_table_datasource__WEBPACK_IMPORTED_MODULE_3__["UserTableDataSource"](_this.paginator, _this.sort, newTableData);
                });
            }
        });
    };
    UserTableComponent.prototype.onContextMenu = function (responce) {
        switch (responce.index) {
            case 0:
                this.editUser(responce);
                break;
            case 1:
                this.userProfile(responce);
                break;
            case 2:
                this.removeUser(responce);
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], UserTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], UserTableComponent.prototype, "sort", void 0);
    UserTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-table',
            template: __webpack_require__(/*! ./user-table.component.html */ "./src/app/user-table/user-table.component.html"),
            styles: [__webpack_require__(/*! ./user-table.component.scss */ "./src/app/user-table/user-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _service_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"],
            _service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], UserTableComponent);
    return UserTableComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <app-user-table></app-user-table>\n</section> "

/***/ }),

/***/ "./src/app/users/users.component.scss":
/*!********************************************!*\
  !*** ./src/app/users/users.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.onContextMenu = function (e) {
        console.log(e);
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/visits/visits-datasource.ts":
/*!*********************************************!*\
  !*** ./src/app/visits/visits-datasource.ts ***!
  \*********************************************/
/*! exports provided: VisitsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitsDataSource", function() { return VisitsDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var VisitsDataSource = /** @class */ (function (_super) {
    __extends(VisitsDataSource, _super);
    function VisitsDataSource(paginator, sort, data) {
        var _this = _super.call(this) || this;
        _this.paginator = paginator;
        _this.sort = sort;
        _this.data = data;
        return _this;
    }
    VisitsDataSource.prototype.connect = function () {
        var _this = this;
        var dataMutations = [
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        this.paginator.length = this.data.length;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this.getPagedData(_this.getSortedData(_this.data.slice()));
        }));
    };
    VisitsDataSource.prototype.disconnect = function () { };
    VisitsDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    VisitsDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'physician': return compare(a.physician.first_name + " " + a.physician.father_name + " " + a.physician.grand_father_name, b.physician.first_name + " " + b.physician.father_name + " " + b.physician.grand_father_name, isAsc);
                case 'date': return compare(a.date, +b.date, isAsc);
                default: return 0;
            }
        });
    };
    return VisitsDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"]));

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/visits/visits.component.css":
/*!*********************************************!*\
  !*** ./src/app/visits/visits.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/visits/visits.component.html":
/*!**********************************************!*\
  !*** ./src/app/visits/visits.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <mat-card *ngIf=\"!(loaded && !error)\" class=\"container col s12 m8 offset-m2\">\n      <div *ngIf=\"!loaded\" class=\"center\">Loading...</div>\n      <div *ngIf=\"error\" class=\"center danger-text\"><b>Some error occured</b></div>\n    </mat-card>\n  </div>\n</div>\n<div class=\"container\" [hidden]=\"!(loaded && !error)\">\n  <div class=\"row\">\n    <div class=\"mat-elevation-z8 col s12 m8 offset-m2\">\n      <table mat-table #table [dataSource]=\"dataSource\" matSort aria-label=\"Elements\">\n        <!-- Id Column -->\n        <ng-container matColumnDef=\"date\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.date}}</td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"physician\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Physician</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.physician.first_name + \" \"+row.physician.father_name+\" \"+row.physician.grand_father_name}}</td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n\n      <mat-paginator #paginator\n        [length]=\"dataSource.data.length\"\n        [pageIndex]=\"0\"\n        [pageSize]=\"50\"\n        [pageSizeOptions]=\"[25, 50, 100, 250]\">\n      </mat-paginator>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/visits/visits.component.ts":
/*!********************************************!*\
  !*** ./src/app/visits/visits.component.ts ***!
  \********************************************/
/*! exports provided: VisitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitsComponent", function() { return VisitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _visits_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visits-datasource */ "./src/app/visits/visits-datasource.ts");
/* harmony import */ var _service_patient_queue_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/patient-queue.service */ "./src/app/service/patient-queue.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VisitsComponent = /** @class */ (function () {
    function VisitsComponent(_queue, _activeRoute) {
        this._queue = _queue;
        this._activeRoute = _activeRoute;
        this.displayedColumns = ['date', 'physician'];
        this.loaded = false;
        this.error = false;
    }
    VisitsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _visits_datasource__WEBPACK_IMPORTED_MODULE_2__["VisitsDataSource"](this.paginator, this.sort, []);
        this._activeRoute.params.subscribe(function (param) {
            _this._queue.visits(param.reg_id).subscribe(function (responce) {
                _this.dataSource = new _visits_datasource__WEBPACK_IMPORTED_MODULE_2__["VisitsDataSource"](_this.paginator, _this.sort, responce);
                _this.loaded = true;
                _this.error = false;
            }, function (error) {
                _this.loaded = true;
                _this.error = true;
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], VisitsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], VisitsComponent.prototype, "sort", void 0);
    VisitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visits',
            template: __webpack_require__(/*! ./visits.component.html */ "./src/app/visits/visits.component.html"),
            styles: [__webpack_require__(/*! ./visits.component.css */ "./src/app/visits/visits.component.css")]
        }),
        __metadata("design:paramtypes", [_service_patient_queue_service__WEBPACK_IMPORTED_MODULE_3__["PatientQueueService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], VisitsComponent);
    return VisitsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/lib/context-menu-injector.ts":
/*!******************************************!*\
  !*** ./src/lib/context-menu-injector.ts ***!
  \******************************************/
/*! exports provided: MenuPackage, MenuInjector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPackage", function() { return MenuPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuInjector", function() { return MenuInjector; });
var MenuPackage = /** @class */ (function () {
    function MenuPackage(menu, context) {
        this.menu = menu;
        this.context = context;
    }
    return MenuPackage;
}());

var MenuInjector = /** @class */ (function () {
    function MenuInjector(_activeContextMenu, _parentInjector, context) {
        this._activeContextMenu = _activeContextMenu;
        this._parentInjector = _parentInjector;
        this.context = context;
        this._menuContext = new MenuPackage(_activeContextMenu, context);
    }
    MenuInjector.prototype.get = function (token, notFoundValue, flags) {
        if (token === MenuPackage) {
            return this._menuContext;
        }
        return this._parentInjector.get(token, notFoundValue, flags);
    };
    return MenuInjector;
}());



/***/ }),

/***/ "./src/lib/context-menu-trigger.directive.ts":
/*!***************************************************!*\
  !*** ./src/lib/context-menu-trigger.directive.ts ***!
  \***************************************************/
/*! exports provided: ContextMenuTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuTriggerDirective", function() { return ContextMenuTriggerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _context_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context-menu.service */ "./src/lib/context-menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContextMenuTriggerDirective = /** @class */ (function () {
    function ContextMenuTriggerDirective(contextMenuService) {
        this.contextMenuService = contextMenuService;
        this.holdToDisplay = 1000;
        this.menuAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menuClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visible = false;
    }
    ContextMenuTriggerDirective.prototype.handleMenu = function ($event) {
        $event.preventDefault();
        this.menu = this.contextMenuService.show($event, this.contextMenuTrigger, this.menuContext, this.menuClose, this.menuAction);
        this.visible = true;
    };
    ContextMenuTriggerDirective.prototype.handleMouseDown = function ($event) {
        var _this = this;
        if (this.holdToDisplay >= 0) {
            $event.stopPropagation();
            $event.clientY = $event.touches[0].clientY;
            $event.clientX = $event.touches[0].clientX;
            this.mouseDownTimeoutId = setTimeout(function () { return _this.handleMenu($event); }, this.holdToDisplay);
        }
    };
    ContextMenuTriggerDirective.prototype.handleMouseUp = function () {
        clearTimeout(this.mouseDownTimeoutId);
    };
    ContextMenuTriggerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.menuClose.subscribe(function () { return _this.visible = false; });
    };
    ContextMenuTriggerDirective.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContextMenuTriggerDirective.prototype, "contextMenuTrigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContextMenuTriggerDirective.prototype, "menuContext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContextMenuTriggerDirective.prototype, "holdToDisplay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContextMenuTriggerDirective.prototype, "menuAction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContextMenuTriggerDirective.prototype, "menuClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], ContextMenuTriggerDirective.prototype, "handleMenu", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchstart', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ContextMenuTriggerDirective.prototype, "handleMouseDown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('touchend'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ContextMenuTriggerDirective.prototype, "handleMouseUp", null);
    ContextMenuTriggerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[contextMenuTrigger]',
            exportAs: 'contextMenuTrigger',
        }),
        __metadata("design:paramtypes", [_context_menu_service__WEBPACK_IMPORTED_MODULE_1__["ContextMenuService"]])
    ], ContextMenuTriggerDirective);
    return ContextMenuTriggerDirective;
}());



/***/ }),

/***/ "./src/lib/context-menu.module.ts":
/*!****************************************!*\
  !*** ./src/lib/context-menu.module.ts ***!
  \****************************************/
/*! exports provided: ContextMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuModule", function() { return ContextMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _context_menu_trigger_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context-menu-trigger.directive */ "./src/lib/context-menu-trigger.directive.ts");
/* harmony import */ var _context_submenu_trigger_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context-submenu-trigger.directive */ "./src/lib/context-submenu-trigger.directive.ts");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.component */ "./src/lib/menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ContextMenuModule = /** @class */ (function () {
    function ContextMenuModule() {
    }
    ContextMenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _context_menu_trigger_directive__WEBPACK_IMPORTED_MODULE_3__["ContextMenuTriggerDirective"],
                _context_submenu_trigger_directive__WEBPACK_IMPORTED_MODULE_4__["ContextSubmenuTriggerDirective"],
                _menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
            ],
            exports: [_context_menu_trigger_directive__WEBPACK_IMPORTED_MODULE_3__["ContextMenuTriggerDirective"], _context_submenu_trigger_directive__WEBPACK_IMPORTED_MODULE_4__["ContextSubmenuTriggerDirective"]],
            imports: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"]],
        })
    ], ContextMenuModule);
    return ContextMenuModule;
}());



/***/ }),

/***/ "./src/lib/context-menu.service.ts":
/*!*****************************************!*\
  !*** ./src/lib/context-menu.service.ts ***!
  \*****************************************/
/*! exports provided: ContextMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenuService", function() { return ContextMenuService; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _context_menu_injector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context-menu-injector */ "./src/lib/context-menu-injector.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContextMenuService = /** @class */ (function () {
    function ContextMenuService(overlay, scrollStrategy, _injector) {
        this.overlay = overlay;
        this.scrollStrategy = scrollStrategy;
        this._injector = _injector;
        this.menus = [];
        this.id = 0;
    }
    /**
     *
     * @param $event triggering event
     * @param menuComponent the component to be shown
     * @param submenu is a menu within a menu
     * @param level if submenu, what level
     */
    ContextMenuService.prototype.show = function ($event, menuComponent, context, menuClose, menuAction, submenu, level) {
        if (submenu === void 0) { submenu = false; }
        var target;
        if (!submenu) {
            this.closeAll();
            target = {
                getBoundingClientRect: function () { return ({
                    bottom: $event.clientY,
                    height: 0,
                    left: $event.clientX,
                    right: $event.clientX,
                    top: $event.clientY,
                    width: 0,
                }); },
            };
        }
        else {
            // close other submenus
            this.closeAll(undefined, level);
            target = $event.target;
        }
        var el = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"](target);
        var positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(el)
            .withFlexibleDimensions(false);
        if (!submenu) {
            positionStrategy.withPositions([
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'top',
                },
                {
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'bottom',
                },
                {
                    originX: 'end',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'top',
                },
                {
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'end',
                    overlayY: 'top',
                },
                {
                    originX: 'end',
                    originY: 'center',
                    overlayX: 'start',
                    overlayY: 'center',
                },
                {
                    originX: 'start',
                    originY: 'center',
                    overlayX: 'end',
                    overlayY: 'center',
                },
            ]);
        }
        else {
            positionStrategy.withPositions([
                {
                    originX: 'end',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'top',
                },
                {
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'end',
                    overlayY: 'top',
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'bottom',
                },
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'bottom',
                },
            ]);
        }
        var t = {
            submenu: submenu,
            id: this.id++,
            isMenuHovered: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false),
            isTriggerHovered: new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false),
        };
        var menuInjector = new _context_menu_injector__WEBPACK_IMPORTED_MODULE_5__["MenuInjector"](t, this._injector, context);
        var componentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](menuComponent, undefined, menuInjector);
        var overlayRef = this.overlay.create({
            positionStrategy: positionStrategy,
            panelClass: 'ngx-contextmenu',
            scrollStrategy: this.scrollStrategy.close(),
        });
        var component = overlayRef.attach(componentPortal);
        var res = __assign({ overlayRef: overlayRef, component: component }, t, { menuClose: menuClose, menuAction: menuAction });
        this.menus.push(res);
        return res;
    };
    ContextMenuService.prototype.getCurrentLevel = function () {
        return this.menus.length;
    };
    ContextMenuService.prototype.closeAll = function (context, idx) {
        if (idx === void 0) { idx = 0; }
        for (var index = idx; index < this.menus.length; index++) {
            var menu = this.menus[index];
            this.destroyMenu(menu, context);
        }
        this.menus.splice(idx, this.menus.length);
    };
    ContextMenuService.prototype.destroyMenu = function (menu, context) {
        menu.component.instance._state = 'exit';
        if (menu.component.instance.lazy) {
            menu.component.instance._animationDone
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event.toState === 'exit'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
                .subscribe(function () {
                menu.overlayRef.detach();
                menu.overlayRef.dispose();
            });
        }
        else {
            menu.overlayRef.detach();
            menu.overlayRef.dispose();
        }
        if (context) {
            menu.menuAction.next(context);
        }
        menu.menuClose.next();
    };
    ContextMenuService.prototype.close = function (menu, menuIndex, context) {
        this.destroyMenu(menu, context);
        this.menus.splice(menuIndex, 1);
    };
    ContextMenuService.prototype.checkOutsideClick = function ($event) {
        for (var _i = 0, _a = this.menus; _i < _a.length; _i++) {
            var m = _a[_i];
            var clickedInside = m.component.location.nativeElement.contains($event.target);
            if (clickedInside) {
                $event.preventDefault();
                $event.stopPropagation();
                return;
            }
        }
        this.closeAll();
    };
    ContextMenuService.prototype.closeSubMenu = function (id) {
        var menuIndex = this.menus.findIndex(function (n) { return n.id === id; });
        if (menuIndex === -1 || menuIndex !== this.menus.length - 1) {
            return;
        }
        // make sure we can close the current menu
        var menu = this.menus[menuIndex];
        if (menu.isMenuHovered.getValue() || menu.isTriggerHovered.getValue()) {
            return;
        }
        // close all menus up if possible
        for (var index = this.menus.length - 1; index >= 1; index--) {
            var m = this.menus[index];
            if (!m.isMenuHovered.getValue() && !m.isTriggerHovered.getValue()) {
                this.close(m, index);
            }
            else {
                return;
            }
        }
    };
    ContextMenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ScrollStrategyOptions"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]])
    ], ContextMenuService);
    return ContextMenuService;
}());



/***/ }),

/***/ "./src/lib/context-submenu-trigger.directive.ts":
/*!******************************************************!*\
  !*** ./src/lib/context-submenu-trigger.directive.ts ***!
  \******************************************************/
/*! exports provided: ContextSubmenuTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextSubmenuTriggerDirective", function() { return ContextSubmenuTriggerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _context_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context-menu.service */ "./src/lib/context-menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContextSubmenuTriggerDirective = /** @class */ (function () {
    function ContextSubmenuTriggerDirective(contextMenuService) {
        var _this = this;
        this.contextMenuService = contextMenuService;
        this.hoverDelay = 500;
        this.openDelay = 200;
        this.menuAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menuClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visible = false;
        this.level = 1;
        // get current level
        setTimeout(function () { return (_this.level = _this.contextMenuService.getCurrentLevel()); });
    }
    ContextSubmenuTriggerDirective.prototype.handleSubMenuClick = function ($event) {
        event.preventDefault();
        event.stopPropagation();
        clearTimeout(this.opentimer);
        clearTimeout(this.closetimer);
        this.menu = this.contextMenuService.show($event, this.contextSubmenuTrigger, this.menuContext, this.menuClose, this.menuAction, true, this.level);
        this.visible = true;
    };
    ContextSubmenuTriggerDirective.prototype.handleSubMenuEnter = function ($event) {
        var _this = this;
        if (this.menu) {
            this.menu.isTriggerHovered.next(true);
        }
        clearTimeout(this.closetimer);
        this.opentimer = setTimeout(function () {
            _this.menu = _this.contextMenuService.show($event, _this.contextSubmenuTrigger, _this.menuContext, _this.menuClose, _this.menuAction, true, _this.level);
            _this.visible = true;
            _this.opentimer = null;
        }, this.openDelay);
    };
    /**
     * submenu hides after cursor has exited for a period of time
     */
    ContextSubmenuTriggerDirective.prototype.handleSubMenuExit = function () {
        var _this = this;
        clearTimeout(this.opentimer);
        if (this.menu) {
            this.menu.isTriggerHovered.next(false);
        }
        this.closetimer = setTimeout(function () {
            if (_this.menu) {
                _this.menu.isTriggerHovered.next(false);
                _this.contextMenuService.closeSubMenu(_this.menu.id);
                _this.menu = undefined;
            }
            _this.visible = false;
        }, this.hoverDelay);
    };
    /**
     * if overwritten make sure to clear timeouts
     */
    ContextSubmenuTriggerDirective.prototype.ngOnDestroy = function () {
        clearTimeout(this.opentimer);
        clearTimeout(this.closetimer);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContextSubmenuTriggerDirective.prototype, "hoverDelay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContextSubmenuTriggerDirective.prototype, "openDelay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContextSubmenuTriggerDirective.prototype, "contextSubmenuTrigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContextSubmenuTriggerDirective.prototype, "menuContext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContextSubmenuTriggerDirective.prototype, "menuAction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContextSubmenuTriggerDirective.prototype, "menuClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event', 'true']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], ContextSubmenuTriggerDirective.prototype, "handleSubMenuClick", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], ContextSubmenuTriggerDirective.prototype, "handleSubMenuEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseout', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ContextSubmenuTriggerDirective.prototype, "handleSubMenuExit", null);
    ContextSubmenuTriggerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[contextSubmenuTrigger]' }),
        __metadata("design:paramtypes", [_context_menu_service__WEBPACK_IMPORTED_MODULE_1__["ContextMenuService"]])
    ], ContextSubmenuTriggerDirective);
    return ContextSubmenuTriggerDirective;
}());



/***/ }),

/***/ "./src/lib/menu.component.ts":
/*!***********************************!*\
  !*** ./src/lib/menu.component.ts ***!
  \***********************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _context_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context-menu.service */ "./src/lib/context-menu.service.ts");
/* harmony import */ var _context_menu_injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context-menu-injector */ "./src/lib/context-menu-injector.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = /** @class */ (function () {
    function MenuComponent(menuPackage, contextMenuService) {
        this.menuPackage = menuPackage;
        this.contextMenuService = contextMenuService;
        /** State of the dialog animation. */
        this._state = 'enter';
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** set lazy to False if you do not have animations */
        this.lazy = true;
    }
    MenuComponent.prototype.handleMouseover = function () {
        if (!this.menuPackage.menu.submenu) {
            return;
        }
        this.menuPackage.menu.isMenuHovered.next(true);
        clearTimeout(this.closetimer);
    };
    MenuComponent.prototype.handleMouseleave = function () {
        var _this = this;
        if (!this.menuPackage.menu.submenu) {
            return;
        }
        this.menuPackage.menu.isMenuHovered.next(false);
        this.closetimer = setTimeout(function () {
            _this.contextMenuService.closeSubMenu(_this.menuPackage.menu.id);
        }, 500);
    };
    MenuComponent.prototype.handleWindowClick = function ($event) {
        this.contextMenuService.checkOutsideClick($event);
    };
    /** Callback that is invoked when the menu animation completes. */
    MenuComponent.prototype._onAnimationDone = function (event) {
        this._animationDone.next(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MenuComponent.prototype, "handleMouseover", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MenuComponent.prototype, "handleMouseleave", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], MenuComponent.prototype, "handleWindowClick", null);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: "",
        }),
        __metadata("design:paramtypes", [_context_menu_injector__WEBPACK_IMPORTED_MODULE_2__["MenuPackage"],
            _context_menu_service__WEBPACK_IMPORTED_MODULE_1__["ContextMenuService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/clinic/front_end/admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map