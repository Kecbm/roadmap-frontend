// SISTEMA DE TIPOS

// GENERICS
/*
  Pode ser compreendido como "variáveis para tipos". Permite a criação de componentes que podem funcionar com vários tipos, em vez de um único tipo.
*/

// Funções genéricas
/*
    O <T> captura o tipo do argumento passado
*/
function retornarArray<T>(item: T): T[] {
    return [item];
}

const num = retornarArray(10); // T vira number
const str = retornarArray("Olá"); // T vira string

// Interfaces genéricas
/*
    Define a estrutura de objetos que podem ter diferentes tipos de dados
*/
interface RetornoAPI<T> {
    status: number;
    dados: T; // O tipo de 'dados' depende do que passarmos
}

const usuario: RetornoAPI<{ nome: string }> = {
    status: 200,
    dados: { nome: 'Gato' }
}

// Classes genéricas
/*
    Permite que a classe lide com propriedades e métodos de tipos variados
*/
class Pilha<T> {
    private itens: T[] = [];

    adicionar(item: T) {
        this.itens.push(item);
    }
}

const pilhaDeIdades = new Pilha<number>();

// Constraints (restrições) com extends
/*
    Quando você não quer aceitar qualquer tipo, mas apenas tipos que possuam uma propriedade específica
*/
interface TemComprimento {
    length: number;
}

function logComprimento<T extends TemComprimento>(arg: T): void {
    console.log(arg.length)
}

logComprimento("String"); // String tem length
// logComprimento(10) // Number não tem length

// CONDITIONAL TYPES
/*
  Permite a criação de uma lógica dentro do sistemas de tipos, semelhante ao if/else. A sintaxe é a mesma do operador ternário em JavaScript: `T extends U ? X : Y`
*/

// MAPPED TYPES

// TEMPLATE LITERAL TYPES
