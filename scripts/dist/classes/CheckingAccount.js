"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccountType_1 = require("../enums/AccountType");
var TransactionOrigin_1 = require("../enums/TransactionOrigin");
var CheckingAccount = /** @class */ (function () {
    function CheckingAccount(name, birth) {
        this.accountHistory = [];
        this.accountHolderName = name;
        this.accountHolderBirthDate = birth;
        this.accountType = AccountType_1.AccountType.checking;
        this.balance = 1000;
    }
    CheckingAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var transaction = { success: true, amount: amount, transactionOrigin: transactionOrigin, resultBalance: this.balance, description: description, transactionDate: new Date(), errorMessage: '' };
        if (amount > this.balance) {
            transaction.success = false;
            transaction.errorMessage = "You are trying to withdraw more than you have!";
            this.accountHistory.push(transaction);
            return transaction;
        }
        else {
            if (this.accountType !== AccountType_1.AccountType.checking) {
                var total_1 = 0;
                this.accountHistory.map(function (trans) {
                    (trans.transactionOrigin !== TransactionOrigin_1.TransactionOrigin.branch) ? total_1++ : total_1;
                });
                if (total_1 > 6) {
                    transaction.errorMessage = "You are trying to make too many withdrawals in one month!";
                    return transaction;
                }
            }
            if (this.accountType === AccountType_1.AccountType.retirement) {
                var day_in_ms = 1000 * 60 * 60 * 24;
                var d1 = this.accountHolderBirthDate.getTime();
                var d2 = new Date().getTime();
                var difference = d2 - d1;
                var age = (difference / day_in_ms) / 365;
                if (age < 60) {
                    return this.doTransaction(transaction, amount * 1.1, '-');
                }
            }
            return this.doTransaction(transaction, amount, '-');
        }
    };
    CheckingAccount.prototype.depositMoney = function (amount, description) {
        var transaction = { success: true, amount: amount, resultBalance: this.balance, description: description, transactionDate: new Date(), errorMessage: '' };
        return this.doTransaction(transaction, amount, '+');
    };
    CheckingAccount.prototype.advanceDate = function (numberOfDays) {
        var date = new Date();
        var interest = Number(".0" + this.accountType);
        for (var i = 0; i < numberOfDays; i++) {
            if (date.getDate() === 1) {
                this.accountHistory = [];
                this.balance += this.balance * interest / 12;
            }
            date.setDate(date.getDate() + 1);
        }
    };
    CheckingAccount.prototype.doTransaction = function (t, amount, operator) {
        (operator === '-') ? this.balance -= amount : this.balance += amount;
        t.resultBalance = this.balance;
        this.accountHistory.push(t);
        return t;
    };
    return CheckingAccount;
}());
exports.CheckingAccount = CheckingAccount;
