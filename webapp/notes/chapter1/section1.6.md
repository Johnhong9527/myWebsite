# git:删除历史提交中的所有大文件
[bfg](https://rtyley.github.io/bfg-repo-cleaner/)<br>
[git filter-barch](https://help.github.com/articles/removing-sensitive-data-from-a-repository/)

### bfg介绍
bfg是基于java环境运行的，所以在使用之前，电脑需要配置java。配置教程可以上网查询。
### 说明
下载`bfg-*jar`文件，创建一个专门用来清理git文件的文件夹，将下载的`bfg-*jar`放置其中（所有清理步骤开始目录），
接着配置环境变量，设置定义别名。
### 定义别名
!FILENAME .bashrc
```diff
# 进入.bashrc
vim ~/.bashrc
# 在末尾添加
+ alias bfg="java -jar bfg-1.13.0.jar"
```
 
### Usage
!FILENAME 首先使用--mirror标志克隆您的回购的新副本：
```bash
git clone --mirror git://example.com/some-big-repo.git
```
这是一个裸机，这意味着你的普通文件将不可见，但它是你的版本库的Git数据库的完整副本，此时你应该对它进行备份以确保你不会丢失任何东西。

现在你可以运行BFG来清理你的仓库：
```
bfg --strip-blobs-bigger-than 100M some-big-repo.git
```
BFG将更新您的提交和所有分支和标签，以便它们干净，但它不会删除不需要的东西。 检查回购确保你的历史记录已被更新，然后使用标准的git gc命令去掉不需要的脏数据，Git现在将其认为是对需求的过剩：
```
cd some-big-repo.git
git reflog expire --expire=now --all && git gc --prune=now --aggressive
```
最后，一旦您对更新的repo状态感到满意，请将其推回（请注意，因为您的clone命令使用了--mirror标志，所以此推送将更新远程服务器上的所有ref）：
```
git push
```

```js:test.js
codeblock
```

### 用法<br/>
#### Usage: bfg [options] [`<repo>`]
##### -b, --strip-blobs-bigger-than `<size>`
strip blobs bigger than X (eg '128K', '1M', etc)
剥离大于X的斑点（例如'128K'，'1M'等）
##### -B, --strip-biggest-blobs NUM
strip the top NUM biggest blobs
剥离顶部NUM最大的斑点
##### -bi, --strip-blobs-with-ids `<blob-ids-file>`
strip blobs with the specified Git object ids<br/>
用指定的Git对象ID去除斑点
##### -D, --delete-files `<glob>`
delete files with the specified names (eg '*.class', '*.{txt,log}' - matches on file name, not path within repo)<br/>
删除具有指定名称的文件（例如'* .class'，'*。{txt，log}' - 匹配文件名，而不是回购库中的路径）
##### --delete-folders `<glob>`  
delete folders with the specified names (eg '.svn', '*-tmp' - matches on folder name, not path within repo)<br/>
删除具有指定名称的文件夹（例如'.svn'，'* -tmp' - 匹配文件夹名称，而不是回购内的路径）
##### --convert-to-git-lfs `<value>`
extract files with the specified names (eg '*.zip' or '*.mp4') into Git LFS<br/>
将具有指定名称的文件（例如'* .zip'或'* .mp4'）提取到Git LFS中
##### -rt, --replace-text `<expressions-file>`
filter content of files, replacing matched text. Match expressions should be listed in the file, one expression per line - by default, each expression is treated as a literal, but 'regex:' & 'glob:' prefixes are supported, with '==>' to specify a replacement string other than the default of '***REMOVED***'.<br/>
过滤文件的内容，替换匹配的文本。 匹配表达式应该在文件中列出，每行一个表达式 - 默认情况下，每个表达式都被视为文字，但支持'regex：'和'glob：'前缀，用'==>'来指定替换字符串 除了'*** REMOVED ***'的默认值以外。
##### -fi, --filter-content-including `<glob>`
do file-content filtering on files that match the specified expression (eg '*.{txt,properties}')<br/>
对符合指定表达式的文件进行文件内容过滤（例如'*。{txt，properties}'）
##### -fe, --filter-content-excluding `<glob>`
don't do file-content filtering on files that match the specified expression (eg '*.{xml,pdf}')<br/>
不要对符合指定表达式的文件进行文件内容过滤（例如'*。{xml，pdf}'）
##### -fs, --filter-content-size-threshold `<size>`
only do file-content filtering on files smaller than <size> (default is 1048576 bytes)<br/>
只对小于<size>的文件执行文件内容过滤（默认值为1048576字节）
##### -p, --protect-blobs-from `<refs>`
protect blobs that appear in the most recent versions of the specified refs (default is 'HEAD')<br/>
保护出现在指定参考文献最新版本中的斑点（默认为'HEAD'）
##### --no-blob-protection
allow the BFG to modify even your *latest* commit. Not recommended: you should have already ensured your latest commit is clean.<br/>
允许BFG修改你的*最新*提交。 不推荐：你应该已经确保你的最新提交是干净的。
##### --private                
treat this repo-rewrite as removing private data (for example: omit old commit ids from commit messages)<br/>
将此repo-rewrite视为删除私人数据（例如：从提交消息中省略旧的提交ID）
##### --massive-non-file-objects-sized-up-to `<size>`
increase memory usage to handle over-size Commits, Tags, and Trees that are up to X in size (eg '10M')<br/>
增加内存使用量以处理尺寸达到X的超大尺寸Commit，标签和树（例如'10M'）
##### `<repo>`      file path for Git repository to clean：Git仓库清理的文件路径