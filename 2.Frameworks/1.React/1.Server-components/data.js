export const bancoDeDadosMock = {
    getTarefas: async () => {
        // Simula um pequeno delay de leitura de disco/banco
        await new Promise(resolve => setTimeout(resolve, 1200));

        return [
            { id: 1, titulo: "Study React 19", prioridade: "High" },
            { id: 2, titulo: "Create Server Components", prioridade: "Medium" },
            { id: 3, titulo: "Practice Design Tokens", prioridade: "Low" },
        ];
    }
};