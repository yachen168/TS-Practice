- install webpack、webpack-cli、typescript、ts-loader
```shell
npm i -D webpack webpack-cli typescript ts-loader
```
- `webpack.config.js` 檔案

- dev-serve
```shell
npm run start
```

- 打包
```shell
npm run build
```

- 讓程式碼兼容不同瀏覽器
(babel 無法處理 IE promise，如需要得另外裝 core-js)
```shell
npm i -D @babel/core @babel/preset-env babel-loader
```

