import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const styles = `
  body {
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f4f7f6;
    margin: 0;
  }
  .card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    width: 380px;
  }
  .card h3 {
    margin: 0 0 1.5rem;
    text-align: center;
    color: #333;
  }
  .form-row {
    display: flex;
    gap: 8px;
    margin-bottom: 1rem;
  }
  input {
    flex: 1;
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 0.95rem;
    outline: none;
    transition: 0.2s;
  }
  input:focus { border-color: #3498db; }
  button {
    padding: 10px 14px;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    color: white;
    background-color: #3498db;
    transition: 0.2s;
  }
  button:hover:not(:disabled) { opacity: 0.8; transform: scale(1.02); }
  button:disabled { opacity: 0.6; cursor: not-allowed; }
  .error { color: #e74c3c; font-size: 0.85rem; margin-bottom: 1rem; }
  .task-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .task-item {
    padding: 10px 12px;
    border: 1px dashed #ccc;
    border-radius: 8px;
    color: #333;
    font-weight: bold;
    font-size: 0.95rem;
  }
`;

async function addTask(prevState: State, formData: FormData): Promise<State> {
  await new Promise((r) => setTimeout(r, 800));
  const title = (formData.get('title') as string).trim();
  if (!title) return { ...prevState, error: 'Título obrigatório' };
  return { error: null, tasks: [...prevState.tasks, { id: Date.now(), title }] };
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Adicionando…' : 'Adicionar'}
    </button>
  );
}

type Task  = { id: number; title: string };
type State = { error: string | null; tasks: Task[] };

const initialState: State = {
  error: null,
  tasks: [
    { id: 1, title: 'Aprender React 19' },
    { id: 2, title: 'Estudar Server Actions' },
  ],
};

export default function App() {
  const [state, formAction] = useActionState(addTask, initialState);

  return (
    <>
      {/* React 19: <style> é içado automaticamente pro <head> */}
      <style>{styles}</style>

      <div className="card">
        <h3>Server Actions — React 19</h3>

        <form action={formAction} className="form-row">
          <input name="title" placeholder="Nova tarefa…" required />
          <SubmitButton />
        </form>

        {state.error && <p className="error">{state.error}</p>}

        <ul className="task-list">
          {state.tasks.map((task) => (
            <li key={task.id} className="task-item">{task.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
