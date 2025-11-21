@echo off
echo Starting deployment...
echo Current directory: %CD%
hexo clean
hexo generate
git add .
git commit -m "Update blog from admin - %date% %time%"
git push origin main
echo Deployment completed!
