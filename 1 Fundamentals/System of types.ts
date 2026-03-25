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


// CONDITIONAL TYPES

// MAPPED TYPES

// TEMPLATE LITERAL TYPES
