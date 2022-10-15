"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_service_1 = __importDefault(require("os-service"));
console.log('test1');
os_service_1.default.run(function () {
    console.log('test');
    os_service_1.default.stop();
});
console.log('test3');
