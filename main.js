const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { scrapeWebsite } = require('./scraper');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false, // セキュリティ向上のため無効化
      contextIsolation: true, // セキュリティ強化
    },
  });

  mainWindow.loadFile('index.html');

  ipcMain.handle('start-scraping', async (event, url) => {
    const result = await scrapeWebsite(url);
    return result;
  });
});