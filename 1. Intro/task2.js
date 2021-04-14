function calcSumAndVat(arr){
    let sum = 0;
    for(let price of arr){
        sum += Number(price);
    }
    console.log('Sum: ' + sum);

    let vat = sum * 0.2;
    console.log('Vat: ' + vat);

    let total = sum + vat;
    console.log('Total: ' + total);
}
calcSumAndVat(['1.20', '2.60', '3.50']);