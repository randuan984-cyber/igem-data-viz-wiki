// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/project-results.css';
import { ResultsYieldChart } from '../components/dashboards';
import type { CSSProperties } from 'react';

export default function ProjectResultsPage() {
  return (
<div id="page-ProjectResults" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/project/res-hero-bg.webp')`, "backgroundPosition": "center 60%"} as CSSProperties}>
        <h1>
            {"Key Results"}
        </h1>
        <p className="hero-sub">
            {"From analytical chemistry to high-density fermentation, witness how our engineered Yarrowia lipolytica brings zero-carbon fragrances to life."}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#res_data" className="sidebar-link active">
                        {"核心产量数据"}
                    </a>
                </li>
                <li>
                    <a href="#res_compare" className="sidebar-link">
                        {"对照组深度分析"}
                    </a>
                </li>
                <li>
                    <a href="#res_findings" className="sidebar-link">
                        {"关键机制发现"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <div id="res_data" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"核心产量数据 (Core Data)"}
                </h2>
                <p style={{"color": "var(--igem-text-muted)", "fontSize": "1.1rem", "marginBottom": "2rem"} as CSSProperties}>
                    {"通过系统性的发酵优化与代谢重构，我们成功从棕榈油提取物中高效合成了两种高价值的大环内酯。以下为 5L 反应器中的最终产量测定："}
                </p>
                <ResultsYieldChart />
                <div className="igem-grid">
                    <div className="res-data-showcase">
                        <div className="res-data-number">
                            {"248"}
                            <span className="res-data-unit">
                                {"mg/L"}
                            </span>
                        </div>
                        <div className="res-data-label">
                            {"Cyclopentadecanolide (环十五内酯)"}
                        </div>
                    </div>
                    <div className="res-data-showcase" style={{"background": "linear-gradient(135deg, var(--igem-text-main) 0%, var(--igem-primary) 100%)"} as CSSProperties}>
                        <div className="res-data-number">
                            {"175"}
                            <span className="res-data-unit">
                                {"mg/L"}
                            </span>
                        </div>
                        <div className="res-data-label">
                            {"Ambrettolide (黄葵内酯)"}
                        </div>
                    </div>
                </div>
                <div className="igem-anim-hover-lift" style={{"marginTop": "2rem", "padding": "2rem"} as CSSProperties}>
                    <h3 style={{"color": "var(--igem-primary)", "marginBottom": "1rem"} as CSSProperties}>
                        {"GC-MS 靶向产物定量鉴定"}
                    </h3>
                    <p>
                        {"利用气相色谱-质谱联用仪 (GC-MS)，我们对发酵液的有机萃取物进行了精准定性。图谱显示，目标产物峰在保留时间上与市售标准品完美重合，且无明显有毒副产物生成。"}
                    </p>
                    <div className="igem-img-zoom" style={{"marginTop": "1.5rem", "height": "350px"} as CSSProperties}>
                        <img src={`${import.meta.env.BASE_URL}assets/images/project/res-gcms-chart.jpg`} alt="GC-MS产物检测图谱" />
                    </div>
                    <span className="igem-img-caption">
                        {"Figure 1. GC-MS chromatogram confirming the successful synthesis of target macrocyclic musks."}
                    </span>
                </div>
            </div>
            <div id="res_compare" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"对比分析 (Comparative Analysis)"}
                </h2>
                <div className="igem-anim-hover-lift" style={{"padding": "2.5rem"} as CSSProperties}>
                    <div style={{"display": "flex", "gap": "3rem", "flexWrap": "wrap"} as CSSProperties}>
                        <div style={{"flex": "1", "minWidth": "250px"} as CSSProperties}>
                            <div className="res-compare-box">
                                <h3 style={{"color": "var(--igem-text-muted)", "fontSize": "1.2rem", "marginTop": "0"} as CSSProperties}>
                                    {"野生型对照组 (Wild Type)"}
                                </h3>
                                <p>
                                    {"野生型解脂耶氏酵母由于缺乏特异性的 P450 环化酶系，且内源的 β-氧化途径极其活跃。在利用棕榈油废液时，碳源几乎全部进入三羧酸循环转化为生物量或内源脂质，大环内酯产量为 "}
                                    <strong>
                                        {"0 mg/L"}
                                    </strong>
                                    {"。"}
                                </p>
                            </div>
                            <div className="res-compare-box" style={{"borderColor": "var(--igem-primary)"} as CSSProperties}>
                                <h3 style={{"color": "var(--igem-primary)", "fontSize": "1.2rem", "marginTop": "0"} as CSSProperties}>
                                    {"工程底盘株 (Engineered Strain)"}
                                </h3>
                                <p>
                                    {"经过多基因串联共表达与竞争途径敲除（POX基因簇），碳通量被成功强制导向 ω-氧化及内酯化反应。相比未优化的初代质粒转化株，多拷贝染色体整合株的绝对产量"}
                                    <strong>
                                        {"提升了 14.5 倍"}
                                    </strong>
                                    {"，碳转化率突破 12%。"}
                                </p>
                            </div>
                        </div>
                        <div className="igem-img-zoom" style={{"flex": "1", "minWidth": "250px", "borderRadius": "16px"} as CSSProperties}>
                            <img src={`${import.meta.env.BASE_URL}assets/images/project/res-yield-compare.jpg`} alt="优化前后产量对比柱状图" style={{"height": "100%"} as CSSProperties} />
                        </div>
                    </div>
                    <span className="igem-img-caption" style={{"marginTop": "1.5rem"} as CSSProperties}>
                        {"Figure 2. Significant yield enhancement achieved by the optimized engineered strain vs. the first-generation prototype."}
                    </span>
                </div>
            </div>
            <div id="res_findings" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"关键机制发现 (Key Findings)"}
                </h2>
                <p style={{"color": "var(--igem-text-muted)", "marginBottom": "2rem", "fontSize": "1.1rem"} as CSSProperties}>
                    {"不仅是产量的提升，我们的实验还深刻揭示了微生物合成大环内酯体系中的几项核心机理："}
                </p>
                <div className="igem-grid">
                    <div className="igem-anim-hover-lift" style={{"textAlign": "center", "padding": "2.5rem 1.5rem"} as CSSProperties}>
                        <div className="res-finding-badge">
                            {"🧬"}
                        </div>
                        <h3 style={{"color": "var(--igem-primary)", "marginBottom": "1rem"} as CSSProperties}>
                            {"CYP & CYC 的强协同效应"}
                        </h3>
                        <p style={{"fontSize": "0.95rem", "textAlign": "left"} as CSSProperties}>
                            {"单独过表达 CYP52A13 会导致 ω-羟基脂肪酸大量堆积，产生细胞毒性。只有当内酯环化酶 (CYC1) 与之以 1:2 的转录比例严格共表达时，细胞生长与产物分泌才能达到稳态平衡。"}
                        </p>
                    </div>
                    <div className="igem-anim-hover-lift" style={{"textAlign": "center", "padding": "2.5rem 1.5rem"} as CSSProperties}>
                        <div className="res-finding-badge">
                            {"✂️"}
                        </div>
                        <h3 style={{"color": "var(--igem-primary)", "marginBottom": "1rem"} as CSSProperties}>
                            {"β-氧化敲除的双刃剑"}
                        </h3>
                        <p style={{"fontSize": "0.95rem", "textAlign": "left"} as CSSProperties}>
                            {"彻底敲除脂质降解相关的 POX 基因簇，虽将目标产物纯度从 45% 提升至 92%，有效减少了短链副产物，但也导致了细胞早期生长速率下降 20%。"}
                        </p>
                    </div>
                    <div className="igem-anim-hover-lift" style={{"textAlign": "center", "padding": "2.5rem 1.5rem"} as CSSProperties}>
                        <div className="res-finding-badge">
                            {"🌡️"}
                        </div>
                        <h3 style={{"color": "var(--igem-primary)", "marginBottom": "1rem"} as CSSProperties}>
                            {"理化环境对环化的主导权"}
                        </h3>
                        <p style={{"fontSize": "0.95rem", "textAlign": "left"} as CSSProperties}>
                            {"实验证明，将发酵液 pH 严格控制在 5.5，并将发酵中后期的温度从 28°C 降至 24°C，能显著提升膜结合环化酶的构象稳定性，使最终环化效率飙升。"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
