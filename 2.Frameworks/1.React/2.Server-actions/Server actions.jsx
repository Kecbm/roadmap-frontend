/* 🚀 SERVER ACTIONS */

/* 👩🏾‍🚀 O QUE SÃO SERVER ACTIONS? */
/*
  Tradicionalmente, para salvar um dado, você precisava:

  1. Criar um formulário no React.
  2. Criar um endpoint POST no Node.js/Express.
  3. Fazer um fetch no onSubmit.

  Com Server Actions, você define uma função assíncrona com a diretiva "use server". O React entende que, ao chamar essa função, ele deve fazer uma requisição HTTP automática para o servidor, executar a lógica lá e devolver o resultado
*/

/* 👩🏾‍🚀 COMO FUNCIONA A PONTE "RPC" */
/*
  Quando você define uma Server Action, o React cria um RPC (Remote Procedure Call).

  1. No Cliente: O navegador envia um pacote de dados (geralmente FormData).
  2. No Servidor: O React recebe esse pacote, identifica qual função deve ser executada e a roda no ambiente Node.js.
  3. Resposta: O servidor pode retornar dados, mensagens de erro ou até instruir o React a atualizar partes da página (revalidation).
*/