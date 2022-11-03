let obj = {
    rodas:64,
    portas:34,
    tetosolar:true,
    motor:'2.0'
}

const {rodas: vrodas,portas:vPortas,tetosolar:Vtetosolar} = obj;

console.log(vPortas);
console.log(vrodas)

let valores = {
    produto1 :"Arroz",
    produto2 :"Batata",
    produto3 :"Frango" 
}

const {produto1:produ01,produto2:produ02,produto3:produ03} = valores;

console.log("alimentos:",produ01,produ02,"e",produ03);
