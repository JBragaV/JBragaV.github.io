(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<apj-header [titulo] = \"title\"></apj-header>\n<router-outlet></router-outlet>\n<apj-footer></apj-footer>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function AppComponent(router, activedRouter, titleService) {
        this.router = router;
        this.activedRouter = activedRouter;
        this.titleService = titleService;
        this.title = 'Fotos de Aeronaves';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return _this.activedRouter; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            _this.titleService.setTitle(event.title);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _photos_photos_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos/photos.module */ "./src/app/photos/photos.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _errors_errors_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errors/errors.module */ "./src/app/errors/errors.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _photos_photos_module__WEBPACK_IMPORTED_MODULE_3__["PhotosModule"],
                _errors_errors_module__WEBPACK_IMPORTED_MODULE_5__["ErrorsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _photos_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photos/photo-list/photo-list.component */ "./src/app/photos/photo-list/photo-list.component.ts");
/* harmony import */ var _photos_photo_form_photo_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos/photo-form/photo-form.component */ "./src/app/photos/photo-form/photo-form.component.ts");
/* harmony import */ var _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errors/not-found/not-found.component */ "./src/app/errors/not-found/not-found.component.ts");
/* harmony import */ var _photos_photo_list_resolve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photos/photo-list.resolve */ "./src/app/photos/photo-list.resolve.ts");
/* harmony import */ var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/auth/auth.guard */ "./src/app/core/auth/auth.guard.ts");
/* harmony import */ var _photos_photos_details_photos_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./photos/photos-details/photos-details.component */ "./src/app/photos/photos-details/photos-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var rotas = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'lista/:userName',
        component: _photos_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_2__["PhotoListComponent"],
        resolve: {
            photo: _photos_photo_list_resolve__WEBPACK_IMPORTED_MODULE_5__["PhotoListResolve"]
        },
        data: {
            title: 'Suas Fotos'
        }
    },
    {
        path: 'p/add',
        component: _photos_photo_form_photo_form_component__WEBPACK_IMPORTED_MODULE_3__["PhotoFormComponent"],
        canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        data: {
            title: 'Upload'
        }
    },
    {
        path: 'p/:photoId',
        component: _photos_photos_details_photos_details_component__WEBPACK_IMPORTED_MODULE_7__["PhotosDetailsComponent"],
        data: {
            title: 'Detalhes'
        }
        //canActivate: [AuthGuard] 
    },
    { path: '**', component: _errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"], data: { title: 'Not Found' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(rotas)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/core/auth/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.service */ "./src/app/core/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.userService.logged()) {
            this.router.navigate([''], {
                queryParams: {
                    fromUrl: state.url
                }
            });
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/auth/request.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/core/auth/request.interceptor.ts ***!
  \**************************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../token/token.service */ "./src/app/core/token/token.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor(tokenService) {
        this.tokenService = tokenService;
    }
    RequestInterceptor.prototype.intercept = function (req, next) {
        if (this.tokenService.hasToken()) {
            req = req.clone({
                setHeaders: {
                    'x-access-token': this.tokenService.getToken()
                }
            });
        }
        return next.handle(req);
    };
    RequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_token_token_service__WEBPACK_IMPORTED_MODULE_0__["TokenService"]])
    ], RequestInterceptor);
    return RequestInterceptor;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _hearder_hearder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hearder/hearder.component */ "./src/app/core/hearder/hearder.component.ts");
/* harmony import */ var _auth_request_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/request.interceptor */ "./src/app/core/auth/request.interceptor.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _shared_components_alert_alert_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/alert/alert.module */ "./src/app/shared/components/alert/alert.module.ts");
/* harmony import */ var _shared_components_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/loading/loading.module */ "./src/app/shared/components/loading/loading.module.ts");
/* harmony import */ var _shared_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/menu/menu.module */ "./src/app/shared/components/menu/menu.module.ts");
/* harmony import */ var _shared_directive_show_if_logged_show_if_logged_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/directive/show-if-logged/show-if-logged.module */ "./src/app/shared/directive/show-if-logged/show-if-logged.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_hearder_hearder_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
            exports: [_hearder_hearder_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _shared_components_alert_alert_module__WEBPACK_IMPORTED_MODULE_7__["AlertModule"],
                _shared_components_loading_loading_module__WEBPACK_IMPORTED_MODULE_8__["LoadingModule"],
                _shared_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_9__["MenuModule"],
                _shared_directive_show_if_logged_show_if_logged_module__WEBPACK_IMPORTED_MODULE_10__["ShowIfLoggedModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _auth_request_interceptor__WEBPACK_IMPORTED_MODULE_5__["RequestInterceptor"],
                    multi: true
                }]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"mt-5\" *ngIf=\"(user$ | async) as user\">\r\n    <div class=\"fixed-bottom bg-white p-1\">\r\n        <div class=\"container\">\r\n            <div class=\"row text-center\">\r\n                <div class=\"col-6\">\r\n                    <a [routerLink]=\"['']\">\r\n                        <i class=\"fa fa-home fa-2x\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                    <a [routerLink]=\"['p', 'add']\">\r\n                        <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ "./src/app/core/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(userService) {
        this.userService = userService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.user$ = this.userService.getUser();
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apj-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html")
        }),
        __metadata("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/hearder/hearder.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/hearder/hearder.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"fixed-top\">\r\n    <nav class=\"navbar navbar-light bg-white\">\r\n        <a class=\"navbar-brand\">\r\n            <i tabindex=\"0\" (keyup.space)=\"menu.toggle()\" (click)=\"menu.toggle()\" class=\"fa fa-bars mr-2\"></i>\r\n            {{ titulo }}\r\n        </a>\r\n        <apj-menu #menu>\r\n            <ul class=\"list-unstyled\">\r\n                <li>\r\n                    <a showiflogged [routerLink]=\"['p', 'add']\">Adicionar nova foto</a>\r\n                </li>\r\n            </ul>\r\n        </apj-menu>\r\n        <div *ngIf='(user$ | async) as user; else login'>\r\n            <i class=\"fa fa-user-circle mr-2\"></i>\r\n            <a class=\"mr-2\">{{user.name}}</a>\r\n            <a (click)=\"logout()\">Logout</a>\r\n        </div>\r\n        <ng-template #login>\r\n            <span class=\"navbar-text\">\r\n                <a [routerLink]=\"['']\">Please, login!</a>\r\n            </span>\r\n        </ng-template>\r\n    </nav>\r\n    <div class=\"fixed-top\">\r\n        <apj-loading></apj-loading>\r\n        <apj-alert></apj-alert>\r\n    </div>\r\n</header>"

/***/ }),

/***/ "./src/app/core/hearder/hearder.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/hearder/hearder.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.service */ "./src/app/core/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
        this.user$ = this.userService.getUser();
    }
    HeaderComponent.prototype.logout = function () {
        this.userService.logOut();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "titulo", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apj-header',
            template: __webpack_require__(/*! ./hearder.component.html */ "./src/app/core/hearder/hearder.component.html")
        }),
        __metadata("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/plataform-detector/platform-dectection.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/plataform-detector/platform-dectection.service.ts ***!
  \************************************************************************/
/*! exports provided: PlatformDectectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformDectectionService", function() { return PlatformDectectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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


var PlatformDectectionService = /** @class */ (function () {
    //A diretiva Inject, informa ao angular que ele deve considerar um valor externo e injetar na variavel que esta sendo alvo de injeção de dependência
    function PlatformDectectionService(platformId) {
        this.platformId = platformId;
    }
    PlatformDectectionService.prototype.isBrowser = function () {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId);
        //Serviço que detecta se função vai ser exeutada no client side
    };
    PlatformDectectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [String])
    ], PlatformDectectionService);
    return PlatformDectectionService;
}());



/***/ }),

/***/ "./src/app/core/token/token.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/token/token.service.ts ***!
  \*********************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var key = 'authToken';
var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    TokenService.prototype.hasToken = function () {
        //!!->"macete" js em que transformo uma string em um boleano;
        //Nesse caso, se existir um token vai ser retornado um valor e primeiro vai ser jogado para falso e depois, segundo exclamação, transforma em verdadeiro e vice-verça 
        return !!this.getToken();
    };
    TokenService.prototype.getToken = function () {
        return window.localStorage.getItem(key);
    };
    TokenService.prototype.setToken = function (token) {
        window.localStorage.setItem(key, token);
    };
    TokenService.prototype.deleteToken = function () {
        window.localStorage.removeItem(key);
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/app/core/user/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/user/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _token_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../token/token.service */ "./src/app/core/token/token.service.ts");
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
    function UserService(tokenService) {
        this.tokenService = tokenService;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.tokenService.hasToken() && this.decodeToken();
    }
    UserService.prototype.setToken = function (token) {
        this.tokenService.setToken(token);
        this.decodeToken();
    };
    UserService.prototype.getUser = function () {
        return this.userSubject.asObservable();
    };
    UserService.prototype.decodeToken = function () {
        var token = this.tokenService.getToken();
        var user = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
        this.userName = user.name;
        this.userSubject.next(user);
    };
    UserService.prototype.getuserName = function () {
        return this.userName;
    };
    UserService.prototype.logged = function () {
        return this.tokenService.hasToken();
    };
    UserService.prototype.logOut = function () {
        this.tokenService.deleteToken();
        this.userSubject.next(null);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_token_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/errors/errors.module.ts":
/*!*****************************************!*\
  !*** ./src/app/errors/errors.module.ts ***!
  \*****************************************/
/*! exports provided: ErrorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsModule", function() { return ErrorsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/errors/not-found/not-found.component.ts");
/* harmony import */ var _global_handle_errors_global_handle_erros__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global-handle-errors/global-handle-erros */ "./src/app/errors/global-handle-errors/global-handle-erros.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorsModule = /** @class */ (function () {
    function ErrorsModule() {
    }
    ErrorsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]],
            providers: [{
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
                    useClass: _global_handle_errors_global_handle_erros__WEBPACK_IMPORTED_MODULE_3__["GlobalHandleErros"]
                }]
        })
    ], ErrorsModule);
    return ErrorsModule;
}());



/***/ }),

/***/ "./src/app/errors/global-handle-errors/global-handle-erros.ts":
/*!********************************************************************!*\
  !*** ./src/app/errors/global-handle-errors/global-handle-erros.ts ***!
  \********************************************************************/
/*! exports provided: GlobalHandleErros */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalHandleErros", function() { return GlobalHandleErros; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var stacktrace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stacktrace-js */ "./node_modules/stacktrace-js/stacktrace.js");
/* harmony import */ var stacktrace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stacktrace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _server_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server-log.service */ "./src/app/errors/global-handle-errors/server-log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GlobalHandleErros = /** @class */ (function () {
    function GlobalHandleErros(injector) {
        this.injector = injector;
    }
    GlobalHandleErros.prototype.handleError = function (error) {
        var location = this.injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"]);
        var url = location instanceof _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"]
            ? location.path()
            : '';
        console.log("Cheguei no Global Error!!");
        var userService = this.injector.get(src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]);
        var userName = userService.getuserName();
        var logService = this.injector.get(_server_log_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLog"]);
        var message = error.message
            ? error.message :
            error.toString();
        stacktrace_js__WEBPACK_IMPORTED_MODULE_2__["fromError"](error)
            .then(function (stackFrame) {
            var stackAsString = stackFrame.map(function (sf) {
                return sf.toString();
            }).join('\n');
            console.log("Cheguei na no then!!");
            logService.log({ message: message, url: url, userName: userName, stack: stackAsString });
        });
    };
    GlobalHandleErros = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], GlobalHandleErros);
    return GlobalHandleErros;
}());



/***/ }),

/***/ "./src/app/errors/global-handle-errors/server-log.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/errors/global-handle-errors/server-log.service.ts ***!
  \*******************************************************************/
/*! exports provided: ServiceLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLog", function() { return ServiceLog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var API = 'http://localhost:7000';
var ServiceLog = /** @class */ (function () {
    function ServiceLog(http) {
        this.http = http;
    }
    ServiceLog.prototype.log = function (logErro) {
        console.log(logErro);
        console.log("Cheguei na função de envio de log para o servidor!!");
        return this.http.post(API + "/infra/log", logErro);
    };
    ServiceLog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServiceLog);
    return ServiceLog;
}());



/***/ }),

/***/ "./src/app/errors/not-found/not-found.component.css":
/*!**********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/errors/not-found/not-found.component.html":
/*!***********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h2>This page is not avaliable</h2>\n  <p>\n      The link you have acccessed may be broken or\n      the page may have ben removed.\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/errors/not-found/not-found.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/errors/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apj-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/errors/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/errors/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/photos/photo-form/photo-form.component.css":
/*!************************************************************!*\
  !*** ./src/app/photos/photo-form/photo-form.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n background: #fff;   \r\n}"

/***/ }),

/***/ "./src/app/photos/photo-form/photo-form.component.html":
/*!*************************************************************!*\
  !*** ./src/app/photos/photo-form/photo-form.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"formAdd\" class=\"row\" (submit)='upload()'>\n    <div class=\"col-md-6 text-center\">\n      <div class=\"form-group\" *ngIf='!preview; else previewImage;'>\n        <button immediateClick type=\"button\" (click)=\"fileInput.click()\" class=\"btn btn-primary\">\n          <i class=\"fa fa-image fa-4x align-middle\"></i>\n        </button>\n        <input #fileInput hidden formControlName='file' type=\"file\" accept=\"image/*\" (change)=\"image($event.target.files[0])\">\n        <apj-vmessage mensagem='Selecione uma imagem' *ngIf='formAdd.get(\"file\").errors?.required'></apj-vmessage>\n      </div>\n      <ng-template #previewImage>\n        <apj-photo [url]='preview' title=\"preview\"></apj-photo>\n      </ng-template>\n    </div>\n\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <textarea \n          formControlName='description'\n          class=\"form-control form-control-sm\" \n          placeholder=\"photo description\"></textarea>\n          <apj-vmessage mensagem='Permitido máximo de 300 caractéres' *ngIf=\"formAdd.get('description').errors?.maxlength\"></apj-vmessage>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"text-muted\">\n          Allow comments\n          <input type=\"checkbox\" formControlName='allowComments'>\n        </label>\n      </div>\n      <div *ngIf=\"!done; else porcent\">\n        <button type=\"submit\" [disabled]='formAdd.invalid' class=\"btn btn-primary btn-block\">\n          Upload\n        </button>\n        <a [routerLink]='[\"\"]' class=\"btn btn-secondary btn-block\">Cancel</a>\n      </div>\n      <ng-template #porcent>\n        <div class=\"text-center display-4\">\n          {{done}}%\n        </div>\n      </ng-template>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/photos/photo-form/photo-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/photos/photo-form/photo-form.component.ts ***!
  \***********************************************************/
/*! exports provided: PhotoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoFormComponent", function() { return PhotoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _photo_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo/photo.service */ "./src/app/photos/photo/photo.service.ts");
/* harmony import */ var src_app_shared_components_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/alert/alert.service */ "./src/app/shared/components/alert/alert.service.ts");
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PhotoFormComponent = /** @class */ (function () {
    function PhotoFormComponent(formBuilder, router, photoService, alertService, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.photoService = photoService;
        this.alertService = alertService;
        this.userService = userService;
        this.done = 0;
    }
    PhotoFormComponent.prototype.ngOnInit = function () {
        this.formAdd = this.formBuilder.group({
            file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(300)],
            allowComments: [true]
        });
    };
    PhotoFormComponent.prototype.upload = function () {
        var _this = this;
        var descricao = this.formAdd.get('description').value;
        var permitirComentario = this.formAdd.get('allowComments').value;
        this.photoService
            .upload(descricao, permitirComentario, this.file)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            return _this.router.navigate(['/lista', _this.userService.getuserName()]);
        }))
            .subscribe(function (event) {
            if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpEventType"].UploadProgress) {
                _this.done = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpResponse"]) {
                _this.alertService.success("Foto adicionada com sucesso!!!");
            }
        }, function (error) {
            console.log(error);
            _this.alertService.danger("Erro ao enviar a foto!!!");
        });
    };
    PhotoFormComponent.prototype.image = function (file) {
        var _this = this;
        this.file = file;
        var reader = new FileReader();
        reader.onload = function (event) { return _this.preview = event.target.result; };
        reader.readAsDataURL(file);
    };
    PhotoFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apj-photo-form',
            template: __webpack_require__(/*! ./photo-form.component.html */ "./src/app/photos/photo-form/photo-form.component.html"),
            styles: [__webpack_require__(/*! ./photo-form.component.css */ "./src/app/photos/photo-form/photo-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _photo_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"],
            src_app_shared_components_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], PhotoFormComponent);
    return PhotoFormComponent;
}());



/***/ }),

/***/ "./src/app/photos/photo-form/photo-form.module.ts":
/*!********************************************************!*\
  !*** ./src/app/photos/photo-form/photo-form.module.ts ***!
  \********************************************************/
/*! exports provided: PhotoFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoFormModule", function() { return PhotoFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _photo_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo-form.component */ "./src/app/photos/photo-form/photo-form.component.ts");
/* harmony import */ var src_app_shared_components_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/vmessage/vmessage.module */ "./src/app/shared/components/vmessage/vmessage.module.ts");
/* harmony import */ var _photo_photo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../photo/photo.module */ "./src/app/photos/photo/photo.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_directive_immediate_click_immediate_click_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/directive/immediate-click/immediate-click.module */ "./src/app/shared/directive/immediate-click/immediate-click.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PhotoFormModule = /** @class */ (function () {
    function PhotoFormModule() {
    }
    PhotoFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_photo_form_component__WEBPACK_IMPORTED_MODULE_3__["PhotoFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                src_app_shared_components_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_4__["VMessageModule"],
                _photo_photo_module__WEBPACK_IMPORTED_MODULE_5__["PhotoModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                src_app_shared_directive_immediate_click_immediate_click_module__WEBPACK_IMPORTED_MODULE_7__["ImmediateClickModule"]
            ]
        })
    ], PhotoFormModule);
    return PhotoFormModule;
}());



/***/ }),

/***/ "./src/app/photos/photo-list.resolve.ts":
/*!**********************************************!*\
  !*** ./src/app/photos/photo-list.resolve.ts ***!
  \**********************************************/
/*! exports provided: PhotoListResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListResolve", function() { return PhotoListResolve; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _photo_photo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo/photo.service */ "./src/app/photos/photo/photo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoListResolve = /** @class */ (function () {
    function PhotoListResolve(service) {
        this.service = service;
    }
    PhotoListResolve.prototype.resolve = function (route, state) {
        var userName = route.params.userName;
        return this.service.listarPorPaginas(userName, 1);
    };
    PhotoListResolve = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_photo_photo_service__WEBPACK_IMPORTED_MODULE_1__["PhotoService"]])
    ], PhotoListResolve);
    return PhotoListResolve;
}());



/***/ }),

/***/ "./src/app/photos/photo-list/filter-by-descripsion.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/photos/photo-list/filter-by-descripsion.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: FilterByDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByDescription", function() { return FilterByDescription; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByDescription = /** @class */ (function () {
    function FilterByDescription() {
    }
    FilterByDescription.prototype.transform = function (photos, description) {
        description = description.trim().toLocaleLowerCase();
        if (description) {
            return photos.filter(function (photo) { return photo.description.toLocaleLowerCase().includes(description); });
        }
        else {
            return photos;
        }
    };
    FilterByDescription = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'filtraDescricao' })
    ], FilterByDescription);
    return FilterByDescription;
}());



/***/ }),

/***/ "./src/app/photos/photo-list/load-button/load-button.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/photos/photo-list/load-button/load-button.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/photos/photo-list/load-button/load-button.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/photos/photo-list/load-button/load-button.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\" *ngIf=\"hasMore; else noMore\">\n  <button class=\"btn btn-primary\">Load more</button>\n</div>\n<ng-template #noMore>\n  <p class=\"text-center text-muted\">No more data to load</p>\n</ng-template>"

/***/ }),

/***/ "./src/app/photos/photo-list/load-button/load-button.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/photos/photo-list/load-button/load-button.component.ts ***!
  \************************************************************************/
/*! exports provided: LoadButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadButtonComponent", function() { return LoadButtonComponent; });
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

var LoadButtonComponent = /** @class */ (function () {
    function LoadButtonComponent() {
    }
    LoadButtonComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoadButtonComponent.prototype, "hasMore", void 0);
    LoadButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apj-load-button',
            template: __webpack_require__(/*! ./load-button.component.html */ "./src/app/photos/photo-list/load-button/load-button.component.html"),
            styles: [__webpack_require__(/*! ./load-button.component.css */ "./src/app/photos/photo-list/load-button/load-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadButtonComponent);
    return LoadButtonComponent;
}());



/***/ }),

/***/ "./src/app/photos/photo-list/photo-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/photos/photo-list/photo-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/photos/photo-list/photo-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/photos/photo-list/photo-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<apj-search (buscando) = \"filtro = $event\" [valor] = 'filtro'></apj-search>\r\n<apj-photos [photos] = 'photos | filtraDescricao : filtro'></apj-photos>\r\n<apj-load-button (click)='paginacao()' [hasMore] = 'hasMore'></apj-load-button>"

/***/ }),

/***/ "./src/app/photos/photo-list/photo-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/photos/photo-list/photo-list.component.ts ***!
  \***********************************************************/
/*! exports provided: PhotoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListComponent", function() { return PhotoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _photo_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo/photo.service */ "./src/app/photos/photo/photo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotoListComponent = /** @class */ (function () {
    function PhotoListComponent(activedRouter, service) {
        this.activedRouter = activedRouter;
        this.service = service;
        this.photos = [];
        this.filtro = '';
        this.pagina = 1;
        this.userName = '';
        this.hasMore = true;
    }
    PhotoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activedRouter.params.subscribe(function (params) {
            _this.userName = params.userName;
            _this.photos = _this.activedRouter.snapshot.data.photo;
        });
    };
    PhotoListComponent.prototype.paginacao = function () {
        var _this = this;
        this.userName = this.activedRouter.snapshot.params.userName;
        this.service
            .listarPorPaginas(this.userName, ++this.pagina)
            .subscribe(function (photos) {
            _this.filtro = '';
            _this.photos = (_a = _this.photos).concat.apply(_a, photos);
            if (!photos.length || photos.length % 3 != 0)
                _this.hasMore = false;
            var _a;
        });
    };
    PhotoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apj-photo-list',
            template: __webpack_require__(/*! ./photo-list.component.html */ "./src/app/photos/photo-list/photo-list.component.html"),
            styles: [__webpack_require__(/*! ./photo-list.component.css */ "./src/app/photos/photo-list/photo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _photo_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])
    ], PhotoListComponent);
    return PhotoListComponent;
}());



/***/ }),

/***/ "./src/app/photos/photo-list/photo-list.module.ts":
/*!********************************************************!*\
  !*** ./src/app/photos/photo-list/photo-list.module.ts ***!
  \********************************************************/
/*! exports provided: PhotolistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotolistModule", function() { return PhotolistModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _photo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo-list.component */ "./src/app/photos/photo-list/photo-list.component.ts");
/* harmony import */ var _filter_by_descripsion_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-by-descripsion.pipe */ "./src/app/photos/photo-list/filter-by-descripsion.pipe.ts");
/* harmony import */ var _load_button_load_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./load-button/load-button.component */ "./src/app/photos/photo-list/load-button/load-button.component.ts");
/* harmony import */ var _photos_photos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photos/photos.component */ "./src/app/photos/photo-list/photos/photos.component.ts");
/* harmony import */ var _photo_photo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../photo/photo.module */ "./src/app/photos/photo/photo.module.ts");
/* harmony import */ var src_app_shared_components_card_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/card/card.module */ "./src/app/shared/components/card/card.module.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "./src/app/photos/photo-list/search/search.component.ts");
/* harmony import */ var src_app_shared_directive_darken_on_hover_darken_on_hover_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/directive/darken-on-hover/darken-on-hover.module */ "./src/app/shared/directive/darken-on-hover/darken-on-hover.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PhotolistModule = /** @class */ (function () {
    function PhotolistModule() {
    }
    PhotolistModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _photo_list_component__WEBPACK_IMPORTED_MODULE_3__["PhotoListComponent"],
                _filter_by_descripsion_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterByDescription"],
                _load_button_load_button_component__WEBPACK_IMPORTED_MODULE_5__["LoadButtonComponent"],
                _photos_photos_component__WEBPACK_IMPORTED_MODULE_6__["PhotosComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _photo_photo_module__WEBPACK_IMPORTED_MODULE_7__["PhotoModule"],
                src_app_shared_components_card_card_module__WEBPACK_IMPORTED_MODULE_8__["CardModule"],
                src_app_shared_directive_darken_on_hover_darken_on_hover_module__WEBPACK_IMPORTED_MODULE_10__["DarkenOnHoverModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], PhotolistModule);
    return PhotolistModule;
}());



/***/ }),

/***/ "./src/app/photos/photo-list/photos/photos.component.css":
/*!***************************************************************!*\
  !*** ./src/app/photos/photo-list/photos/photos.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/photos/photo-list/photos/photos.component.html":
/*!****************************************************************!*\
  !*** ./src/app/photos/photo-list/photos/photos.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-center text-muted\" *ngIf=\"!photos.length\">\n  Sorry, no photos\n</p>\n<ol class=\"list-unstyled\">\n  <li *ngFor='let row of Rows' class=\"row no-gutters\">\n    <div *ngFor = 'let photo of row' class=\"col-4\" darken>\n      <a [routerLink]=\"['/p', photo.id]\">\n        <apj-card [titulo] = 'photo.description'>\n          <apj-photo  [url] = 'photo.url' [descricao]='photo.description' [legenda]='photo.legenda'></apj-photo>\n          <div class=\"text-center\">\n            <i aria-hidden=\"true\" class=\"fa fa-heart-o fa-1x mr-2\"></i>{{ photo.likes }}\n            <i aria-hidden=\"true\" class=\"fa fa-comment-o fa-1x mr-2 ml-2\"></i>{{ photo.comments }}\n          </div>\n        </apj-card>\n      </a>\n    </div>\n  </li>\n</ol>"

/***/ }),

/***/ "./src/app/photos/photo-list/photos/photos.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/photos/photo-list/photos/photos.component.ts ***!
  \**************************************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
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

var PhotosComponent = /** @class */ (function () {
    function PhotosComponent() {
        this.photos = [];
        this.Rows = [];
    }
    PhotosComponent.prototype.ngOnChanges = function (changes) {
        if (changes.photos)
            this.Rows = this.criandoRows(this.photos);
    };
    PhotosComponent.prototype.criandoRows = function (photos) {
        var newRow = [];
        for (var index = 0; index < photos.length; index += 3) {
            newRow.push(photos.slice(index, index + 3));
        }
        return newRow;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PhotosComponent.prototype, "photos", void 0);
    PhotosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apj-photos',
            template: __webpack_require__(/*! ./photos.component.html */ "./src/app/photos/photo-list/photos/photos.component.html"),
            styles: [__webpack_require__(/*! ./photos.component.css */ "./src/app/photos/photo-list/photos/photos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotosComponent);
    return PhotosComponent;
}());



/***/ }),

/***/ "./src/app/photos/photo-list/search/search.component.html":
/*!****************************************************************!*\
  !*** ./src/app/photos/photo-list/search/search.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-3 mb-3\">\r\n    <form>\r\n        <i aria-hidden=\"true\" class=\"fa fa-search mr-1\"></i>\r\n        <input\r\n            class=\"rounded\"\r\n            type=\"search\"\r\n            placeholder=\"search...\"\r\n            (keyup) = 'debounce.next($event.target.value)'\r\n            [value] = 'valor'\r\n            autofocus>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/photos/photo-list/search/search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/photos/photo-list/search/search.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.valor = '';
        this.debounce = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.buscando = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.debounce
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300))
            .subscribe(function (filter) { return _this.buscando.emit(filter); });
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.debounce.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "valor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "buscando", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apj-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/photos/photo-list/search/search.component.html")
        })
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/photos/photo/photo.component.html":
/*!***************************************************!*\
  !*** ./src/app/photos/photo/photo.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<figure>\r\n    <img class=\"img-thumbnail\" [src]=\"url\" [alt]=\"descricao\">\r\n    <figcaption>{{legenda}}</figcaption>\r\n</figure>"

/***/ }),

/***/ "./src/app/photos/photo/photo.component.ts":
/*!*************************************************!*\
  !*** ./src/app/photos/photo/photo.component.ts ***!
  \*************************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
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

var CLOUD = 'http://localhost:3000/imgs/';
var PhotoComponent = /** @class */ (function () {
    function PhotoComponent() {
        this.descricao = '';
        this.legenda = '';
        this._url = '';
    }
    Object.defineProperty(PhotoComponent.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (url) {
            if (!url.startsWith('data')) {
                this._url = "" + CLOUD + url;
            }
            else {
                this._url = url;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PhotoComponent.prototype, "descricao", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PhotoComponent.prototype, "legenda", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PhotoComponent.prototype, "url", null);
    PhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apj-photo',
            template: __webpack_require__(/*! ./photo.component.html */ "./src/app/photos/photo/photo.component.html")
        })
    ], PhotoComponent);
    return PhotoComponent;
}());



/***/ }),

/***/ "./src/app/photos/photo/photo.module.ts":
/*!**********************************************!*\
  !*** ./src/app/photos/photo/photo.module.ts ***!
  \**********************************************/
/*! exports provided: PhotoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoModule", function() { return PhotoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _photo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo.component */ "./src/app/photos/photo/photo.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PhotoModule = /** @class */ (function () {
    function PhotoModule() {
    }
    PhotoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_photo_component__WEBPACK_IMPORTED_MODULE_2__["PhotoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            exports: [_photo_component__WEBPACK_IMPORTED_MODULE_2__["PhotoComponent"]]
        })
    ], PhotoModule);
    return PhotoModule;
}());



/***/ }),

/***/ "./src/app/photos/photo/photo.service.ts":
/*!***********************************************!*\
  !*** ./src/app/photos/photo/photo.service.ts ***!
  \***********************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var urlBase = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlBase;
var PhotoService = /** @class */ (function () {
    function PhotoService(http) {
        this.http = http;
    }
    PhotoService.prototype.listarTodosUser = function (usuario) {
        return this.http.get("" + urlBase + usuario + "/photos");
    };
    PhotoService.prototype.listarPorPaginas = function (usuario, pagina) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append("page", pagina.toString());
        return this.http.get("" + urlBase + usuario + "/photos", { params: params });
    };
    PhotoService.prototype.upload = function (descicao, permitirComentario, file) {
        var formData = new FormData();
        formData.append('description', descicao);
        formData.append('allowComments', permitirComentario ? 'true' : 'false');
        formData.append('imageFile', file);
        return this.http.post(urlBase + "photos/upload", formData, {
            observe: 'events',
            reportProgress: true
        });
    };
    PhotoService.prototype.selectById = function (id) {
        return this.http.get(urlBase + "photos/" + id);
    };
    PhotoService.prototype.getComment = function (id) {
        console.log("Chamei a função getComment");
        return this.http.get(urlBase + "photos/" + id + "/comments");
    };
    PhotoService.prototype.addComment = function (id, commentText) {
        console.log("Chamei a função addComment");
        return this.http.post(urlBase + "photos/" + id + "/comments", { commentText: commentText });
    };
    PhotoService.prototype.remove = function (id) {
        return this.http.delete(urlBase + "photos/" + id);
    };
    PhotoService.prototype.like = function (id) {
        return this.http.post(urlBase + "photos/" + id + "/like", {}, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) { return true; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (erro) {
            return erro.status == '304' ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(erro);
        }));
    };
    PhotoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PhotoService);
    return PhotoService;
}());



/***/ }),

/***/ "./src/app/photos/photos-details/photo-comment/photo-comment.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/photos/photos-details/photo-comment/photo-comment.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(comments$ | async) as comments\">\r\n    <ul class=\"list-unstyled comment-list\">\r\n        <li *ngFor=\"let comment of comments\">\r\n            <a class=\"text-dark font-weight-bold mr-1\" [routerLink]=\"['/user', comment.userName]\">\r\n                {{ comment.userName }}\r\n            </a>\r\n            <em>\r\n                {{ comment.date | date:'dd-MM-yyyy HH:mm' }}\r\n            </em>\r\n            <p class=\"break-word mb-2\">\r\n                {{ comment.text }}\r\n            </p>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class=\"mt-4\">\r\n    <form [formGroup]='commentForm' (submit)=\"add()\">\r\n        <div class=\"input-group\">\r\n            <textarea formControlName=\"comment\" class=\"form-control\"></textarea>\r\n            <div class=\"input-group-append\">\r\n                <button [disabled]='commentForm.invalid' class=\"btn btn-primary pull-left\">Publish</button>\r\n            </div>\r\n        </div>\r\n        <apj-vmessage *ngIf=\"this.commentForm.get('comment').errors?.maxlength\" mensagem=\"Permitido um comentário com no máximo 300 caracteres\"></apj-vmessage>\r\n    </form>\r\n</div>\r\n\r\n\r\n<!--photoOwnerOnly [ownedPhoto]=\"photo\"-->"

/***/ }),

/***/ "./src/app/photos/photos-details/photo-comment/photo-comment.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/photos/photos-details/photo-comment/photo-comment.component.ts ***!
  \********************************************************************************/
/*! exports provided: PhotoCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoCommentComponent", function() { return PhotoCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _photo_photo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../photo/photo.service */ "./src/app/photos/photo/photo.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotoCommentComponent = /** @class */ (function () {
    function PhotoCommentComponent(formBuilder, photoService) {
        this.formBuilder = formBuilder;
        this.photoService = photoService;
    }
    PhotoCommentComponent.prototype.ngOnInit = function () {
        this.comments$ = this.photoService.getComment(this.photoId);
        this.commentForm = this.formBuilder.group({
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(300), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    };
    PhotoCommentComponent.prototype.add = function () {
        var _this = this;
        console.log("Chamei essa função!!!");
        var comment = this.commentForm.get('comment').value;
        //com essa sintaxe, se eu não atribuir o valor em uma variavel, a função não se "completa".
        this.comments$ = this.photoService
            .addComment(this.photoId, comment)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return _this.photoService.getComment(_this.photoId); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.commentForm.reset(); }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PhotoCommentComponent.prototype, "photoId", void 0);
    PhotoCommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apj-photo-comment',
            template: __webpack_require__(/*! ./photo-comment.component.html */ "./src/app/photos/photos-details/photo-comment/photo-comment.component.html"),
            styles: [__webpack_require__(/*! ./photo-comment.css */ "./src/app/photos/photos-details/photo-comment/photo-comment.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _photo_photo_service__WEBPACK_IMPORTED_MODULE_1__["PhotoService"]])
    ], PhotoCommentComponent);
    return PhotoCommentComponent;
}());



/***/ }),

/***/ "./src/app/photos/photos-details/photo-comment/photo-comment.css":
/*!***********************************************************************!*\
  !*** ./src/app/photos/photos-details/photo-comment/photo-comment.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-list{\r\n    height: 50vh;\r\n    overflow-y: auto;\r\n}"

/***/ }),

/***/ "./src/app/photos/photos-details/photo-owner/photo-owner.directive.ts":
/*!****************************************************************************!*\
  !*** ./src/app/photos/photos-details/photo-owner/photo-owner.directive.ts ***!
  \****************************************************************************/
/*! exports provided: PhotoOwnerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoOwnerDirective", function() { return PhotoOwnerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/user/user.service */ "./src/app/core/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoOwnerDirective = /** @class */ (function () {
    function PhotoOwnerDirective(element, render, userService) {
        this.element = element;
        this.render = render;
        this.userService = userService;
    }
    PhotoOwnerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (user) {
            if (!user || user.id !== _this.photo.userId) {
                _this.render.setElementStyle(_this.element.nativeElement, 'display', 'none');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PhotoOwnerDirective.prototype, "photo", void 0);
    PhotoOwnerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[photo-owner]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"],
            src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], PhotoOwnerDirective);
    return PhotoOwnerDirective;
}());



/***/ }),

/***/ "./src/app/photos/photos-details/photos-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/photos/photos-details/photos-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "break-word {\r\n    word-wrap: break-word;\r\n}"

/***/ }),

/***/ "./src/app/photos/photos-details/photos-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/photos/photos-details/photos-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-white border\" *ngIf=\"(photo$ | async) as photo\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8\">\r\n      <apj-photo [url]=\"photo.url\" [descricao]=\"photo.description\"></apj-photo>\r\n    </div>\r\n    <div class=\"col-lg-4 p-4\">\r\n      <small>\r\n        <p class=\"text-left break-word\">{{ photo.description }}</p>\r\n        <div class=\"text-left mb-4\">\r\n            <i (click)='like(photo)' showiflogged class=\"fa fa-heart-o fa-2x mr-2 pull-left\"> {{ photo.likes }} </i>\r\n            <i class=\"fa fa-comment-o fa-2x mr-2 ml-2\"></i>{{ photo.comments }}\r\n            <i photo-owner [photo]='photo' (click)=\"remove()\" class=\"fa fa-trash-o fa-2x pull-right\"></i>\r\n        </div>\r\n        <hr>\r\n    </small>\r\n      <apj-photo-comment *ngIf=\"photo.allowComments; else warning\" [photoId]='photo.id'></apj-photo-comment>\r\n      <ng-template #warning>\r\n        <p>User has disabled comments for this photo</p>\r\n    </ng-template>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/photos/photos-details/photos-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/photos/photos-details/photos-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: PhotosDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosDetailsComponent", function() { return PhotosDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _photo_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../photo/photo.service */ "./src/app/photos/photo/photo.service.ts");
/* harmony import */ var src_app_shared_components_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/alert/alert.service */ "./src/app/shared/components/alert/alert.service.ts");
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/user/user.service */ "./src/app/core/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhotosDetailsComponent = /** @class */ (function () {
    function PhotosDetailsComponent(route, photoService, router, alertService, user) {
        this.route = route;
        this.photoService = photoService;
        this.router = router;
        this.alertService = alertService;
        this.user = user;
    }
    PhotosDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.photoId = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService.selectById(this.photoId);
        this.photo$.subscribe(function () { }, function (erro) {
            _this.router.navigate(['/image-not-found']);
        });
    };
    PhotosDetailsComponent.prototype.remove = function () {
        var _this = this;
        this.photoService.remove(this.photoId)
            .subscribe(function () {
            _this.alertService.success('Foto Removida como sucesso!!!');
            _this.router.navigate(['/lista', _this.user.getuserName()], { replaceUrl: true });
        }, function (erro) {
            console.log(erro);
            _this.alertService.danger("Erro ao deletar a foto, Tente novamente!!!");
        });
    };
    PhotosDetailsComponent.prototype.like = function (photo) {
        var _this = this;
        this.photoService.like(photo.id)
            .subscribe(function (liked) {
            if (liked) {
                _this.photo$ = _this.photoService.selectById(photo.id);
            }
        });
    };
    PhotosDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./photos-details.component.html */ "./src/app/photos/photos-details/photos-details.component.html"),
            styles: [__webpack_require__(/*! ./photos-details.component.css */ "./src/app/photos/photos-details/photos-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _photo_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_shared_components_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], PhotosDetailsComponent);
    return PhotosDetailsComponent;
}());



/***/ }),

/***/ "./src/app/photos/photos-details/photos-details.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/photos/photos-details/photos-details.module.ts ***!
  \****************************************************************/
/*! exports provided: PhotosDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosDetailsModule", function() { return PhotosDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _photos_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photos-details.component */ "./src/app/photos/photos-details/photos-details.component.ts");
/* harmony import */ var _photo_photo_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../photo/photo.module */ "./src/app/photos/photo/photo.module.ts");
/* harmony import */ var _photo_comment_photo_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./photo-comment/photo-comment.component */ "./src/app/photos/photos-details/photo-comment/photo-comment.component.ts");
/* harmony import */ var src_app_shared_components_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/vmessage/vmessage.module */ "./src/app/shared/components/vmessage/vmessage.module.ts");
/* harmony import */ var _photo_owner_photo_owner_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./photo-owner/photo-owner.directive */ "./src/app/photos/photos-details/photo-owner/photo-owner.directive.ts");
/* harmony import */ var src_app_shared_directive_show_if_logged_show_if_logged_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/directive/show-if-logged/show-if-logged.module */ "./src/app/shared/directive/show-if-logged/show-if-logged.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PhotosDetailsModule = /** @class */ (function () {
    function PhotosDetailsModule() {
    }
    PhotosDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _photos_details_component__WEBPACK_IMPORTED_MODULE_4__["PhotosDetailsComponent"],
                _photo_comment_photo_comment_component__WEBPACK_IMPORTED_MODULE_6__["PhotoCommentComponent"],
                _photo_owner_photo_owner_directive__WEBPACK_IMPORTED_MODULE_8__["PhotoOwnerDirective"]
            ],
            exports: [
                _photos_details_component__WEBPACK_IMPORTED_MODULE_4__["PhotosDetailsComponent"],
                _photo_comment_photo_comment_component__WEBPACK_IMPORTED_MODULE_6__["PhotoCommentComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _photo_photo_module__WEBPACK_IMPORTED_MODULE_5__["PhotoModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_shared_components_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_7__["VMessageModule"],
                src_app_shared_directive_show_if_logged_show_if_logged_module__WEBPACK_IMPORTED_MODULE_9__["ShowIfLoggedModule"]
            ]
        })
    ], PhotosDetailsModule);
    return PhotosDetailsModule;
}());



/***/ }),

/***/ "./src/app/photos/photos.module.ts":
/*!*****************************************!*\
  !*** ./src/app/photos/photos.module.ts ***!
  \*****************************************/
/*! exports provided: PhotosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosModule", function() { return PhotosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _photo_photo_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo/photo.module */ "./src/app/photos/photo/photo.module.ts");
/* harmony import */ var _photo_form_photo_form_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photo-form/photo-form.module */ "./src/app/photos/photo-form/photo-form.module.ts");
/* harmony import */ var _photo_list_photo_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./photo-list/photo-list.module */ "./src/app/photos/photo-list/photo-list.module.ts");
/* harmony import */ var _photos_details_photos_details_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photos-details/photos-details.module */ "./src/app/photos/photos-details/photos-details.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PhotosModule = /** @class */ (function () {
    function PhotosModule() {
    }
    PhotosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _photo_photo_module__WEBPACK_IMPORTED_MODULE_2__["PhotoModule"],
                _photo_form_photo_form_module__WEBPACK_IMPORTED_MODULE_3__["PhotoFormModule"],
                _photo_list_photo_list_module__WEBPACK_IMPORTED_MODULE_4__["PhotolistModule"],
                _photos_details_photos_details_module__WEBPACK_IMPORTED_MODULE_5__["PhotosDetailsModule"]
            ]
        })
    ], PhotosModule);
    return PhotosModule;
}());



/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{getAlertClass(alert)}} text-center\">\r\n    {{ alert.mensagem }}\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: MyAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAlertComponent", function() { return MyAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.service */ "./src/app/shared/components/alert/alert.service.ts");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert */ "./src/app/shared/components/alert/alert.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyAlertComponent = /** @class */ (function () {
    function MyAlertComponent(alertService) {
        var _this = this;
        this.alertService = alertService;
        this.timer = 3000;
        this.alerts = [];
        this.alertService.getAlert()
            .subscribe(function (alert) {
            if (!alert)
                return _this.alerts = [];
            _this.alerts.push(alert);
            setTimeout(function () { return _this.removeAlert(alert); }, _this.timer);
        });
    }
    MyAlertComponent.prototype.removeAlert = function (alertToRemove) {
        this.alerts = this.alerts.filter(function (alert) { return alert != alertToRemove; });
    };
    MyAlertComponent.prototype.getAlertClass = function (alert) {
        if (!alert)
            return "";
        switch (alert.alertType) {
            case _alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].DANGER:
                return 'alert alert-danger';
            case _alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].INFO:
                return 'alert alert-info';
            case _alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].SUCCESS:
                return 'alert alert-success';
            case _alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].WARNING:
                return 'alert alert-warning';
        }
    };
    MyAlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apj-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/shared/components/alert/alert.component.html")
        }),
        __metadata("design:paramtypes", [_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], MyAlertComponent);
    return MyAlertComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/alert/alert.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/alert/alert.module.ts ***!
  \*********************************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.component */ "./src/app/shared/components/alert/alert.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_1__["MyAlertComponent"]],
            exports: [_alert_component__WEBPACK_IMPORTED_MODULE_1__["MyAlertComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
        })
    ], AlertModule);
    return AlertModule;
}());



/***/ }),

/***/ "./src/app/shared/components/alert/alert.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/alert/alert.service.ts ***!
  \**********************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ "./src/app/shared/components/alert/alert.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertService = /** @class */ (function () {
    function AlertService() {
        this.alertSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AlertService.prototype.success = function (mensage, keepThePage) {
        if (keepThePage === void 0) { keepThePage = true; }
        this.alert(mensage, _alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].SUCCESS);
    };
    AlertService.prototype.danger = function (mensage, keepThePage) {
        if (keepThePage === void 0) { keepThePage = true; }
        this.alert(mensage, _alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].DANGER);
    };
    AlertService.prototype.warning = function (mensage, keepThePage) {
        if (keepThePage === void 0) { keepThePage = true; }
        this.alert(mensage, _alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].WARNING);
    };
    AlertService.prototype.info = function (mensage, keepThePage) {
        if (keepThePage === void 0) { keepThePage = true; }
        this.alert(mensage, _alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].INFO);
    };
    AlertService.prototype.alert = function (mensage, alertType) {
        this.alertSubject.next(new _alert__WEBPACK_IMPORTED_MODULE_1__["MyAlert"](mensage, alertType));
    };
    AlertService.prototype.getAlert = function () {
        return this.alertSubject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/shared/components/alert/alert.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/components/alert/alert.ts ***!
  \**************************************************/
/*! exports provided: MyAlert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAlert", function() { return MyAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
var MyAlert = /** @class */ (function () {
    function MyAlert(mensagem, alertType) {
        this.mensagem = mensagem;
        this.alertType = alertType;
    }
    return MyAlert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["SUCCESS"] = 0] = "SUCCESS";
    AlertType[AlertType["DANGER"] = 1] = "DANGER";
    AlertType[AlertType["WARNING"] = 2] = "WARNING";
    AlertType[AlertType["INFO"] = 3] = "INFO";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/shared/components/card/card.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/components/card/card.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border-light text-center\">\r\n    <h4 class=\"card-header\">{{ titulo }}</h4>\r\n    <div class=\"card-block text-justify\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/card/card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/card/card.component.ts ***!
  \**********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
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

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "titulo", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apj-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/shared/components/card/card.component.html")
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/card/card.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/components/card/card.module.ts ***!
  \*******************************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component */ "./src/app/shared/components/card/card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
            exports: [_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        })
    ], CardModule);
    return CardModule;
}());



/***/ }),

/***/ "./src/app/shared/components/loading/loading-type.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/loading/loading-type.ts ***!
  \***********************************************************/
/*! exports provided: LoadingType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingType", function() { return LoadingType; });
var LoadingType;
(function (LoadingType) {
    LoadingType["LOADING"] = "loading";
    LoadingType["STOPPED"] = "stopped";
})(LoadingType || (LoadingType = {}));


/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\r\n    margin: 0;\r\n    background: linear-gradient(270deg, #ff0000, #ffa500, #ffff00, #008000, #0000ff, #4b0082, #ee82ee);\r\n    -webkit-animation: progress 2s ease;\r\n            animation: progress 2s ease;\r\n    height: 0.2em;\r\n}\r\n\r\n@-webkit-keyframes progress {\r\n    0% {\r\n        width: 0;\r\n    }\r\n    100% {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@keyframes progress {\r\n    0% {\r\n        width: 0;\r\n    }\r\n    100% {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n.stopped {\r\n    display: none;\r\n}"

/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr [ngClass]= \"loading$ | async\">\r\n"

/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.service */ "./src/app/shared/components/loading/loading.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(loadingService) {
        this.loadingService = loadingService;
    }
    LoadingComponent.prototype.ngOnInit = function () {
        this.loading$ = this.loadingService
            .getLoading()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (loadingType) {
            return loadingType.valueOf();
        }));
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apj-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/shared/components/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/shared/components/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [_loading_service__WEBPACK_IMPORTED_MODULE_1__["LoadingService"]])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/loading/loading.interceptor.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.interceptor.ts ***!
  \******************************************************************/
/*! exports provided: LoadingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingInterceptor", function() { return LoadingInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.service */ "./src/app/shared/components/loading/loading.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoadingInterceptor = /** @class */ (function () {
    function LoadingInterceptor(loadingService) {
        this.loadingService = loadingService;
    }
    LoadingInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next
            .handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                _this.loadingService.stop();
            }
            else {
                _this.loadingService.start();
            }
        }));
    };
    LoadingInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]])
    ], LoadingInterceptor);
    return LoadingInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/components/loading/loading.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.module.ts ***!
  \*************************************************************/
/*! exports provided: LoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingModule", function() { return LoadingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.component */ "./src/app/shared/components/loading/loading.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _loading_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading.interceptor */ "./src/app/shared/components/loading/loading.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    LoadingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"]],
            exports: [_loading_component__WEBPACK_IMPORTED_MODULE_1__["LoadingComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _loading_interceptor__WEBPACK_IMPORTED_MODULE_4__["LoadingInterceptor"],
                    multi: true
                }]
        })
    ], LoadingModule);
    return LoadingModule;
}());



/***/ }),

/***/ "./src/app/shared/components/loading/loading.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.service.ts ***!
  \**************************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-type */ "./src/app/shared/components/loading/loading-type.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LoadingService.prototype.getLoading = function () {
        return this.loadingSubject
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(_loading_type__WEBPACK_IMPORTED_MODULE_1__["LoadingType"].STOPPED));
    };
    LoadingService.prototype.start = function () {
        this.loadingSubject.next(_loading_type__WEBPACK_IMPORTED_MODULE_1__["LoadingType"].LOADING);
    };
    LoadingService.prototype.stop = function () {
        this.loadingSubject.next(_loading_type__WEBPACK_IMPORTED_MODULE_1__["LoadingType"].STOPPED);
    };
    LoadingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/shared/components/menu/menu.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-bar {\r\n    position:  fixed;\r\n    height: 100%;\r\n    width: 90%;\r\n    max-width: 320px;\r\n    margin: 0;\r\n    padding: 1em;\r\n    background: #f0f0f0;\r\n    top: 0;\r\n    left: -90%;\r\n    transition: left 0.3s ease-out;\r\n    z-index: 1;\r\n}\r\n\r\n.active-menu .menu-bar { \r\n    left: 0;\r\n}\r\n\r\n.active-menu .overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: rgba(0,0,0, 0.4);\r\n}"

/***/ }),

/***/ "./src/app/shared/components/menu/menu.component.html":
/*!************************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'active-menu': isShow}\">\r\n    <div class=\"menu-bar\">\r\n        <i tabindex=\"0\" (keyup.space)='toggle()' class=\"fa fa-window-close\" (click)='toggle()'></i>\r\n        <ng-content></ng-content>\r\n    </div>\r\n    <div class=\"overlay\" (click)=\"toggle()\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/menu/menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.isShow = false;
    }
    MenuComponent.prototype.toggle = function () {
        this.isShow = !this.isShow;
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "apj-menu",
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/shared/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/shared/components/menu/menu.component.css")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/menu/menu.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/components/menu/menu.module.ts ***!
  \*******************************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component */ "./src/app/shared/components/menu/menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/shared/components/vmessage/vmessage.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/vmessage/vmessage.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<small class=\"text-danger d-block mt-2\">{{mensagem}}</small>"

/***/ }),

/***/ "./src/app/shared/components/vmessage/vmessage.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/vmessage/vmessage.component.ts ***!
  \******************************************************************/
/*! exports provided: VMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMessageComponent", function() { return VMessageComponent; });
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

var VMessageComponent = /** @class */ (function () {
    function VMessageComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], VMessageComponent.prototype, "mensagem", void 0);
    VMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apj-vmessage',
            template: __webpack_require__(/*! ./vmessage.component.html */ "./src/app/shared/components/vmessage/vmessage.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], VMessageComponent);
    return VMessageComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/vmessage/vmessage.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/vmessage/vmessage.module.ts ***!
  \***************************************************************/
/*! exports provided: VMessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VMessageModule", function() { return VMessageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _vmessage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vmessage.component */ "./src/app/shared/components/vmessage/vmessage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var VMessageModule = /** @class */ (function () {
    function VMessageModule() {
    }
    VMessageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_vmessage_component__WEBPACK_IMPORTED_MODULE_1__["VMessageComponent"]],
            exports: [_vmessage_component__WEBPACK_IMPORTED_MODULE_1__["VMessageComponent"]]
        })
    ], VMessageModule);
    return VMessageModule;
}());



/***/ }),

/***/ "./src/app/shared/directive/darken-on-hover/darken-on-hover.directive.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/directive/darken-on-hover/darken-on-hover.directive.ts ***!
  \*******************************************************************************/
/*! exports provided: DarkenOnHover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkenOnHover", function() { return DarkenOnHover; });
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

var DarkenOnHover = /** @class */ (function () {
    function DarkenOnHover(el, render) {
        this.el = el;
        this.render = render;
        this.valor = "70%";
    }
    DarkenOnHover.prototype.darkon = function () {
        this.render
            .setElementStyle(this.el.nativeElement, 'filter', "brightness(" + this.valor + ")");
    };
    DarkenOnHover.prototype.darkoff = function () {
        this.render
            .setElementStyle(this.el.nativeElement, 'filter', "brightness(100%)");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DarkenOnHover.prototype, "darkon", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DarkenOnHover.prototype, "darkoff", null);
    DarkenOnHover = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[darken]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], DarkenOnHover);
    return DarkenOnHover;
}());



/***/ }),

/***/ "./src/app/shared/directive/darken-on-hover/darken-on-hover.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/directive/darken-on-hover/darken-on-hover.module.ts ***!
  \****************************************************************************/
/*! exports provided: DarkenOnHoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkenOnHoverModule", function() { return DarkenOnHoverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _darken_on_hover_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./darken-on-hover.directive */ "./src/app/shared/directive/darken-on-hover/darken-on-hover.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DarkenOnHoverModule = /** @class */ (function () {
    function DarkenOnHoverModule() {
    }
    DarkenOnHoverModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_darken_on_hover_directive__WEBPACK_IMPORTED_MODULE_1__["DarkenOnHover"]],
            exports: [_darken_on_hover_directive__WEBPACK_IMPORTED_MODULE_1__["DarkenOnHover"]]
        })
    ], DarkenOnHoverModule);
    return DarkenOnHoverModule;
}());



/***/ }),

/***/ "./src/app/shared/directive/immediate-click/immediate-click.directive.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/directive/immediate-click/immediate-click.directive.ts ***!
  \*******************************************************************************/
/*! exports provided: ImmediateClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImmediateClickDirective", function() { return ImmediateClickDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_plataform_detector_platform_dectection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/plataform-detector/platform-dectection.service */ "./src/app/core/plataform-detector/platform-dectection.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImmediateClickDirective = /** @class */ (function () {
    function ImmediateClickDirective(elemento, platformDetector) {
        this.elemento = elemento;
        this.platformDetector = platformDetector;
    }
    ImmediateClickDirective.prototype.ngOnInit = function () {
        this.platformDetector.isBrowser() && this.elemento.nativeElement.click();
    };
    ImmediateClickDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[immediateClick]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            src_app_core_plataform_detector_platform_dectection_service__WEBPACK_IMPORTED_MODULE_1__["PlatformDectectionService"]])
    ], ImmediateClickDirective);
    return ImmediateClickDirective;
}());



/***/ }),

/***/ "./src/app/shared/directive/immediate-click/immediate-click.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/directive/immediate-click/immediate-click.module.ts ***!
  \****************************************************************************/
/*! exports provided: ImmediateClickModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImmediateClickModule", function() { return ImmediateClickModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _immediate_click_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./immediate-click.directive */ "./src/app/shared/directive/immediate-click/immediate-click.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImmediateClickModule = /** @class */ (function () {
    function ImmediateClickModule() {
    }
    ImmediateClickModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_immediate_click_directive__WEBPACK_IMPORTED_MODULE_2__["ImmediateClickDirective"]],
            exports: [_immediate_click_directive__WEBPACK_IMPORTED_MODULE_2__["ImmediateClickDirective"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        })
    ], ImmediateClickModule);
    return ImmediateClickModule;
}());



/***/ }),

/***/ "./src/app/shared/directive/show-if-logged/show-if-logged.directive.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/directive/show-if-logged/show-if-logged.directive.ts ***!
  \*****************************************************************************/
/*! exports provided: ShowIfLoggedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowIfLoggedDirective", function() { return ShowIfLoggedDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/user/user.service */ "./src/app/core/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowIfLoggedDirective = /** @class */ (function () {
    function ShowIfLoggedDirective(element, userService, render) {
        this.element = element;
        this.userService = userService;
        this.render = render;
    }
    ShowIfLoggedDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
        this.userService.getUser()
            .subscribe(function (user) {
            if (user) {
                _this.render.setElementStyle(_this.element.nativeElement, 'display', _this.currentDisplay);
            }
            else {
                _this.currentDisplay = getComputedStyle(_this.element.nativeElement).display;
                _this.render.setElementStyle(_this.element.nativeElement, 'display', 'none');
            }
        });
    };
    ShowIfLoggedDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[showiflogged]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            src_app_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], ShowIfLoggedDirective);
    return ShowIfLoggedDirective;
}());



/***/ }),

/***/ "./src/app/shared/directive/show-if-logged/show-if-logged.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/directive/show-if-logged/show-if-logged.module.ts ***!
  \**************************************************************************/
/*! exports provided: ShowIfLoggedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowIfLoggedModule", function() { return ShowIfLoggedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _show_if_logged_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-if-logged.directive */ "./src/app/shared/directive/show-if-logged/show-if-logged.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowIfLoggedModule = /** @class */ (function () {
    function ShowIfLoggedModule() {
    }
    ShowIfLoggedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_show_if_logged_directive__WEBPACK_IMPORTED_MODULE_1__["ShowIfLoggedDirective"]],
            exports: [_show_if_logged_directive__WEBPACK_IMPORTED_MODULE_1__["ShowIfLoggedDirective"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
        })
    ], ShowIfLoggedModule);
    return ShowIfLoggedModule;
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
    production: false,
    urlBase: 'http://localhost:3000/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! C:\projetos\Angular\aircraftpic\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map