const { BrowserWindow, app } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:   
 {
      nodeIntegration: true,   
 // Permite o acesso a APIs Node.js
      contextIsolation: false, // Desativa o isolamento de contexto (pode ser necessário para algumas interações)
    }
  });

  win.loadFile('index.html');

  // Eventos para o WebView
  const webview = win.webContents;
  webview.on('did-finish-load', () => {
    // Código a ser executado quando a página do Clipchamp terminar de carregar
  });
  webview.on('dom-ready', () => {
    // Código a ser executado quando o DOM da página do Clipchamp estiver pronto
  });
webview.executeJavaScript();
}

app.whenReady().then(() => {
  createWindow();
});
