import { use, useState } from "react";
import { bancoDeDadosMock } from "./data";
import BotaoStatus from "./BotaoStatus";

const tarefasPromise = bancoDeDadosMock.getTarefas();

const badgePorPrioridade = {
    "High":   "badge badge-alta",
    "Medium": "badge badge-media",
    "Low":    "badge badge-baixa",
};

export default function ListaTarefas() {
    const tarefas = use(tarefasPromise);
    const [concluidas, setConcluidas] = useState(new Set());

    function toggleTarefa(id) {
        setConcluidas(prev => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    }

    return (
        <div className="card">
            <h2>My Tasks</h2>
            <ul className="lista-tarefas">
                {tarefas.map(tarefa => {
                    const concluida = concluidas.has(tarefa.id);
                    return (
                        <li key={tarefa.id} className={`tarefa-item${concluida ? " concluida" : ""}`}>
                            <div className="tarefa-info">
                                <span className={`tarefa-titulo${concluida ? " riscado" : ""}`}>
                                    {tarefa.titulo}
                                </span>
                                <span className={badgePorPrioridade[tarefa.prioridade]}>
                                    {tarefa.prioridade}
                                </span>
                            </div>
                            <BotaoStatus
                                concluido={concluida}
                                onToggle={() => toggleTarefa(tarefa.id)}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
