//this is void function
function calculateTax(income: number)  {

    if(income < 50_000) return income * 1.2;
    
}

function calculateTax1(income: number) : void  {
    // if income is declared but never used now it will throw error as we have just enabled in tsconfig
}
//this has return type
function calculateNewTax(income: number){
    return 0;
}
function calculateNewTax2(income: number, taxYear?: number) : number{
    if((taxYear || 2022) < 2022)
    return income * 1.2;

    // if income > 50K we get undefined
    return income * 1.3;
}

function calculateNewTax3(income: number, taxYear=2022) : number{
    if((taxYear) < 2022)
    return income * 1.2;

    // if income > 50K we get undefined
    return income * 1.3;
}


calculateNewTax2(10_000);