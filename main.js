const {
  app,
  BrowserWindow
} = require("electron");

const url = require("url");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 680,
    resizable: false,
    backgroundColor: "#ffffff",
    icon: `file://${__dirname}/dist/assets/logo.png`,
    webPreferences: {
      webSecurity: true,
    },
  });

  win.setMenu(null);

  const fileUrl = url.format({
    pathname: path.join(__dirname, `/dist/angular-electron/index.html`),
    protocol: "file:",
    slashes: true,
  });

  // console.log(fileUrl);

  // win.loadURL(`file://${__dirname}/dist/index.html`)
  win.loadURL(fileUrl);

  // win.webContents.openDevTools();

  win.on("closed", function () {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (win === null) {
    createWindow();
  }
});
