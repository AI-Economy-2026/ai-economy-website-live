# AI Economy Live Site

`AI Economy` 的正式站 `Next.js` 版本代码仓库。

这个仓库用于未来替换当前的 WordPress 前台，但在正式切换域名之前，**不会影响当前 WordPress live site 或后台**。

## 当前用途

- 作为未来 `aieconomy.ai` 的正式前端代码库
- 可连接新的 `Vercel` 项目进行部署
- 可先绑定 preview / staging 域名测试
- 与当前 WordPress 并行运行，直到正式切域名

## 技术栈

- `Next.js 15` (App Router + React Server Components)
- `React 18`
- `TypeScript`
- `Tailwind CSS 3`
- `Radix UI` + shadcn/ui 组件库
- `Framer Motion`

## 项目结构

```text
app/          App Router 页面、layout、robots.ts、sitemap.ts
components/   纯展示组件（不含业务内容）
content/      所有页面内容源 — AI agent 主要改这里
lib/          schema 生成、SEO 工具、utils
public/       图片、favicon、llms.txt 等静态资源
scripts/      内容校验脚本
```

> **内容层说明：** 参见 `content/README.md`

## 实际路由

- `/` — 首页
- `/product/priority-ai` — Priority AI
- `/product/agent-alice` — Ask Sarah (Agent Alice)
- `/product/gatha-ai` — Gatha AI
- `/product/sarah-speaks` — Sarah Speaks AI
- `/product/ai-consultancy` — AI Consultancy
- `/product/geo-audit` — AI Visibility Ranking
- `/product/ai-toolkit` — AI Toolkit
- `/product/ai-toolkit/tools` — All Tools 目录
- `/product/ai-toolkit/category/[category]` — 工具分类页
- `/privacy` — 隐私政策
- `/terms` — 使用条款
- `/robots.txt` — 自动生成
- `/sitemap.xml` — 自动生成（从产品数据）

## 本地开发

### 1. 安装依赖

```bash
npm install
```

### 2. 启动本地开发环境

```bash
npm run dev
```

默认本地地址：`http://localhost:3000`

### 3. 生产构建测试

```bash
npm run build
```

### 4. 其他检查

```bash
npm run typecheck       # TypeScript 类型检查
npm run check:content   # 内容层结构校验
npm run lint            # ESLint
```

## 上线前最低检查项

- 首页是否正常加载
- 导航、页脚、按钮、社媒链接是否可用
- 所有 `/product/*` 页面是否可打开
- `privacy` / `terms` 是否可访问
- `/robots.txt` 是否正常
- `/sitemap.xml` 是否正常
- 图片是否缺失
- 手机端和桌面端样式是否正常
- metadata / canonical 是否明显缺失

## Vercel 部署

1. 将本仓库连接到一个新的 `Vercel` 项目
2. 先部署到 `vercel.app` 临时域名
3. 先做 review 和验收
4. 确认无误后，再绑定正式域名

`vercel.json` 当前配置：

```json
{
  "framework": "nextjs"
}
```

## WordPress 共存说明

当前 WordPress 站点与后台可以继续使用，直到完成：

1. 在 `Vercel` 项目中绑定正式域名
2. 在 `GoDaddy` 中把 `aieconomy.ai` 的 DNS 指向新的 `Vercel` 项目

## SEO / GEO 相关文件

- `app/robots.ts` — robots.txt 自动生成
- `app/sitemap.ts` — sitemap.xml 自动生成
- `public/llms.txt` — AI 爬虫可读说明
- `lib/schema.ts` — JSON-LD schema 生成
- `content/seo/global.ts` — 全站默认 metadata
- `content/seo/organization-schema.ts` — Organization JSON-LD

## 维护建议

- 所有正式改动先在分支或 preview 环境验证
- 重要改动前先跑一次 `npm run build`
- 不要提交以下目录：`.next/`、`node_modules/`、`.vercel/`
- AI agent 改动范围见 `content/README.md`
