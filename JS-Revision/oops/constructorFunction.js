// Creation of objects using constructor function

function BankAccount(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;

    // this.deposit=(amount)=>{
    //     this.balance+=amount;
    // }

    this.withDraw=(amount)=>{
        this.balance-=amount;
    }
}

BankAccount.prototype.deposit=function (amount){
    this.balance+=amount;
}

const rajAccount=new BankAccount("Raj",1000);

// const chetanAccount=new BankAccount("Chetan",15000);

// rajAccount.customerName="Dubal";

rajAccount.deposit(500);

// chetanAccount.withDraw(5000);

console.log(rajAccount);
// console.log(chetanAccount);

// const accounts=[];

// const accountForm=document.getElementById("accountForm");
// const customerName=document.getElementById("customerName");
// const balance=document.getElementById("balance");

// const depositForm=document.getElementById("depositForm");
// const accountNumber=document.getElementById("accountNumber");
// const depositAmount=document.getElementById("depositAmount"); 

// accountForm.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const account=new BankAccount(customerName.value,+balance.value);
//     accounts.push(account);
//     console.log(accounts);
// })

// depositForm.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const account=accounts.find((account)=>account.accountNumber===+accountNumber.value);
//     account.deposit(+depositAmount.value);
//     console.log(accounts);
// })
