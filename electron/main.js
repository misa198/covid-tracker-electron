const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');
const isDev = require('electron-is-dev');
const url = require('url');

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 1000,
    minHeight: 800,
    width: isDev ? 1500 : 1000,
    height: 800,
    autoHideMenuBar: isDev ? false : true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      webSecurity: false,
      webviewTag: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  const startUrl = isDev
    ? 'http://localhost:3000'
    : url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true,
      });
  win.loadURL(startUrl);
  if (isDev) {
    win.webContents.openDevTools();
  } else {
    Menu.setApplicationMenu(false);
  }
};

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
