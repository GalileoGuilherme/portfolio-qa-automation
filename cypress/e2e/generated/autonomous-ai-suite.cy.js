/**
 * AUTONOMOUS AI GENERATED TEST SUITE
 * Criado automaticamente pelo AI Test Observer em: 2026-11-03T13:53:50.008Z
 * Foco Atual: Tolerância a Erros & Monitoramento de Rotas
 * Ação Autônoma: Cobertura contínua sobre a aplicação Portfólio.
 */

describe("Autonomous QA - Integridade das Rotas", () => {
  it("Deve responder com sucesso nas rotas essenciais da SPA", () => {
    cy.request("/about").its("status").should("eq", 200);
    cy.request("/curriculum").its("status").should("eq", 200);
  });
});
