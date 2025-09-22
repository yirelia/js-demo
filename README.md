# 算法demo 示例

# 运行
1. 安装http-server
```bash
 npm i http-server -g
```
2. 运行server服务
```bash
http-server
```

#大文件上传
```BASH
# 0) 安装 Git LFS（只需一次）
# macOS:  brew install git-lfs
# Ubuntu: sudo apt-get install git-lfs
# Windows: choco install git-lfs  或者  winget install GitHub.GitLFS
git lfs install

# 1) 在仓库根目录启用 LFS 追踪 .obj
git lfs track "*.obj"
git add .gitattributes
git commit -m "chore: track *.obj with Git LFS"

# 2) 用 LFS 迁移历史（把历史里所有 *.obj 改为 LFS 指针）
#   只改当前分支（比如 feat/train）：
git lfs migrate import --include="*.obj" --include-ref=refs/heads/feat/train

#   如果你要对整个仓库所有分支都改，用 --everything（谨慎，需全体成员知情）
# git lfs migrate import --include="*.obj" --everything

# 3) 清理本地无用对象
git gc --prune=now
git repack -Ad

# 4) 强推（用 --force-with-lease 更安全）
git push --force-with-lease origin feat/train
```
# 算法demo 示例

# 运行
1. 安装http-server
```bash
 npm i http-server -g
```
2. 运行server服务
```bash
http-server
```