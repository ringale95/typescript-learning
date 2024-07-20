let employee : {
    readonly id: number,
    name: string,
    //define function
    retire: (date:Date) => void
} = 
{
    id:1,
    name:'Mosh',
    retire: () => {console.log('value')}
};

/* 
    (date:Date) => {
        console.log(date);
    }

*/

//employee.id = 2 //not possible as readonly