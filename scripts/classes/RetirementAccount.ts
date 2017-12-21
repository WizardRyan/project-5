import {SavingsAccount} from "./SavingsAccount";
import {AccountType} from "../enums/AccountType";

export class RetirementAccount extends SavingsAccount{
    constructor(name: string, birth: Date){
        super(name, birth);
        this.accountType = AccountType.retirement;
        this.balance *= 10;
    }
}