# vue-typescript-eslint

[![License](https://img.shields.io/npm/l/tableexport.svg)]()
[![Node](https://img.shields.io/badge/node-%3E%3D%206.0.0-brightgreen.svg)]()


## Getting Started

* first init your project with [@vue/cli 3.0](https://github.com/vuejs/vue-cli),select typescript with eslint

* install:

 ```shell
npm i vue-typescript-eslint --save-dev
```

* edit `.eslintrc.js` :
```js
module.exports = {
  extends: [
    "vue-typescript-eslint"
  ]
};
```

## vscode setting

* install extension [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) & [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

```json
 //eslint
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ],
```

## Thanks
[AlloyTeam/eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)

[静晴轩别苑](https://nice.lovejade.cn/zh/article/beautify-vue-by-eslint-and-prettier.html#%E5%88%9D%E5%A7%8B%E5%8C%96-vue-%E9%A1%B9%E7%9B%AE%E6%8E%A8%E4%BB%8B)