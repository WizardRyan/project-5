import {CheckingAccount} from "./classes/CheckingAccount";
import {SavingsAccount} from "./classes/SavingsAccount";
import {RetirementAccount} from "./classes/RetirementAccount";
import {TransactionOrigin} from "./enums/TransactionOrigin";

let ca = new CheckingAccount("WizardRyan", new Date(2000, 3, 29));
let sa = new SavingsAccount("SavingRyan", new Date(2000, 3, 29));
let ra = new RetirementAccount("OldRyan", new Date(1950, 3, 29));
let bra = new RetirementAccount("YoungRyan", new Date(2000, 3, 29));

console.log(ca.balance);
console.log(sa.balance);
console.log(ra.balance);
ra.advanceDate(30);
console.log(ra.balance);

ca.depositMoney(1000, "made 1k");
console.log(ca.balance);
ca.withdrawMoney(2000, "bought so much chocolate", TransactionOrigin.phone);
console.log(ca.balance);
console.log(ca.withdrawMoney(50, "gonna overdraw", TransactionOrigin.phone).errorMessage);
console.log(ca.balance);

for(let i = 0; i < 8; i++){
    console.log(ra.balance);
    console.log(ra.withdrawMoney(1000, "I'm gonna die young", TransactionOrigin.web).errorMessage);
    console.log(ra.balance);
}

ra.advanceDate(30);

ra.withdrawMoney(1000, "Yeet", TransactionOrigin.phone);
console.log(ra.balance);

