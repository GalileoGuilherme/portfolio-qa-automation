describe("04 - Formulário de Contato e Validações", () => {
  const viewports = [
    { label: "Desktop", width: 1280, height: 720 },
    { label: "Mobile", width: 375, height: 812 },
  ];

  viewports.forEach(({ label, width, height }) => {
    context(`Validações do Formulário em ${label} (${width}x${height})`, () => {
      beforeEach(() => {
        cy.viewport(width, height);
        cy.visit("/contact");
      });

      it("Deve exibir os campos obrigatórios do formulário de contato", () => {
        cy.get("form.contact__form").should("be.visible");
        cy.get('form.contact__form input[name="name"]')
          .should("be.visible")
          .and("have.attr", "required");
        cy.get('form.contact__form input[name="email"]')
          .should("be.visible")
          .and("have.attr", "required");
        cy.get("form.contact__form textarea")
          .should("be.visible")
          .and("have.attr", "required");
        cy.get('form.contact__form button[type="submit"]')
          .should("be.visible");
      });

      it("Deve preencher os campos do formulário corretamente", () => {
        const testData = {
          name: "QA Automation Bot",
          email: "qa.test@example.com",
          message: "Mensagem de teste automatizado gerada pelo Cypress E2E.",
        };

        cy.fillContactForm(testData);

        cy.get('form.contact__form input[name="name"]').should(
          "have.value",
          testData.name
        );
        cy.get('form.contact__form input[name="email"]').should(
          "have.value",
          testData.email
        );
        cy.get("form.contact__form textarea").should(
          "have.value",
          testData.message
        );
      });
    });
  });
});
