describe("06 - Auditoria Avançada de Responsividade (Sobreposições, Espaçamento de Badges e Esmagamento)", () => {
  const responsiveMatrix = [
    { label: "Mobile Ultra Compact (iPhone SE)", width: 320, height: 568 },
    { label: "Mobile Padrão (Galaxy S20)", width: 360, height: 800 },
    { label: "Mobile Médio (iPhone X/11)", width: 375, height: 812 },
    { label: "Mobile Amplo (iPhone 12/13/14)", width: 390, height: 844 },
    { label: "Tablet Portrait (iPad)", width: 768, height: 1024 },
  ];

  responsiveMatrix.forEach(({ label, width, height }) => {
    context(`Auditoria em ${label} (${width}x${height})`, () => {
      beforeEach(() => {
        cy.viewport(width, height);
      });

      it("Deve auditar se o cabeçalho fixo sobrepõe o conteúdo na página /automation", () => {
        cy.visit("/automation");
        cy.checkHeaderOcclusion(".mobile-header", ".qa-eyebrow, h1, h2, .qa-header");
      });

      it("Deve auditar esmagamento de texto e quebras anômalas nas credenciais e botões de teste", () => {
        cy.visit("/automation");

        // Valida que labels como 'E-mail' e 'Senha' não quebrem em sílabas isoladas (ex: 'E-\nmail')
        cy.checkNoUnnaturalWordWrap(".qa-credential-row strong");

        // Valida que a linha de credenciais possua flex-wrap ou não estoure os limites do card
        cy.checkResponsiveRowSpacing(".qa-credential-row");
      });

      it("Deve validar que os badges de casos e títulos de cenários possuam espaçamento e não fiquem colados", () => {
        cy.visit("/automation");

        // Impede anomalias como 'CASO 1 · CENÁRIOLogin'
        cy.checkNoGluedTokens(".qa-exercise-item label", [/CENÁRIO[A-Za-z]/]);
      });

      it("Deve auditar alinhamento dos botões 'Usar e copiar' nos campos do formulário", () => {
        cy.visit("/automation");
        cy.checkResponsiveRowSpacing(".qa-login-label-row");
      });

      it("Deve auditar que títulos centrais nas rotas de conteúdo não colidam com o cabeçalho móvel", () => {
        const pages = ["/about", "/contact", "/portfolio", "/curriculum"];
        pages.forEach((page) => {
          cy.visit(page);
          cy.checkHeaderOcclusion(".mobile-header", "h1, h2");
        });
      });

      it("Deve validar que a rota /curriculum não renderiza iframe quebrado e possui download direto de alta fidelidade", () => {
        cy.visit("/curriculum");

        // Iframe bruto em dispositivos móveis gera falha visual e caixas cinzas; não deve existir
        cy.get("iframe.curriculum-frame").should("not.exist");

        // Card executivo e botão direto de download do PDF devem estar presentes e ativos
        cy.get('a.curriculum-btn, #qa-curriculum-download')
          .should("exist")
          .and("be.visible")
          .and("have.attr", "download")
          .then(() => {
            cy.get('a.curriculum-btn, #qa-curriculum-download')
              .should("have.attr", "href")
              .and("include", ".pdf");
          });
      });

      it("Deve garantir zero rolagem horizontal (overflow-x) em todas as páginas visitadas", () => {
        const samplePages = ["/", "/automation", "/curriculum", "/about"];
        samplePages.forEach((page) => {
          cy.visit(page);
          cy.checkZeroHorizontalOverflow();
        });
      });
    });
  });
});
