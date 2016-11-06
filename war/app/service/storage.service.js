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
(function (STORAGE_KEY) {
    STORAGE_KEY[STORAGE_KEY["USER_NAME"] = 0] = "USER_NAME";
    STORAGE_KEY[STORAGE_KEY["PASSWORD"] = 1] = "PASSWORD";
    STORAGE_KEY[STORAGE_KEY["USER_THUMBNAIL"] = 2] = "USER_THUMBNAIL";
    STORAGE_KEY[STORAGE_KEY["ANSWERED_QUESTIONS"] = 3] = "ANSWERED_QUESTIONS";
    STORAGE_KEY[STORAGE_KEY["CREATED_QUESTIONS"] = 4] = "CREATED_QUESTIONS";
})(exports.STORAGE_KEY || (exports.STORAGE_KEY = {}));
var STORAGE_KEY = exports.STORAGE_KEY;
var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.set = function (key, value) {
        if (key == null) {
            throw "key cannot be null nor undefined";
        }
        if (value == null) {
            throw "value cannot be null nor undefined";
        }
        localStorage.setItem(key, JSON.stringify(value));
    };
    LocalStorageService.prototype.get = function (key) {
        if (key == null) {
            throw "key cannot be null nor undefined";
        }
        return JSON.parse(localStorage.getItem(key));
    };
    LocalStorageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LocalStorageService);
    return LocalStorageService;
}());
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=storage.service.js.map