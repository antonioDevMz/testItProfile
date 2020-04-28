
(async function() {
    let exerciseOne = await numAsc([3,2,5,9,1,3]);
    let exerciseTWo = await numSum(3, 6);
    let exerciseThree = await numHigher([7,2,5,9,8,3], 2);
    let exerciseFour = await delDuplicates([2,7,4,5,4,5,4,3,6,2,3,4]);
    let exerciseFive = await balancer([2,7,4,5,4,5,4,3,6,2,3,4]);

    console.log(exerciseFive);
})(); 


async function balancer (obj) {
    let notDupli = [];

    obj.map(x => {
        !notDupli.includes(x) ? notDupli.push(x) : null;
    });

    return notDupli;
};

/** 
  * 1. Escribir una función que reciba un arreglo de números y obtenga el subarreglo más
  grande en el que cada elemento del subarreglo sea mayor que el anterior. Por ejemplo si
  el arreglo es [3,2,5,9,1,3] tiene regresar [2,5,9]
*/
async function numAsc (oNum) {
    let subArr     =    [];
    var mayorFind  =    0;

    oNum.forEach(function(item, index){
        if(!mayorFind){
            let isBelow     =   (currentValue) => currentValue <= item;
            let isMayor     =   oNum.every(isBelow);
            let nextItem    =   index == oNum.length-1 ? item : oNum[index+1];

            item < nextItem ? subArr.push(item) : isMayor ? subArr.push(item) : null;            
            isMayor ? mayorFind = 1 : null;
        }
    });

    return subArr;        
};

/** 
 * 2. Escribir una función que reciba 2 enteros no negativos n y m y obtenga el resultado de
   n+(n+1)+(n+2)+...+m . Por ejemplo si los numeros son 3 y 6 la respuesta debe ser 18
   que es el resultado de 3+4+5+6.
*/
async function numSum (n, m) {
    let total = 0;

    if(n > 0 && m > n){
        for (let i = n; i <= m; i++) {
            total += i;
        }
    }
    
    return total;
};

/** 
 * 3. Dado un arreglo de números desordenado y un entero k, escribe una función que
   encuentre el k-ésimo elemento más grande. Por ejemplo si el arreglo es [7,2,5,9,8,3] y k
   es 2 debe regresar 8.
*/
async function numHigher (oNum, k) {
    let oSort   =   oNum.sort();
    let numH    =   oSort[oNum.length - k];    
    
    return numH;
};

/** 
 * 4. Escribe una función que reciba un arreglo de números y quite los elementos duplicados.
*/
async function delDuplicates (obj) {
    let notDupli = [];

    obj.map(x => {
        !notDupli.includes(x) ? notDupli.push(x) : null;
    });

    return notDupli;
};
