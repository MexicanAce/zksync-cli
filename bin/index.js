#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
// @ts-ignore
// const figlet = require('figlet');
const figlet_1 = __importDefault(require("figlet"));
// import method to create projects
const create_1 = __importDefault(require("./create"));
const deposit_1 = __importDefault(require("./deposit"));
const withdraw_1 = __importDefault(require("./withdraw"));
const zeek_1 = __importDefault(require("./zeek"));
const availableOptions = ['create', 'deposit', 'withdraw'];
// second argument should be the selected option
const option = process.argv[2];
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!availableOptions.includes(option)) {
        console.log(`Invalid operation. Available operations are: ${availableOptions}`);
        process.exit(-1);
    }
    // Starts CLI
    console.log(chalk_1.default.magentaBright(figlet_1.default.textSync(`zkSync ${option}`, { horizontalLayout: 'full' })));
    const zeekFlag = Boolean(process.argv.filter(arg => arg === "--zeek")[0]);
    switch (option) {
        case 'create':
            // arg 3 is the project name
            const projectName = process.argv[3] || '.';
            yield (0, create_1.default)(projectName, zeekFlag);
            break;
        case 'deposit':
            yield (0, deposit_1.default)(zeekFlag);
            break;
        case 'withdraw':
            yield (0, withdraw_1.default)(zeekFlag);
            break;
    }
    if (zeekFlag) {
        yield (0, zeek_1.default)();
    }
    process.exit(0);
});
main();
