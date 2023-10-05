# 使用代理

## 问题
项目中用了代理处理跨域问题，部署到vercel上404

## 解决
### vercel.json中配置
```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "https://your-backend-api.com/api/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

在这个示例中，我们使用了 rewrites 配置来代理转发请求：

- "source": "/api/(.*)"：这个规则会匹配以 /api/ 开头的路径。

- "destination": "https://your-backend-api.com/api/$1"：这个配置将把匹配的请求转发到你的后端 API 地址。$1 表示匹配的路径的捕获组。

这样，当你的前端项目发起以 /api/ 开头的请求时，Vercel 将会将这些请求转发到你的后端服务器。

同时，我们还添加了一个默认的重写规则：

- "source": "/(.*)"：这个规则将匹配所有路径。

- "destination": "/index.html"：这个配置将会将所有的请求重写为 index.html，以确保单页应用 (SPA) 的路由正常工作。
