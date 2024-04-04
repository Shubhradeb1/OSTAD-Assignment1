class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Deposited $"+amount, "Current Balance : $"+this.balance);
        }else{
            console.log("Amount should be greater than Zero");
        }
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdraw $"+amount, "Current Balance : $"+this.balance);
            } else {
            console.log("Insufficient funds.");
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log("Account Number: " + this.accountNumber);
        console.log("Owner Name: " + this.ownerName);
        console.log("Balance: $"  + this.balance);
    }
}

const account1 = new BankAccount(1001, "John Doe", 50);
const account2 = new BankAccount(1002, "Jane Doe", 100);

account1.deposit(10);
account1.withdraw(2);
account1.displayAccountInfo();

account2.deposit(10);
account2.withdraw(2);
account2.displayAccountInfo();







