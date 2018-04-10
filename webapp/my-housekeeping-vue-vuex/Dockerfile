FROM ubuntu:16.04
RUN sed -i 's/archive.ubuntu.com/mirrors.ustc.edu.cn/g' /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y vim bash-completion
RUN apt-get install -y npm
# RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN npm install -g n
RUN apt-get install -y wget  
RUN apt-get install -y nginx
RUN n stable
# RUN apt-get install -y curl
WORKDIR /data

EXPOSE 80
# CMD node bin/www
CMD ["nginx","-g","daemon off;"]
