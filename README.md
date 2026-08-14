# China-HUBU-Wuhan iGEM Wiki — Zero Carbon Fragrances

iGEM 2025 团队 Wiki 的 React 重构版。主题：利用解脂耶氏酵母（*Yarrowia lipolytica*）将棕榈油废弃物（POME）转化为大环麝香。

> **About**：Interactive iGEM 2025 wiki (China-HUBU-Wuhan) — zero-carbon fragrances from palm oil waste via engineered *Yarrowia lipolytica*. React 19 + TypeScript + Vite + Tailwind CSS + ECharts — 20+ lazy-loaded pages, interactive ECharts dashboards (sample data pending real experiment results), scroll storytelling, responsive, designed for iGEM static hosting.

## 技术栈

- React 19 + TypeScript + Vite 8
- React Router（Hash 模式，兼容 iGEM 静态托管，无需服务端重写）
- Tailwind CSS 4 + 自定义设计令牌（`src/styles/global.css`）
- ECharts（Data Modeling / Results 交互式仪表盘）
- Framer Motion + IntersectionObserver（滚动动效，尊重 `prefers-reduced-motion`）
- ESLint + Prettier（工程规范）

## 常用命令

```bash
npm run dev      # 开发服务器（http://localhost:5173）
npm run build    # 类型检查 + 生产构建（输出 dist/）
npm run preview  # 本地预览构建产物
npm run lint     # ESLint
npm run format   # Prettier 格式化
```

## 目录结构

```text
src/
  App.tsx                 # 路由、全局锚点处理、图片降级、滚动渐入
  siteConfig.ts           # 导航与页面标题配置（改导航只改这里）
  main.tsx                # 入口
  styles/global.css       # Tailwind + 设计令牌 + 全局组件样式
  assets/css/*.css        # 各页面保留的样式（由页面组件按需引入）
  components/
    Navbar.tsx            # 桌面下拉 + 移动端汉堡菜单
    Footer.tsx
    Chart.tsx             # ECharts 封装（响应式尺寸、自动销毁）
    Reveal.tsx            # Framer Motion 滚动渐入
    dashboards.tsx        # 交互式图表（产量对比、模型验证、敏感性演示等）
  pages/*.tsx             # 20 个页面，按路由懒加载
public/assets/images/     # 静态图片（构建时原样复制）
docs/SDD_SPEC.md          # 本次重构的规格与验收记录
```

## 路由说明

使用 Hash 路由（`#/project/results` 等），页面内锚点（如侧边栏 `#res_data`）由全局点击处理平滑滚动，两者互不干扰。页面切换时自动回到顶部并同步浏览器标题。

## 迁移记录与遗留事项

- 原 vanilla 版本完整备份在 `_backup_vanilla_20260810/`。
- 全站 40+ 处缺失图片统一降级为带文字说明的占位块（`src/App.tsx` 全局处理），不影响布局与评审观感；替换真实图片时放入 `public/assets/images/` 对应目录即可。
- Data Modeling / Results 页面的图表目前为**示意数据**，带有黄色"示意数据"标记，严禁直接当真实结果展示；拿到实验数据后替换 `src/components/dashboards.tsx` 中的数据即可。
- iGEM 部署：将 `dist/` 内容上传至 iGEM wiki 静态空间即可（`base: './'` 已保证相对路径可用）。
- 当前目录未初始化 Git，建议部署前执行 `git init` 并提交基线。


