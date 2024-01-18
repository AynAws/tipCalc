let bill = 120;
let numOfPpl = 5;

let service = prompt('Was the service good, great, or poor?');
service = service.toLowerCase();
console.log(service); //returns service in lowercase

function calcTip(quality) {
    if (quality === 'great') {
        return bill * .2;
    } else if (quality === 'good') {
        return bill * .15;
    } else if (quality === 'poor') {
        return bill * .1;
    } else {
        //alert('Invalid value. Please try again.');
    }
}

let tip = calcTip(service);

function calcTotalBill(bill, tip) {
    return bill + tip;
}

let totalBill = calcTotalBill(bill, tip);

function calcAmntPerPrsn(totalBill, numOfPpl) {
    return totalBill / numOfPpl;
}

let amntPerPrsn = calcAmntPerPrsn(totalBill, numOfPpl);

console.log('Tip: $' + tip); //returns Tip: $tip
console.log('Total Bill: $' + totalBill); //returns Total Bill: $totalBill
console.log('Amount per person $' + amntPerPrsn); //returns Amount per person: $amntPerPrsn