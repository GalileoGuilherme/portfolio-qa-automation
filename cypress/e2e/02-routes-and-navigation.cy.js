describe("02 - Navegação e Integridade das Rotas da SPA", () => {
  const viewports = [
    { label: "Desktop", width: 1280, height: 720 },
    { label: "Mobile", width: 375, height: 812 },
  ];

  const routes = [
    { path: "/about", name: "Sobre / Experiência" },
    { path: "/portfolio", name: "Portfólio / Projetos" },
    { path: "/curriculum", name: "Currículo" },
    { path: "/contact", name: "Contato" },
    { path: "/api-docs", name: "Documentação da API / Swagger" },
    { path: "/automation", name: "Laboratório de QA / Automação" },
  ];

  viewports.forEach(({ label, width, height }) => {
    context(`Validação de Rotas em ${label} (${width}x${height})`, () => {
      beforeEach(() => {
        cy.viewport(width, height);
      });

      routes.forEach(({ path, name }) => {
        it(`Deve acessar e renderizar a rota '${path}' (${name}) com sucesso`, () => {
          cy.visit(path);
          cy.url().should("include", path);
          cy.get("#root").should("be.visible").and("not.be.empty");
          cy.get("body").should("be.visible");
        });
      });
    });
  });
});
