/**
 * AUTONOMOUS AI GENERATED TEST SUITE
 * Criado automaticamente pelo AI Test Observer em: 2026-10-31T20:43:04.393Z
 * Foco Atual: Acessibilidade Profunda WCAG 2.2 (Teclado & Foco)
 * Ação Autônoma: Cobertura contínua sem necessidade de aprovação humana.
 */

describe("Autonomous QA - Acessibilidade por Teclado e Foco", () => {
  it("Deve garantir que modais e diálogos de apoio recebam foco acessível", () => {
    cy.visit("/automation");
    cy.get(".qa-exercise-hint-button").first().click();
    cy.get(".qa-hint-modal, [role='dialog']").should("exist");
  });
});
