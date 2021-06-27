1. 新增 `tsconfig.json` 檔案
2. 執行 `tsc`，預設下(若 config 檔案無設定 include)所有 ts 檔案將自動編譯為 js 檔
```shell
tsc
```
3. `tsc -w` 加上監聽
```shell
tsc -w
```