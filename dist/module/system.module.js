"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const system_controller_1 = require("../controllers/system.controller");
const system_business_1 = require("../app/business/system.business");
let SystemModule = class SystemModule {
};
SystemModule = __decorate([
    common_1.Module({
        controllers: [system_controller_1.default],
        providers: [system_business_1.SystemService],
    })
], SystemModule);
exports.SystemModule = SystemModule;
//# sourceMappingURL=system.module.js.map