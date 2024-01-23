function calcAndDisplay() {
    let bill = parseFloat(document.getElementById('totalBill').value);
    let numOfPpl = parseInt(document.getElementById('numOfPpl').value);
    let service = document.getElementById('service').value;
    let tip = calcTip(bill, service);
    let totalBill = calcTotalBill(bill, tip);
    let amntPerPrsn = calcAmntPerPrsn(totalBill, numOfPpl);

    //Display Re
    document.getElementById('tipRe').innerText = 'Tip: $' + tip.toFixed(2);
    document.getElementById('totalBillRe').innterText = 'Total Bill: $' + totalBill.toFixed(2);
    document.getElementById('amntPerPrsnRe').innerText = 'Amount Per Person: $' + amntPerPrsn.toFixed(2);
}

function calcTip(place1, place2) {
    if (place2 === 'Great') {
        return place1 * .2;
    } else if (place2 === 'Good') {
        return place1 * .15;
    } else if (place2 === 'Poor') {
        return place1 * .1;
    } else {
        alert('Invalid value. Please try again.');
        return 0;
    }
}

function calcTotalBill(place1, place2) {
    place1 + place2;
}

function calcAmntPerPrsn(place1, place2) {
    place1 / place2;
}

/* let bill = 120;
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
console.log('Amount per person $' + amntPerPrsn); //returns Amount per person: $amntPerPrsn */
//hi