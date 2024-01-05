const { app, BrowserWindow } = require('electron');
const path = require('path');


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // 根据需要添加
    }
  });


    // 在生产模式下加载构建好的静态文件
    // win.loadFile('/index.html');
    win.loadFile(path.join(__dirname, '/dist/index.html'));

  // 打开开发者工具（仅在开发模式下）

    win.webContents.openDevTools();

}

app.whenReady().then(createWindow);
