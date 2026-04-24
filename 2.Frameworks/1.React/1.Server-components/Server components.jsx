/* 🚀 REACT SERVER COMPONENTS (RSC) */

/* 👩🏾‍🚀 O QUE SÃO SERVER COMPONENTS? */
/*
  O React era uma biblioteca client side. Com o React 19, ela se tornou multi-ambiente.

  Os Server Components, são componentes que executam exclusivamente no servidor. Não geram um bundle de JS no navegador.

  O servidor executa o componente, resolve a lógica e envia para o cliente um formato de dados chamado RSC Payload.
*/

/* 👩🏾‍🚀 ESTRUTURA DE COMUNICAÇÃO */
/*
  O React 19 não envia HTML puro do servidor para o cliente. Ele envia um fluxo (stream) que descreve a árvore de componentes.

  1. Servidor: Executa o componente e gera o JSON-like payload
  2. Cliente: Recebe esse payload e reconstrói a árvore de componentes, preservando o estado de qualquer componente de cliente que já estivesse na tela.
*/
