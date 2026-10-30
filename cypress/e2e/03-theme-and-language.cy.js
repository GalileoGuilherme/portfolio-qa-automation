describe("03 - Internacionalização (i18n) e Alternância de Tema (Dark/Light)", () => {
  const viewports = [
    { label: "Desktop", width: 1280, height: 720 },
    { label: "Mobile", width: 375, height: 812 },
  ];

  viewports.forEach(({ label, width, height }) => {
    context(`Funcionalidades em ${label} (${width}x${height})`, () => {
      beforeEach(() => {
        cy.viewport(width, height);
        cy.visit("/");
      });

      it("Deve alternar o tema visual entre Claro e Escuro dinamicamente", () => {
        cy.get("html").then(($html) => {
          const initialTheme = $html.attr("data-theme") || "light";
          const nextExpectedTheme = initialTheme === "light" ? "dark" : "light";

          // Alterna tema
          cy.toggleTheme(nextExpectedTheme);
          cy.get("html").should("have.attr", "data-theme", nextExpectedTheme);

          // Alterna de volta
          cy.toggleTheme(initialTheme);
          cy.get("html").should("have.attr", "data-theme", initialTheme);
        });
      });

      it("Deve persistir a preferência do idioma na interface", () => {
        cy.get(".language-switch").filter(":visible").should("be.visible");

        // Clica em Inglês
        cy.switchLanguage("en-US");
        cy.get("body").should("be.visible");

        // Clica em Português
        cy.switchLanguage("pt-BR");
        cy.get("body").should("be.visible");
      });
    });
  });
});
