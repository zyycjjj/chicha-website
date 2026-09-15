# ChiCha 独立部署说明

所有页面图片都已提交为本地二进制 PNG/JPEG 文件。生产构建不请求外部资产服务。

## 第一次使用

安装依赖并构建：

```bash
npm install
npm run build
```

## 资源独立性

独立部署时建议保留本地图片，而不是继续请求 `chicha-stable-path.lovable.app/__l5e/...`：

- 不依赖 Lovable 项目是否继续发布；
- 不受 Lovable URL、权限或资源生命周期变化影响；
- 更容易做 CDN、缓存和图片压缩；
- 官方域名加载资源时不会依赖第三方域名；
- 方便后续迁移服务器或 Cloudflare。

不要将 `*.asset.json` 元数据或外部资产 URL 重新引入生产目录。
