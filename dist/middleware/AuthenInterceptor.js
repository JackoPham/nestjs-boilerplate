"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
require("rxjs/add/operator/do");
let AuthenInterceptor = class AuthenInterceptor {
    intercept(context, stream$) {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest();
        let token = request.headers['authorization'];
        if (token)
            request.headers['authorization'] = 'Authen:' + token;
        else
            request.headers['authorization'] = 'none';
        const now = Date.now();
        return stream$.do(() => console.log(`After... ${Date.now() - now}ms`));
    }
};
AuthenInterceptor = __decorate([
    common_1.Interceptor()
], AuthenInterceptor);
exports.AuthenInterceptor = AuthenInterceptor;
//# sourceMappingURL=AuthenInterceptor.js.map