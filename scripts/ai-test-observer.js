// 3. Montagem do template de E-mail Responsivo (Design UI/UX Premium)
function buildEmailHtml(insightsText, metrics) {
  const isFail = metrics.hasFailures;
  const primaryColor = isFail ? "#ef4444" : "#10b981"; // Tailwind Red-500 ou Emerald-500
  const gradient = isFail 
    ? "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)" 
    : "linear-gradient(135deg, #10b981 0%, #047857 100%)";
  const statusTitle = isFail ? "Falha na Bateria de Testes" : "Testes Aprovados com Sucesso";
  const statusIcon = isFail ? "❌" : "✨";

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Reset & Tipografia Base */
    body { 
      margin: 0; padding: 0; 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
      background-color: #f3f4f6; color: #1f2937; 
      -webkit-font-smoothing: antialiased; 
    }
    .wrapper { padding: 40px 20px; }
    
    /* Container Principal com Animação de Entrada */
    .container { 
      max-width: 680px; width: 100%; margin: 0 auto; 
      background: #ffffff; border-radius: 16px; 
      box-shadow: 0 10px 25px rgba(0,0,0,0.05); overflow: hidden; 
      animation: fadeUp 0.8s ease-out forwards; 
    }
    
    /* Keyframes para clientes de e-mail modernos */
    @keyframes fadeUp { 
      from { opacity: 0; transform: translateY(20px); } 
      to { opacity: 1; transform: translateY(0); } 
    }
    @keyframes pulseBadge { 
      0% { box-shadow: 0 0 0 0 rgba(${isFail ? '239, 68, 68' : '16, 185, 129'}, 0.4); } 
      70% { box-shadow: 0 0 0 8px rgba(0,0,0,0); } 
      100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); } 
    }

    /* Header Premium com Gradiente */
    .header { 
      background: ${gradient}; padding: 40px 30px; 
      text-align: center; color: #ffffff; 
    }
    .header-icon { font-size: 48px; display: block; margin-bottom: 15px; }
    .header h1 { margin: 0; font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
    .header p { margin: 10px 0 0 0; font-size: 15px; opacity: 0.9; font-weight: 500; }

    .content { padding: 40px 30px; }
    
    /* Grid de Métricas (Table-layout para compatibilidade total com Outlook) */
    .metrics-wrapper { 
      background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; 
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); margin-bottom: 30px; width: 100%;
    }
    .metrics-grid { width: 100%; border-collapse: collapse; }
    .metric-box { 
      width: 25%; text-align: center; padding: 20px 10px; 
      border-right: 1px solid #e5e7eb; 
    }
    .metric-box:last-child { border-right: none; }
    .metric-value { font-size: 26px; font-weight: 800; color: #111827; }
    .metric-value.success { color: #10b981; }
    .metric-value.danger { color: #ef4444; }
    .metric-label { 
      font-size: 11px; color: #6b7280; text-transform: uppercase; 
      letter-spacing: 1px; margin-top: 6px; font-weight: 700; 
    }

    /* Card de Inteligência Artificial */
    .ai-card { 
      background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; 
      padding: 25px; border-left: 5px solid ${primaryColor}; 
    }
    .ai-header { border-bottom: 1px solid #e2e8f0; padding-bottom: 15px; margin-bottom: 15px; }
    .ai-badge { 
      background: ${primaryColor}; color: white; padding: 4px 10px; 
      border-radius: 20px; font-size: 11px; font-weight: bold; text-transform: uppercase; 
      letter-spacing: 1px; margin-right: 10px; animation: pulseBadge 2s infinite; 
    }
    .ai-title { font-size: 18px; color: #0f172a; font-weight: 700; margin: 0; display: inline; }
    
    .ai-content { font-size: 15px; line-height: 1.7; color: #334155; white-space: pre-wrap; }
    
    /* Code Blocks */
    pre { 
      background: #0f172a; color: #f8fafc; padding: 20px; border-radius: 8px; 
      font-size: 13px; font-family: 'Fira Code', 'Courier New', monospace; 
      overflow-x: auto; margin: 20px 0; box-shadow: inset 0 2px 4px rgba(0,0,0,0.2); 
    }
    code { font-family: 'Fira Code', 'Courier New', monospace; }
    
    /* Footer */
    .footer { 
      background: #f9fafb; padding: 25px 30px; text-align: center; 
      border-top: 1px solid #f3f4f6; 
    }
    .footer p { margin: 0 0 5px 0; font-size: 13px; color: #9ca3af; font-weight: 500; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <!-- Header -->
      <div class="header">
        <span class="header-icon">${statusIcon}</span>
        <h1>${statusTitle}</h1>
        <p>Portfólio Web • Galileo Guilherme QA</p>
      </div>

      <!-- Content -->
      <div class="content">
        <!-- Métricas (Tabela para máxima compatibilidade) -->
        <div class="metrics-wrapper">
          <table class="metrics-grid">
            <tr>
              <td class="metric-box">
                <div class="metric-value">${metrics.stats.tests}</div>
                <div class="metric-label">Cenários</div>
              </td>
              <td class="metric-box">
                <div class="metric-value success">${metrics.stats.passes}</div>
                <div class="metric-label">Passaram</div>
              </td>
              <td class="metric-box">
                <div class="metric-value ${metrics.stats.failures > 0 ? 'danger' : ''}">${metrics.stats.failures}</div>
                <div class="metric-label">Falhas</div>
              </td>
              <td class="metric-box">
                <div class="metric-value">${metrics.totalScreenshots}</div>
                <div class="metric-label">Evidências</div>
              </td>
            </tr>
          </table>
        </div>

        <!-- AI Insights -->
        <div class="ai-card">
          <div class="ai-header">
            <span class="ai-badge">AI Visionária</span>
            <span class="ai-title">${isFail ? "Diagnóstico da Causa Raiz" : "Tendências de Evolução UX/UI"}</span>
          </div>
          <div class="ai-content">${insightsText}</div>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p>Este relatório foi gerado e despachado automaticamente via CI/CD.</p>
        <p>Cypress E2E • Google Gemini AI • GitHub Actions</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}