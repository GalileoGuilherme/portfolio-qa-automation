/**
 * AUTONOMOUS AI GENERATED TEST SUITE
 * Criado automaticamente pelo AI Test Observer em: 2026-10-31T20:51:07.198Z
 * Foco Atual: Contrato de API & Validação de Esquema Swagger
 * Ação Autônoma: Cobertura contínua sem necessidade de aprovação humana.
 */

describe("Autonomous QA - Contrato Swagger OpenAPI", () => {
  it("Deve garantir que o arquivo de especificação OpenAPI esteja íntegro e responda 200", () => {
    cy.request("/swagger.json").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.info.title).to.include("Galileo Guilherme");
    });
  });
});
