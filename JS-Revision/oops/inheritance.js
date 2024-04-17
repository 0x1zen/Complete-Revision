// function BankAccount(customerName,balance=0){
//     this.customerName=customerName;
//     this.accountNumber=Date.now();
//     this.balance=balance;

// }

// BankAccount.prototype.deposit=function (amount){
//     this.balance+=amount;
// }
// BankAccount.prototype.withDraw=function (amount){
//     this.balance-=amount;
// }

// function SavingsAccount(customerName,balance=0){
//     BankAccount.call(this,customerName,balance) //here this means for the abjects made with the current function
//     this.transactionLimit=10000;

// }

// SavingsAccount.prototype=Object.create(BankAccount.prototype);

// SavingsAccount.prototype.takeBusinessLoan=function (amount){
//     console.log("Took loan",amount);
// }


// function CurrentAccount(customerName,balance=0){
//     BankAccount.call(this,customerName,balance);
//     this.transactionLimit=50000;

// }
// CurrentAccount.prototype=Object.create(BankAccount.prototype);


// CurrentAccount.prototype.takePersonalLoan=function (amount){
//     console.log("Took personal loan",amount);
// }


// const rajAccount=new SavingsAccount("Raj",500); 
// rajAccount.takeBusinessLoan(4000);
// rajAccount.deposit(1000);
// rajAccount.withDraw(500);

// console.log(rajAccount);


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

class CurrentAccount extends BankAccount{
    transactionLimit=50000;

    constructor(customerName,balance=0){
        super(customerName,balance);
    }

    takeBusinessLoan(amount){
        console.log("Took business loan" + amount);
    }
}

class SavingsAccount extends BankAccount{
    transactionLimit=10000;

    constructor(customerName,balance=0){
        super(customerName,balance);
    }
    takePersonalLoan(amount){
        console.log("Took personal loan"+amount);
    }
}

const rajAccount=new SavingsAccount("Raj",500); 
rajAccount.takePersonalLoan(4000);
rajAccount.deposit(1000);
rajAccount.withDraw(500);

console.log(rajAccount);