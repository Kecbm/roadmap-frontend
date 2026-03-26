// 🚀 SISTEMA DE TIPOS

// 👩🏾‍🚀 GENERICS
/*
  Pode ser compreendido como "variáveis para tipos". Permite a criação de componentes que podem funcionar com vários tipos, em vez de um único tipo.
*/

// ✨ Funções genéricas
/*
    O <T> captura o tipo do argumento passado
*/
function retornarArray<T>(item: T): T[] {
    return [item];
}

const num = retornarArray(10); // T vira number
const str = retornarArray("Olá"); // T vira string

// ✨ Interfaces genéricas
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

// ✨ Classes genéricas
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

// ✨ Constraints (restrições) com extends
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

// 👩🏾‍🚀 CONDITIONAL TYPES
/*
  Permite a criação de uma lógica dentro do sistemas de tipos, semelhante ao if/else. A sintaxe é a mesma do operador ternário em JavaScript: `T extends U ? X : Y`
*/

// ✨ Filtro de tipos
type ValidacaoDeEntrada<T> = T extends string ? string : number;

const entrada1: ValidacaoDeEntrada<string> = "IA"; // O tipo é string
const entrada2: ValidacaoDeEntrada<number> = 20; // O tipo é number

// ✨ Utilizando o `never` para filtrar
/*
  Condicionais para remover tipos indesejados. Se a condição cair em `never`, o TypeScript ignora o tipo
*/
type ApenasNumber<T> = T extends number ? T : never;

type Resultado = ApenasNumber<string | number | boolean>; // Resultado é apenas 'number', pois string e boolean caíram no 'never'

// ✨ Inferência com `infer`
/*
  Permite a extração de um tipo dentro de outro
*/
type RetornaTipo<T> = T extends (...args: any[]) => infer R ? R : never;

function frase() {
    return "Estudando TypeScript";
}

type TipoDeRetorno = RetornaTipo<typeof frase>; // O tipo inferido é string

// Resumo: "Se T for uma função, pegue o que ela devolve, chame de R e me entrege. Se não for uma função, não me entregue nada (`never`)"

// 👩🏾‍🚀 MAPPED TYPES
/*
  Pode ser considerado o `map()` do TypeScript. Permite selecionar um tipo existente e transformar suas propriedades. Como se fosse uma fórmula aplicada a todas as chaves de um objeto
*/

// ✨ Sintaxe básica
type MeuTipoMapeado<T> = {
    [P in keyof T]: number; // NovoTipo
}

// `keyof T`: todas as chaves do tipo T
// `P in ...`: percorre cada uma dessas chaves
// `NovoTipo`: Define qual será o novo tipo de cada propriedade

// ✨ Exemplo
// Controle para saber quais campos foram editados
interface Usuario {
    nome: string;
    idade: number;
}

type CamposEditados<T> = {
    [P in keyof T]: boolean;
}

const monitoramento: CamposEditados<Usuario> = {
    nome: true,
    idade: false
}

// 👩🏾‍🚀 TEMPLATE LITERAL TYPES
/*
  É uma funcionalidade que permite usar a sintaxe de string do JavaScript para construir tipos de strings personalizado
*/

// ✨ Sintaxe básica
type Status = "sucesso" | "erro";

// Cria o tipo: "id-sucesso" | "id-erro"
type Identificador = `id-${Status}`;

let meuId: Identificador = "id-sucesso"; // Correto
// leu meuId: Identificador = "id-pendente"; // Errado

// ✨ Exemplo
// Criação de "Getters"
interface Usuario {
  nome: string;
  idade: number;
}

type GerarGetters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UsuarioGetters = GerarGetters<Usuario>;
/* Resultado: 
{
  getNome: () => string;
  getIdade: () => number;
}
*/
