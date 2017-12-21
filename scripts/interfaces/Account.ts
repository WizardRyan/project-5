import {AccountType} from "../enums/AccountType";
import {TransactionOrigin} from "../enums/TransactionOrigin";
import Transaction from './Transaction';

export default interface Account {
    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number;
    accountType: AccountType;
    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin) : Transaction;
    depositMoney(amount: number, description: string) : Transaction;
    accountHistory : Transaction[];
    advanceDate(numberOfDays: number) : void;
}