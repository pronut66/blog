---
title: Hexo 博客搭建完整指南
date: 2025-11-13 12:30:00
tags:
  - Hexo
  - 博客
  - 教程
categories:
  - 技术教程
---

# Hexo 博客搭建完整指南

本文将详细介绍如何使用 Hexo 搭建个人博客，并配置 Qexo 管理系统。

## 环境准备

### 安装 Node.js

首先需要安装 Node.js（建议版本 16+）：

```bash
# Windows 用户可以直接从官网下载安装包
# macOS 用户可以使用 Homebrew
brew install node

# Linux 用户可以使用包管理器
sudo apt install nodejs npm
```

### 安装 Hexo CLI

```bash
npm install -g hexo-cli
```

## 初始化博客

### 创建博客项目

```bash
hexo init my-blog
cd my-blog
npm install
```

### 安装主题

这里我们使用 Fluid 主题：

```bash
git clone https://github.com/fluid-dev/hexo-theme-fluid.git themes/fluid
```

## 配置 Qexo 管理

### 克隆 Qexo 项目

```bash
git clone https://github.com/am-abudu/Qexo.git
cd Qexo
```

### 安装依赖

```bash
pip install -r requirements.txt
```

### 配置数据库

```python
# 编辑 configs.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': Path(__file__).parent / 'db' / 'db.sqlite3',
    }
}
```

## 部署到 Cloudflare Pages

### 准备工作

1. 创建 GitHub 仓库
2. 推送代码到仓库
3. 注册 Cloudflare 账号

### 配置自动部署

在 `.github/workflows/deploy.yml` 中添加：

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: hexo generate
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: your-project-name
          directory: public
```

## 常见问题

### Q: 文章无法同步到 Qexo？

A: 确保文章文件放在 `source/_posts/` 目录下，并且格式正确。

### Q: 部署失败怎么办？

A: 检查 Cloudflare API Token 是否正确配置，以及 GitHub Actions 的权限。

### Q: 如何自定义主题？

A: 编辑 `themes/fluid/_config.yml` 文件，可以参考主题的官方文档。

## 结语

通过以上步骤，你就可以拥有一个功能完整的 Hexo 博客了。希望这篇教程对你有帮助！

---

*更多教程请关注我的博客*