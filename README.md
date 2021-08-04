# dashingdog-blog-nuxt
[![Build Status](https://travis-ci.com/dashingdog/dashingdog-blog-nuxt.svg?branch=master)](https://travis-ci.com/dashingdog/dashingdog-blog-nuxt)

> 感谢[smile-blog-nuxt](https://github.com/smileShirmy/smile-blog-nuxt)提供非常好看的博客模板，由于作者两年未维护，本项目基于[smile-blog-nuxt](https://github.com/smileShirmy/smile-blog-nuxt)升级改造。

博客地址:[https://www.dashingdog.cn](https://www.dashingdog.cn)
## 项目介绍
blog客户端使用nuxt框架开发

dashingdog-blog需要安装以下三个系统配合使用：
### dashingdog-blog-nuxt（客户端）
代码仓库：[https://github.com/dashingdog/dashingdog-blog-nuxt](https://github.com/dashingdog/dashingdog-blog-nuxt)
### dashingdog-blog-admin（管理系统）
代码仓库：[https://github.com/dashingdog/dashingdog-blog-admin](https://github.com/dashingdog/dashingdog-blog-admin)
### dashingdog-blog-server（服务端）
 代码仓库：[https://github.com/dashingdog/dashingdog-blog-server](https://github.com/dashingdog/dashingdog-blog-server)
## 项目启动
1. fork项目仓库到自己的代码仓库
2. 克隆项目 `git clone 你的仓库地址`
3. 安装依赖 `npm install`
4. `npm run dev`

## 项目部署
1. 项目部署使用`pm2`，在服务器上先安装`npm install -g pm2 `(当你已安装了Node)
2. 安装依赖 `npm install`
3. 编译代码(SSR每次更新代码需要重新render) `npm run build`
4. 启动代码 `npm run start`

如果需要使用持续集成可以参考[Travis CI部署实践](https://www.dashingdog.cn/article/2)，根据需要修改`.travis.yml`和`script/deploy.sh`来配置自己的持续集成