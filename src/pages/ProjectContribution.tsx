// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/project-contribution.css';
import type { CSSProperties } from 'react';

export default function ProjectContributionPage() {
  return (
<div id="page-ProjectContribution" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/project/cont-hero-bg.webp')`, "backgroundPosition": "center 30%"} as CSSProperties}>
        <h1>
            {"Contribution"}
        </h1>
        <p className="hero-sub">
            {"Empowering the iGEM community and global fragrance industry with renewable biological solutions, standardized BioBricks, and open-source models."}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#cont_sci" className="sidebar-link active">
                        {"科学贡献 (Scientific)"}
                    </a>
                </li>
                <li>
                    <a href="#cont_app" className="sidebar-link">
                        {"应用价值 (Application)"}
                    </a>
                </li>
                <li>
                    <a href="#cont_open" className="sidebar-link">
                        {"开源共享 (Open Source)"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <div id="cont_sci" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"科学贡献 (Scientific Contribution)"}
                </h2>
                <div className="igem-anim-hover-lift" style={{"padding": "2.5rem", "marginBottom": "2rem"} as CSSProperties}>
                    <span className="cont-tag">
                        {"Chassis Engineering"}
                    </span>
                    <span className="cont-tag">
                        {"Metabolic Flux"}
                    </span>
                    <h3 style={{"color": "var(--igem-primary)", "marginTop": "1rem", "marginBottom": "1rem"} as CSSProperties}>
                        {"首创：大环内酯“零碳”生物合成通用平台"}
                    </h3>
                    <p style={{"lineHeight": "1.8", "marginBottom": "1.5rem"} as CSSProperties}>
                        {"\n                        本项目的核心科学贡献在于，"}
                        <strong>
                            {"我们在国际上首次成功将非常规底盘细胞（解脂耶氏酵母，"}
                            <i>
                                {"Y. lipolytica"}
                            </i>
                            {"）改造为高度适配大环内酯异源合成的“通用型细胞工厂平台”。"}
                        </strong>
                    </p>
                    <p style={{"lineHeight": "1.8", "color": "var(--igem-text-muted)"} as CSSProperties}>
                        {"\n                        我们突破了长链脂肪酸在真核细胞内质网上羟化与环化的空间位阻瓶颈。系统性表征了植物来源的细胞色素 P450 酶 (CYP52A13) 与内酯环化酶 (CYC1) 的协同互作机制，并揭示了它们在脂质代谢极度活跃的宿主中的最优转录比例。这一底层通路的打通，为科学界后续利用微生物合成其他复杂脂类大分子化合物（如抗生素、高级生物材料）提供了极具价值的代谢重构范式。\n                    "}
                    </p>
                </div>
                <h3 style={{"color": "var(--igem-primary)", "marginBottom": "1.5rem"} as CSSProperties}>
                    {"为 iGEM 社区打造的“大环内酯工具包” (BioBrick Toolkit)"}
                </h3>
                <div className="igem-grid" style={{"gridTemplateColumns": "repeat(auto-fit, minmax(280px, 1fr))"} as CSSProperties}>
                    <div className="igem-anim-hover-lift" style={{"padding": "1.5rem", "borderTop": "4px solid var(--igem-secondary)"} as CSSProperties}>
                        <div style={{"fontFamily": "'Courier New', monospace", "fontWeight": "bold", "color": "var(--igem-text-muted)", "marginBottom": "0.5rem"} as CSSProperties}>
                            {"[ Part: BBa_KXXXXXX1 ]"}
                        </div>
                        <h4 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                            {"高特异性 CYP 羟化模块"}
                        </h4>
                        <p style={{"fontSize": "0.9rem", "marginBottom": "0"} as CSSProperties}>
                            {"经过密码子优化的植物源 CYP52A13 序列，带有 N 端跨膜信号肽修饰，极大提升了在酵母内质网的锚定与催化效率。"}
                        </p>
                    </div>
                    <div className="igem-anim-hover-lift" style={{"padding": "1.5rem", "borderTop": "4px solid var(--igem-secondary)"} as CSSProperties}>
                        <div style={{"fontFamily": "'Courier New', monospace", "fontWeight": "bold", "color": "var(--igem-text-muted)", "marginBottom": "0.5rem"} as CSSProperties}>
                            {"[ Part: BBa_KXXXXXX2 ]"}
                        </div>
                        <h4 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                            {"内源 β-氧化无痕敲除阵列"}
                        </h4>
                        <p style={{"fontSize": "0.9rem", "marginBottom": "0"} as CSSProperties}>
                            {"高度集成化的 CRISPR-Cas9 gRNA 表达框，支持对解脂耶氏酵母 POX 基因簇进行高通量的多靶点同时敲除。"}
                        </p>
                    </div>
                    <div className="igem-anim-hover-lift" style={{"padding": "1.5rem", "borderTop": "4px solid var(--igem-secondary)"} as CSSProperties}>
                        <div style={{"fontFamily": "'Courier New', monospace", "fontWeight": "bold", "color": "var(--igem-text-muted)", "marginBottom": "0.5rem"} as CSSProperties}>
                            {"[ Part: BBa_KXXXXXX3 ]"}
                        </div>
                        <h4 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                            {"废弃油脂响应型启动子"}
                        </h4>
                        <p style={{"fontSize": "0.9rem", "marginBottom": "0"} as CSSProperties}>
                            {"我们表征了一个可被游离脂肪酸特异性强烈诱导的新型启动子，为未来利用农业废液进行动态发酵提供了强力开关。"}
                        </p>
                    </div>
                </div>
            </div>
            <div id="cont_app" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"应用价值 (Application Value)"}
                </h2>
                <div className="igem-grid">
                    <div className="igem-anim-hover-lift" style={{"textAlign": "center", "padding": "2.5rem 2rem"} as CSSProperties}>
                        <div className="cont-pulse-icon">
                            {"🌿"}
                        </div>
                        <h3 style={{"color": "var(--igem-primary)", "marginBottom": "1rem"} as CSSProperties}>
                            {"香料产业的“零碳”革命"}
                        </h3>
                        <p style={{"fontSize": "0.95rem", "textAlign": "left", "lineHeight": "1.7"} as CSSProperties}>
                            {"传统大环内酯的合成极其依赖高能耗的石油化工。我们的生物发酵法在常温常压下进行，极大降低了碳足迹，提取物气味更纯净，为全球高端香水制造业提供了一套切实可行的绿色可持续解决方案。"}
                        </p>
                    </div>
                    <div className="igem-anim-hover-lift" style={{"textAlign": "center", "padding": "2.5rem 2rem"} as CSSProperties}>
                        <div className="cont-pulse-icon">
                            {"♻️"}
                        </div>
                        <h3 style={{"color": "var(--igem-primary)", "marginBottom": "1rem"} as CSSProperties}>
                            {"棕榈油废液的高值化转化"}
                        </h3>
                        <p style={{"fontSize": "0.95rem", "textAlign": "left", "lineHeight": "1.7"} as CSSProperties}>
                            {"我们将严重污染生态的农业废弃物（棕榈油加工废水, POME）转化为每克价值不菲的黄葵内酯。此工艺逻辑具备极强延展性，未来可平移至地沟油、工业废脂处理，实现经济环保双赢。"}
                        </p>
                    </div>
                </div>
            </div>
            <div id="cont_open" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"开源共享 (Open Source)"}
                </h2>
                <div className="igem-anim-hover-lift" style={{"padding": "0", "overflow": "hidden"} as CSSProperties}>
                    <div style={{"display": "flex", "flexWrap": "wrap"} as CSSProperties}>
                        <div style={{"flex": "1", "padding": "2.5rem", "minWidth": "350px"} as CSSProperties}>
                            <h3 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                                {"构建三维度的全开源生态"}
                            </h3>
                            <p style={{"lineHeight": "1.8", "marginBottom": "1.5rem", "color": "var(--igem-text-muted)"} as CSSProperties}>
                                {"\n                                iGEM 的终极精神在于“赋予他人站在我们肩膀上的能力”。为了让全球致力于非常规底盘开发与代谢工程的科研者不走弯路，我们发布了完整的 "}
                                <strong>
                                    {"Open Zero-Carbon Matrix"}
                                </strong>
                                {"。\n                            "}
                            </p>
                            <div style={{"display": "flex", "flexDirection": "column", "gap": "1rem"} as CSSProperties}>
                                <div style={{"display": "flex", "alignItems": "flex-start", "gap": "1rem"} as CSSProperties}>
                                    <div style={{"width": "30px", "height": "30px", "background": "rgba(165,187,138,0.15)", "borderRadius": "6px", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "1.2rem"} as CSSProperties}>
                                        {"💻"}
                                    </div>
                                    <div>
                                        <strong style={{"color": "var(--igem-text-main)"} as CSSProperties}>
                                            {"模型算法 (COBRApy FBA Framework)"}
                                        </strong>
                                        <p style={{"margin": "0.2rem 0 0", "fontSize": "0.85rem", "color": "var(--igem-text-muted)"} as CSSProperties}>
                                            {"包含多源底物利用预测的 Jupyter Notebooks，参数已根据真实发酵数据校准。"}
                                        </p>
                                    </div>
                                </div>
                                <div style={{"display": "flex", "alignItems": "flex-start", "gap": "1rem"} as CSSProperties}>
                                    <div style={{"width": "30px", "height": "30px", "background": "rgba(165,187,138,0.15)", "borderRadius": "6px", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "1.2rem"} as CSSProperties}>
                                        {"🧪"}
                                    </div>
                                    <div>
                                        <strong style={{"color": "var(--igem-text-main)"} as CSSProperties}>
                                            {"标准化协议 (Yeast Engineering SOPs)"}
                                        </strong>
                                        <p style={{"margin": "0.2rem 0 0", "fontSize": "0.85rem", "color": "var(--igem-text-muted)"} as CSSProperties}>
                                            {"解脂耶氏酵母的高效化学转化法与 CRISPR 质粒拯救标准流程图。"}
                                        </p>
                                    </div>
                                </div>
                                <div style={{"display": "flex", "alignItems": "flex-start", "gap": "1rem"} as CSSProperties}>
                                    <div style={{"width": "30px", "height": "30px", "background": "rgba(165,187,138,0.15)", "borderRadius": "6px", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "1.2rem"} as CSSProperties}>
                                        {"📊"}
                                    </div>
                                    <div>
                                        <strong style={{"color": "var(--igem-text-main)"} as CSSProperties}>
                                            {"开源发酵数据集 (POME Fermentation Data)"}
                                        </strong>
                                        <p style={{"margin": "0.2rem 0 0", "fontSize": "0.85rem", "color": "var(--igem-text-muted)"} as CSSProperties}>
                                            {"公开了基于不同浓度棕榈油废液发酵的连续 120 小时 GC-MS 与生长动力学原始数据。"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div style={{"marginTop": "2rem", "display": "flex", "gap": "1rem", "flexWrap": "wrap"} as CSSProperties}>
                                <a href="https://github.com/igem-zero-carbon" target="_blank" className="btn-glow" style={{"padding": "0.6rem 1.5rem", "fontSize": "0.9rem"} as CSSProperties}>
                                    {"View Code on GitHub"}
                                </a>
                                <a href="#" className="btn-glow" style={{"background": "transparent", "border": "2px solid var(--igem-secondary)", "color": "var(--igem-secondary)", "boxShadow": "none", "padding": "0.6rem 1.5rem", "fontSize": "0.9rem"} as CSSProperties}>
                                    {"Download SOPs PDF"}
                                </a>
                            </div>
                        </div>
                        <div style={{"flex": "1", "padding": "2.5rem", "background": "#ad8b72", "display": "flex", "alignItems": "center", "justifyContent": "center", "minWidth": "300px", "borderLeft": "1px solid rgba(255,255,255,0.05)"} as CSSProperties}>
                            <div className="cont-terminal-box" style={{"width": "100%"} as CSSProperties}>
                                <div className="cont-terminal-header">
                                    <div className="cont-terminal-dot dot-red">
                                    </div>
                                    <div className="cont-terminal-dot dot-yellow">
                                    </div>
                                    <div className="cont-terminal-dot dot-green">
                                    </div>
                                    <span style={{"marginLeft": "auto", "fontSize": "0.8rem", "color": "#888"} as CSSProperties}>
                                        {"FBA_Predictor.ipynb"}
                                    </span>
                                </div>
                                <div className="cont-terminal-body">
                                    <span className="token-comment">
                                        {"# Y. lipolytica Open Source FBA Model"}
                                    </span>
                                    <br />
                                    <span className="token-keyword">
                                        {"import"}
                                    </span>
                                    {" cobra"}
                                    <br />
                                    <span className="token-keyword">
                                        {"import"}
                                    </span>
                                    {" escher"}
                                    <br />
                                    <br />
                                    <span className="token-comment">
                                        {"# Step 1: Load the zero-carbon chassis model"}
                                    </span>
                                    <br />
                                    {"\n                                    model = cobra.io.read_sbml_model("}
                                    <span className="token-string">
                                        {"\"Ylip_Core_v2.xml\""}
                                    </span>
                                    {")"}
                                    <br />
                                    <br />
                                    <span className="token-keyword">
                                        {"def"}
                                    </span>
                                    <span className="token-function">
                                        {"optimize_musk_yield"}
                                    </span>
                                    {"(model):"}
                                    <br />
                                    {"\n                                        model.objective = "}
                                    <span className="token-string">
                                        {"\"RXN_Ambrettolide\""}
                                    </span>
                                    <br />
                                    <span className="token-comment">
                                        {"# Simulate POX gene cluster knockout"}
                                    </span>
                                    <br />
                                    {"\n                                        model.reactions.get_by_id("}
                                    <span className="token-string">
                                        {"\"POX1_6\""}
                                    </span>
                                    {").knock_out()"}
                                    <br />
                                    {"\n                                        solution = model.optimize()"}
                                    <br />
                                    <span className="token-keyword">
                                        {"return"}
                                    </span>
                                    {" solution.objective_value"}
                                    <br />
                                    <br />
                                    <span className="token-comment">
                                        {"> Simulating flux distribution..."}
                                    </span>
                                    <br />
                                    <span className="token-comment">
                                        {"> Theoretical yield optimized by 1450%."}
                                    </span>
                                    <br />
                                    <span className="token-comment">
                                        {"> Ready for wet-lab validation! 🚀"}
                                    </span>
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
