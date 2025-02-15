// bank account manager example using lexical scope

function bankAccount(initialAmount){
    let balance = initialAmount;

    function deposit(amount){
        balance += amount;
        console.log(`Deposited amount is ${amount}. Current balance is ${balance}`);
    }

    function withdraw(amount){
        if(amount>balance){
            console.log(`Insufficient amount. Current balance is ${balance}`);
        } else{
            balance -=amount;
            console.log(`Withdrawal amount is ${amount}. Current balance is ${balance}`);
        }
    }

    function checkBalance(){
        console.log(`Current balance is ${balance}`);
    }

    return {
        deposit,
        withdraw,
        checkBalance
    }
}

let account = bankAccount(5000);
account.deposit(500);
account.withdraw(3000);
account.checkBalance();