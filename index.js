const { BrowserWindow, app: index } = require('electron');

let url;
if (process.env.NODE_ENV === 'DEV') {
  url = 'http://localhost:5403/';
} else {
  url = 'http://71.237.7.8:8080';
}

index.on('ready', () => {
  const window = new BrowserWindow({ width: 290, height: 450, frame: false });
  window.loadURL(url);
  if (process.env.NODE_ENV === 'DEV') {
    window.openDevTools();
  }
});
