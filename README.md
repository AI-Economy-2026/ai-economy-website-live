# AI Economy Live Site

`AI Economy` 的正式站 `Next.js` 版本代码仓库。

这个仓库用于未来替换当前的 WordPress 前台，但在正式切换域名之前，**不会影响当前 WordPress live site 或后台**。

## 当前用途

- 作为未来 `aieconomy.ai` 的正式前端代码库
- 可连接新的 `Vercel` 项目进行部署
- 可先绑定 preview / staging 域名测试
- 与当前 WordPress 并行运行，直到正式切域名

## 技术栈

- `Next.js 15`
- `React 19`
- `TypeScript`
- `Tailwind CSS`

## 项目结构

```text
app/          App Router 页面与 metadata 路由
components/   页面组件与导航、页脚等 UI 组件
lib/          站点配置、内容数据、schema 工具
public/       图片、favicon、llms.txt 等静态资源
```

## 主要页面

- `/`
- `/services`
- `/services/[slug]`
- `/products`
- `/products/[slug]`
- `/tools`
- `/privacy`
- `/terms`
- `/robots.txt`
- `/sitemap.xml`

## 本地开发

### 1. 安装依赖

```bash
npm install
```

### 2. 启动本地开发环境

```bash
npm run dev
```

默认本地地址通常是：

```text
http://localhost:3000
```

### 3. 生产构建测试

在准备提交、部署到 Vercel、或让其他人 review 之前，先跑一次 production build：

```bash
npm run build
```

如果 build 成功，说明这份代码至少满足基本部署要求。

### 4. 本地启动 production 模式

先 build，再启动：

```bash
npm run build
npm run start
```

## 上线前最低检查项

部署到 Vercel 之前，至少检查这些：

- 首页是否正常加载
- 导航、页脚、按钮、社媒链接是否可用
- `services` / `products` / `tools` 页面是否能打开
- `privacy` / `terms` 是否可访问
- `/robots.txt` 是否正常
- `/sitemap.xml` 是否正常
- 图片是否缺失
- 手机端和桌面端样式是否正常
- metadata 是否明显缺失

## Vercel 部署

推荐做法：

1. 将本仓库连接到一个新的 `Vercel` 项目
2. 先部署到 `vercel.app` 临时域名
3. 先做 review 和验收
4. 确认无误后，再绑定正式域名

`vercel.json` 当前只做了最基础的框架声明：

```json
{
  "framework": "nextjs"
}
```

通常不需要额外修改。

## WordPress 共存说明

当前 WordPress 站点与后台可以继续使用，直到你完成下面两件事：

1. 在 `Vercel` 项目中绑定正式域名
2. 在 `GoDaddy` 中把 `aieconomy.ai` 的 DNS 指向新的 `Vercel` 项目

在此之前：

- `aieconomy.ai` 仍然可以继续由 WordPress 提供服务
- WordPress admin 仍然可以继续登录和使用
- 这个 Next.js 项目可以独立开发、测试、预览

## GoDaddy / 域名切换原则

正式上线时：

1. 先在 `Vercel` 添加正式域名
2. 按 `Vercel` 提示去 `GoDaddy` 修改 DNS
3. 确认 `aieconomy.ai` 已指向新站
4. 保留旧 WordPress hosting 一段时间，不要立刻删除

建议：

- `GoDaddy` 继续只负责域名和 DNS
- `Vercel` 负责应用部署

## SEO / GEO 相关文件

当前仓库已包含基础技术文件：

- `app/robots.ts`
- `app/sitemap.ts`
- `public/llms.txt`
- `lib/schema.ts`

正式上线前仍建议继续检查：

- 页面级 title / description
- canonical
- Open Graph / Twitter metadata
- JSON-LD schema
- 旧 WordPress URL 到新站 URL 的 301 策略

## 维护建议

- 所有正式改动先在分支或 preview 环境验证
- 重要改动前先跑一次 `npm run build`
- 不要提交以下目录：
  - `.next/`
  - `node_modules/`
  - `.vercel/`

## 备注

如果后续需要保留部分 WordPress 页面，建议优先评估：

- 是否迁移到 Next.js
- 是否放到子域名继续由 WordPress 托管
- 是否需要做 301 重定向

不要长期让主域名混跑两套前端，后期维护和 AI agent 审计会变复杂。
