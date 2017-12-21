import Account from '../interfaces/Account';
import {AccountType} from "../enums/AccountType";
import {TransactionOrigin} from "../enums/TransactionOrigin";
import Transaction from '../interfaces/Transaction';

export class CheckingAccount implements Account{

    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountType: AccountType;
    accountHistory : Transaction[] = [];

    constructor(name: string, birth: Date){
        this.accountHolderName = name;
        this.accountHolderBirthDate = birth;
        this.accountType = AccountType.checking;
        this.balance = 1000;
    }

    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin) : Transaction{
        let transaction: Transaction = {success: true, amount, transactionOrigin, resultBalance: this.balance, description, transactionDate: new Date(), errorMessage: '' };
        if(amount > this.balance){
            transaction.success = false;
            transaction.errorMessage = "You are trying to withdraw more than you have!";
            this.accountHistory.push(transaction);
            return transaction;
        }
        else{
            if(this.accountType !== AccountType.checking){
                let total = 0;
                this.accountHistory.map((trans) => {
                    (trans.transactionOrigin !== TransactionOrigin.branch) ? total++ : total;
                });
                if(total > 6){
                    transaction.errorMessage = `You are trying to make too many withdrawals in one month!`;
                    return transaction;
                }
            }
            if(this.accountType === AccountType.retirement){
                let day_in_ms = 1000 * 60 * 60 * 24;
                let d1 = this.accountHolderBirthDate.getTime();
                let d2 = new Date().getTime();

                let difference = d2 - d1;
                let age = (difference/day_in_ms) / 365;
                if(age < 60) {
                    return this.doTransaction(transaction, amount * 1.1, '-');
                }
            }
            return this.doTransaction(transaction, amount, '-');
        }
    }

    depositMoney(amount: number, description: string) : Transaction{
        let transaction: Transaction = {success: true, amount, resultBalance: this.balance, description, transactionDate: new Date(), errorMessage: '' };
        return this.doTransaction(transaction, amount, '+');
    }

    advanceDate(numberOfDays: number) : void{
        let date: Date = new Date();
        let interest = Number(`.0${this.accountType}`);

        for(let i = 0; i < numberOfDays; i++){
            if(date.getDate() === 1){
                this.accountHistory = [];
                this.balance += this.balance * interest / 12;
            }
            date.setDate(date.getDate() + 1);
        }
    }

    protected doTransaction(t: Transaction, amount: number, operator: string){
        (operator === '-') ? this.balance -= amount : this.balance += amount;
        t.resultBalance = this.balance;
        this.accountHistory.push(t);
        return t;
    }
}