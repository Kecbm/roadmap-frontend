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

// 👩🏾‍🚀 PARTIAL

// 👩🏾‍🚀 REQUIRED