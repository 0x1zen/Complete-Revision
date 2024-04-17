class BankAccount{
    customerName;
    accountNumber;
    balance;

    constructor(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;
    }

    deposit(amount){
        this.balance+=amount;
    }

    withDraw(amount){
        this.balance-=amount;
    }
}

