// 🚀 DECLARATION MERGING
/*
  Quando o compilador do TS encontra duas ou mais declarações com o mesmo nome no mesmo namespace. No lugar de gerar o erro de "nome dulicado", ele combina as definições em uma única
*/
// Se declarar a mesma interface duas vezes, o TS une os membros de ambas
interface Usuario {
    nome: string;
}

interface Usuario {
    idade: number;
}

// O resultado final é: { nome: string; idade: number }
const pessoa: Usuario = {
    nome: "Lucas",
    idade: 25
}

// Regra: se ambas as interfaces tiverem uma propriedade com o mesmo nome, o tipo deve ser idêntico, ou o compilador emitirá um erro
// Funções e namespaces: também podem ser mesclados, é possivel adicionar propriedades a uma função declarando um namespace com o mesmo nome dela

// 👩🏾‍🚀 MODULE AGMENTATION
/*
  É uma extenssão do declaration merging aplicada a módulos externos (arquivos ou bibliotecas). Utilizado quando é necessário adicionar propriedades ao código de terceiros
*/
// Para aumentar um módulo é necessário utilizar a palavra-chave `declare module` seguido pelo nome do pacote
import "nome-da-biblioteca"

declare module "nome-da-biblioteca" {
    export interface InterfaceExistente {
        novaPropriedade: string;
    }
}