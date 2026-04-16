# AI 管理加固计划

这份文档的目标是把当前的 `ai-economy-live-site` 仓库，从“已经能上线的 Next.js 站点”，逐步升级成一个**更适合长期由 AI agent 管理、审计、发布和持续做 SEO / GEO 的生产仓库**。

当前仓库整体方向是对的：

- `Next.js App Router`
- 目录结构干净
- 没有把 `.next` / `node_modules` / `.vercel` 提交进仓库
- 已有 `robots.ts` / `sitemap.ts` / `llms.txt` / `schema.ts`

但它还不是最终形态。最大的限制是：

- 内容还耦合在代码里
- 构建对外部字体依赖敏感
- 缺少 CI 质量门禁
- 还没有真正为 AI agent 批量管理内容做结构准备

---

## 一、当前问题总结

### 1. 内容与组件耦合过深

现在首页文案、统计数据、roadmap、CTA 等内容直接写在：

- `components/homepage.tsx`

产品和服务页内容直接写在：

- `lib/product-details.ts`

这会带来几个问题：

- AI agent 每次改文案都要改 TS / TSX 文件
- PR diff 会混合“内容改动”和“组件逻辑改动”
- 后续做批量 GEO / SEO 页面时，不方便程序化生成
- 非技术同事不容易 review

### 2. 字体加载仍然依赖外部服务

当前字体策略在正常联网环境下没有问题，但在以下场景不够稳：

- 本地网络受限
- 离线审查环境
- 更严格的 CI 环境

备注：当前 staging 仓库保留现有字体方案，因为这是明确的视觉要求，不在这一轮 hardening 中改动。

### 3. 缺少基础 CI

当前仓库至少从外部结构看，还没有完整自动门禁。

如果未来要让 AI agent 高频发 PR，最低也应该有：

- lint
- typecheck
- build

### 4. 还没有真正的内容层

如果未来你要：

- 频繁更新首页文案
- 批量生成产品页 / 服务页 / GEO 页
- 做 redirect 审计
- 做 schema 审计
- 做 metadata 审计

那你需要一个清晰的“内容源”。

---

## 二、目标状态

我建议你把这个仓库升级到下面这个结构目标：

```text
app/                 路由与页面壳
components/          纯展示组件
content/             所有页面内容源
content/home/        首页内容
content/services/    服务页内容
content/products/    产品页内容
content/seo/         SEO/GEO 数据、FAQ、schema 片段
lib/                 内容加载、schema 生成、site config
public/              图片、视频、静态资源
scripts/             内容校验、redirect 校验、schema 校验
.github/workflows/   CI
```

核心原则是：

- `components/` 只负责渲染
- `content/` 负责内容
- `lib/` 负责把内容转成页面 metadata、schema、路由数据
- AI agent 主要改 `content/`，而不是直接改大段 TSX

---

## 三、推荐改造顺序

不要一次性大改。按下面顺序做最稳。

### Phase 1：先做最小加固

先完成这三件事：

1. 保留现有字体方案，不改视觉
2. 增加 `typecheck` script
3. 增加最基础 CI

这一步的目的不是改架构，而是先让：

- build 更稳
- PR 更安全
- AI agent 发 PR 时有最低自动检查

建议新增 scripts：

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "typecheck": "tsc --noEmit"
}
```

CI 最低应跑：

- `npm install`
- `npm run lint`
- `npm run typecheck`
- `npm run build`

### Phase 2：抽离内容层

这是最关键的一步。

优先从下面两个文件开始拆：

- `components/homepage.tsx`
- `lib/product-details.ts`

目标不是马上上 CMS，而是先把内容从代码中拆开。

推荐做法：

- 首页内容改成 `content/home/homepage.ts`
- 服务页改成 `content/services/*.ts`
- 产品页改成 `content/products/*.ts`

例如：

```text
content/
  home/
    homepage.ts
  services/
    priority-ai.ts
    ai-consultancy.ts
    geo-audit.ts
  products/
    agent-alice.ts
    gatha-ai.ts
    sarah-speaks.ts
```

每个内容文件只放数据：

- title
- description
- hero
- sections
- faq
- schema inputs
- CTA

这样做的好处：

- AI agent 改文案时只改内容文件
- 页面组件不需要每次跟着改
- diff 更干净
- 更容易做批量生成和审计

### Phase 3：把内容层升级成 MDX 或 JSON 驱动

当 Phase 2 完成后，你就可以决定：

- 继续用 `ts/json` 内容文件
- 或切换到 `MDX`

我的建议：

- 核心商业页可以先继续用 `ts/json`
- FAQ、文章、资源、GEO 页面更适合 `MDX`

推荐长期结构：

```text
content/
  home/
    homepage.json
  services/
    priority-ai.json
  products/
    agent-alice.json
  geo/
    chatgpt-visibility.mdx
    ai-search-audit.mdx
  faq/
    ai-readiness.mdx
```

这样 AI agent 可以：

- 新建内容文件
- 更新 metadata
- 自动生成页面
- 批量做 GEO/SEO 页面

### Phase 4：建立可审计的 AI 工作流

等内容层稳定后，再把 AI agent 工作流做完整。

建议规则：

- AI agent 默认只改 `content/`、`lib/schema.ts`、metadata 相关文件
- UI 结构改动必须单独 PR
- redirect 改动必须单独 PR
- 每次 AI agent PR 都必须附：
  - 改动摘要
  - 影响页面列表
  - SEO/GEO 影响说明
  - build 状态

---

## 四、具体改造建议

### A. 字体策略

当前状态：

- 保留现有字体，不做视觉改动

后续可选：

- 如果以后进入更严格的离线构建环境，再单独做本地字体迁移
- 这应该作为独立 PR 处理，不和内容层 hardening 混在一起

### 当前完成状态

这轮 hardening 已完成：

- 首页内容抽到 `src/content/homepage.ts`
- 产品内容抽到 `src/content/products.ts`
- 站点级配置抽到 `src/content/site.ts`
- 法律页内容抽到 `src/content/legal.ts`
- 首页拆成更小的内容驱动组件
- Footer / Navbar 改为读取内容层
- 增加 `typecheck`
- 增加 `check:content`
- 增加基础 CI
- 增加 `src/content/README.md` 作为内容编辑说明

### B. 内容模型统一

当前 `productDetails` 的结构已经是个不错的起点。

建议统一出以下字段模型：

- `slug`
- `type`
- `seo`
- `hero`
- `overview`
- `sections`
- `features`
- `faq`
- `cta`
- `schema`

例如：

```ts
type PageContent = {
  slug: string;
  type: 'service' | 'product' | 'geo';
  seo: {
    title: string;
    description: string;
    canonical?: string;
  };
  hero: {
    eyebrow?: string;
    headline: string;
    subheadline: string;
    image?: string;
  };
  sections: {
    id: string;
    heading: string;
    body: string[];
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
  cta?: {
    label: string;
    href: string;
  };
};
```

这样后面无论是手写、AI 生成、还是接 CMS，都更稳定。

### C. 首页拆分

现在首页组件过长。

建议拆成：

- `components/home/hero.tsx`
- `components/home/featured-services.tsx`
- `components/home/founder-section.tsx`
- `components/home/stats-section.tsx`
- `components/home/roadmap-section.tsx`
- `components/home/geo-section.tsx`
- `components/home/process-section.tsx`
- `components/home/cta-section.tsx`

然后在 `components/homepage.tsx` 里只做组合。

内容则全部来自：

- `content/home/homepage.ts`

这样有利于：

- UI 维护
- 内容审计
- AI agent 改单个 section

### D. 增加 redirect 管理文件

未来正式替换 WordPress 时，建议把旧 URL 重定向规则独立成一个文件。

例如：

```text
content/redirects/wordpress-redirects.ts
```

或

```text
redirects.csv
```

这样后面你可以：

- 单独 review redirect
- 单独让 AI agent 审计旧页面
- 更方便比对 WordPress URL 与新站 URL

### E. 增加 SEO / GEO 内容配置层

建议增加：

```text
content/seo/
  global.ts
  service-faqs.ts
  organization-schema.ts
```

这样可以把：

- 全站默认 metadata
- FAQ 数据
- schema 默认值
- GEO 文案块

和组件分离开。

---

## 五、AI agent 长期管理的推荐规则

如果你的目标是以后长期让 AI agent 接管更新，建议设这些规则。

### 允许 AI agent 直接改的内容

- `content/`
- `README.md`
- `lib/schema.ts`
- 页面 metadata
- `robots.ts`
- `sitemap.ts`
- `llms.txt`

### 不建议 AI agent 默认直接改的内容

- 全局布局
- 核心导航逻辑
- redirect 逻辑
- 外部脚本集成
- analytics
- 部署配置

这些建议：

- 单独 PR
- 人工 review

### 每次 AI agent PR 必须包含

- 改了哪些页面
- 改了哪些内容文件
- 是否影响 metadata
- 是否影响 schema
- 是否新增 URL
- 是否需要 redirect
- `npm run build` 是否通过

---

## 六、CI 最低标准

建议在 `.github/workflows/ci.yml` 里至少加一个最基础流程：

### 必跑检查

- install
- lint
- typecheck
- build

### 后续可以加的检查

- 内容 schema 校验
- broken link check
- sitemap route check
- JSON-LD shape check

如果以后 AI agent 会经常生成新页面，这些检查会非常有价值。

---

## 七、正式适合长期 AI 管理的判断标准

当下面这些条件都满足时，这个仓库才算真正进入“AI-friendly production repo”状态：

- 页面内容大部分在 `content/`，不是直接硬编码在组件里
- 组件主要只做渲染
- metadata 和 schema 有统一生成逻辑
- redirect 有单独管理文件
- 字体和构建不依赖不稳定外网资源
- CI 能自动挡住明显错误
- README 和上线文档保持最新
- AI agent 改动范围有清晰边界

---

## 八、推荐你下一步先做什么

如果只选最有价值的 3 件事，我建议按这个顺序：

1. 把 `homepage` 和 `product-details` 的内容抽离到 `content/`
2. 把 Google Font 改成本地字体
3. 增加 `typecheck + build` 的 GitHub Actions CI

这三件做完后，你这个仓库就会从“现在可上线”升级到“更适合长期由 AI agent 维护”。

---

## 九、结论

当前仓库不是坏结构，也不是不健康。  
它已经是一个可以上线、可以继续维护的 `Next.js` 正式站仓库。

但如果你的目标是：

- 长期做 AI 自动化内容运营
- 让 AI agent 稳定发 PR
- 更好做 SEO / GEO audit
- 更好做版本追踪和内容 review

那你下一阶段一定要把它从“代码中心”升级成“内容中心”。

**一句话总结：**

现在这套可以上线；  
下一步要做的是把它变成一个“内容与展示分离、构建稳定、CI 完整”的 AI-first 网站仓库。
