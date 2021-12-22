// 添加所有文件到暂存区：
`git add .`
// 提交
`git commit -m "该节点的描述信息"`
// 拉取(本质就是fetch+merge，首先更新远程仓库所有状态到本地，随后再进行合并)
`git pull 远程分支名`
// 推送
`git push 远程分支名`

// 克隆远程仓库
`git clone 仓库地址`

// 创建新分支
`git branch 分支名`
// 切换分支
`git checkout 分支名`
// 创建并切换
`git checkout -b 分支名`
// 删除分支
`git branch -d 分支名`

// 分离(指向前一个节点)
`git checkout 分支名/HEAD^`
// 分离(指向前N个节点)
`git checkout 分支名~N`

// 合并(可以将某个分支或者某个节点的代码合并至当前分支)
`git merge 分支名/节点哈希值`
`git rebase 分支名/节点哈希值`

// 回退(回退N个提交)
`git reset HEAD~N`
