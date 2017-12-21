import {AccountType} from "../enums/AccountType";
import {CheckingAccount} from "./CheckingAccount";

export class SavingsAccount extends CheckingAccount{
    constructor(name: string, birth: Date){
        super(name, birth);
        this.accountType = AccountType.savings;
        this.balance *= 10;
    }
}