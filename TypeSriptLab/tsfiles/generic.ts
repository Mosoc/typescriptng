
class Engineer {
    pay: number = 50000;
}

class Designer {
    pay: number = 45000;
}

interface HasPay {
    pay: number;
}

function CalBonusPay<T extends HasPay>(arg: T): number {
    return arg.pay * 2;
}

console.log(CalBonusPay<Engineer>(new Engineer()));
console.log(CalBonusPay<Designer>(new Designer()));

