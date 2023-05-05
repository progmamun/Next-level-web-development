class BankAccount1 {
    public readonly id: number;
    public name: string;
    private _balance: number;
    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    // getter
    get balance(): number {
        return this._balance;
    }
    // getBalance(): number {
    //    return this._balance
    // }
    // setter 
    set deposit(amount: number) {
        this._balance = this.balance + amount;
    }
    // addDeposit(amount: number){
    //     this._balance = this._balance + amount;
    // }
}

const myAccount1 = new BankAccount1(444, "Mamun", 22222);
// myAccount.addDeposit(20)
// myAccount.getBalance()
myAccount1.deposit = 30;
console.log(myAccount1.balance);