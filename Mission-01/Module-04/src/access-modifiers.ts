class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    getBalance(){
        console.log(`My current balance is ${this._balance}`);
    }
    addDeposit(amount: number){
        this._balance = this._balance + amount;
    }
}

const myAccount = new BankAccount(444, "Mamun", 22222);
myAccount.addDeposit(20)
myAccount.getBalance()