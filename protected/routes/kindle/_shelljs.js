const shell = require('shelljs');
let $shell = function (name) {
  // shell.cd('../Downloads/');
  shell.echo('hello world');
  shell.exec('cd ../../../Downloads && kindlegen'+ name).stdout;
}
module.exports = $shell;