"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckingAccount_1 = require("./classes/CheckingAccount");
var SavingsAccount_1 = require("./classes/SavingsAccount");
var RetirementAccount_1 = require("./classes/RetirementAccount");
var TransactionOrigin_1 = require("./enums/TransactionOrigin");
var ca = new CheckingAccount_1.CheckingAccount("WizardRyan", new Date(2000, 3, 29));
var sa = new SavingsAccount_1.SavingsAccount("SavingRyan", new Date(2000, 3, 29));
var ra = new RetirementAccount_1.RetirementAccount("OldRyan", new Date(1950, 3, 29));
var bra = new RetirementAccount_1.RetirementAccount("YoungRyan", new Date(2000, 3, 29));
console.log(ca.balance);
console.log(sa.balance);
console.log(ra.balance);
ra.advanceDate(30);
console.log(ra.balance);
ca.depositMoney(1000, "made 1k");
console.log(ca.balance);
ca.withdrawMoney(2000, "bought so much chocolate", TransactionOrigin_1.TransactionOrigin.phone);
console.log(ca.balance);
console.log(ca.withdrawMoney(50, "gonna overdraw", TransactionOrigin_1.TransactionOrigin.phone).errorMessage);
console.log(ca.balance);
for (var i = 0; i < 8; i++) {
    console.log(ra.balance);
    console.log(ra.withdrawMoney(1000, "I'm gonna die young", TransactionOrigin_1.TransactionOrigin.web).errorMessage);
    console.log(ra.balance);
}
ra.advanceDate(30);
ra.withdrawMoney(1000, "Yeet", TransactionOrigin_1.TransactionOrigin.phone);
console.log(ra.balance);
