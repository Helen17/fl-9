let amount = prompt('Please type amuont of money here!');
let discount = prompt('Please type your discount here!');
let result = '';

if(amount >= 0 && discount <= 100 && discount>=0 ){
    let yourDiscount = amount*discount/100;
    let priceDiscount = (amount - yourDiscount).toFixed(2);
    let savedMoney = (amount - priceDiscount).toFixed(2);
    
    result = `Price without discount: ${amount}
Discount: ${discount}%
Price with discount: ${priceDiscount}
Saved: ${savedMoney}`;
}else{
    result = `Invalid data`;
}

console.log(result);