# yarn

## 安装[官方文档](https://yarnpkg.com/zh-Hans/docs/install)
```bash
# 第一步
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
# 第二步
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
# 第三步
sudo apt-get update && sudo apt-get install yarn
```
## 更新 Yarn 到最新版
```bash
yarn self-update
```

## 修改源地址
```bash
# 淘宝
yarn config set registry https://registry.npm.taobao.org/
# 官方
yarn config set registry https://registry.npmjs.org/
# 查看是否修改成功
yarn config get registry
```

## 命令
[文档](https://yarnpkg.com/en/docs/cli/upgrade)
```bash
# 全局安装包
yarn global add {package}
# 本地安装包
yarn add {package}
```
