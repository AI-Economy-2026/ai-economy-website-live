# AI Economy — Live Site

正式站代码仓库。基于 Next.js 15 App Router，部署在 Vercel，计划替换当前 WordPress 站点。

---

## 技术栈

| 层 | 技术 |
|---|---|
| 框架 | Next.js 15 (App Router + React Server Components) |
| 语言 | TypeScript + React 18 |
| 样式 | Tailwind CSS 3 |
| UI 组件 | Radix UI + shadcn/ui |
| 动画 | Framer Motion |
| 部署 | Vercel |
| CI | GitHub Actions (lint + typecheck + check:content + build) |

---

## 仓库结构

```
app/                    Next.js App Router 路由
  layout.tsx            根布局（Navbar、Footer、全站 metadata）
  page.tsx              首页
  robots.ts             robots.txt 自动生成
  sitemap.ts            sitemap.xml 自动从产品数据生成
  product/
    [id]/page.tsx       产品页（SSG，自动预渲染所有产品）
    ai-toolkit/         AI Toolkit 专属页面
  privacy/page.tsx
  terms/page.tsx

components/             纯展示组件，不含业务内容
  home/                 首页各 section 组件
  homepage/             首页辅助组件（NavSocialBar、ProductCard 等）
  layout/               Navbar、Header、Footer
  product/              产品页组件（每个产品一个文件）
  ui/                   shadcn/ui 基础组件库（50+）

content/                ⭐ 所有页面内容的唯一来源
  homepage.ts           首页内容
  products.ts           所有产品/服务数据
  site.ts               导航、页脚、社媒链接、版权
  legal.ts              隐私政策和使用条款
  products/
    priority-ai.ts      Priority AI 页面专属文案
    ai-consultancy.ts   AI Consultancy 页面专属文案
  seo/
    global.ts           全站默认 metadata 和 OG 图
    organization-schema.ts  Organization JSON-LD
    service-faqs.ts     FAQ 数据
  README.md             ← AI Agent 编辑说明（必读）

data/                   工具数据（AI Toolkit 用）
  products.ts           产品数据（含图片路径）
  toolkit-tools.ts      AI 工具目录数据

lib/
  schema.ts             JSON-LD 生成函数
  seo.ts                generateMetadata 辅助函数
  utils.ts              通用工具函数

public/
  images/               所有页面图片
  llms.txt              AI 爬虫可读说明
  llms-full.txt         详细版 llms.txt
  ai-economy-video.mp4  首页视频

scripts/                内容校验脚本（CI 自动跑）
```

---

## 实际页面路由

| 路由 | 页面 | 渲染方式 |
|---|---|---|
| `/` | 首页 | Static |
| `/product/priority-ai` | Priority AI | SSG |
| `/product/agent-alice` | Ask Sarah (Agent Alice) | SSG |
| `/product/gatha-ai` | Gatha AI | SSG |
| `/product/sarah-speaks` | Sarah Speaks AI | SSG |
| `/product/ai-consultancy` | AI Consultancy | SSG |
| `/product/geo-audit` | AI Visibility Ranking | SSG |
| `/product/ai-toolkit` | AI Toolkit 主页 | Static |
| `/product/ai-toolkit/tools` | 工具目录（全部） | Static |
| `/product/ai-toolkit/category/[category]` | 分类页 | Dynamic |
| `/privacy` | 隐私政策 | Static |
| `/terms` | 使用条款 | Static |
| `/robots.txt` | robots 规则 | Auto |
| `/sitemap.xml` | 站点地图 | Auto |

---

## 内容结构说明

### 改什么，改哪里

这个仓库采用"内容与展示分离"架构。**所有文案、数据、配置都在 `content/` 目录**，组件只负责渲染。

```
想改首页文案         → content/homepage.ts
想改产品描述/FAQ     → content/products.ts（找对应 id）
想改 Priority AI 页  → content/products/priority-ai.ts
想改 AI Consultancy  → content/products/ai-consultancy.ts
想改导航/社媒链接    → content/site.ts
想改隐私政策/条款    → content/legal.ts
想改全站默认 OG 图   → content/seo/global.ts
想改 AI 爬虫说明     → public/llms.txt
```

> 详细说明见 `content/README.md`

### 新增产品页

1. 在 `content/products.ts` 的 `products` 数组里加一条记录
2. 把对应图片放到 `public/images/`
3. `app/product/[id]/page.tsx` 会自动生成新页面
4. `app/sitemap.ts` 会自动把新页面加进 sitemap

### 新增专属内容的产品页

如果新产品页有大量专属文案（像 Priority AI 那样），额外在 `content/products/` 下新建一个 `.ts` 文件，然后在对应组件里 import。

---

## 本地开发

```bash
npm install
npm run dev          # http://localhost:3000
```

### 所有可用命令

```bash
npm run dev           # 本地开发
npm run build         # 生产构建
npm run start         # 本地跑 production build
npm run typecheck     # TypeScript 类型检查
npm run lint          # ESLint 检查
npm run check:content # 内容层结构校验
```

**提交前必跑：**

```bash
npm run build
```

---

## CI 自动检查

每个 PR 和每次 push to main 都会自动跑：

1. `typecheck` — TypeScript 无报错
2. `check:content` — 内容层结构校验
3. `lint` — ESLint 无 error
4. `build` — Next.js build 成功

---

## Vercel 部署

- 连接这个 repo 到 Vercel 项目
- 每个 PR 自动生成 preview URL
- merge to main 自动部署 production

`vercel.json` 配置：
```json
{ "framework": "nextjs" }
```

---

## AI Agent 工作流

这个仓库设计为由 AI agent 长期维护。操作规则见仓库根目录的 `ai-agent-workflow.md`。

### 快速参考

**AI 可以直接改（低风险）：**
- `content/` 下所有文件
- `public/llms.txt`
- `app/robots.ts` / `app/sitemap.ts`

**需要人工 review 才能改（中/高风险）：**
- `components/` 里的组件
- `app/layout.tsx` 和路由文件
- `lib/schema.ts`
- 新增路由
- `vercel.json`

### 标准流程

```
1. AI 接受任务
2. AI audit 相关页面和内容
3. AI 开新 branch（feat/xxx 或 fix/xxx）
4. AI 只改 content/（低风险）或提出结构改动供 review
5. AI 跑 npm run build 确认通过
6. AI 开 PR，写清楚影响范围和风险
7. Vercel 生成 preview URL
8. 人工看 preview → approve → merge
9. 自动部署 production
```

### PR 必须包含

- 改了哪些文件
- 影响哪些页面
- 是否影响 metadata / canonical / schema
- 是否新增 URL（需同步 sitemap）
- build 是否通过

---

## SEO / GEO 文件

| 文件 | 用途 |
|---|---|
| `app/robots.ts` | robots.txt（允许所有爬虫，指向 sitemap） |
| `app/sitemap.ts` | sitemap.xml（自动从产品数据生成） |
| `public/llms.txt` | AI 爬虫说明（ChatGPT、Perplexity 等） |
| `lib/schema.ts` | JSON-LD（Organization + Service + FAQ） |
| `content/seo/global.ts` | 全站默认 title / description / OG |
| `content/seo/organization-schema.ts` | 品牌实体数据 |

---

## 下一步规划

当前这套架构已经可以稳定运作。未来主要扩展方向：

- **Blog / Insights 系统** — 建 MDX 内容集合，支持 AI agent 批量生成和发布文章
- **GEO 专题页** — `content/geo/` + 对应路由，针对 AI 搜索引擎优化
- **比较页 / 词汇表** — 计划中的 SEO 内容扩展
- **Google Search Console 对接** — 获取真实搜索数据，驱动 audit

---

## WordPress 切换说明

上线步骤：

1. 在 Vercel 绑定 `aieconomy.ai` 域名
2. 在 GoDaddy 把 DNS 指向 Vercel
3. 确认新站正常后关闭 WordPress

在 DNS 切换之前，WordPress 仍然正常服务 `aieconomy.ai`，这个仓库可以独立开发和预览。
