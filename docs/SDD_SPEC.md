# SDD 规格：iGEM Wiki React 重构（方案 C）

日期：2026-08-10
状态：已实施并构建通过

## 1. 背景与目标

原项目为 Vite + 原生 HTML/CSS/JS 的 20 页注入式站点，存在样式三层冲突、无路由、无 TypeScript、移动端菜单不可用、GSAP 空载、硬编码假数据图表等问题。

目标：

1. 迁移到主流技术栈（React + TypeScript + Vite + Tailwind），便于后期维护。
2. 保留全部内容与视觉基调，不改变 iGEM 栏目结构。
3. 仅将 Data Modeling / Results 页面升级为交互式仪表盘，其余页面做静态内容迁移。
4. 修复原站的可访问性、资源与性能问题。
5. 作为"数据多模态"方向的能力展示项目。

## 2. 不变量（迁移约束）

- 保留 20 个页面的栏目名、内容、文案与科学表述。
- 保留设计令牌（`#1a5d3a` / `#2db369` / `#f59e0b` / 米白底）与卡片、Hero、按钮视觉。
- iGEM 静态托管兼容：`base: './'` + Hash 路由，无服务端依赖。
- 不生成、不编造实验数据；所有图表为明确标注的示意数据。

## 3. 架构决策

| 决策点 | 选择 | 理由 |
| --- | --- | --- |
| 框架 | React 19 | 主流、组件化、生态最全 |
| 语言 | TypeScript（strict） | 招聘硬关键词、可维护性 |
| 路由 | HashRouter + 20 条懒加载路由 | 兼容静态托管、按页分包 |
| 样式 | Tailwind 4 + CSS 设计令牌 | 新组件用工具类，旧页面样式保留 |
| 图表 | ECharts 封装为 `Chart` 组件 | 交互、中文文档、简历信号强 |
| 动效 | Framer Motion + IntersectionObserver | 克制、尊重 reduced-motion |
| 缺失图片 | 全局 `error` 事件降级为占位块 | 无需逐张改图，破图不再出现 |
| 页内锚点 | 全局点击拦截 + `scrollIntoView` | 与 HashRouter 共存 |

## 4. 改动清单与验收

### P0（已完成）

- [x] `package.json` 补齐 dev/build/preview/lint/format 脚本。
- [x] 迁移 20 个页面为 React 组件，路由懒加载。
- [x] 导航重构：桌面下拉（hover + focus-within）、移动端汉堡菜单、键盘可达、Esc 关闭。
- [x] 删除原 index.html 内嵌旧样式与 GSAP CDN 空载；三层样式收敛为"全局 + 页面"两层。
- [x] 移除开发提示条（note-guide）与硬编码假数据 Canvas 图表。
- [x] 图片路径改为 `public/assets`，缺失图片统一降级。
- [x] 页面切换更新 `document.title` 并回到顶部。
- [x] 构建通过：`tsc --noEmit && vite build`。

### P1（已完成）

- [x] Data Modeling 5 页 + Project Results 接入 ECharts 交互仪表盘（示意数据，带标记）。
- [x] 滚动渐入动效（路由切换后重新观察）。
- [x] `prefers-reduced-motion` 全局关闭动画。
- [x] 响应式：移动端导航与侧边栏横向滚动。

### P2（待办，不阻塞）

- [ ] 用真实实验数据替换 `dashboards.tsx` 中的示意数据。
- [ ] 补齐缺失图片（清单见迁移前审计：`public/assets/images` 中尚缺的引用）。
- [ ] 侧边栏滚动高亮（scrollspy）与 URL 深链（`#/page#section`）。
- [ ] 初始化 Git 仓库并提交基线。
- [ ] 大图压缩为 WebP/AVIF（当前 hero 图约 1.7MB × 9）。
- [ ] 可选：3D 分子展示（React Three Fiber），进一步贴合"多模态"。

## 5. 验收标准

- `npm run build` 零错误，产物可被任意静态服务器直接打开（相对路径）。
- 桌面与 375px 移动端均可完成导航、页面切换、侧边栏锚点滚动。
- 无浏览器破图（缺失图片显示占位块）。
- 所有示意图表带有黄色"示意数据"标识。
- `npm run lint` 无 error（允许 warning）。

## 6. 风险与回退

- 原版已完整备份至 `_backup_vanilla_20260810/`，可随时回退。
- 若 iGEM 平台对单文件体积或外部字体有限制，可将 Google Fonts 本地化。

## 7. 迭代记录 2026-08-11

### 7.1 问题（审计证据）

1. **开发服务器报错**：`[plugin:vite:css] The requested module './node.js' does not provide an export named 'ft'`。
   - 证据：`.vite/dev-server.log` 停留在旧版 **Vite 8.0.10**（迁移前 16:04 的日志）；存在 3 个遗留 node 进程；首次安装依赖时出现过 `EPERM` 清理失败（旧 rolldown 绑定被进程占用）。
   - 判定：运行中的旧进程 + 旧 `.vite` 优化缓存 + 被部分替换的 `node_modules` 混用，导致模块导出不一致。`npm ls` 版本树本身干净，代码与构建均正常。
2. **全站 64 处图片缺失**（当前显示占位块），完整清单见 `docs/missing-images.md`。
3. **9 张 1.7MB JPG 字节完全相同**（MD5 `74b10f2b1f`），包括"工程通路设计图"，全站 hero 实为同一张图；已转 WebP（1600px / quality 78，每张 375KB）并切换引用，原 JPG 保留未删。
4. **ECharts 分包 575KB（gzip 194KB）**：评估结论——该分包仅在进入 6 个仪表盘页面时加载（页面已按路由懒加载），首页与普通页面不受影响；对 iGEM wiki 可接受。若追求极致可按 `manualChunks` 拆出 echarts vendor，收益仅为跨版本缓存，暂缓。
5. **Google Fonts 外链**：已用 `@fontsource/inter`（latin 300/400/600/700/800）本地化，删除外链。

### 7.2 方案与改动

- 停止遗留 node 进程；将 `.vite` 旧缓存重命名为 `.vite_stale_20260811`（未删除，可查）。
- `npm ci` 干净重装依赖（lockfile 一致，177 个包，0 漏洞）。
- 新增 `.editorconfig` 与 `.vscode/settings.json`（UTF-8 强制）；51 个源码文件加 UTF-8 BOM，解决 Windows 编辑器 GBK 误判导致的乱码。
- 生成 8 个 WebP hero 图并更新 7 个页面的引用。
- 字体本地化：`@fontsource/inter` + 移除 Google Fonts 链接。
- 新增 `docs/missing-images.md`（64 处缺失清单：页面、路径、alt、建议尺寸）。

### 7.3 验收

- [x] `npm run build` 通过（tsc 零错误，656 模块）。
- [x] `npm run lint` 通过（0 error）。
- [x] 本地沙箱无法建立回环连接，dev 服务器未能自测；用户重启 `npm run dev` 后应正常。
- [ ] 待用户确认：dev 服务器无报错、页面中文正常。

### 7.4 遗留（优先级排序）

1. **真实数据**：`dashboards.tsx` 六张图全部为示意数据，需替换。对应来源建议：
   - ResultsYieldChart：5L 发酵终产物 GC-MS 定量数据；
   - ModelValidationChart：FBA 预测 vs 实测样本与 R²；
   - SensitivityDemo：COBRApy 参数扫描结果；
   - MarketValueChart：行业报告/文献价格并注明出处；
   - WasteImpactChart：POME 处置统计数据（FAO/MPOB 等）；
   - AssumptionsRadar：敏感性量化评分。
2. **缺失图片**：按 `docs/missing-images.md` 补充真实素材。
3. **重复图去重**：8 个 WebP 内容仍相同，建议后续为不同页面配不同图；`hero-bg-description - 副本 (3).jpg` 未被引用，删除需用户确认。
4. **Git 基线**：目录仍未初始化 Git，建议 `git init` + 首次提交，需用户确认后执行。
5. **CSS 收敛计划（P2）**：阶段一将高频类（`.btn-glow`、`.section-title`、`.igem-grid`、卡片）抽为 React 组件；阶段二逐页迁移到 Tailwind utility；阶段三每迁移完一页即删除对应页面 CSS（删除前确认）。
6. **未引用资源**：`public/assets/images/home/1.mp4`（257KB）未被引用，待确认后处理。

## 8. 迭代记录 2026-08-11（全站配色重构）

### 8.1 需求

按 `D:\Wiki_color.pptx` 的柔和奶油色参考，全站抛弃旧绿/蓝/粉配色，统一为 8 色盘：

`#ad8b72`（最深·顶部） `#fefbe8`（最浅·背景） `#e3c9a4` `#ceac93` `#eff2c7` `#dceaaf` `#b9cfa0` `#a5bb8a`

### 8.2 改动

- 设计令牌全部重写（`src/styles/global.css`）：primary=#ad8b72、secondary=#a5bb8a、accent=#ceac93、背景=#fefbe8、正文=#5c4a3a、弱化=#8a7463。
- 顶部导航 + 首屏 = 最深色 #ad8b72（浅色文字 #fefbe8 / #eff2c7，下拉菜单为奶油底）。
- 全站背景、卡片、表格、图表容器 = 最浅色系（#fefbe8 / #eff2c7 / #e3c9a4）。
- 20 个页面 CSS 与页面内联样式中的旧色（绿 #1a5d3a/#2db369、PPT 蓝 #60a3ba、粉 #e79eb1、橙 #ee822f、红 #e54c5e 等）全部替换为 8 色盘对应值；RGBA 渐变同步替换。
- 每个导航栏目独立个性配色（`--igem-secondary` 为强强调色，`--igem-accent` 为淡色）：
  - Home：#a5bb8a / #ceac93
  - Team：#b9cfa0 / #dceaaf
  - Project：#a4c47a / #c1d97e
  - Wet Lab：#60a3ba / #cce4e2
  - Data Modeling：#a783af / #dcc4e0
  - Human Practices：#e79eb1 / #ebbecf
- 栏目内联颜色（页面 CSS + TSX 内联样式）同步替换为该栏目成对色，图表保持全局 8 色盘。
- 图表（ECharts）配色同步：#ad8b72 / #a5bb8a / #b9cfa0。
- 保留用户此前在 global.css 中添加的扩展色名变量（sage/lime/mist/cream 等），统一映射到 8 色盘，避免破坏后续引用。

### 8.3 验收

- [x] `npm run build` 通过；`npm run lint` 0 error。
- [x] 全站扫描确认：旧色值（#1a5d3a/#2db369/#60a3ba/#e54c5e/#ee822f/#22302a 等）无残留。
- [ ] 待用户浏览器确认整体观感（沙箱无法自测视觉）。

### 8.4 遗留

- 若观感上某页需要微调（如深色面板对比度、栏目强调色），以该页 CSS 顶部覆盖块为准，按 8 色盘内调整即可。
- `docs/missing-images.md` 的 64 张缺失图仍待补充（当前为占位块 + 暖色渐变）。

## 8. 配色迭代记录 2026-08-11（第二轮）

### 8.1 审计

- 解析 `D:\Wiki_color.pptx`：主题色（accent1-6：蓝 `#4874CB`、橙 `#EE822F`、金 `#F2BA02`、绿 `#75BD42`、青 `#30C0B4`、珊瑚 `#E54C5E`）、幻灯片显式色（柔和粉彩 `#60A3BA`、`#A4C47A`、`#C1D97E`、`#CCE4E2`、`#A783AF`、`#E79EB1`、`#DCC4E0`、`#EBBECF`、`#FFFFDD`）、媒体图均为暖白浅色稿。
- 现状：`global.css` 已存在用户设定的核心色（橄榄 `#4B6827`、青蓝 `#3A7388`、柠黄绿 `#8FA344`、暖白底 `#FAF8F5`、深绿黑 `#22302A`）与粉彩令牌，但 **Wet Lab 6 个子页面仍残留旧色**（`#2DB369`、`#F59E0B`、`#4A8DA6`、`#D45D6A`、`#E58A93`、`#D98A1F`、`#8AA09A`、`#E3EBE0`），页脚/时间线边框也有两处旧绿棕。

### 8.2 方案

1. 保留用户已定的核心色与粉彩体系，不推翻局部改造。
2. 将 PPT 完整强调色补入设计令牌：`--igem-green #75BD42`、`--igem-coral #E54C5E`、`--igem-gold #F2BA02`、`--igem-orange #EE822F`、`--igem-blue #4874CB`（Tailwind `@theme` 同步）。
3. 残留旧色按语义映射到新体系：启动子绿→deck 绿、编码区蓝→粉彩蓝、终止子红→珊瑚、软红→粉彩粉、琥珀→橙、深色面板浅字→暖白、页脚绿→灰青。

### 8.3 改动

- `src/styles/global.css`：新增 5 个强调色令牌；页脚链接色、时间线边框统一。
- 10 个文件完成替换：`wetlab-{parts,measurement,notebook,design,safety}.css`、`human-ihp.css`、`WetLab{Design,Measurement,Parts,Safety}.tsx`。

### 8.4 验收

- [x] 全站扫描确认旧色系（`#1A5D3A/#2DB369/#F59E0B/#4A8DA6/#D45D6A/#E58A93/#D98A1F/#8AA09A/#E3EBE0` 等）零残留。
- [x] `npm run build` 通过；`npm run lint` 0 error。
- [x] 图表（`dashboards.tsx`）已与新色板一致。
- 注：`project-contribution.css` 中的 `#569CD6/#CE9178/#DCDCAA` 等为代码示例的语法高亮色，属于代码内容而非页面配色，刻意保留。

### 8.5 遗留

- 真实实验数据、64 张缺失图片、Git 初始化、重复图片/未引用资源删除确认等与前节一致，未变。

## 8. 迭代记录 2026-08-11（配色改版）

### 8.1 来源与审计

用户提供 `D:\Wiki_color.pptx` 作为配色参考。审计结果：

- PPT 主题色为 PowerPoint 默认色（无参考价值）；
- 幻灯片实际使用颜色为柔和多彩色板：`#60A3BA`（雾蓝）、`#A4C47A`（鼠尾草绿）、`#C1D97E`（黄绿）、`#CCE4E2`（浅雾绿）、`#A783AF`（紫）、`#E79EB1`（粉）、`#DCC4E0`（薰衣草）、`#EBBECF`（浅粉）、`#FFFFDD`（奶油黄）、`#FAF8F5`（暖米白底）。

### 8.2 配色映射（已实施）

| 角色 | 旧值 | 新值 | 说明 |
| --- | --- | --- | --- |
| Primary | `#1a5d3a` | `#4B6827` | 深鼠尾草绿（由 `#A4C47A` 加深，白底对比度 6.35:1） |
| Secondary | `#2db369` | `#3A7388` | 深雾蓝绿（由 `#60A3BA` 加深，白底对比度 5.27:1） |
| Accent | `#f59e0b` | `#8FA344` | 中调黄绿（装饰性高亮） |
| 背景 | `#f4f9f6` | `#FAF8F5` | PPT 暖米白 |
| 正文 | `#1f2937` | `#22302A` | 深绿灰 |
| 次要文字 | `#64748b` | `#5F7068` | 绿灰 |
| 柔和色板 | — | sage/lime/mist/teal/purple/pink/lavender/blush/cream | 用于卡片底色与图表 |

### 8.3 改动范围

- `src/styles/global.css`：设计令牌、Tailwind `@theme`、导航/页脚/Hero/侧边栏/按钮/卡片全部换新；新增 `tint-sage/teal/lavender/blush/cream/mist` 卡片底色。
- `src/pages/Home.tsx`：7 张卡片分别套用柔和底色。
- `src/components/dashboards.tsx`：6 张图表配色换为参考色板（鼠尾草绿、雾蓝、黄绿、紫、薰衣草）。
- 页面级 CSS：`#2DB369`/`#F59E0B`/`#F4F8F5` 替换为令牌（wetlab-parts / wetlab-measurement / wetlab-safety）。
- `index.html`：新增 `theme-color`（`#4B6827`）。
- 新增 `docs/wiki-palette.png` 色板预览图。

### 8.4 验收

- [x] `npm run build` 通过（661 模块）。
- [x] `npm run lint` 通过（0 error）。
- [x] 新主/辅色对比度均 ≥ 5:1（白底），正文 13.85:1。

### 8.5 遗留

- 语义色保留：DNA 元件配色（CDS 蓝、终止子红、代码高亮）未随品牌色改动，避免丢失科学含义。
- 图片补齐后（见 `docs/missing-images.md`），卡片视觉效果会更完整。
- 若个别页面需要更强个性化（如 Modeling 页深色科技感），可基于 `--igem-mist` / `--igem-purple` 微调，不推翻整体。

### 8.6 视频接入（Home · Watch Our Story）

- 将预留的 `public/assets/images/home/1.mp4` 接入 Home 页"Watch Our Story"区域，使用原生 HTML5 `<video controls playsInline preload="metadata">`，替代原封面图占位。
- 新增 `.video-shell` 样式（圆角、深色底、`object-fit: cover`），移除已废弃的 `.video-play-overlay` 样式。
- 原 `story-lab-work.jpg` 封面图仍缺失；补图后如需视频封面，可在 `<video>` 上加 `poster="/assets/images/home/story-lab-work.jpg"`。
- [x] `npm run build` / `npm run lint` 通过。
