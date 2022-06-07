# 🚀git笔记
<!-- TOC -->

- [🚀git笔记](#git笔记)
  - [1. 配置用户名和邮箱(不做登录验证,信息记录,一台电脑就用一次)](#1-配置用户名和邮箱不做登录验证信息记录一台电脑就用一次)
  - [2. 初始化Git仓库(在项目文件夹中打开命令行,创建出来的是隐藏文件夹,一个项目用一次)](#2-初始化git仓库在项目文件夹中打开命令行创建出来的是隐藏文件夹一个项目用一次)
    - [2.1. 查看项目文件状态(非必须命令)](#21-查看项目文件状态非必须命令)
    - [2.2. 将工作区文件提交到暂存区(🐴每次提交都要用,第一步)](#22-将工作区文件提交到暂存区每次提交都要用第一步)
    - [2.3. 将暂存区文件提交到Git仓库(🐴每次提交都要用,第二步)](#23-将暂存区文件提交到git仓库每次提交都要用第二步)
  - [3. 回退版本](#3-回退版本)
    - [3.1. 查看提交记录(查看提交id)](#31-查看提交记录查看提交id)
    - [3.2. 回退到指定版本](#32-回退到指定版本)
  - [4. 其他命令](#4-其他命令)
  - [5. gitignore的使用](#5-gitignore的使用)
  - [6. 远程仓库](#6-远程仓库)
  - [7. 分支管理](#7-分支管理)
    - [7.1. 创建与合并分支](#71-创建与合并分支)
    - [7.2. 解决冲突](#72-解决冲突)
    - [7.3. 分支管理策略](#73-分支管理策略)
    - [7.4. BUG分支](#74-bug分支)
    - [7.5. feature 分支](#75-feature-分支)
    - [7.6. 多人协作](#76-多人协作)
    - [7.7. Rebase](#77-rebase)
  - [8. 标签管理](#8-标签管理)
    - [8.1. 创建标签](#81-创建标签)
    - [8.2. 操作标签](#82-操作标签)

<!-- /TOC -->

## 1. 配置用户名和邮箱(不做登录验证,信息记录,一台电脑就用一次)

```shell
git config --global user.name "自己的用户名"
git config --global user.email "自己的邮箱"
```

## 2. 初始化Git仓库(在项目文件夹中打开命令行,创建出来的是隐藏文件夹,一个项目用一次)

```shell
git init
```

### 2.1. 查看项目文件状态(非必须命令)

```shell
git status
# Untracked file 未跟踪,新建文件
```

### 2.2. 将工作区文件提交到暂存区(🐴每次提交都要用,第一步)

```shell
# 将单个文件夹提交到暂存区
git add 文件名
# 将所有文件提交到暂存区
git add .
```

### 2.3. 将暂存区文件提交到Git仓库(🐴每次提交都要用,第二步)

```shell
git commit -m "本次提交的备注信息"
```

## 3. 回退版本

### 3.1. 查看提交记录(查看提交id)

```shell
# 显示详细信息
git log
# 只显示一行
git log --pretty=oneline
```

### 3.2. 回退到指定版本

```shell
git reset --hard 提交id
```

## 4. 其他命令

```shell
# 取消对文件的修改
git checkout -- 文件名
# 现在有新的方法
git restore 文件名
# 将暂存区的文件撤回到工作区
git reset HEAD 文件名
# 现在有新的方法
git restore --staged 文件名
# 将文件从Git仓库和工作区(文件夹)中同时删除,并且暂存区有删除记录,删除后还要commit提交一次
git rm -f 文件名
# 将文件从Git仓库中移除,工作区中仍然保留文件,没有删除记录,文件变成未追踪的文件状态
git rm --cached 文件名
```

## 5. gitignore的使用

## 6. 远程仓库

```shell
# 把本地main分支的最新修改推送至GitHub
git push -u origin master
# 克隆一个本地库
$ git clone git@github.com:HawkWang2021/gitskills.git
```

## 7. 分支管理

### 7.1. 创建与合并分支

```shell
# 查看分支：
git branch

# 创建分支：
git branch <name>

# 切换分支：
git checkout <name>或者git switch <name>

# 创建+切换分支：
git checkout -b <name>或者git switch -c <name>

# 合并某分支到当前分支：
git merge <name>

# 删除分支：
git branch -d <name>
# 移动分支,直接使用 -f 选项让分支指向另一个提交
git branch -f main HEAD~3
```

### 7.2. 解决冲突

当`Git`无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。

解决冲突就是把`Git`合并失败的文件手动编辑为我们希望的内容，再提交。

用`git log --graph`命令可以看到分支合并图。

```shell
git log --graph --pretty=oneline --abbrev-commit
```

### 7.3. 分支管理策略

合并分支时，加上`--no-ff`参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而`fast forward`合并就看不出来曾经做过合并。

### 7.4. BUG分支

修复`bug`时，我们会通过创建新的`bug`分支进行修复，然后合并，最后删除；
当手头工作没有完成时，先把工作现场`git stash`一下，然后去修复`bug`，修复后，再`git stash pop`，回到工作现场；
在`master`分支上修复的`bug`，想要合并到当前`dev`分支，可以用`git cherry-pick <commit>`命令，把`bug`提交的修改“复制”到当前分支，避免重复劳动。

### 7.5. feature 分支

开发一个新`feature`，最好新建一个分支；
如果要丢弃一个没有被合并过的分支，可以通过`git branch -D <name>`强行删除。

### 7.6. 多人协作

多人协作的工作模式通常是这样：

1. 首先，可以试图用git push origin <branch-name>推送自己的修改；

2. 如果推送失败，则因为远程分支比你的本地更新，需要先用git pull试图合并；

3. 如果合并有冲突，则解决冲突，并在本地提交；

4. 没有冲突或者解决掉冲突后，再用git push origin <branch-name>推送就能成功！

5. 如果git pull提示no tracking information，则说明本地分支和远程分支的链接关系没有创建，用命令git branch --set-upstream-to <branch-name> origin/<branch-name>。

**小结**:

- 查看远程库信息，使用`git remote -v`；

- 本地新建的分支如果不推送到远程，对其他人就是不可见的；

- 从本地推送分支，使用`git push origin branch-name`，如果推送失败，先用`git pull`抓取远程的新提交；给远程分支设置别的名字`git push -u origin 本地分支名:远程分支名`

- 在本地创建和远程分支对应的分支，使用`git checkout -b branch-name origin/branch-name`，本地和远程分支的名称最好一致；

- 建立本地分支和远程分支的关联，使用`git branch --set-upstream branch-name origin/branch-name`；

- 从远程抓取分支，使用`git pull`，如果有冲突，要先处理冲突。

### 7.7. Rebase

- `rebase`操作可以把本地未`push`的分叉提交历史整理成直线；

- `rebase`的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。

## 8. 标签管理

### 8.1. 创建标签

- 命令`git tag <tagname>`用于新建一个标签，默认为`HEAD`，也可以指定一个`commit id`；

- 命令`git tag -a <tagname> -m "blablabla..."`可以指定标签信息；

- 命令`git tag`可以查看所有标签。

### 8.2. 操作标签

- 命令`git push origin <tagname>`可以推送一个本地标签；

- 命令`git push origin --tags`可以推送全部未推送过的本地标签；

- 命令`git tag -d <tagname>`可以删除一个本地标签；

- 命令`git push origin :refs/tags/<tagname>`可以删除一个远程标签。
