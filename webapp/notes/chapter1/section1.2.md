# node

## 安装
```bash
# 这里我使用的是源码安装方案,稍微要花点时间
## 第一步:更新系统软件
  sudo apt-get update && sudo apt-get upgrade
## 第二步:下载源代码到根目录下的opt文件夹中
  cd /opt && sudo wget https://nodejs.org/dist/v9.8.0/node-v9.8.0.tar.gz
## 第三步:解压=>编译=>安装
  sudo tar -zxf node-v9.8.0.tar.gz && sudo ./configure && sudo make && sudo make install

# apt-get 安装(未测试过)
sudo apt-get update
sudo apt-get install nodejs
```
## 更新
```bash
# 针对所有方案,无视任何问题的更新(linux环境),更新到最新版本
sudo npm install -g n
sudo n latest
```

## 修改源地址
```bash
# 淘宝
npm config set registry https://registry.npm.taobao.org/
# 官方
npm config set registry https://registry.npmjs.org/
# 查看是否修改成功
npm config get registry
```