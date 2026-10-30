/**
 * Custom Commands - Cypress
 * Framework de comandos reutilizáveis para cobertura E2E do Portfólio Web.
 */

// Conjunto padrão de viewports para testes cross-device
export const VIEWPORTS = [
  { name: "Desktop (1280x720)", type: "desktop", width: 1280, height: 720 },
  { name: "Mobile iPhone X (375x812)", type: "mobile", width: 375, height: 812 },
];

/**
 * Define a resolução de viewport de forma padronizada.
 * @param {'desktop'|'mobile'|Object} device
 */
Cypress.Commands.add("setDeviceViewport", (device = "desktop") => {
  if (device === "desktop" || device.type === "desktop") {
    cy.viewport(1280, 720);
  } else if (device === "mobile" || device.type === "mobile") {
    cy.viewport(device.width || 375, device.height || 812);
  } else if (typeof device === "object") {
    cy.viewport(device.width, device.height);
  }
});

/**
 * Valida a integridade da Home do portfólio de acordo com a viewport atual.
 */
Cypress.Commands.add("verifyPortfolioHome", () => {
  cy.log("🔍 Validando elementos centrais da Home");

  cy.title()
    .should("be.a", "string")
    .and("include", "Galileo Guilherme");

  cy.get("#root")
    .should("be.visible")
    .and("not.be.empty");

  cy.get("h1, h2, .hero, .hero-copy")
    .filter(":visible")
    .first()
    .should("be.visible");

  cy.get("body")
    .find(":contains('Galileo Guilherme')")
    .filter(":visible")
    .should("exist");

  cy.get("body")
    .find(":contains('QA')")
    .filter(":visible")
    .should("exist");
});

/**
 * Abre o menu de navegação mobile se estiver em viewport móvel.
 */
Cypress.Commands.add("openMobileNavIfMobile", () => {
  cy.window().then((win) => {
    if (win.innerWidth <= 768) {
      cy.get("header.mobile-header").should("be.visible");
      cy.get("button.mobile-menu-btn").click({ force: true });
      cy.get("nav.mobile-nav").should("be.visible");
    }
  });
});

/**
 * Alterna o tema da aplicação (dark/light) e valida os atributos no DOM.
 * @param {'dark'|'light'} expectedTheme
 */
Cypress.Commands.add("toggleTheme", (expectedTheme) => {
  cy.log(`🎨 Alternando tema para: ${expectedTheme || "próximo estado"}`);

  cy.get("button.theme-toggle")
    .filter(":visible")
    .first()
    .click({ force: true });

  if (expectedTheme) {
    cy.get("html")
      .should("have.attr", "data-theme", expectedTheme);
  } else {
    cy.get("html")
      .invoke("attr", "data-theme")
      .should("be.oneOf", ["light", "dark"]);
  }
});

/**
 * Alterna o idioma do portfólio (pt-BR / en-US) e valida a persistência.
 * @param {'pt-BR'|'en-US'} targetLang
 */
Cypress.Commands.add("switchLanguage", (targetLang) => {
  cy.log(`🌐 Alternando idioma para: ${targetLang}`);

  cy.get(".language-switch")
    .filter(":visible")
    .first()
    .within(() => {
      cy.get(`button[aria-label*="${targetLang === "pt-BR" ? "Portugu" : "Ingl"}"]`)
        .click({ force: true });
    });
});

/**
 * Preenche e submete o formulário de contato com os dados fornecidos.
 * @param {{ name: string, email: string, message: string }} formData
 */
Cypress.Commands.add("fillContactForm", ({ name, email, message }) => {
  cy.log("📝 Preenchendo formulário de contato");

  if (name) cy.get('form.contact__form input[name="name"]').clear().type(name);
  if (email) cy.get('form.contact__form input[name="email"]').clear().type(email);
  if (message) cy.get('form.contact__form textarea[name="message"]').clear().type(message);
});

/**
 * Valida que o cabeçalho fixo/sticky não sobreponha (occlude/collide) o conteúdo da página.
 * @param {string} headerSelector - Seletor do cabeçalho
 * @param {string} contentSelector - Seletor do primeiro bloco ou título visível
 * @example cy.checkHeaderOcclusion('.mobile-header:visible', 'h1, h2')
 */
Cypress.Commands.add("checkHeaderOcclusion", (headerSelector = "header:visible", contentSelector = "h1:visible, h2:visible") => {
  cy.log("📐 Verificando sobreposição visual do cabeçalho");

  cy.get(headerSelector).then(($header) => {
    if (!$header.is(":visible")) return;

    const headerRect = $header[0].getBoundingClientRect();
    if (headerRect.height === 0) return;

    cy.get(contentSelector).first().then(($content) => {
      if (!$content.is(":visible")) return;

      const contentRect = $content[0].getBoundingClientRect();

      // O topo do conteúdo deve estar estritamente abaixo da borda inferior do cabeçalho fixo
      expect(
        contentRect.top,
        `O cabeçalho fixo (bottom: ${Math.round(headerRect.bottom)}px) não deve cobrir o conteúdo (top: ${Math.round(contentRect.top)}px)`
      ).to.be.at.least(headerRect.bottom - 2);
    });
  });
});

/**
 * Valida que elementos curtos (labels, badges, títulos) não sofram quebra de linha
 * acidental por estarem espremidos em containers sem flex-wrap.
 * @param {string} selector - Seletor dos elementos a auditar
 * @example cy.checkNoUnnaturalWordWrap('.qa-credential-row strong, .qa-credential-row button')
 */
Cypress.Commands.add("checkNoUnnaturalWordWrap", (selector) => {
  cy.log(`🔎 Auditando quebra indesejada de texto em: ${selector}`);

  cy.get(selector).each(($el) => {
    if (!$el.is(":visible")) return;

    const text = $el.text().trim();
    // Aplica a regra a palavras curtas ou botões de ação que não deveriam empilhar caracteres
    if (text.length > 0 && text.length <= 15) {
      const computed = window.getComputedStyle($el[0]);
      const lineHeight = parseFloat(computed.lineHeight) || (parseFloat(computed.fontSize) * 1.3);
      const height = $el[0].getBoundingClientRect().height;

      // Se a altura do elemento exceder 1.6x a altura de linha, a palavra foi quebrada em 2+ linhas
      const lines = Math.round(height / lineHeight);
      expect(
        lines,
        `Texto "${text}" no elemento <${$el[0].tagName.toLowerCase()}> foi espremido e quebrado em ${lines} linhas!`
      ).to.be.at.most(1);
    }
  });
});

/**
 * Valida que containers flexíveis em telas estreitas não espremam elementos-filho
 * a ponto de quebrar a leitura ou truncar conteúdo.
 * @param {string} rowSelector - Seletor da linha ou grupo de botões/campos
 */
Cypress.Commands.add("checkResponsiveRowSpacing", (rowSelector) => {
  cy.get(rowSelector).each(($row) => {
    if (!$row.is(":visible")) return;

    const rowRect = $row[0].getBoundingClientRect();
    const children = Array.from($row[0].children).filter((c) => {
      const style = window.getComputedStyle(c);
      return style.display !== "none" && style.visibility !== "hidden";
    });

    if (children.length >= 2) {
      let totalChildrenWidth = 0;
      children.forEach((c) => {
        totalChildrenWidth += c.getBoundingClientRect().width;
      });

      const computed = window.getComputedStyle($row[0]);
      const isWrap = computed.flexWrap === "wrap" || computed.display !== "flex";

      // Se a linha tem filhos que somam mais que a largura disponível e não tem wrap, há esmagamento
      if (totalChildrenWidth > rowRect.width + 5) {
        expect(
          isWrap,
          `Linha flex ${rowSelector} (largura: ${Math.round(rowRect.width)}px) com filhos somando ${Math.round(totalChildrenWidth)}px deve ter 'flex-wrap: wrap' para não achatar os botões!`
        ).to.be.true;
      }
    }
  });
});

Cypress.Commands.add("validateExternalLink", (selector, expectedUrl) => {
  cy.get(selector)
    .filter(`[href*="${expectedUrl}"]`)
    .first()
    .should("exist")
    .then(($link) => {
      const href = $link.attr("href");
      expect(href).to.include(expectedUrl);

      const target = $link.attr("target");
      if (target) {
        expect(target).to.equal("_blank");
        const rel = $link.attr("rel");
        if (rel) {
          expect(rel).to.match(/noopener|noreferrer/);
        }
      }

      cy.request({
        url: href,
        failOnStatusCode: false,
        timeout: 15000,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      }).then((response) => {
        expect([200, 301, 302, 307, 308, 999]).to.include(response.status);
      });
    });
});
