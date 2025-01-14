# 環境構築

- Windows10
- WSL2

## XLAUNCH上に表示するまで

```bash
rpa_test
cd ./rpa_test/
npm init -y
npm install electron playwright
touch main.js
touch renderer.js
touch scraper.js
npx playwright install
touch index.html
touch preload.js
npm start
```

## パッケージまで

```bash
npm install --save-dev @electron-forge/cli # cannot be downloaded on WSL

sudo apt update
sudo apt install wine
sudo dpkg --add-architecture i386
sudo apt update
sudo apt install wine32
vi package.json
#####
# {
#   "build": {
#     "appId": "com.example.rpa_test",
#     "win": {
#       "target": "nsis",  // Windows 用インストーラーを指定
#       "icon": "path/to/icon.ico" // アイコンファイルを指定
#     }
#   }
# }
#####
npm uninstall electron
npm install --save-dev electron
npm run dist -- --win
```

```bash
ubuntu@DESKTOP-GFD5L8A:~/react_ws/rpa_test$ npm run dist -- --win

> rpa_test@1.0.0 dist
> electron-builder --win

  • electron-builder  version=25.1.8 os=5.15.167.4-microsoft-standard-WSL2
  • loaded configuration  file=package.json ("build" field)
  • writing effective config  file=dist/builder-effective-config.yaml
  • executing @electron/rebuild  electronVersion=33.3.1 arch=x64 buildFromSource=false appDir=./
  • installing native dependencies  arch=x64
  • completed installing native dependencies
  • packaging       platform=win32 arch=x64 electron=33.3.1 appOutDir=dist/win-unpacked
  • updating asar integrity executable resource  executablePath=dist/win-unpacked/rpa_test.exe
  • default Electron icon is used  reason=application icon is not set
  • signing with signtool.exe  path=dist/win-unpacked/rpa_test.exe
  • no signing info identified, signing is skipped  signHook=false cscInfo=null
  • signing with signtool.exe  path=dist/win-unpacked/resources/app.asar.unpacked/node_modules/playwright/node_modules/playwright-core/bin/PrintDeps.exe
  • no signing info identified, signing is skipped  signHook=false cscInfo=null
  • building        target=nsis file=dist/rpa_test Setup 1.0.0.exe archs=x64 oneClick=true perMachine=false
  • downloading     url=https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-3.0.4.1/nsis-3.0.4.1.7z size=1.3 MB parts=1
  • downloaded      url=https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-3.0.4.1/nsis-3.0.4.1.7z duration=1.314s
  • signing with signtool.exe  path=dist/win-unpacked/resources/elevate.exe
  • no signing info identified, signing is skipped  signHook=false cscInfo=null
  • downloading     url=https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-resources-3.4.1/nsis-resources-3.4.1.7z size=731 kB parts=1
  • downloaded      url=https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-resources-3.4.1/nsis-resources-3.4.1.7z duration=776ms
  • signing with signtool.exe  path=dist/__uninstaller-nsis-rpa_test.exe
  • no signing info identified, signing is skipped  signHook=false cscInfo=null
  • signing with signtool.exe  path=dist/rpa_test Setup 1.0.0.exe
  • no signing info identified, signing is skipped  signHook=false cscInfo=null
  • building block map  blockMapFile=dist/rpa_test Setup 1.0.0.exe.blockmap
```

- クロスビルドできたが、windows上で、WSLのXLAUNCHで動いていたように動かない

