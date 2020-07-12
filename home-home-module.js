(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/core/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.service */ "./src/app/core/user/user.service.ts");
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





var api_base = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urlBase;
var AuthService = /** @class */ (function () {
    function AuthService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    AuthService.prototype.autenticador = function (userName, password) {
        var _this = this;
        return this.http
            .post(api_base + "user/login", { userName: userName, password: password }, { observe: "response" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            _this.userService.setToken(res.headers.get('x-access-token'));
        }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/auth/login.guard.ts":
/*!******************************************!*\
  !*** ./src/app/core/auth/login.guard.ts ***!
  \******************************************/
/*! exports provided: LoginAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAuth", function() { return LoginAuth; });
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



var LoginAuth = /** @class */ (function () {
    function LoginAuth(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    LoginAuth.prototype.canActivate = function (route, state) {
        if (this.userService.logged()) {
            this.route.navigate(['lista', this.userService.getuserName()]);
            return false;
        }
        return true;
    };
    LoginAuth = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginAuth);
    return LoginAuth;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mb-2\">\r\n            <img class=\"img-fluid d-none d-sm-block\"\r\n                src=\"../../assets/home.jpg\" alt=\"Welcome\">\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/home/signin/signin.component.ts");
/* harmony import */ var _shared_components_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/vmessage/vmessage.module */ "./src/app/shared/components/vmessage/vmessage.module.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.routing.module */ "./src/app/home/home.routing.module.ts");
/* harmony import */ var _signup_signup_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.service */ "./src/app/home/signup/signup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"], _home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _shared_components_vmessage_vmessage_module__WEBPACK_IMPORTED_MODULE_5__["VMessageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_8__["HomeRoutingModule"]
            ],
            providers: [
                _signup_signup_service__WEBPACK_IMPORTED_MODULE_9__["SignupService"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home.routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home.routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/home/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _core_auth_login_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/auth/login.guard */ "./src/app/core/auth/login.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var rotas = [
    { path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_core_auth_login_guard__WEBPACK_IMPORTED_MODULE_5__["LoginAuth"]],
        children: [
            { path: '', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"], data: { title: 'Login' } },
            { path: 'cadastrar', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], data: { title: 'Cadastro' } },
        ]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(rotas)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"text-center\">Login</h4>\r\n\r\n<form [formGroup]='userLogin' class=\"form mt-4\" (submit)=\"login()\">\r\n\r\n    <div class=\"form-group\">\r\n        <input #usuarioInput\r\n            formControlName='usuario'\r\n            class=\"form-control\" \r\n            placeholder=\"user name\" \r\n            autofocus>\r\n        <apj-vmessage *ngIf=\"userLogin.get('usuario').errors?.required\" \r\n        mensagem=\"User name is required!\"></apj-vmessage>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <input\r\n            formControlName='password' \r\n            type=\"password\" \r\n            class=\"form-control\" \r\n            placeholder=\"password\">\r\n        <apj-vmessage *ngIf=\"userLogin.get('password').errors?.required\" \r\n        mensagem=\"Password is required!\"></apj-vmessage>             \r\n    </div>\r\n\r\n    <button\r\n        [disabled]='userLogin.invalid'\r\n        type=\"submit\" \r\n        class=\"btn btn-primary btn-block\">\r\n        login\r\n    </button>\r\n\r\n</form>\r\n\r\n<p>Not a user? <a [routerLink]=\"['cadastrar']\">Register now</a></p>"

/***/ }),

/***/ "./src/app/home/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/auth/auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_plataform_detector_platform_dectection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/plataform-detector/platform-dectection.service */ "./src/app/core/plataform-detector/platform-dectection.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInComponent = /** @class */ (function () {
    function SignInComponent(formBilder, authService, router, platformDetectorService, activetadRouter) {
        this.formBilder = formBilder;
        this.authService = authService;
        this.router = router;
        this.platformDetectorService = platformDetectorService;
        this.activetadRouter = activetadRouter;
    }
    SignInComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activetadRouter.queryParams
            .subscribe(function (params) { return _this.url = params['fromUrl']; });
        this.userLogin = this.formBilder.group({
            usuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    SignInComponent.prototype.login = function () {
        var _this = this;
        var usuario = this.userLogin.get('usuario').value;
        var password = this.userLogin.get('password').value;
        this.authService.autenticador(usuario, password)
            .subscribe(function () {
            return _this.url ? _this.router.navigateByUrl(_this.url) : _this.router.navigate(['lista', usuario]);
        }, function (erro) {
            console.log(erro);
            _this.platformDetectorService.isBrowser() &&
                _this.usuarioInput.nativeElement.focus();
            _this.userLogin.reset();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('usuarioInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SignInComponent.prototype, "usuarioInput", void 0);
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/home/signin/signin.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_core_plataform_detector_platform_dectection_service__WEBPACK_IMPORTED_MODULE_4__["PlatformDectectionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/home/signup/my-validators/password-username.validator.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/signup/my-validators/password-username.validator.ts ***!
  \**************************************************************************/
/*! exports provided: passwordUserNamevalidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordUserNamevalidator", function() { return passwordUserNamevalidator; });
var passwordUserNamevalidator = function (formGroup) {
    var password = formGroup.get('password').value;
    var userName = formGroup.get('userName').value;
    if (userName.trim() && password.trim()) {
        return password != userName ? null : { equals: true };
    }
    else {
        return null;
    }
};


/***/ }),

/***/ "./src/app/home/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"text-center\"> Register to embrace a new world!</h4>\r\n\r\n<form [formGroup]='signupForm' class=\"form mt-4\" (submit)=\"submit()\">\r\n    <div class=\"form-group\">\r\n        <input formControlName='email' placeholder=\"email\" class=\"form-control\" autofocus >\r\n        <apj-vmessage *ngIf=\"signupForm.get('email').errors?.required\" mensagem='E-mail é obrigátorio'></apj-vmessage>\r\n        <apj-vmessage *ngIf=\"signupForm.get('email').errors?.email\" mensagem='E-mail inválido'></apj-vmessage>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <input formControlName='fullName' placeholder=\"full name\" class=\"form-control\">\r\n        <apj-vmessage *ngIf=\"signupForm.get('fullName').errors?.required\" mensagem='Nome completo é obrigátorio'></apj-vmessage>\r\n        <apj-vmessage *ngIf=\"signupForm.get('fullName').errors?.maxlength\" mensagem='Tamanho máximo são 40 caracteres'></apj-vmessage>\r\n        <apj-vmessage *ngIf=\"signupForm.get('fullName').errors?.minlength\" mensagem='Tamanho mínimo são de 2 caracteres'></apj-vmessage>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <input formControlName='userName' placeholder=\"user name\" class=\"form-control\">\r\n        <apj-vmessage *ngIf=\"signupForm.get('userName').errors?.required\" mensagem='UserName é obrigátorio'></apj-vmessage>\r\n\r\n        <apj-vmessage *ngIf=\"signupForm.get('userName').errors?.lowcase\" mensagem='UserName é inválido'></apj-vmessage>\r\n        <apj-vmessage *ngIf=\"signupForm.get('userName').errors?.userName\" mensagem='UserName indisponível'></apj-vmessage>\r\n\r\n        <apj-vmessage *ngIf=\"signupForm.get('userName').errors?.maxlength\" mensagem='Tamanho máximo são 30 caracteres'></apj-vmessage>\r\n    \r\n        <apj-vmessage *ngIf=\"signupForm.get('userName').errors?.minlength\" mensagem='Tamanho mínimo são de 2 caracteres'></apj-vmessage>\r\n    \r\n        <small *ngIf=\"signupForm.get('userName').valid\" class=\"text-success\">User available</small>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <input formControlName='password' type=\"password\" placeholder=\"password\" class=\"form-control\">\r\n        <apj-vmessage *ngIf=\"signupForm.get('password').errors?.required\" mensagem='Password é obrigátorio'></apj-vmessage>\r\n        <apj-vmessage *ngIf=\"signupForm.get('password').errors?.maxlength\" mensagem='Tamanho máximo são 30 caracteres'></apj-vmessage>\r\n        <apj-vmessage *ngIf=\"signupForm.get('password').errors?.minlength\" mensagem='Tamanho mínimo são de 6 caracteres'></apj-vmessage>\r\n        <apj-vmessage *ngIf=\"signupForm.errors?.equals\" mensagem='User Name e password devem ser diferemtes para a sua segurança'></apj-vmessage>\r\n    </div>\r\n\r\n    <button [disabled]='signupForm.invalid' class=\"btn btn-primary btn-block\">Register</button>\r\n\r\n    <p>Already a user? <a [routerLink]=\"['']\">Sign In!</a></p>\r\n</form>"

/***/ }),

/***/ "./src/app/home/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_not_taken_validator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-not-taken.validator.service */ "./src/app/home/signup/user-not-taken.validator.service.ts");
/* harmony import */ var src_app_shared_validators_low_case_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/validators/low-case.validator */ "./src/app/shared/validators/low-case.validator.ts");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.service */ "./src/app/home/signup/signup.service.ts");
/* harmony import */ var _my_validators_password_username_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-validators/password-username.validator */ "./src/app/home/signup/my-validators/password-username.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, userNotTakenValidatorService, signupService, router) {
        this.formBuilder = formBuilder;
        this.userNotTakenValidatorService = userNotTakenValidatorService;
        this.signupService = signupService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ],
            ],
            fullName: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)
                ]
            ],
            userName: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                    src_app_shared_validators_low_case_validator__WEBPACK_IMPORTED_MODULE_4__["lowCaseValidator"]
                ],
                this.userNotTakenValidatorService.usuarioExiste()
            ],
            password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)
                ]
            ],
        }, {
            validator: _my_validators_password_username_validator__WEBPACK_IMPORTED_MODULE_6__["passwordUserNamevalidator"]
        });
    };
    SignupComponent.prototype.submit = function () {
        var _this = this;
        var newUser = this.signupForm.getRawValue();
        this.signupService.signup(newUser)
            .subscribe(function () { return _this.router.navigate(['']); }, function (error) { return console.log(error); });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/home/signup/signup.component.html"),
            providers: [_user_not_taken_validator_service__WEBPACK_IMPORTED_MODULE_3__["UserNotTakenValidatorService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _user_not_taken_validator_service__WEBPACK_IMPORTED_MODULE_3__["UserNotTakenValidatorService"],
            _signup_service__WEBPACK_IMPORTED_MODULE_5__["SignupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/home/signup/signup.service.ts":
/*!***********************************************!*\
  !*** ./src/app/home/signup/signup.service.ts ***!
  \***********************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var api_base = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlBase;
var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
    }
    SignupService.prototype.checkUserName = function (userName) {
        return this.http.get(api_base + "user/exists/" + userName);
    };
    SignupService.prototype.signup = function (newUser) {
        return this.http.post(api_base + "user/signup", newUser);
    };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignupService);
    return SignupService;
}());



/***/ }),

/***/ "./src/app/home/signup/user-not-taken.validator.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/signup/user-not-taken.validator.service.ts ***!
  \*****************************************************************/
/*! exports provided: UserNotTakenValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNotTakenValidatorService", function() { return UserNotTakenValidatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.service */ "./src/app/home/signup/signup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserNotTakenValidatorService = /** @class */ (function () {
    function UserNotTakenValidatorService(signupService) {
        this.signupService = signupService;
    }
    UserNotTakenValidatorService.prototype.usuarioExiste = function () {
        var _this = this;
        return function (control) {
            return control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (userName) {
                return _this.signupService.checkUserName(userName);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (existe) { return existe ? { userName: true } : null; })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
        };
    };
    UserNotTakenValidatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"]])
    ], UserNotTakenValidatorService);
    return UserNotTakenValidatorService;
}());



/***/ }),

/***/ "./src/app/shared/validators/low-case.validator.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/validators/low-case.validator.ts ***!
  \*********************************************************/
/*! exports provided: lowCaseValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowCaseValidator", function() { return lowCaseValidator; });
function lowCaseValidator(control) {
    if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
        return { lowcase: true };
    }
    return null;
}


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map