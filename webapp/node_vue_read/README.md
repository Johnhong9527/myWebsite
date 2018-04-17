# vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Dockerfile
暂时不可使用

## vscode
```json
{
  // 以像素为单位控制字号。
  "editor.fontSize": 14,
  // 控制编辑器是否应在键入后自动设置行的格式
  "editor.formatOnType": true,
  "editor.tabSize": 2,
  "php.validate.executablePath": "/usr/bin/php7.0",
  "window.zoomLevel": 2,
  "editor.wordWrap": "on",
  "workbench.colorTheme": "Default High Contrast",
  "terminal.integrated.fontSize": 11,
  "[markdown]": {},
  // vue_start
  "extensions.ignoreRecommendations": true, // 无视建议
  "emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html"
  },
  "vetur.validation.template": false,
  "eslint.options": {
    "plugins": [
      "html"
    ]
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue"
  ],
  // "editor.formatOnSave": true, // 编辑器保存自动格式化
  "prettier.trailingComma": "es5",
  "prettier.arrowParens": "avoid",
  "prettier.singleQuote": true,
  "prettier.semi": true,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatterOptions": {
    "wrap_attributes": "force-aligned"
  },
  "workbench.iconTheme": "vscode-icons"
  // vue_end
}
```
