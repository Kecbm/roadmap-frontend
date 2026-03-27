// 🚀 TYPE SAFETY THROUGH CONTROL FLOW ANALYSIS

// 👩🏾‍🚀 Type guards
/*
  São expressões que verificam o tipo de uma variável em tempo de execução
*/
// 🛸 Nativos: `typeof`, `instanceof` e `in`

// 🛸 Customizados
// Encapsulamento de uma lógica em uma função
interface Passaro { voar: () => void }
interface Peixe { nadar: () => void }

function ehPassaro(animal: Passaro | Peixe): animal is Passaro {
    return (animal as Passaro).voar !== undefined;
}

if (ehPassaro(pet)) {
    pet.voar();
}

// 👩🏾‍🚀 DISCRIMINATEDED UNIONS
/*
  Criar tipos que compartilham uma identidade comum
*/
interface Sucesso {
    status: "sucesso";
    dados: string[];
}

interface Erro {
    status: "erro";
    mensagem: string;
}

type Resposta = Sucesso | Erro;

function tratarResposta(res: Resposta) {
    switch (res.status) {
        case "sucesso":
            console.log(res.dados) // O TS sabe que existe 'dados'
            break
        case "erro":
            console.warn(res.mensagem) // O TS sabe que existe 'mensagem'
            break
    }
}

// 👩🏾‍🚀 TYPE NARROWING
/*
  É o ato de "afunilar" um tipo. Antes de aplicar métodos nativos em uma variável, o TS faz uma validação de que ela realmente tem aquele tipo no momento
*/
function repetir(valor: string | number) {
    if (typeof valor === "string") {
        // O tipo foi "estreitado" para string
        return valor.repeat(3)
    }
    // Se chegou aqui, o TS sabe que 'valor' é number
    return valor * 3;
}

// 🪐 EXEMPLO PRÁTICO
/*
  Gerenciamento do estado de uma requisição para buscar usuários de uma API
*/

// ☄️ O problema
interface EstadoRuim {
    loading: boolean;
    data?: string[];
    error?: string;
}
// O TS permite { loading: true, data: ["Usuário 1"] }, o que não faz sentido

// 🔭 A solução: discriminated unions
/*
  O `status` irá "discriminar" (separar) os tipos
*/
// 1. Definimos os tipos específicos para cada momento
interface Idle { status: "parado" }
interface Loading { status: "carregando" }
interface Sucess { status: "sucesso"; dados: string[] }
interface Error { status: "erro"; mensagem: string }

// 2. Criamos a união descriminada
type EstadoRequisicao = Idle | Loading | Sucess | Error;

function renderizarPagina(estado: EstadoRequisicao) {
    // 3. O Type Narrowing acontece dentro do switch
    switch (estado.status) {
        case "parado":
            return "Clique para buscar usuários";

        case "carregando":
            return "Carregando...";

        case "sucesso":
            // O TS sabe que existe 'dados'
            return `Lista: ${estado.dados.join(", ")}`;

        case "erro":
            // O TS sabe que existe 'mensagem'
            return `Ops! Algo deu errado: ${estado.mensagem}`
    }
}