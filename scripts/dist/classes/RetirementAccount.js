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
var SavingsAccount_1 = require("./SavingsAccount");
var AccountType_1 = require("../enums/AccountType");
var RetirementAccount = /** @class */ (function (_super) {
    __extends(RetirementAccount, _super);
    function RetirementAccount(name, birth) {
        var _this = _super.call(this, name, birth) || this;
        _this.accountType = AccountType_1.AccountType.retirement;
        _this.balance *= 10;
        return _this;
    }
    return RetirementAccount;
}(SavingsAccount_1.SavingsAccount));
exports.RetirementAccount = RetirementAccount;
