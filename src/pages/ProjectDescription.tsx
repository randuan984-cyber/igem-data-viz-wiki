// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/project-description.css';
import type { CSSProperties } from 'react';

export default function ProjectDescriptionPage() {
  return (
<div id="page-ProjectDescription" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/project/hero-bg-description.webp')`} as CSSProperties}>
        <h1>
            {"Project Description"}
        </h1>
        <p className="hero-sub">
            {"重构大环内酯合成路线 · 探索绿色香料的未来"}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#proj_bg" className="sidebar-link active">
                        {"背景 (Background)"}
                    </a>
                </li>
                <li>
                    <a href="#proj_problem" className="sidebar-link">
                        {"痛点与问题 (The Problem)"}
                    </a>
                </li>
                <li>
                    <a href="#proj_goal" className="sidebar-link">
                        {"项目目标 (Our Goal)"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <div id="proj_bg" style={{"marginBottom": "4rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"背景 (Background)"}
                </h2>
                <div className="igem-anim-hover-lift">
                    <p>
                        {"香精香料产业正处于绿色转型的关键时期。大环内酯类麝香作为高端香水不可或缺的核心原料，其庞大的市场需求长期严重依赖"}
                        <strong>
                            {"高耗能、高污染的化学合成工艺"}
                        </strong>
                        {"。"}
                    </p>
                    <p>
                        {"与此同时，在产业链的另一端，全球棕榈油加工产业每年会产生海量的废弃油脂与加工副产物（POME）。这不仅造成了生物质资源的巨大浪费，更带来了严峻的环境压力与碳排放问题。"}
                    </p>
                    <div className="igem-img-zoom" style={{"margin": "2rem 0 1rem", "maxHeight": "400px"} as CSSProperties}>
                        <img src={`${import.meta.env.BASE_URL}assets/images/project/bg-pollution-contrast.jpg`} alt="传统化学合成与环境污染的对比" />
                    </div>
                    <span className="igem-img-caption">
                        {"图1：传统大环内酯化学合成的高碳排与棕榈油废液对环境的双重压力"}
                    </span>
                </div>
            </div>
            <div id="proj_problem" style={{"marginBottom": "4rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"问题来源 (The Problem)"}
                </h2>
                <div className="igem-anim-hover-lift">
                    <p style={{"fontSize": "1.1rem", "color": "var(--igem-primary)", "fontWeight": "600"} as CSSProperties}>
                        {"面对日益增长的绿色香料需求和亟待处理的农业废弃物，本项目致力于解决一个核心产业问题：如何高效地将棕榈油的脂肪酸转化为大环内酯，同时最大程度地降低环境成本？"}
                    </p>
                    <ul className="highlight-list">
                        <li>
                            <strong>
                                {"资源错配："}
                            </strong>
                            {" 廉价废弃油脂未得到高值化开发利用，焚烧或丢弃导致碳排放居高不下。"}
                        </li>
                        <li>
                            <strong>
                                {"技术瓶颈："}
                            </strong>
                            {" 现有微生物细胞工厂在合成大环内酯时，普遍面临底物转化率低、关键酶（如 CYP52A13）环化效率受限的深水区难题。"}
                        </li>
                        <li>
                            <strong>
                                {"底盘缺乏："}
                            </strong>
                            {" 工业界极为缺乏一株能够高效、稳定合成环十五内酯与黄葵内酯的稳健工程酵母。"}
                        </li>
                    </ul>
                    <div className="igem-img-zoom" style={{"margin": "2rem 0 1rem"} as CSSProperties}>
                        <img src={`${import.meta.env.BASE_URL}assets/images/project/problem-pathway-bottleneck.jpg`} alt="微生物法合成瓶颈" />
                    </div>
                    <span className="igem-img-caption">
                        {"图2：当前微生物代谢网络中，脂肪酸转化为大环内酯的关键环化步骤瓶颈"}
                    </span>
                </div>
            </div>
            <div id="proj_goal" style={{"marginBottom": "4rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"项目目标 (Our Goal)"}
                </h2>
                <div className="igem-anim-hover-lift" style={{"borderLeft": "6px solid var(--igem-secondary)"} as CSSProperties}>
                    <p style={{"fontSize": "1.1rem", "marginBottom": "1.5rem"} as CSSProperties}>
                        {"基于上述痛点，我们的总体目标是："}
                        <strong>
                            {"构建工程化解脂耶氏酵母 ("}
                            <i>
                                {"Yarrowia lipolytica"}
                            </i>
                            {")，实现环十五内酯、黄葵内酯的高效异源合成，并对其产出进行系统性优化。"}
                        </strong>
                    </p>
                    <ul className="highlight-list">
                        <li>
                            <strong>
                                {"废弃物的高值化利用："}
                            </strong>
                            {" 驯化底盘酵母，使其能够极为高效地摄取并利用棕榈油废物作为碳源，完成真正的“变废为宝”。"}
                        </li>
                        <li>
                            <strong>
                                {"异源代谢通路的突破："}
                            </strong>
                            {" 引入并重构极其复杂的合成与环化通路酶系，打通从底物到高价值大环内酯的生物制造路线。"}
                        </li>
                        <li>
                            <strong>
                                {"可扩展的工艺原型开发："}
                            </strong>
                            {" 通过发酵条件优化与 FBA 模型预测，建立具备工业应用潜力的“零碳”生物工艺大体量原型。"}
                        </li>
                    </ul>
                    <div className="igem-img-zoom" style={{"margin": "2rem 0 1rem"} as CSSProperties}>
                        <img src={`${import.meta.env.BASE_URL}assets/images/project/goal-engineered-yeast.jpg`} alt="构建解脂耶氏酵母绿色工厂" />
                    </div>
                    <span className="igem-img-caption">
                        {"图3：工程化解脂耶氏酵母的设计构想——从废弃油脂到高附加值绿色香料的细胞工厂"}
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
