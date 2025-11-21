@echo off
echo Simple deploy started
hexo clean
hexo generate
git add .
git commit -m "Auto deploy from admin backend"
git push origin main
echo Deploy completed!
