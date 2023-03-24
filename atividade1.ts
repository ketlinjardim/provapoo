import { exit } from "process";

const entrada2 = require("readline-sync");

let senha : number = parseFloat(entrada2.question("Digite sua senha: "));
let senha2 : number = parseFloat(entrada2.question("Digite novamente sua senha: "));


if(senha == 47790111833 && senha2 == 47790111833) {
        console.log("a senha esta correta");
        let saldo : number = parseFloat(entrada2.question("Seu saldo e de 1000,00"));
        let opcao : number = parseFloat(entrada2.question("Digite o numero da opcao, 1 para sacar ,2 para depositar ou 3 para sair: "));

        if (opcao == 1  ) {
            let saque : number = parseFloat(entrada2.question("Valor do saque: "));
            let senha3: number = parseFloat(entrada2.question("Irforme a senha para poder sacar: "));

            if (senha3 = 47790111833){
                 console.log("senha correta");
                 if (saque <= 1000)  {
                    console.log("valor do apos o saque: " + (1000 - saque));
                }
                else{
                    console.log("valor invalido");
                }
            }
            else{
                console.log("senha incorreta");
               
            }
        }
        if(opcao == 2){
            let deposito : number = parseFloat(entrada2.question("valor do deposito: "))
            let senha4: number = parseFloat(entrada2.question("irforme a senha para poder depositar: "));
            

            if (senha4 = 47790111833 ) {
           
                 if (deposito + 1000) {
                    console.log("valor apos o deposito: " + (deposito + 1000))
                }
            }
            else{
                console.log("senha incorreta");
            }
        }
        if (opcao == 3) {
            console.log("sair")
        }
        else{
            
        }
       
}
else {
    console.log("sua senha esta incorreta")
}




