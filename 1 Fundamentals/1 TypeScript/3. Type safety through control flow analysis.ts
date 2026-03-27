// 🚀 Type Safety through Control Flow Analysis

// 👩🏾‍🚀 Type guards
/*
  São expressões que verificam o tipo de uma variável em tempo de execução
*/
// ✨ Nativos: `typeof`, `instanceof` e `in`

// ✨ Customizados
// Encapsulamento de uma lógica em uma função
interface Passaro { voar: () => void }
interface Peixe { nadar: () => void }

function ehPassaro(animal: Passaro | Peixe): animal is Passaro {
    return (animal as Passaro).voar !== undefined;
}

if (ehPassaro(pet)) {
    pet.voar();
}

// 👩🏾‍🚀 Discriminated unions
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

// 👩🏾‍🚀 Type narrowing
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