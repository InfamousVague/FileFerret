const { BrowserWindow, app: index } = require('electron');

let url;
if (process.env.NODE_ENV === 'DEV') {
  url = 'http://localhost:5403/';
} else {
  url = `file://${process.cwd()}/dist/index.html`;
}

index.on('ready', () => {
  const window = new BrowserWindow({ width: 290, height: 450, frame: false });
  window.loadURL(url);
});
