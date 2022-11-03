let num = 1;
let num1 = 5;
let num2 = 7;
let num3 = 2;

function imprimirNumeros(...args){
    for(let i = 0;i < args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros(num,num1);
imprimirNumeros(num2,num3);
imprimirNumeros(2,6,7,8,6,5,4,3,2)