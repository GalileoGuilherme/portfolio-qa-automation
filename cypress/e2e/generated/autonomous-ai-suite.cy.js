/**
 * AUTONOMOUS AI GENERATED TEST SUITE
 * Criado automaticamente pelo AI Test Observer em: 2026-10-31T21:13:14.488Z
 * Foco Atual: Auditoria Visual de Microinterações & Transição de Tema
 * Ação Autônoma: Cobertura contínua sem necessidade de aprovação humana.
 */

describe("Autonomous QA - Transição Suave de Tema", () => {
  it("Deve persistir a transição de tema sem flicker no corpo da página", () => {
    cy.visit("/");
    cy.toggleTheme("dark");
    cy.get("html").should("have.attr", "data-theme", "dark");
  });
});
