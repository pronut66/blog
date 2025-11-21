@echo off
echo Starting deployment...
echo Current directory: %CD%
hexo clean
hexo generate
git add .
git commit -m "Update blog from admin - %date% %time%"
git push origin main
npx wrangler pages deploy public --project-name sishier-blog --commit-message "Admin deploy - %date% %time%"
echo Deployment completed!
