const shell = require('shelljs');
module.exports = function (name) {
  shell.exec(`cd ./gitbook/${name} && gitbook mobi ./ ./${name}.mobi`);
  shell.echo(`${name}.mobi打包完毕,开始执行邮件发送程序`);
}