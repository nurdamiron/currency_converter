const input = require('sync-input');
const currencies = ["USD", "JPY", "EUR", "RUB", "GBP"];
const rates = [1, 113.5, 0.89, 74.36, 0.75];
function currencyCheck(a){
    if (currencies.includes(a)){
        return true;
    } else{
        return false;
    }
}

function amountIsinteger(b){
    if (Number.isInteger(b) == false){
        return false;
    } else{
            return true;
        }
}

function amountIsgreater(c) {
    if (c < 1) {
        return false;
    } else {
        return true;
    }
}

function curConverter(cur1, cur2){
    return rates[currencies.indexOf(cur2)]/rates[currencies.indexOf(cur1)];
}
    console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

let option = 1;
while (option !== 2) {
    console.log('What do you want to do?');
    console.log('1-Convert currencies 2-Exit program');
    option = input();
    if (option == 2) break;
    if (option == 1) {

        console.log('What do you want to convert?');
        //console.log("Type the currency you wish to convert: USD");
        //cur1 = 'USD';
        let cur1 = input("From: > ");
        cur1 = cur1.toUpperCase();
        if (currencyCheck(cur1)) {
            let cur2 = input("To: > ");
            cur2 = cur2.toUpperCase();
            if (currencyCheck(cur2)) {
                let amount1 = Number(input("Amount: > "));
                if (amountIsinteger(amount1) == false) {
                    console.log('The amount has to be a number')
                } else {
                    if (amountIsgreater(amount1) == false) {
                        console.log('The amount cannot be less than 1')
                    } else {
                        let rate = curConverter(cur1, cur2); //find the currency in array to calculate then the rate
                        let amount2 = (amount1 * rate);
                        console.log('Result:', amount1, cur1, 'equals', amount2.toFixed(4), cur2);
                    }
                }
            } else {
                console.log('Unknown currency');
            }
        } else {
            console.log('Unknown currency');
        }
    } else {
        console.log('Unknown input');
    }
}
console.log('Have a nice day!');
