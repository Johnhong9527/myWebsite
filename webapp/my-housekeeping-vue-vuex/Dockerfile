 # 指定我们的基础镜像是ubuntu，版本是latest
 FROM ubuntu:latest
 # 指定制作我们的镜像的联系人信息（镜像创建者）
#  MAINTAINER 'honghaitzz'
 
 #安装linux基本软件
RUN sed -i 's/archive.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y vim bash-completion
#安装前端开发环境
RUN apt-get install -y npm
RUN apt-get install -y curl
RUN npm install -g -y n
RUN n stable
RUN npm install -y -g vue-cli
RUN apt-get install -y samba
# RUN smbpasswd -a root
# RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
# RUN npm install
#  RUN npm rebuild node-sass --force
 
 # 配置环境变量
#  ENV HOST 0.0.0.0
#  ENV PORT 8000
 
 # 容器对外暴露的端口号
 EXPOSE 8000
 
 # 容器启动时执行的命令，类似npm run start
#  CMD ["npm", "start"]
