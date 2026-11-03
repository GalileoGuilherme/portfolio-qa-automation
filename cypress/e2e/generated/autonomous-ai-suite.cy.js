/**
 * AUTONOMOUS AI GENERATED TEST SUITE
 * Criado automaticamente pelo AI Test Observer em: 2026-11-03T13:11:33.724Z
 * Foco Atual: Persistência de Sessão & Recuperação de Carrinho
 * Ação Autônoma: Cobertura contínua sem necessidade de aprovação humana.
 */

describe("Autonomous QA - Persistência de LocalStorage", () => {
  it("Deve persistir o estado de itens adicionados no carrinho após recarga", () => {
    cy.visit("/automation/loja");
    cy.get(".qa-product-card button").first().click();
    cy.reload();
    cy.get("#qa-cart-count, .qa-cart-badge").should("be.visible");
  });
});
