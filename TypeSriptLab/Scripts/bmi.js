var bmitype;
(function (bmitype) {
    bmitype[bmitype["nomal"] = 24] = "nomal";
    bmitype[bmitype["light"] = 18.5] = "light";
    bmitype[bmitype["overweight"] = 27] = "overweight";
})(bmitype || (bmitype = {}));
;
function bmi(high, weight) {
    return (weight / (high / 100 * high / 100));
}
function verifybmi(bmi) {
    var result = '';
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
    var h = document.getElementById('high').value;
    var w = document.getElementById('weight').value;
    var bmiresult = bmi(parseInt(h), parseInt(w));
    alert(bmiresult);
    alert(verifybmi(bmiresult));
}
//# sourceMappingURL=bmi.js.map