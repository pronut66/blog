@echo off
echo Starting deployment...
hexo clean
hexo generate
git add .
git commit -m Update blog from admin
git push origin main
