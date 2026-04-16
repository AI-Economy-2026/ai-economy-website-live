# Content Layer — AI Agent Editing Guide

这个目录是所有页面内容的唯一来源。

**AI agent 应该主要改这个目录，不要直接改 `components/` 或 `app/` 里的组件。**

---

## 目录结构

```
content/
├── homepage.ts          首页内容（hero、cards、stats、approach、founder 等）
├── products.ts          所有产品/服务的核心数据（名称、描述、features、FAQ）
├── site.ts              全站配置（导航、页脚链接、社媒链接、版权）
├── legal.ts             隐私政策和使用条款内容
├── products/
│   ├── priority-ai.ts   Priority AI 页面专属文案（pain points、modules、matrix 等）
│   └── ai-consultancy.ts AI Consultancy 页面专属文案（服务项、phases、testimonial 等）
└── seo/
    ├── global.ts        全站默认 metadata（siteName、siteUrl、默认 OG 图）
    ├── organization-schema.ts  Organization JSON-LD 数据
    └── service-faqs.ts  FAQ 数据（供后续扩展）
```

---

## AI Agent 工作规则

### 允许直接改的文件

- `content/` 下所有 `.ts` 文件
- `public/llms.txt`
- `public/llms-full.txt`
- `app/robots.ts`
- `app/sitemap.ts`

### 需要人工 review 的改动

- `components/` 目录下的任何组件
- `app/layout.tsx`
- `app/*/page.tsx` 路由文件
- `lib/schema.ts`
- 任何新增路由
- `vercel.json`
- `.github/workflows/ci.yml`

---

## 改动示例

### 修改首页文案

编辑 `content/homepage.ts`，找到对应 section 的字段直接改。

### 修改产品描述或 FAQ

编辑 `content/products.ts`，找到对应 `id` 的产品对象。

### 修改 Priority AI 页面的模块介绍

编辑 `content/products/priority-ai.ts`。

### 修改 AI Consultancy 页面的 engagement phases

编辑 `content/products/ai-consultancy.ts`。

### 修改导航链接或社媒链接

编辑 `content/site.ts`。

### 修改全站默认 OG 图或站点描述

编辑 `content/seo/global.ts`。

---

## 每次 AI Agent PR 必须说明

- 改了哪些内容文件
- 影响哪些页面
- 是否影响 metadata 或 canonical
- 是否影响 schema
- 是否新增 URL（需要同步更新 sitemap.ts）
- `npm run build` 是否通过
