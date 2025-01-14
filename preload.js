const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  startScraping: (url) => ipcRenderer.invoke('start-scraping', url),
});
