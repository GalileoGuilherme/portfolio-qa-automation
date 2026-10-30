describe("05 - Laboratório de QA e E-Commerce (/automation)", () => {
  const viewports = [
    { label: "Desktop", width: 1280, height: 720 },
    { label: "Mobile", width: 375, height: 812 },
  ];

  viewports.forEach(({ label, width, height }) => {
    context(`QA Lab em ${label} (${width}x${height})`, () => {
      beforeEach(() => {
        cy.viewport(width, height);
        cy.visit("/automation");
      });

      it("Deve renderizar a seção de login com credenciais de demonstração", () => {
        cy.get("#qa-login-section, #qa-login-form").should("exist");
        cy.get("#qa-login-email").should("be.visible");
        cy.get("#qa-login-password").should("be.visible");
        cy.get("#qa-login-submit").should("be.visible");
      });

      it("Deve permitir preenchimento das credenciais de teste", () => {
        cy.get("#qa-login-email").clear().type("qa.tester@example.com");
        cy.get("#qa-login-email").should("have.value", "qa.tester@example.com");

        cy.get("#qa-login-password").clear().type("SenhaSegura123!");
        cy.get("#qa-login-password").should("have.value", "SenhaSegura123!");
      });

      it("Deve autenticar com credenciais de demonstração e exibir catálogo de produtos na loja", () => {
        // Credenciais oficiais de teste do laboratório
        cy.get("#qa-login-email").clear().type("qa@exemplo.com");
        cy.get("#qa-login-password").clear().type("LabQA!Run-7kV2pX9m");
        cy.get("#qa-login-submit").click();

        // Validação da transição de rota protegida para /automation/loja
        cy.url({ timeout: 10000 }).should("include", "/automation/loja");
        cy.get("#qa-products-section", { timeout: 10000 }).should("be.visible");

        // Validação funcional da busca de produtos
        cy.get("#qa-product-search").should("be.visible").type("fone");
        cy.get("#qa-product-search").should("have.value", "fone");
      });
    });
  });
});
