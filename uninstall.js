"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const os_service_1 = __importDefault(require("os-service"));
const name = (_a = process.env.npm_package_name) !== null && _a !== void 0 ? _a : '';
os_service_1.default.remove(name, function (error) {
    if (error) {
        console.trace(error);
    }
});
