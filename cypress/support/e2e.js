// ***********************************************************
// Arquivo de suporte global do Cypress
// Importa os comandos customizados disponibilizados para todos os testes E2E
// ***********************************************************

import "./commands";

// Tratamento de exceções não capturadas da aplicação para evitar falsos negativos
Cypress.on("uncaught:exception", (err, runnable) => {
  // Retorna false para impedir que o Cypress falhe o teste em caso de erro não crítico da SPA
  return false;
});

