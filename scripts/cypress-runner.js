/**
 * Cypress Runner Wrapper
 * Sanitiza o ambiente do Node/Electron (removendo ELECTRON_RUN_AS_NODE herdado do VS Code)
 * antes de delegar a execução ao binário do Cypress.
 */
delete process.env.ELECTRON_RUN_AS_NODE;

const { spawn } = require("child_process");
const isWin = process.platform === "win32";
const npmCmd = isWin ? "npx.cmd" : "npx";
const args = ["cypress", ...process.argv.slice(2)];

const child = spawn(npmCmd, args, {
  stdio: "inherit",
  shell: true,
  env: process.env,
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});

