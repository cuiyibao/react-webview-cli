# react-webview-xb

## 项目简介
`基于create-react-app搭建
`可使用css预处理less
`多入口、多出口项目

## 项目目录
```
.
├── config
│   ├── webpack.config.dev.js    -- 测试环境
│   └── webpack.config.prod.js   -- 生产环境
│
├── public                       -- 模板
├── scripts                      -- 脚本
├── server                       -- node服务
├── src
│   ├── app                      -- App框
│   ├── components               -- 公共组件
│   ├── config                   -- 全局配置
│   ├── module                   -- 页面
│   ├── network                  -- 接口
│   ├── utils                    -- 全局工具
│   └── index.js                 -- 导航
│
├── .gitignore
├── package.json                 -- npm包配置文件
├── README.md                    -- 配置文件
└── yarn.lock                    -- yarn锁版本文件

```

## 依赖包

```
├── dependencies                 -- 生产环境依赖项
│   │
│   ├── antd-mobile              -- antd移动端ui库
│   ├── axios                    -- 基于Promise请求
│   ├── express                  -- 小型web服务
│   └── mockjs                   -- mock模拟数据
│
└── devDependencies              -- 开发环境依赖项
    │
    ├── less                     -- 打包less依赖包
    └── less-loader

```

## 作者： xb