"use strict";
function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    return 9.99;
}
function calculateTax1() {
}
function calculateNewTax() {
    return 0;
}
function calculateNewTax2(income, taxYear) {
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}
function calculateNewTax3(income, taxYear = 2022) {
    if ((taxYear) < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateNewTax2(10000);
//# sourceMappingURL=func.js.map