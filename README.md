# 🧪 Suíte Completa de Automação E2E - Cypress & GitHub Actions

Projeto de automação de testes End-to-End (E2E) cobrindo **100% da aplicação** [portfolio-omega-six-18.vercel.app](https://portfolio-omega-six-18.vercel.app/) nos eixos **Funcional**, **UI (Interface)**, **UX (Experiência do Usuário)** e **Responsividade (Desktop e Mobile)**.

---

## ⚡ Comandos para Rodar os Testes

### 1. No Navegador (Modo Visual / Headed)
Execute todos os testes vendo o navegador real rodar ao vivo:

```bash
# Roda todos os testes de uma vez no Google Chrome (janela visível)
npm run test:browser:all

# Roda spec por spec com o navegador aberto
npm run test:browser

# Abre o Test Runner interativo com a opção 'Run all specs' ativada
npm run test:open
```

### 2. Via CLI / Terminal (Modo Headless / CI)
```bash
# Executa a suíte completa em modo headless
npm test

# Executa em modo headless no Google Chrome
npm run cypress:run:chrome

# Executa a suíte completa e gera o relatório da IA com envio por e-mail
npm run test:full

# Executa diretamente o observador de IA e gera o relatório executivo
npm run report:ai
```

---

## 🤖 Observador de IA & Relatório por E-mail (AI QA Observer)

O projeto conta com o script inteligente [`scripts/ai-test-observer.js`](scripts/ai-test-observer.js) integrado à pipeline.

### O que a IA faz:
1. **Analisa métricas e screenshots de falhas**: Inspeciona as evidências geradas pelo Cypress.
2. **Gera diagnósticos de Causa Raiz**: Avalia problemas de UI/UX (quebra de layout, botões espremidos, espaçamentos colados).
3. **Sugere correções de código**: Produz snippets prontos de CSS/React.
4. **Despacha relatório em HTML responsivo**: Salva localmente em `cypress/reports/ai-report-latest.html` e dispara via e-mail (Outlook/Gmail/SMTP).

### Secrets do GitHub Actions para Ativar o Envio de E-mail:
No repositório do GitHub em **Settings > Secrets and variables > Actions**, adicione:
- `SMTP_USER`: Seu e-mail remetente (ex: `galileoguilherme@outlook.com` ou Gmail).
- `SMTP_PASS`: Sua senha de aplicativo gerada no provedor (App Password).
- `EMAIL_TO`: E-mail de destino (padrão: `galileoguilherme@outlook.com`).
- `GEMINI_API_KEY`: (Opcional) Chave da API do Gemini para diagnósticos generativos avançados.


---

## 📊 Matriz de Cobertura dos Testes (35 Cenários - 100% Passed)

| Especificação (`cypress/e2e/`) | Escopo / Módulos Cobertos | Dispositivos Testados | Status |
| :--- | :--- | :--- | :--- |
| **`01-home-and-responsive.cy.js`** | Elementos centrais da Home, SEO, overflow horizontal zero, integridade e segurança de links externos (GitHub e LinkedIn com status HTTP 200). | Desktop, iPhone X, Galaxy S20 | ✅ 9/9 Passed |
| **`02-routes-and-navigation.cy.js`** | Validação de todas as rotas da SPA (`/about`, `/portfolio`, `/curriculum`, `/contact`, `/api-docs`, `/automation`). | Desktop e Mobile | ✅ 12/12 Passed |
| **`03-theme-and-language.cy.js`** | UX/UI: Alternância dinâmica Dark/Light mode (`data-theme`), Internacionalização i18n (`pt-BR` e `en-US`). | Desktop e Mobile | ✅ 4/4 Passed |
| **`04-contact-form.cy.js`** | Validação visual de campos obrigatórios (`#name`, `#email`, `#message`), preenchimento e integridade do formulário. | Desktop e Mobile | ✅ 4/4 Passed |
| **`05-qa-automation-lab.cy.js`** | Fluxo funcional completo do laboratório: validação das credenciais demo, login protegido, redirecionamento para `/automation/loja` e busca no catálogo de produtos. | Desktop e Mobile | ✅ 6/6 Passed |

---

## 🔄 Integração Contínua (CI/CD) - Branches `main` e `dev`

O workflow [`.github/workflows/cypress.yml`](.github/workflows/cypress.yml) está configurado para:
1. Executar a cada push e pull request nas branches `main`, `master`, `dev` e `develop`.
2. Ouvir disparos remotos (`repository_dispatch`) disparados pelo repositório principal do portfólio ([https://github.com/GalileoGuilherme/portfolio](https://github.com/GalileoGuilherme/portfolio)) a cada commit ou deploy da Vercel.
3. Fazer upload automático de evidências (screenshots e vídeos) caso algum teste falhe.

Para acionar a partir do repositório da aplicação, utilize o modelo fornecido em [`.github/workflows/trigger-e2e-on-portfolio.yml`](.github/workflows/trigger-e2e-on-portfolio.yml).
