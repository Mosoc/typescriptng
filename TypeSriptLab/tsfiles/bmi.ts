enum bmitype {
    nomal = 24,
    light = 18.5,
    overweight = 27
};
function bmi(high: number, weight: number): number {
    return (weight / (high/100 * high/100));
}
function verifybmi(bmi: number): string {
    var result: string = '';

    if (bmi < bmitype.light) {
        result = '過輕';
    }
    else if (bmi >= bmitype.light && bmi < bmitype.nomal) {
        result = '健康';
    }
    else if (bmi >= bmitype.nomal && bmi < bmitype.overweight) {
        result = '過重!!要小心囉';
    }
    else if (bmi >= bmitype.overweight) {
        result = '肥茲茲，油膩膩';
    }
    return result;
}
function calbmi() {
    var h = (<HTMLInputElement>document.getElementById('high')).value;
    var w = (<HTMLInputElement>document.getElementById('weight')).value;
    var bmiresult = bmi(parseInt(h), parseInt(w));
    alert(bmiresult);
    alert(verifybmi(bmiresult));
}