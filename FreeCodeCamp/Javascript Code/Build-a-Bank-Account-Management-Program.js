class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push({ type: "deposit", amount: amount });
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push({ type: "withdraw", amount: amount });
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = [];
    for (const transaction of this.transactions) {
      if (transaction.type === "deposit") {
        deposits.push(transaction.amount);
      }
    }
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = [];
    for (const transaction of this.transactions) {
      if (transaction.type === "withdraw") {
        withdrawals.push(transaction.amount);
      }
    }
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

const myAccount = new BankAccount();

myAccount.deposit(100);
myAccount.deposit(150);
myAccount.withdraw(20);
myAccount.withdraw(30);
myAccount.deposit(50);