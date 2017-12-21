"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AccountType_1 = require("../enums/AccountType");
var CheckingAccount_1 = require("./CheckingAccount");
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(name, birth) {
        var _this = _super.call(this, name, birth) || this;
        _this.accountType = AccountType_1.AccountType.savings;
        _this.balance *= 10;
        return _this;
    }
    return SavingsAccount;
}(CheckingAccount_1.CheckingAccount));
exports.SavingsAccount = SavingsAccount;
