describe("01 - Home e Responsividade Multi-Dispositivo", () => {
  const devices = [
    { label: "Desktop", width: 1280, height: 720 },
    { label: "Mobile iPhone X", width: 375, height: 812 },
    { label: "Mobile Galaxy S20", width: 360, height: 800 },
  ];

  devices.forEach(({ label, width, height }) => {
    context(`Ambiente: ${label} (${width}x${height})`, () => {
      beforeEach(() => {
        cy.viewport(width, height);
        cy.visit("/");
      });

      it("Deve carregar a página inicial com elementos centrais e títulos corretos", () => {
        cy.verifyPortfolioHome();
      });

      it("Deve manter a consistência de viewport sem overflow horizontal", () => {
        cy.window().then((win) => {
          expect(win.document.documentElement.scrollWidth).to.be.lte(width + 25);
        });
      });

      it("Deve conter links sociais íntegros para GitHub e LinkedIn", () => {
        cy.validateExternalLink('a[href*="github.com"]', "github.com");
        cy.validateExternalLink('a[href*="linkedin.com"]', "linkedin.com");
      });
    });
  });
});
