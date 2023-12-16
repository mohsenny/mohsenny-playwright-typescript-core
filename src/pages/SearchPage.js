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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const BasePage_1 = require("./BasePage");
class LoginPage extends BasePage_1.BasePage {
    constructor(browser, page) {
        super(browser, page, 'http://example.com/login');
        this.searchFieldSelector = '#searchbox_input';
    }
    search(searchKeyword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.fill(this.searchFieldSelector, searchKeyword);
            yield this.page.keyboard.press('Enter');
        });
    }
}
exports.LoginPage = LoginPage;
