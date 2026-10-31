/**
 * AUTONOMOUS AI GENERATED TEST SUITE
 * Criado automaticamente pelo AI Test Observer em: 2026-10-31T20:52:46.577Z
 * Foco Atual: Detecção de Strings Hardcoded & Internacionalização (i18n)
 * Ação Autônoma: Cobertura contínua sem necessidade de aprovação humana.
 */

describe("Autonomous QA - Auditoria de Internacionalização", () => {
  it("Deve alternar para o idioma inglês e certificar que não há chaves vazadas de template", () => {
    cy.visit("/");
    cy.switchLanguage("en-US");
    cy.get("body").invoke("text").should("not.include", "{{t.");
  });
});
