"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
// Services
var question_service_1 = require('./service/question.service');
var storage_service_1 = require('./service/storage.service');
var storage_service_manager_1 = require('./service/storage.service.manager');
var debug_1 = require('./util/debug');
// Components
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./pages/dashboard.component');
var signup_component_1 = require('./pages/signup.component');
var signin_component_1 = require('./pages/signin.component');
var overview_component_1 = require('./pages/overview.component');
var detail_component_1 = require('./pages/detail.component');
var privacy_component_1 = require('./pages/privacy.component');
var terms_component_1 = require('./pages/terms.component');
var contact_component_1 = require('./pages/contact.component');
// Views
var question_cardview_component_1 = require('./view/question-cardview.component');
//Directive
var header_directive_component_1 = require('./directive/header-directive.component');
var footer_directive_component_1 = require('./directive/footer-directive.component');
var common_1 = require('@angular/common');
// Create config options (see ILocalStorageServiceConfigOptions) for deets:
var localStorageServiceConfig = {
    prefix: 'first-impression',
    storageType: 'sessionStorage'
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                    },
                    {
                        path: 'dashboard',
                        component: dashboard_component_1.DashboardComponent
                    },
                    {
                        path: 'signup',
                        component: signup_component_1.SignUpComponent
                    },
                    {
                        path: 'signin',
                        component: signin_component_1.SignInComponent
                    },
                    {
                        path: 'overview',
                        component: overview_component_1.OverviewComponent
                    },
                    {
                        path: 'detail',
                        component: detail_component_1.DetailComponent
                    },
                    {
                        path: 'privacy',
                        component: privacy_component_1.PrivacyComponent
                    },
                    {
                        path: 'terms',
                        component: terms_component_1.TermsComponent
                    },
                    {
                        path: 'contact',
                        component: contact_component_1.ContactComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                signup_component_1.SignUpComponent,
                signin_component_1.SignInComponent,
                overview_component_1.OverviewComponent,
                detail_component_1.DetailComponent,
                header_directive_component_1.HeaderDirectiveComponent,
                footer_directive_component_1.FooterDirectiveComponent,
                question_cardview_component_1.QuestionCardviewComponent,
                privacy_component_1.PrivacyComponent,
                terms_component_1.TermsComponent,
                contact_component_1.ContactComponent
            ],
            providers: [
                question_service_1.QuestionDataService,
                storage_service_1.LocalStorageService,
                storage_service_manager_1.LocalStorageManager,
                debug_1.LogUtil,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ],
            //Define application entry point component.
            bootstrap: [
                app_component_1.AppComponent,
                // So that we can use these component from index.html. we need to add them into bootstrap
                header_directive_component_1.HeaderDirectiveComponent,
                footer_directive_component_1.FooterDirectiveComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map