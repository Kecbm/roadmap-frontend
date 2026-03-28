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

// 🪐 EXEMPLO PRÁTICO
/*
  Estamos criando um middleware de autenticação com o Express, e vamos modificar o objeto `req` para que ele tenha a propriedade `user` com os dados do usuário logado
*/
// ☄️ Passo 1: o arquivo de definição `types/express.d.ts`
// Aumentamos o módulo do Express para incluir o modelo de usuário
// Importamos o tipo original
import { Request } from 'express';

declare module 'express' {
    // O TS vai mesclar essa interface com a interface Request original do Express
    export interface Request {
        user?: {
            id: string;
            role: 'admin' | 'user'
        }
    }
}

// 🔭 Passo 2: utilização no código `server.ts`
// Agora o TS não vai reclamar quando acessar `req.user`
import express, { Request, Response } from 'express';

const app = express();

app.use((req: Request, res: Response, next) => {
    // Sem o module agmentation a linha de baixo daria erro:
    // "Property 'user' does not exist on type 'Request'"
    req.user = { id: "123", role: "admin" }
    next();
});

app.get('/', (req: Request, res: Response) => {
    if (req.user?.role === "admin") {
        res.send("Bem-vindo, Administrador!");
    } else {
        res.send("Olá Usuário!");
    }
});