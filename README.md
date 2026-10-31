<div align="center">

# ⚡ QA OPS INTELLIGENCE
### Autonomous E2E Automation Suite • AI Pair Programming • Continuous CI/CD Telemetry

[![Cypress E2E Tests](https://github.com/GalileoGuilherme/portfolio-qa-automation/actions/workflows/cypress.yml/badge.svg)](https://github.com/GalileoGuilherme/portfolio-qa-automation/actions/workflows/cypress.yml)
![Cypress Version](https://img.shields.io/badge/cypress-v13.17.0-04C38C?style=flat&logo=cypress&logoColor=white)
![Google Gemini](https://img.shields.io/badge/AI%20Engine-Google%20Gemini%201.5-8E75C4?style=flat&logo=google&logoColor=white)
![Node Version](https://img.shields.io/badge/node-%3E%3D20.0.0-339933?style=flat&logo=node.js&logoColor=white)
![Autonomous QA](https://img.shields.io/badge/Autonomous%20QA-Self--Generating%20Suites-blueviolet?style=flat)
![Cross-Device Matrix](https://img.shields.io/badge/viewports-320px%20%E2%86%92%201280px-blue?style=flat)
![E2E Scenarios](https://img.shields.io/badge/E2E%20Scenarios-72%20Cen%C3%A1rios-success?style=flat)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

<p align="center">
  Uma arquitetura corporativa completa de <b>Engenharia de Qualidade Autônoma (QA Ops)</b> desenvolvida para validação contínua e autoevolução da aplicação web <a href="https://portfolio-omega-six-18.vercel.app/"><b>Galileo Guilherme | Portfolio Web</b></a>. Integra <b>72 cenários de testes automatizados</b> (Desktop, Tablet e Ultra-Mobile), <b>auditoria visual contra esmagamento de elementos</b>, <b>detecção de colisão de strings no DOM</b>, <b>motor de geração dinâmica de testes por IA</b> e <b>disparo de relatórios executivos de alto padrão com botão de re-execução (1-Click Re-run)</b> em tempo real.
</p>

---

<img src="docs/images/qa-ops-intelligence-email.png" alt="Relatório Executivo QA Ops Intelligence - E-mail com IA" width="480" style="border-radius: 12px; box-shadow: 0 20px 50px rgba(0,0,0,0.5);" />

*Template executivo escuro gerado automaticamente e despachado via SMTP com detalhamento de suítes, registro de casos criados/modificados, saúde de API em tempo real e botão nativo para re-disparar testes.*

---

</div>

## 🌟 Destaques de Engenharia & Inovações

### 1. 🤖 Engenharia de QA Autônoma com IA Generativa
- **Geração Dinâmica de Suítes de Teste**: O motor `scripts/ai-test-observer.js` analisa as necessidades da aplicação e gera autonomamente novos casos de teste diretamente em `cypress/e2e/generated/autonomous-ai-suite.cy.js`.
- **Auto-Deploy & Execução Sem Bloqueio Humano**: A IA atua com autoridade de Tech Lead/Senior SDET, versionando e acionando pipelines de validação contínua sem necessidade de intervenção manual.
- **Rotação Inteligente de 6 Domínios Especializados**: Elimina respostas repetitivas alternando dinamicamente entre:
  1. *Resiliência de Rede & Chaos Engineering* (`cy.intercept` com injeção de latência e falhas 500)
  2. *Acessibilidade Profunda WCAG 2.2* (auditoria de Focus Trap e navegação por teclado)
  3. *Telemetria de Performance & Resource Timing* (Navigation Timing API e tarefas longas no DOM)
  4. *Contratos de API & OpenAPI/Swagger* (validação de schemas JSON de autenticação)
  5. *Auditoria de Internacionalização (i18n)* (varredura de nós textuais contra vazamento de template keys)
  6. *Transição de Tema & Estabilidade Visual* (eliminação de FOUC e colisão de bounding boxes)

### 2. 📧 Relatório Executivo com Ações Rápidas (1-Click Re-run)
- **Tabela com Detalhamento das Suítes Executadas**: Lista cada arquivo de teste, seu escopo técnico, quantidade exata de cenários e status de validação (`✅ PASS`).
- **Changelog de Testes (Criados vs Modificados)**: Extrai automaticamente do Git e exibe badges destacando novos casos criados e arquivos de teste aprimorados.
- **Botão Direto de Re-execução**: Botão `🔁 Disparar Nova Execução de Testes (Re-run E2E)` posicionado no final do e-mail que direciona para o trigger `workflow_dispatch` do GitHub Actions, permitindo rodar novamente a suíte completa com 1 clique de qualquer cliente de e-mail (Outlook, Gmail ou mobile).

### 3. 📱 Critérios Estritos de Aceitação & Responsividade Ultra-Mobile
- **Matriz de Resoluções Testadas**:
  - `320x568` (iPhone SE / Telas ultracompactas)
  - `360x800` (Samsung Galaxy S20 / Android Padrão)
  - `375x812` (iPhone X / 11)
  - `390x844` (iPhone 12 / 13 / 14)
  - `768x1024` (iPad / Tablets em modo Portrait)
  - `1280x720` (Desktop widescreen)
- **Custom Commands Avançados (`cypress/support/commands.js`)**:
  - `cy.checkNoGluedTokens()`: Detecta junções anômalas no DOM (ex: `CASO 1 · CENÁRIOLogin`, `EndereçoPendente`, `E-mailPendente`).
  - `cy.checkZeroHorizontalOverflow()`: Assegura que `scrollWidth <= innerWidth + 1` em 100% das páginas.
  - `cy.checkNoUnnaturalWordWrap()`: Impede que palavras curtas ou botões sofram hifenização/quebra por esmagamento (ex: `E-\nmail`).
  - `cy.checkResponsiveRowSpacing()`: Garante `flex-wrap: wrap` e espaçamento quando múltiplos botões/inputs residem na mesma linha.
  - `cy.checkHeaderOcclusion()`: Garante que o cabeçalho fixo/móvel nunca cubra o título ou primeiro bloco de conteúdo.

### 4. 📄 Currículo Profissional com Download Direto de Alta Fidelidade
- Substituição de `iframe` bruto (que gera falhas visuais e caixas cinzas no mobile) por um cartão executivo moderno com metadados do documento (`PDF`, `Versão Atualizada`) e botão de download nativo (`#qa-curriculum-download`).

---

## 🏗️ Estrutura do Ecossistema

```text
├── .github/
│   └── workflows/
│       └── cypress.yml                   # Pipeline CI/CD, execução E2E e orquestração de IA
├── cypress/
│   ├── e2e/
│   │   ├── 01-home-and-responsive.cy.js  # Elementos centrais, SEO, overflow zero e social links (9 testes)
│   │   ├── 02-routes-and-navigation.cy.js# Validação de integridade de todas as rotas da SPA (12 testes)
│   │   ├── 03-theme-and-language.cy.js   # UX/UI: Dark/Light Mode e Internacionalização i18n (4 testes)
│   │   ├── 04-contact-form.cy.js         # Validação funcional de inputs obrigatórios (4 testes)
│   │   ├── 05-qa-automation-lab.cy.js    # Login Demo, área protegida e catálogo do Laboratório (6 testes)
│   │   ├── 06-visual-responsiveness-audit.cy.js # Matriz 5 viewports, badges, labels e currículo (35 testes)
│   │   ├── generated/
│   │   │   └── autonomous-ai-suite.cy.js # Testes gerados de forma 100% autônoma pela IA (2 testes)
│   │   └── all-tests.cy.js               # Suíte agregadora para execução visual contínua
│   ├── reports/                          # Relatórios em JSON e HTML
│   └── support/
│       ├── commands.js                   # Comandos customizados (checkNoGluedTokens, checkHeaderOcclusion, etc.)
│       └── e2e.js                        # Listeners globais e tolerância a exceções da SPA
├── docs/
│   └── images/
│       └── qa-ops-intelligence-email.png # Preview oficial do relatório executivo
├── scripts/
│   ├── ai-test-observer.js               # Motor da IA Observadora + Geração de Testes e Relatório
│   └── cypress-runner.js                 # Wrapper isolador de ambiente Node/Electron
├── cypress.config.js                     # Configurações do Cypress (BaseURL, Retries, Viewports)
├── package.json
└── README.md
```

---

## 📊 Matriz de Cobertura E2E (72 Cenários — 100% Green)

| Módulo / Especificação | Escopo Técnico de Validação | Viewports Testadas | Cenários | Status |
| :--- | :--- | :--- | :---: | :---: |
| **`01-home-and-responsive.cy.js`** | Elementos da Home, tags de SEO, links externos (GitHub/LinkedIn HTTP 200) e integridade visual. | Desktop, iPhone X, Galaxy S20 | 9 | <kbd>✅ 9/9</kbd> |
| **`02-routes-and-navigation.cy.js`** | Integridade de rotas SPA: `/about`, `/portfolio`, `/curriculum`, `/contact`, `/api-docs` e `/automation`. | Desktop e Mobile | 12 | <kbd>✅ 12/12</kbd> |
| **`03-theme-and-language.cy.js`** | Persistência de tema (`data-theme="dark/light"`) e de idioma (`pt-BR` / `en-US`). | Desktop e Mobile | 4 | <kbd>✅ 4/4</kbd> |
| **`04-contact-form.cy.js`** | Inputs obrigatórios (`#name`, `#email`, `#message`), sanitização e validação de submit. | Desktop e Mobile | 4 | <kbd>✅ 4/4</kbd> |
| **`05-qa-automation-lab.cy.js`** | Autenticação com credenciais dinâmicas, proteção de rota `/automation/loja` e catálogo. | Desktop e Mobile | 6 | <kbd>✅ 6/6</kbd> |
| **`06-visual-responsiveness-audit.cy.js`** | Auditoria ultra-mobile: colisão de cabeçalho, espaçamento de badges, download direto de PDF e overflow zero. | 320px, 360px, 375px, 390px, 768px | 35 | <kbd>✅ 35/35</kbd> |
| **`generated/autonomous-ai-suite.cy.js`** | Testes autônomos gerados dinamicamente pela IA (A11y, Performance, Chaos, OpenAPI). | Multi-device | 2 | <kbd>✅ 2/2</kbd> |
| **Total Consolidado** | **Cobertura End-to-End Completa (Desktop, Tablet e Ultra-Mobile)** | **320px → 1280px** | **72** | <kbd>🏆 72/72</kbd> |

---

## ⚡ Guia de Execução

### 1. Instalação
```bash
git clone https://github.com/GalileoGuilherme/portfolio-qa-automation.git
cd portfolio-qa-automation
npm install
```

### 2. Execução Local dos Testes

#### 🖥️ Modo Visual no Navegador (Headed)
```bash
# Executa toda a bateria agregada de ponta a ponta no Google Chrome
npm run test:browser:all

# Executa teste a teste no Google Chrome
npm run test:browser

# Abre a interface interativa do Cypress (GUI)
npm run test:open
```

#### ⚡ Modo Headless (CI / Automação)
```bash
# Executa todos os testes em modo headless
npm test

# Executa no motor do Chrome headless
npm run cypress:run:chrome

# Bateria completa + disparo da IA + geração do relatório executivo
npm run test:full
```

### 3. Geração Autônoma e Relatório da IA
```bash
node scripts/ai-test-observer.js
```
*O relatório executivo em formato HTML é salvo em `cypress/reports/ai-report-latest.html` e despachado automaticamente por e-mail com a tabela de suítes, changelog e botão de re-execução.*

---

## 🔒 Variáveis de Ambiente (CI/CD GitHub Actions)

| Variável | Descrição |
| :--- | :--- |
| `GEMINI_API_KEY` | Chave de API do Google Gemini (`gemini-1.5-flash` / `gemini-1.5-pro`) |
| `SMTP_USER` | Conta de disparo SMTP (Gmail / Outlook) |
| `SMTP_PASS` | Senha de aplicativo / credencial SMTP |
| `EMAIL_TO` | Destinatário dos relatórios executivos |
| `CYPRESS_BASE_URL` | URL da aplicação (Default: `https://portfolio-omega-six-18.vercel.app`) |

---

<div align="center">
  <sub>Construído com excelência técnica por <b>Galileo Guilherme</b> • QA Automation Engineer & SDET</sub>
</div>
