// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/wetlab-description.css';
import type { CSSProperties } from 'react';

export default function WetLabDescriptionPage() {
  return (
<div id="page-WetLabDescription" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/wetlab/hero-bg-description.jpg')`, "backgroundPosition": "center 30%"} as CSSProperties}>
        <h1>
            {"Wet Lab Design"}
        </h1>
        <p className="hero-sub">
            {"Decoding the biosynthetic pathway of zero-carbon fragrances. A systematic approach from strain construction to fermentation validation."}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#wet_overall" className="sidebar-link active">
                        {"整体实验思路"}
                    </a>
                </li>
                <li>
                    <a href="#wet_hypo" className="sidebar-link">
                        {"核心科学假设"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <div id="wet_overall" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"整体实验思路 (Overall Strategy)"}
                </h2>
                <p style={{"color": "var(--igem-text-muted)", "fontSize": "1.1rem", "marginBottom": "2rem"} as CSSProperties}>
                    {"为了将棕榈油废液高效转化为大环内酯，我们的湿实验设计遵循了一套严密递进的工程逻辑，分为三大核心阶段："}
                </p>
                <div className="wet-flow-container">
                    <div className="wet-flow-step">
                        <div className="wet-flow-dot">
                        </div>
                        <div className="igem-anim-hover-lift" style={{"display": "flex", "gap": "2rem", "flexWrap": "wrap"} as CSSProperties}>
                            <div style={{"flex": "1", "minWidth": "250px"} as CSSProperties}>
                                <h3 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                                    {"Phase I: 底盘选择与敲除"}
                                </h3>
                                <p style={{"lineHeight": "1.7", "fontSize": "0.95rem"} as CSSProperties}>
                                    {"\n                                    我们选取了具有天然高通量脂质代谢能力的"}
                                    <strong>
                                        {"解脂耶氏酵母 ("}
                                        <i>
                                            {"Yarrowia lipolytica"}
                                        </i>
                                        {")"}
                                    </strong>
                                    {" 作为底盘。首先利用 CRISPR-Cas9 系统敲除其内源的 POX 基因簇，阻断 β-氧化路径，防止宝贵的脂肪酸底物被细胞代谢消耗。\n                                "}
                                </p>
                                <span className="wet-tag">
                                    {"Chassis Engineering"}
                                </span>
                            </div>
                            <div className="igem-img-zoom" style={{"flex": "1", "minWidth": "200px", "height": "160px", "borderRadius": "12px"} as CSSProperties}>
                                <img src={`${import.meta.env.BASE_URL}assets/images/wetlab/desc-step1.jpg`} alt="底盘菌株筛选培养皿" />
                            </div>
                        </div>
                    </div>
                    <div className="wet-flow-step">
                        <div className="wet-flow-dot">
                        </div>
                        <div className="igem-anim-hover-lift" style={{"display": "flex", "gap": "2rem", "flexWrap": "wrap", "flexDirection": "row-reverse"} as CSSProperties}>
                            <div style={{"flex": "1", "minWidth": "250px"} as CSSProperties}>
                                <h3 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                                    {"Phase II: 异源通路组装"}
                                </h3>
                                <p style={{"lineHeight": "1.7", "fontSize": "0.95rem"} as CSSProperties}>
                                    {"\n                                    利用 Gibson Assembly 技术，我们在体外构建了包含植物来源的特异性羟化酶 (CYP52A13) 与内酯环化酶 (CYC1) 的多基因共表达载体，并通过同源重组将其稳定整合入酵母基因组 rDNA 区。\n                                "}
                                </p>
                                <span className="wet-tag">
                                    {"Pathway Assembly"}
                                </span>
                            </div>
                            <div className="igem-img-zoom" style={{"flex": "1", "minWidth": "200px", "height": "160px", "borderRadius": "12px"} as CSSProperties}>
                                <img src={`${import.meta.env.BASE_URL}assets/images/wetlab/desc-step2.jpg`} alt="异源通路克隆图谱" />
                            </div>
                        </div>
                    </div>
                    <div className="wet-flow-step">
                        <div className="wet-flow-dot">
                        </div>
                        <div className="igem-anim-hover-lift" style={{"display": "flex", "gap": "2rem", "flexWrap": "wrap"} as CSSProperties}>
                            <div style={{"flex": "1", "minWidth": "250px"} as CSSProperties}>
                                <h3 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                                    {"Phase III: 发酵测试与定量"}
                                </h3>
                                <p style={{"lineHeight": "1.7", "fontSize": "0.95rem"} as CSSProperties}>
                                    {"\n                                    将成功筛选的工程株在 5L 反应器中进行放大培养，利用 GC-MS 针对特定代谢物（黄葵内酯、环十五内酯）进行精准鉴定，最终通过优化碳氮比与诱导条件提升产率。\n                                "}
                                </p>
                                <span className="wet-tag">
                                    {"Fermentation & GC-MS"}
                                </span>
                            </div>
                            <div className="igem-img-zoom" style={{"flex": "1", "minWidth": "200px", "height": "160px", "borderRadius": "12px"} as CSSProperties}>
                                <img src={`${import.meta.env.BASE_URL}assets/images/wetlab/desc-step3.jpg`} alt="发酵罐与GC-MS分析" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="wet_hypo" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"核心科学假设 (Scientific Hypotheses)"}
                </h2>
                <p style={{"color": "var(--igem-text-muted)", "fontSize": "1.1rem", "marginBottom": "2rem"} as CSSProperties}>
                    {"湿实验的每一步推进，都建立在以下三个关键的生物学假设之上，这指导了我们的整个实验设计："}
                </p>
                <div className="igem-grid">
                    <div className="igem-anim-hover-lift hypo-card">
                        <div className="hypo-icon">
                            {"🧬"}
                        </div>
                        <h3 style={{"color": "var(--igem-primary)", "marginBottom": "1rem"} as CSSProperties}>
                            {"特异性羟化假设"}
                        </h3>
                        <p style={{"fontSize": "0.95rem", "lineHeight": "1.7", "marginBottom": "0.5rem"} as CSSProperties}>
                            <strong>
                                {"假设："}
                            </strong>
                            {" 异源表达植物来源的细胞色素 P450 酶 (CYP52A13) 及其伴侣蛋白 (CPR)，能够特异性地对十六碳脂肪酸进行末端 ω-羟化，而不引发中途链断裂。\n                        "}
                        </p>
                        <p style={{"fontSize": "0.9rem", "color": "var(--igem-text-muted)"} as CSSProperties}>
                            <strong>
                                {"预期验证："}
                            </strong>
                            {" 萃取发酵液，GC-MS 测得 16-羟基十六烷酸的特异性丰度。\n                        "}
                        </p>
                    </div>
                    <div className="igem-anim-hover-lift hypo-card">
                        <div className="hypo-icon">
                            {"🧫"}
                        </div>
                        <h3 style={{"color": "var(--igem-primary)", "marginBottom": "1rem"} as CSSProperties}>
                            {"碳通量重定向假设"}
                        </h3>
                        <p style={{"fontSize": "0.95rem", "lineHeight": "1.7", "marginBottom": "0.5rem"} as CSSProperties}>
                            <strong>
                                {"假设："}
                            </strong>
                            {" 敲除参与 β-氧化的核心基因 (POX1-6) 可阻断细胞对脂肪酸的内耗，将游离脂肪酸 (FFA) 的代谢通量强制重定向至大环内酯合成途径。\n                        "}
                        </p>
                        <p style={{"fontSize": "0.9rem", "color": "var(--igem-text-muted)"} as CSSProperties}>
                            <strong>
                                {"预期验证："}
                            </strong>
                            {" 对比野生型与敲除株，敲除株的大环内酯绝对产量应提升至少一倍。\n                        "}
                        </p>
                    </div>
                    <div className="igem-anim-hover-lift hypo-card">
                        <div className="hypo-icon">
                            {"🔬"}
                        </div>
                        <h3 style={{"color": "var(--igem-primary)", "marginBottom": "1rem"} as CSSProperties}>
                            {"膜定位协同假说"}
                        </h3>
                        <p style={{"fontSize": "0.95rem", "lineHeight": "1.7", "marginBottom": "0.5rem"} as CSSProperties}>
                            <strong>
                                {"假设："}
                            </strong>
                            {" 环化酶 (CYC1) 是一种内质网膜蛋白。通过添加特定的酵母内质网定位肽序列，能显著拉近其与前置羟化酶的空间距离，提高中间代谢物的传递效率。\n                        "}
                        </p>
                        <p style={{"fontSize": "0.9rem", "color": "var(--igem-text-muted)"} as CSSProperties}>
                            <strong>
                                {"预期验证："}
                            </strong>
                            {" 带有定位肽的质粒组实验，其最终环化率显著高于未加定位肽的对照组。\n                        "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
