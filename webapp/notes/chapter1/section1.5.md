# docker

## 镜像加速器
[阿里云地址](https://dev.aliyun.com/search.html)
#### Ubuntu 16.04+、Debian 8+、CentOS 7
对于使用 systemd 的系统，请在 /etc/docker/daemon.json 中写入如下内容（如果文件不存在请新建该文件）
```
{
  "registry-mirrors": [
    "https://registry.docker-cn.com"
  ]
}
```

## mongo使用
#### 文档
[官方文档](https://hub.docker.com/_/mongo/)
[第二篇](https://github.com/docker-library/docs/tree/master/mongo)

#### 实例展示
```
# 使用镜像运行(理由:国内网路太差了,某些资源无法下载)
docker run -p 27017:27017 -v $PWD/db:/data/db -d mongo
```
命令说明：

-p 27017:27017 :将容器的27017 端口映射到主机的27017 端口

-v $PWD/db:/data/db :将主机中当前目录下的db挂载到容器的/data/db，作为mongo数据存储目录


#### Start the Database
```
$ docker run --name some-mongo -d mongo --auth
```

#### Add the Initial Admin User
```
$ docker exec -it some-mongo mongo admin
connecting to: admin
> db.createUser({ user: 'jsmith', pwd: 'some-initial-password', roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] });
Successfully added user: {
	"user" : "jsmith",
	"roles" : [
		{
			"role" : "userAdminAnyDatabase",
			"db" : "admin"
		}
	]
}
```

#### Connect Externally
```
$ docker run -it --rm --link some-mongo:mongo mongo mongo -u jsmith -p some-initial-password --authenticationDatabase admin some-mongo/some-db
> db.getName();
some-db
```
docker run -it --rm --link some-mongo:mongo mongo mongo -u jsmith -p some-initial-password --authenticationDatabase admin some-mongo/some-db

#### 使用docker时遇到一些问题
`Get https://registry-1.docker.io/v2/: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)` 是本地DNS方面的问题，由于之前设置了 1.1.1.1,结果后面pull的时候出现这个问题