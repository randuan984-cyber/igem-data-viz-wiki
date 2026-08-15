// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/wetlab-design.css';
import type { CSSProperties } from 'react';

export default function WetLabDesignPage() {
  return (
<div id="page-WetLabDesign" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/wetlab/hero-bg-design.jpg')`, "backgroundPosition": "center 20%"} as CSSProperties}>
        <h1>
            {"Experimental Design"}
        </h1>
        <p className="hero-sub">
            {"Meticulous planning, precise controls, and multi-dimensional optimization. This is how we ensure the reproducibility and rigor of our synthetic biology approach."}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#wet_strain" className="sidebar-link active">
                        {"1. 菌株构建方案"}
                    </a>
                </li>
                <li>
                    <a href="#wet_ferment" className="sidebar-link">
                        {"2. 发酵优化参数"}
                    </a>
                </li>
                <li>
                    <a href="#wet_control" className="sidebar-link">
                        {"3. 对照实验设置"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <div id="wet_strain" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"菌株构建方案 (Strain Construction)"}
                </h2>
                <p style={{"color": "var(--igem-text-muted)", "fontSize": "1.1rem", "marginBottom": "2rem"} as CSSProperties}>
                    {"为了保证大片段异源基因在解脂耶氏酵母中的稳定表达，我们摒弃了极易丢失的游离质粒，设计了基于同源重组的染色体整合方案。"}
                </p>
                <div className="igem-grid">
                    <div className="igem-anim-hover-lift design-step-card">
                        <span className="design-step-number">
                            {"01"}
                        </span>
                        <h3 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                            {"多片段无缝组装"}
                        </h3>
                        <p style={{"fontSize": "0.95rem", "lineHeight": "1.7"} as CSSProperties}>
                            {"\n                            采用 "}
                            <strong>
                                {"Gibson Assembly"}
                            </strong>
                            {" 技术。我们将带有同源臂的强启动子 (pTEF1)、目标基因 (CYP52A13) 和终止子高效拼接到 pYALI 整合型骨架中。该方法避免了引入多余的酶切位点，保证了表达框的紧凑性。\n                        "}
                        </p>
                    </div>
                    <div className="igem-anim-hover-lift design-step-card">
                        <span className="design-step-number">
                            {"02"}
                        </span>
                        <h3 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                            {"醋酸锂-PEG 转化"}
                        </h3>
                        <p style={{"fontSize": "0.95rem", "lineHeight": "1.7"} as CSSProperties}>
                            {"\n                            对含有 URA3 营养缺陷型的底盘细胞进行感受态制备。加入优化浓度的 PEG 4000 与载体 DNA 进行热激转化。该物理化学混合方案显著提升了大型表达载体穿透厚酵母细胞壁的成功率。\n                        "}
                        </p>
                    </div>
                    <div className="igem-anim-hover-lift design-step-card">
                        <span className="design-step-number">
                            {"03"}
                        </span>
                        <h3 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                            {"表型筛选与验证"}
                        </h3>
                        <p style={{"fontSize": "0.95rem", "lineHeight": "1.7"} as CSSProperties}>
                            {"\n                            在缺乏尿嘧啶的 SC-Ura 固体培养基上进行第一轮致死筛选；挑取单克隆后，提取基因组进行 "}
                            <strong>
                                {"Colony PCR"}
                            </strong>
                            {" 及 Sanger 测序，确保目的基因已精准靶向整合至酵母的 rDNA 安全位点。\n                        "}
                        </p>
                    </div>
                </div>
                <div className="igem-img-zoom" style={{"marginTop": "2rem", "borderRadius": "16px"} as CSSProperties}>
                    <img src={`${import.meta.env.BASE_URL}assets/images/wetlab/design-plasmid-workflow.jpg`} alt="质粒构建与转化流程图" />
                </div>
            </div>
            <div id="wet_ferment" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"发酵优化 (Fermentation Optimization)"}
                </h2>
                <p style={{"color": "var(--igem-text-muted)", "fontSize": "1.1rem", "marginBottom": "2rem"} as CSSProperties}>
                    {"细胞工厂的潜力需要通过理化环境的精准调控来激发。我们系统性测试了以下关键参数对最终大环内酯产量的影响："}
                </p>
                <div className="param-dashboard">
                    <div className="param-badge">
                        <i>
                            {"🌡️"}
                        </i>
                        <span>
                            {"Temperature"}
                        </span>
                    </div>
                    <div className="param-badge">
                        <i>
                            {"💧"}
                        </i>
                        <span>
                            {"pH Level"}
                        </span>
                    </div>
                    <div className="param-badge">
                        <i>
                            {"🧪"}
                        </i>
                        <span>
                            {"C/N Ratio"}
                        </span>
                    </div>
                    <div className="param-badge">
                        <i>
                            {"⏱️"}
                        </i>
                        <span>
                            {"Induction Time"}
                        </span>
                    </div>
                    <div className="param-badge">
                        <i>
                            {"💨"}
                        </i>
                        <span>
                            {"DO (溶解氧)"}
                        </span>
                    </div>
                </div>
                <div className="igem-anim-hover-lift" style={{"padding": "2rem"} as CSSProperties}>
                    <h3 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                        {"正交试验设计 (Orthogonal Array Testing)"}
                    </h3>
                    <p style={{"lineHeight": "1.8"} as CSSProperties}>
                        {"\n                        单纯的单因素优化无法解决参数间的交互影响。我们设计了 "}
                        <strong>
                            {"L16 (4^5) 正交发酵实验"}
                        </strong>
                        {"。结果表明，碳氮比 (C/N) 是影响酵母生长速率的核心因素，而"}
                        <strong>
                            {"溶解氧 (DO) 和温度的偶联控制"}
                        </strong>
                        {"决定了细胞色素 P450 酶的催化效率。"}
                        <br />
                        <br />
                        <strong>
                            {"最终选定策略："}
                        </strong>
                        {" 前期 28°C 极速扩增生物量（DO 维持 30%）；后期降温至 24°C，补加棕榈油提取液，诱导高浓度表达并抑制杂蛋白水解。\n                    "}
                    </p>
                </div>
            </div>
            <div id="wet_control" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"对照实验 (Control Experiments)"}
                </h2>
                <p style={{"color": "var(--igem-text-muted)", "fontSize": "1.1rem"} as CSSProperties}>
                    {"严格的对照组（Controls）是排除假阳性、确证实验干预有效性的唯一标准。在此次项目中，我们设置了多重验证体系："}
                </p>
                <div className="vs-container">
                    <div className="vs-card control-group">
                        <h3 style={{"color": "#60a3ba", "marginTop": "0", "fontSize": "1.5rem", "borderBottom": "2px solid rgba(227,201,164,0.3)", "paddingBottom": "0.5rem"} as CSSProperties}>
                            {"野生型 & 空载体对照"}
                        </h3>
                        <ul style={{"lineHeight": "1.8", "paddingLeft": "1.2rem", "color": "var(--igem-text-main)", "marginTop": "1rem"} as CSSProperties}>
                            <li style={{"marginBottom": "1rem"} as CSSProperties}>
                                <strong>
                                    {"Wild-Type (野生型):"}
                                </strong>
                                {" 在相同棕榈油废液培养基中发酵。用于评估解脂耶氏酵母自身的背景脂肪酸代谢能力，证明其天然状态下无法合成任何大环内酯。"}
                            </li>
                            <li>
                                <strong>
                                    {"Empty Vector (空载体株):"}
                                </strong>
                                {" 转化了仅带有筛选标记但不含目标基因片段的 pYALI 质粒。用于排除质粒骨架引入与转基因操作本身对细胞代谢产生的压力干扰。"}
                            </li>
                        </ul>
                    </div>
                    <div className="vs-badge">
                        {"VS"}
                    </div>
                    <div className="vs-card exp-group">
                        <h3 style={{"color": "var(--igem-secondary)", "marginTop": "0", "fontSize": "1.5rem", "borderBottom": "2px solid rgba(165,187,138,0.25)", "paddingBottom": "0.5rem"} as CSSProperties}>
                            {"工程优化实验组"}
                        </h3>
                        <ul style={{"lineHeight": "1.8", "paddingLeft": "1.2rem", "color": "var(--igem-text-main)", "marginTop": "1rem"} as CSSProperties}>
                            <li style={{"marginBottom": "1rem"} as CSSProperties}>
                                <strong>
                                    {"Target Knockout (敲除株):"}
                                </strong>
                                {" 验证阻断 β-氧化途径后，是否有效阻止了底物的无效降解，并增加了前体物质的积累。"}
                            </li>
                            <li>
                                <strong>
                                    {"Full Pathway (全通路表达株):"}
                                </strong>
                                {" 共同表达 CYP52A13 与 CYC1，作为产生目标产物黄葵内酯和环十五内酯的核心组，证明异源通路的整体畅通性与终极产量。"}
                            </li>
                        </ul>
                    </div>
                </div>
                <span className="igem-img-caption" style={{"marginTop": "1.5rem"} as CSSProperties}>
                    {"* 所有的发酵与抽提产物均同步上机 GC-MS 进行定量比对，确保背景噪音被完全扣除。"}
                </span>
            </div>
        </div>
    </div>
</div>
  );
}
