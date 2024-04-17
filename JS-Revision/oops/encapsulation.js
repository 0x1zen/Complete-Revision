class BankAccount{
    customerName;
    accountNumber;
    #balance=0;

    constructor(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.#balance=balance;
    }

    deposit(amount){
        this.#balance+=amount;
    }

    withDraw(amount){
        this.#balance-=amount;
    }
    takeBusinessLoan(amount){
        this.calculateInterest(r,t);
        console.log("Tasking business loan"+amount);
    }
    set balance(amount){
        if(isNaN(amount)){
            throw new Error("Amount is not a number");
        }
        else{
            this.#balance=amount;
        }
        
    }
    get balance(){

        return this.#balance;
    }
    
    #calculateInterest(r,t){
        console.log("Interest Calculated");
    }
}

class CurrentAccount extends BankAccount{
    transactionLimit=50000;

    constructor(customerName,balance=0){
        super(customerName,balance);
    }

    takeBusinessLoan(amount){
        this.calculateInterest();
        console.log("Took business loan" + amount);
    }
}

const rajAccount=new CurrentAccount("Raj",5000);
// rajAccount.setBalance(400);
rajAccount.balance=4002;
console.log(rajAccount.takeBusinessLoan(5000));
// console.log(rajAccount);
console.log(rajAccount.balance);