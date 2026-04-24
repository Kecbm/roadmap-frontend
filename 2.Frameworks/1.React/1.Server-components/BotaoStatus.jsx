"use client";

export default function BotaoStatus({ concluido, onToggle }) {
    return (
        <button
            className={concluido ? "btn-feito" : "btn-pendente"}
            onClick={onToggle}
        >
            {concluido ? "✓ Done" : "Pending"}
        </button>
    );
}
