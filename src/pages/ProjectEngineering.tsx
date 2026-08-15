// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/project-engineering.css';
import type { CSSProperties } from 'react';

export default function ProjectEngineeringPage() {
  return (
<div id="page-ProjectEngineering" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/project/eng-hero-bg.webp')`, "backgroundPosition": "center 40%"} as CSSProperties}>
        <h1>
            {"Engineering Success"}
        </h1>
        <p className="hero-sub">
            {"Through rigorous Design-Build-Test-Learn (DBTL) cycles, we systematically optimized Yarrowia lipolytica into a robust cell factory for macrocyclic musks."}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#eng_pathway" className="sidebar-link active">
                        {"1. 代谢通路设计"}
                    </a>
                </li>
                <li>
                    <a href="#eng_strain" className="sidebar-link">
                        {"2. 菌株改造策略"}
                    </a>
                </li>
                <li>
                    <a href="#eng_dbtl" className="sidebar-link">
                        {"3. DBTL 工程周期"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <div id="eng_pathway" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"代谢通路设计 (Pathway Design)"}
                </h2>
                <div className="igem-anim-hover-lift" style={{"padding": "2.5rem"} as CSSProperties}>
                    <p style={{"fontSize": "1.1rem", "lineHeight": "1.8", "marginBottom": "1.5rem"} as CSSProperties}>
                        {"\n                        为了将棕榈油废液中的长链脂肪酸转化为高价值的大环内酯，我们从零开始重构了酵母的代谢网络。传统路径面临着内源 β-氧化途径的严重底物竞争问题。\n                    "}
                    </p>
                    <ul style={{"lineHeight": "2", "color": "var(--igem-text-main)", "marginBottom": "2rem", "paddingLeft": "1.5rem"} as CSSProperties}>
                        <li>
                            <strong>
                                {"引入异源关键酶："}
                            </strong>
                            {" 我们成功异源表达了植物来源的高度特异性细胞色素 P450 酶 "}
                            <span className="eng-gene-tag">
                                {"CYP52A13"}
                            </span>
                            {" 以及配套的内酯环化酶 "}
                            <span className="eng-gene-tag">
                                {"CYC1"}
                            </span>
                            {"，打通了“脂肪酸 → ω-羟基脂肪酸 → 大环内酯”的核心合成流。"}
                        </li>
                        <li>
                            <strong>
                                {"阻断竞争路径："}
                            </strong>
                            {" 通过敲除内源脂质降解相关的 POX 基因簇（阻断 β-氧化），将碳素流动最大程度地导向目标产物合成。"}
                        </li>
                    </ul>
                    <div className="igem-img-zoom" style={{"borderRadius": "16px"} as CSSProperties}>
                        <img src={`${import.meta.env.BASE_URL}assets/images/project/eng-pathway-design.webp`} alt="大环内酯异源合成代谢通路" />
                    </div>
                    <span className="igem-img-caption">
                        {"Figure 1. Rational design of the macrocyclic musk biosynthetic pathway in Y. lipolytica."}
                    </span>
                </div>
            </div>
            <div id="eng_strain" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"菌株改造策略 (Strain Engineering)"}
                </h2>
                <div className="igem-grid" style={{"alignItems": "center"} as CSSProperties}>
                    <div className="igem-anim-hover-lift" style={{"padding": "2rem"} as CSSProperties}>
                        <h3 style={{"color": "var(--igem-primary)", "marginBottom": "1rem"} as CSSProperties}>
                            {"CRISPR-Cas9 介导的精准整合"}
                        </h3>
                        <p style={{"lineHeight": "1.8", "marginBottom": "1rem"} as CSSProperties}>
                            {"\n                            我们没有采用传统的不稳定游离质粒，而是开发了一套适配解脂耶氏酵母的 CRISPR-Cas9 多基因共表达系统。\n                        "}
                        </p>
                        <p style={{"lineHeight": "1.8"} as CSSProperties}>
                            {"\n                            利用强组成型启动子 "}
                            <span className="eng-gene-tag">
                                {"TEF1p"}
                            </span>
                            {" 和 "}
                            <span className="eng-gene-tag">
                                {"GPDp"}
                            </span>
                            {" 驱动关键基因簇，并结合 URA3 营养缺陷型筛选标记，我们实现了目标片段在染色体 rDNA 区域的多拷贝稳定整合。这一策略使后期的发酵产量提高了 300% 以上。\n                        "}
                        </p>
                    </div>
                    <div className="igem-img-zoom" style={{"height": "100%", "minHeight": "300px", "borderRadius": "20px"} as CSSProperties}>
                        <img src={`${import.meta.env.BASE_URL}assets/images/project/eng-crispr-plasmid.jpg`} alt="CRISPR质粒构建图谱" style={{"height": "100%"} as CSSProperties} />
                    </div>
                </div>
                <span className="igem-img-caption">
                    {"Figure 2. Plasmids construction and CRISPR-Cas9 mediated multi-copy integration strategy."}
                </span>
            </div>
            <div id="eng_dbtl" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"DBTL 工程周期 (The DBTL Cycle)"}
                </h2>
                <p style={{"color": "var(--igem-text-muted)", "fontSize": "1.1rem"} as CSSProperties}>
                    {"合成生物学的核心在于迭代优化。通过三轮完整的 Design-Build-Test-Learn 循环，我们最终获得了具备工业应用潜质的超级菌株。"}
                </p>
                <div className="dbtl-timeline">
                    <div className="dbtl-step">
                        <div className="dbtl-card">
                            <span className="dbtl-letter">
                                {"D"}
                            </span>
                            <h3 style={{"color": "var(--igem-primary)", "fontSize": "1.6rem", "marginTop": "0"} as CSSProperties}>
                                {"1. Design (设计)"}
                            </h3>
                            <p>
                                <strong>
                                    {"靶点预测："}
                                </strong>
                                {" 结合干实验组构建的 FBA 代谢网络模型 (COBRApy)，我们计算机模拟了不同基因操作下的通量分布，精准定位了限制环十五内酯合成的关键代谢瓶颈。"}
                            </p>
                            <p>
                                <strong>
                                    {"元件选择："}
                                </strong>
                                {" 查阅 iGEM Registry 标准元件库，设计了带有特异性前导肽的密码子优化版环化酶序列，以增强其在内质网膜上的定位效率。"}
                            </p>
                        </div>
                    </div>
                    <div className="dbtl-step">
                        <div className="dbtl-card">
                            <span className="dbtl-letter">
                                {"B"}
                            </span>
                            <h3 style={{"color": "var(--igem-primary)", "fontSize": "1.6rem", "marginTop": "0"} as CSSProperties}>
                                {"2. Build (构建)"}
                            </h3>
                            <div style={{"display": "flex", "gap": "1.5rem", "flexWrap": "wrap"} as CSSProperties}>
                                <div style={{"flex": "1", "minWidth": "200px"} as CSSProperties}>
                                    <p>
                                        <strong>
                                            {"质粒组装："}
                                        </strong>
                                        {" 使用 Gibson Assembly 无缝克隆技术，在两周内完成了包含启动子、靶基因和终止子的 4 个大型表达框的拼接。"}
                                    </p>
                                    <p>
                                        <strong>
                                            {"菌株转化："}
                                        </strong>
                                        {" 采用醋酸锂/PEG 化学转化法，成功将构建好的大片段导入野生型解脂耶氏酵母，并通过 PCR 测序验证了基因组的精准敲入。"}
                                    </p>
                                </div>
                                <div className="igem-img-zoom" style={{"flex": "1", "minWidth": "200px", "maxHeight": "180px", "borderRadius": "12px"} as CSSProperties}>
                                    <img src={`${import.meta.env.BASE_URL}assets/images/project/eng-build-petridish.jpg`} alt="培养皿筛选" style={{"height": "100%"} as CSSProperties} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dbtl-step">
                        <div className="dbtl-card">
                            <span className="dbtl-letter">
                                {"T"}
                            </span>
                            <h3 style={{"color": "var(--igem-primary)", "fontSize": "1.6rem", "marginTop": "0"} as CSSProperties}>
                                {"3. Test (测试)"}
                            </h3>
                            <p>
                                <strong>
                                    {"发酵验证："}
                                </strong>
                                {" 将工程菌株接入以棕榈油提取物为单一碳源的 500mL 摇瓶中进行初步发酵。持续监测 120 小时的 OD600 生长曲线与游离脂肪酸的消耗率。"}
                            </p>
                            <p>
                                <strong>
                                    {"产物分析："}
                                </strong>
                                {" 对发酵液进行有机溶剂萃取，通过高效气相色谱-质谱联用仪 (GC-MS) 实现了对环十五内酯和黄葵内酯痕量级别的精准定性与定量分析。"}
                            </p>
                        </div>
                    </div>
                    <div className="dbtl-step">
                        <div className="dbtl-card">
                            <span className="dbtl-letter">
                                {"L"}
                            </span>
                            <h3 style={{"color": "var(--igem-primary)", "fontSize": "1.6rem", "marginTop": "0"} as CSSProperties}>
                                {"4. Learn (学习与迭代)"}
                            </h3>
                            <div style={{"display": "flex", "gap": "1.5rem", "flexWrap": "wrap"} as CSSProperties}>
                                <div className="igem-img-zoom" style={{"flex": "1", "minWidth": "200px", "maxHeight": "180px", "borderRadius": "12px"} as CSSProperties}>
                                    <img src={`${import.meta.env.BASE_URL}assets/images/project/eng-learn-chart.jpg`} alt="数据分析图表" style={{"height": "100%"} as CSSProperties} />
                                </div>
                                <div style={{"flex": "1", "minWidth": "200px"} as CSSProperties}>
                                    <p>
                                        <strong>
                                            {"结果反馈："}
                                        </strong>
                                        {" 首轮测试发现，尽管产物成功生成，但中间体 ω-羟基脂肪酸大量积累，表明环化步骤 (CYC1) 的表达强度不足。"}
                                    </p>
                                    <p>
                                        <strong>
                                            {"优化策略："}
                                        </strong>
                                        {" 我们将这一结果反馈至 Design 阶段，更换了更强的复合启动子，并增加了 CYC1 的拷贝数。在第二轮 DBTL 循环中，目标内酯产率成功飙升了 4.2 倍！"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
