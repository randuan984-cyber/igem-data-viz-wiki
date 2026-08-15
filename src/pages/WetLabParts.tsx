// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/wetlab-parts.css';
import type { CSSProperties } from 'react';

export default function WetLabPartsPage() {
  return (
<div id="page-WetLabParts" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/wetlab/hero-bg-parts.jpg')`, "backgroundPosition": "center 40%"} as CSSProperties}>
        <h1>
            {"BioBricks & Parts"}
        </h1>
        <p className="hero-sub">
            {"Standardization is the core of synthetic biology. We have designed, documented, and contributed a robust toolkit of genetic parts specifically optimized for Yarrowia lipolytica."}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#parts_promoter" className="sidebar-link active">
                        {"启动子 (Promoters)"}
                    </a>
                </li>
                <li>
                    <a href="#parts_cds" className="sidebar-link">
                        {"编码区 (CDS)"}
                    </a>
                </li>
                <li>
                    <a href="#parts_terminator" className="sidebar-link">
                        {"终止子 (Terminators)"}
                    </a>
                </li>
                <li>
                    <a href="#parts_char" className="sidebar-link">
                        {"综合表征数据"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <p style={{"color": "var(--igem-text-muted)", "fontSize": "1.1rem", "marginBottom": "3rem", "lineHeight": "1.8"} as CSSProperties}>
                {"\n                本页详细记录了我们提交至 iGEM Registry 的所有核心元件。为了在非模式生物 "}
                <i>
                    {"Y. lipolytica"}
                </i>
                {" 中实现大环内酯的高效合成，我们不仅引入了全新的植物源基因序列，还对其密码子进行了深度优化，并筛选了与之完美匹配的转录调控元件。\n            "}
            </p>
            <div id="parts_promoter" style={{"marginBottom": "4rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"启动子 (Promoters)"}
                </h2>
                <div className="part-card sbol-promoter">
                    <div className="dna-bg-reveal">
                        {"TATATAAAGCGCT...TATA..."}
                    </div>
                    <div className="part-id-badge">
                        <i>
                            {"↱"}
                        </i>
                        {" BBa_K4900010"}
                    </div>
                    <h3 style={{"color": "#cce4e2", "marginTop": "0", "fontSize": "1.5rem"} as CSSProperties}>
                        {"pTEF1 (Translation Elongation Factor-1α Promoter)"}
                    </h3>
                    <p style={{"fontSize": "0.95rem", "lineHeight": "1.8", "marginBottom": "1rem"} as CSSProperties}>
                        <strong>
                            {"来源与功能："}
                        </strong>
                        {" 克隆自解脂耶氏酵母基因组。TEF1p 是已知的在富脂代谢环境下表现最为强劲的天然组成型启动子之一。\n                    "}
                    </p>
                    <p style={{"fontSize": "0.95rem", "lineHeight": "1.8", "color": "var(--igem-text-main)"} as CSSProperties}>
                        <strong>
                            {"设计意图："}
                        </strong>
                        {" 在本项目中，我们使用 pTEF1 专门驱动最为核心的限速酶——内酯环化酶 (CYC1)，以确保在发酵中后期仍能保持极高的蛋白丰度，从而打破环化反应的瓶颈。\n                    "}
                    </p>
                </div>
                <div className="part-card sbol-promoter">
                    <div className="dna-bg-reveal">
                        {"GGCGCC...TATA...CCGGA"}
                    </div>
                    <div className="part-id-badge">
                        <i>
                            {"↱"}
                        </i>
                        {" BBa_K4900011"}
                    </div>
                    <h3 style={{"color": "#cce4e2", "marginTop": "0", "fontSize": "1.5rem"} as CSSProperties}>
                        {"pGPD (Glyceraldehyde-3-phosphate Dehydrogenase Promoter)"}
                    </h3>
                    <p style={{"fontSize": "0.95rem", "lineHeight": "1.8"} as CSSProperties}>
                        <strong>
                            {"来源与功能："}
                        </strong>
                        {" 一种强效的中等组成型启动子，广泛应用于酵母细胞的初级代谢工程。本项目将其用于驱动 CYP52A13 基因，通过与 pTEF1 的差异化搭配，我们在体内实现了 P450 酶与环化酶 1:2 的精妙转录比例。\n                    "}
                    </p>
                </div>
            </div>
            <div id="parts_cds" style={{"marginBottom": "4rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"编码区 (Coding Sequences)"}
                </h2>
                <div className="part-card sbol-cds">
                    <div className="dna-bg-reveal">
                        {"ATGGCGTTCGAC...TAA..."}
                    </div>
                    <div className="part-id-badge">
                        <i>
                            {"⇨"}
                        </i>
                        {" BBa_K4900001"}
                    </div>
                    <h3 style={{"color": "#60a3ba", "marginTop": "0", "fontSize": "1.5rem"} as CSSProperties}>
                        {"CYP52A13 (Cytochrome P450 ω-Hydroxylase)"}
                    </h3>
                    <p style={{"fontSize": "0.95rem", "lineHeight": "1.8", "marginBottom": "1rem"} as CSSProperties}>
                        <strong>
                            {"来源与功能："}
                        </strong>
                        {" 源自植物体系的高度特异性单加氧酶。该酶能够精准识别十六碳脂肪酸的末端甲基，并执行严格的 ω-位羟化反应，生成 16-羟基十六烷酸。\n                    "}
                    </p>
                    <p style={{"fontSize": "0.95rem", "lineHeight": "1.8", "color": "var(--igem-text-main)"} as CSSProperties}>
                        <strong>
                            {"突变与优化："}
                        </strong>
                        {" 原始植物序列在酵母中极易产生稀有密码子停滞。我们对其进行了 "}
                        <strong>
                            {"Yarrowia lipolytica 密码子偏好性全序列重构"}
                        </strong>
                        {"（Codon Adaptation Index 提升至 0.92），并截短了前端 15bp 的叶绿体转运肽信号，大幅提升了其在内质网的正确折叠率。\n                    "}
                    </p>
                </div>
                <div className="part-card sbol-cds">
                    <div className="dna-bg-reveal">
                        {"ATGTCCGAG...TGA..."}
                    </div>
                    <div className="part-id-badge">
                        <i>
                            {"⇨"}
                        </i>
                        {" BBa_K4900002"}
                    </div>
                    <h3 style={{"color": "#60a3ba", "marginTop": "0", "fontSize": "1.5rem"} as CSSProperties}>
                        {"CYC1 (Macrolide Synthase / Cyclase)"}
                    </h3>
                    <p style={{"fontSize": "0.95rem", "lineHeight": "1.8"} as CSSProperties}>
                        <strong>
                            {"来源与功能："}
                        </strong>
                        {" 负责催化 ω-羟基脂肪酸发生分子内酯化，生成闭环的大环内酯（如环十五内酯和黄葵内酯）。我们在其 N 端融合了强效的 ER 滞留信号肽 (HDEL)，使其在空间分布上紧贴上游的 P450 酶，实现了底物通道化 (Substrate Channeling) 效应。\n                    "}
                    </p>
                </div>
            </div>
            <div id="parts_terminator" style={{"marginBottom": "4rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"终止子 (Terminators)"}
                </h2>
                <div className="part-card sbol-terminator">
                    <div className="dna-bg-reveal">
                        {"...AATAAA...TTGACA"}
                    </div>
                    <div className="part-id-badge">
                        <i>
                            {"⊤"}
                        </i>
                        {" BBa_K4900020"}
                    </div>
                    <h3 style={{"color": "#60a3ba", "marginTop": "0", "fontSize": "1.5rem"} as CSSProperties}>
                        {"LIP2t (Lipase 2 Terminator)"}
                    </h3>
                    <p style={{"fontSize": "0.95rem", "lineHeight": "1.8"} as CSSProperties}>
                        <strong>
                            {"来源与功能："}
                        </strong>
                        {" 提取自解脂耶氏酵母胞外脂肪酶 2 (LIP2) 基因的 3' UTR 区。它具有极高的转录终止与 mRNA 聚腺苷酸化 (Poly-A) 效率，能有效防止通读 (Read-through) 现象，确保多个异源基因串联表达时的绝对绝缘性。\n                    "}
                    </p>
                </div>
            </div>
            <div id="parts_char" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"综合表征数据 (Characterization)"}
                </h2>
                <p style={{"color": "var(--igem-text-muted)", "fontSize": "1.1rem", "marginBottom": "1.5rem"} as CSSProperties}>
                    {"\n                    为验证上述元件组装后的实际运转效能，我们采用荧光蛋白 (sfGFP) 作为报告基因，并结合实时定量 PCR (RT-qPCR) 进行了转录水平与翻译水平的双重高精度表征。\n                "}
                </p>
                <div className="char-graph-container">
                    <h3 style={{"color": "#cce4e2", "marginTop": "0", "marginBottom": "1.5rem", "letterSpacing": "1px"} as CSSProperties}>
                        {"Relative Promoter Strength & In Vivo Expression Assay"}
                    </h3>
                    <div style={{"display": "flex", "gap": "2rem", "flexWrap": "wrap", "justifyContent": "center", "alignItems": "center"} as CSSProperties}>
                        <div style={{"flex": "1", "minWidth": "280px"} as CSSProperties}>
                            <img src={`${import.meta.env.BASE_URL}assets/images/wetlab/parts-char-chart1.jpg`} alt="启动子强度表征数据" style={{"width": "100%"} as CSSProperties} />
                        </div>
                        <div style={{"flex": "1", "minWidth": "280px"} as CSSProperties}>
                            <img src={`${import.meta.env.BASE_URL}assets/images/wetlab/parts-char-chart2.jpg`} alt="RT-qPCR基因表达水平验证" style={{"width": "100%"} as CSSProperties} />
                        </div>
                    </div>
                    <p style={{"color": "#60a3ba", "fontSize": "0.9rem", "marginTop": "2rem", "textAlign": "left", "borderTop": "1px solid rgba(255,255,255,0.1)", "paddingTop": "1rem"} as CSSProperties}>
                        <strong>
                            {"Figure 1."}
                        </strong>
                        {" (Left) Normalized sfGFP fluorescence intensity driven by pTEF1 and pGPD in "}
                        <i>
                            {"Y. lipolytica"}
                        </i>
                        {" during the exponential and stationary phases. pTEF1 demonstrates approximately 2.3-fold higher translation efficiency compared to pGPD. (Right) RT-qPCR quantitative analysis showing the steady-state mRNA levels of optimized CYP52A13 and CYC1.\n                    "}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
