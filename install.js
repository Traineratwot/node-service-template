"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const os_service_1 = __importDefault(require("os-service"));
const path_1 = __importDefault(require("path"));
const main = (_a = process.env.npm_package_main) !== null && _a !== void 0 ? _a : 'index.js';
const name = (_b = process.env.npm_package_name) !== null && _b !== void 0 ? _b : path_1.default.basename(__dirname);
const options = {
    displayName: process.env.npm_package_description,
    programPath: path_1.default.join(__dirname, main)
};
os_service_1.default.add(name, options, function (error) {
    if (error)
        console.trace(error);
});
