function saudacao(nome,idade){
    if(idade === undefined){
        console.log("Olá + nome");
    }else {
        console.log("Olá " + nome + " Voce tem " + idade + " anos ");
    }

}

saudacao("Matheus");

saudacao("Matheus",25);