// 🚀 Utility types
/*
  Ferramentas que transformam tipos existentea de forma rápida e elegante. Semelhante a uma "função de tipo", que recebem um tipo e devolvem uma versão modificada dele
*/

// 👩🏾‍🚀 PICK
/*
  Permite criar um novo tipo, selecionando apenas algumas propriedades de um tipo já existente
*/
interface Tarefa {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}

// Cria um tipo apenas com 'title' e 'completed'
type TarefaPreview = Pick<Tarefa, "title" | "completed">;

const tarefa: TarefaPreview = {
    title: "Refatoração",
    completed: false
}

// 👩🏾‍🚀 OMIT
/*
  É o inverso do omit, ele cria um tipo com todas as propriedades de T, exceto auqelas listadas em K
*/
type TarefaInfo = Omit<Tarefa, "description" | "createdAt">;

const info: TarefaInfo = {
    title: "Executar migration",
    completed: true
}

// 👩🏾‍🚀 RECORD
/*
  É usado para mapear as propriedades de um tipo para outro.

  `Record(K, T)`

  - K (Keys): Define quais são as chaves (string, number ou symbol)
  - T (Type): Define qua; será o tipo de valor de cada chave
*/
type Paginas = "home" | "about" | "contact";

interface PaginaInfo {
    title: string;
}

// Cria um objeto onde as chaves são as páginas e o valor é o PageInfo
const nav: Record<Paginas, PaginaInfo> = {
    home: { title: "Início" },
    about: { title: "Sobre nós" },
    contact: { title: "Contato" },
} 

// 👩🏾‍🚀 PARTIAL
/*
  Transforma as propriedades de um tipo T em opcionais. Adiciona o modificados `?` a elas
*/
interface Usuario {
    id: number;
    name: string;
    email: string;
}

// Em funções de update, não é necessário enviar o objeto inteiro, apenas alguns campos
// O tipo resultante é: { id?: number; name?: string; email?: string; }
function atualizarUsuario(id: number, fieldsToUpdate: Partial<Usuario>) {
    // Lógica de update
}

// 👩🏾‍🚀 REQUIRED