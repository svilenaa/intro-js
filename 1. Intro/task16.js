function calculate([a, b, op]) {
    [a, b] = [a, b].map(Number);

    let add = function (a, b) {
        return a + b;
    }

    let subtract = function (a, b) {
        return a - b;
    }

    let multiply = function (a, b) {
        return a * b;
    }

    let devide = function (a, b) {
        return a / b;
    }

    let calc = function(a, b, op) {return op(a, b); };
    
    switch(op){
        case '+' : return calc(a, b, add);
        case '-' : return calc(a, b, subtract);
        case '*' : return calc(a, b, multiply);
        case '/' : return calc(a, b, devide);
    }
}

console.log(calculate(['6', '4', '+']));
console.log(calculate(['3', '5', '*']));
console.log(calculate(['9', '3', '-']));
console.log(calculate(['9', '3', '/']));