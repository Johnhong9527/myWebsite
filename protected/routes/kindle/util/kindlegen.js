const shell = require('shelljs');
module.exports = function (name) {
  // shell.cd('../Downloads/');
  shell.echo('hello world');
  shell.exec(`cd ./book/${name} && kindlegen -c1 ${name}.opf -locale zh`);
  shell.echo(`${name}.mobi打包完毕,开始执行邮件发送程序`);
  // shell.exec('cd ../../../Downloads && kindlegen'+ name).stdout;
}