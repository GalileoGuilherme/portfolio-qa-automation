describe("06 - Auditoria Avançada de Responsividade (Sobreposições e Esmagamento de Botões)", () => {
  const mobileViewports = [
    { label: "iPhone X/11", width: 375, height: 812 },
    { label: "Galaxy S20", width: 360, height: 800 },
  ];

  mobileViewports.forEach(({ label, width, height }) => {
    context(`Auditoria em ${label} (${width}x${height})`, () => {
      beforeEach(() => {
        cy.viewport(width, height);
      });

      it("Deve auditar se o cabeçalho fixo sobrepõe o conteúdo na página /automation", () => {
        cy.visit("/automation");

        // Valida se o título ou conteúdo inicial não está escondido atrás do cabeçalho fixo
        cy.checkHeaderOcclusion(".mobile-header", ".qa-eyebrow, h1, h2, .qa-header");
      });

      it("Deve auditar esmagamento de texto e quebras anômalas nas credenciais e botões de teste", () => {
        cy.visit("/automation");

        // Valida que labels como 'E-mail' e 'Senha' não quebrem em sílabas isoladas (ex: 'E-\nmail')
        cy.checkNoUnnaturalWordWrap(".qa-credential-row strong");

        // Valida que a linha de credenciais possua flex-wrap ou não estoure os limites do card
        cy.checkResponsiveRowSpacing(".qa-credential-row");
      });

      it("Deve auditar alinhamento dos botões 'Usar e copiar' nos campos do formulário", () => {
        cy.visit("/automation");

        // Valida que a linha de label + botão auxiliar de preenchimento não sofra colisão
        cy.checkResponsiveRowSpacing(".qa-login-label-row");
      });

      it("Deve auditar que títulos centrais nas rotas de conteúdo não colidam com o cabeçalho móvel", () => {
        // Rotas com conteúdo textual e títulos (h1, h2)
        const pages = ["/about", "/contact", "/portfolio"];
        pages.forEach((page) => {
          cy.visit(page);
          cy.checkHeaderOcclusion(".mobile-header", "h1, h2");
        });
      });

      it("Deve validar que a rota /curriculum possui botão funcional para baixar o PDF", () => {
        cy.visit("/curriculum");

        // O botão de download deve existir com o atributo de download direto e link do PDF
        cy.get('a.curriculum-btn, a[href*=".pdf"]')
          .should("exist")
          .and("have.attr", "download")
          .then(() => {
            cy.get('a.curriculum-btn, a[href*=".pdf"]')
              .should("have.attr", "href")
              .and("include", ".pdf");
          });
      });
    });
  });
});
