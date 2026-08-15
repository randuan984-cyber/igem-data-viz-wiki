// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/wetlab-measurement.css';
import type { CSSProperties } from 'react';

export default function WetLabMeasurementPage() {
  return (
<div id="page-WetLabMeasurement" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/wetlab/hero-bg-measurement.jpg')`, "backgroundPosition": "center 50%"} as CSSProperties}>
        <h1>
            {"Measurement"}
        </h1>
        <p className="hero-sub">
            {"Robust protocols, precise instrumentation, and strict standardization. Ensuring our zero-carbon fragrance data is highly reproducible and trustworthy."}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#meas_product" className="sidebar-link active">
                        {"1. 产物定量检测"}
                    </a>
                </li>
                <li>
                    <a href="#meas_growth" className="sidebar-link">
                        {"2. 细胞生长与生物量"}
                    </a>
                </li>
                <li>
                    <a href="#meas_gene" className="sidebar-link">
                        {"3. 基因转录表达"}
                    </a>
                </li>
                <li>
                    <a href="#meas_fatty" className="sidebar-link">
                        {"4. 游离脂肪酸分析"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <p style={{"color": "var(--igem-text-muted)", "fontSize": "1.1rem", "marginBottom": "3rem", "lineHeight": "1.8"} as CSSProperties}>
                {"\n                科学的基石在于精确的测量。为了彻底验证解脂耶氏酵母合成大环内酯的能力，我们建立了一套覆盖从“基因转录”到“最终产物”的全方位、标准化的数据采集工作流。\n            "}
            </p>
            <div id="meas_product" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"产物定量检测 (Product Quantification)"}
                </h2>
                <div className="igem-anim-hover-lift" style={{"display": "flex", "gap": "2rem", "flexWrap": "wrap", "padding": "2.5rem"} as CSSProperties}>
                    <div style={{"flex": "1", "minWidth": "250px"} as CSSProperties}>
                        <h3 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                            {"气相色谱-质谱联用 (GC-MS)"}
                        </h3>
                        <p style={{"lineHeight": "1.8", "fontSize": "0.95rem"} as CSSProperties}>
                            {"\n                            大环内酯类香料具有强挥发性，极其适合 GC-MS 分析。我们采用乙酸乙酯对 5mL 发酵液进行等体积震荡萃取，离心浓缩后进样分析。\n                        "}
                        </p>
                        <p style={{"lineHeight": "1.8", "fontSize": "0.95rem"} as CSSProperties}>
                            <strong>
                                {"色谱柱参数："}
                            </strong>
                            {" HP-5MS 毛细管柱 (30m × 0.25mm × 0.25μm)。"}
                            <br />
                            <strong>
                                {"定量方法："}
                            </strong>
                            {" 采用"}
                            <strong>
                                {"内标法"}
                            </strong>
                            {"，加入已知浓度的十五烷酸作为内标物质，构建标准曲线以消除仪器波动误差。\n                        "}
                        </p>
                        <div className="meas-std-tag">
                            <i>
                                {"⚙️"}
                            </i>
                            {" iGEM Standardization: Internal Standard Calibration"}
                        </div>
                    </div>
                    <div className="meas-panel" style={{"flex": "1", "minWidth": "280px", "display": "flex", "flexDirection": "column"} as CSSProperties}>
                        <span style={{"fontFamily": "monospace", "color": "#60a3ba", "fontSize": "0.85rem"} as CSSProperties}>
                            {"> GC-MS Signal Processing... [Hover to Scan]"}
                        </span>
                        <div className="sim-chart">
                            <svg className="sim-peak-svg" viewBox="0 0 300 100">
                                <path className="sim-peak-path" d="M 0 95 C 40 95, 45 95, 50 20 C 55 95, 80 95, 120 95 C 130 95, 140 10, 150 10 C 160 10, 170 95, 180 95 C 220 95, 290 95, 300 95" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div id="meas_growth" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"细胞生长与生物量 (Cell Growth)"}
                </h2>
                <div className="igem-anim-hover-lift" style={{"display": "flex", "gap": "2rem", "flexWrap": "wrap", "flexDirection": "row-reverse", "padding": "2.5rem"} as CSSProperties}>
                    <div style={{"flex": "1", "minWidth": "250px"} as CSSProperties}>
                        <h3 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                            {"OD600 与干细胞重 (DCW)"}
                        </h3>
                        <p style={{"lineHeight": "1.8", "fontSize": "0.95rem"} as CSSProperties}>
                            {"\n                            解脂耶氏酵母由于具有二态性（可形成菌丝），单纯的 OD600 吸光度测量在发酵后期可能产生偏差。\n                        "}
                        </p>
                        <p style={{"lineHeight": "1.8", "fontSize": "0.95rem"} as CSSProperties}>
                            {"\n                            因此，我们同时采用了干细胞重 (DCW, Dry Cell Weight) 称量法。每 12 小时取样，绘制出高精度的生长曲线，以准确捕捉从"}
                            <strong>
                                {"对数生长期 (脂质积累)"}
                            </strong>
                            {" 向 "}
                            <strong>
                                {"稳定期 (次级代谢产物合成)"}
                            </strong>
                            {" 的关键拐点。\n                        "}
                        </p>
                        <div className="meas-std-tag">
                            <i>
                                {"⚙️"}
                            </i>
                            {" iGEM Standardization: Triplicate Biological Replicates"}
                        </div>
                    </div>
                    <div className="meas-panel" style={{"flex": "1", "minWidth": "280px", "display": "flex", "flexDirection": "column"} as CSSProperties}>
                        <span style={{"fontFamily": "monospace", "color": "var(--igem-secondary)", "fontSize": "0.85rem"} as CSSProperties}>
                            {"> Bioreactor OD600 Monitor... [Hover to Plot]"}
                        </span>
                        <div className="sim-chart">
                            <svg className="sim-peak-svg" viewBox="0 0 300 100">
                                <path className="sim-growth-path" d="M 0 95 C 80 95, 120 10, 200 10 C 250 10, 280 15, 300 15" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div id="meas_gene" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"基因转录表达 (Gene Expression)"}
                </h2>
                <div className="igem-anim-hover-lift" style={{"display": "flex", "gap": "2rem", "flexWrap": "wrap", "padding": "2.5rem"} as CSSProperties}>
                    <div style={{"flex": "1", "minWidth": "250px"} as CSSProperties}>
                        <h3 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                            {"实时荧光定量 PCR (qRT-PCR)"}
                        </h3>
                        <p style={{"lineHeight": "1.8", "fontSize": "0.95rem"} as CSSProperties}>
                            {"\n                            为了确证异源基因 (CYP52A13 和 CYC1) 在胞内是否成功转录且达到预期的表达强度比例，我们在诱导期提取了酵母总 RNA。\n                        "}
                        </p>
                        <p style={{"lineHeight": "1.8", "fontSize": "0.95rem"} as CSSProperties}>
                            {"\n                            采用反转录试剂盒合成 cDNA 后进行 SYBR Green qPCR。我们选取了在耶氏酵母中极其稳定的管家基因 "}
                            <i>
                                {"ACT1"}
                            </i>
                            {" (Actin) 作为内参标定。\n                        "}
                        </p>
                        <div className="meas-std-tag">
                            <i>
                                {"⚙️"}
                            </i>
                            {" iGEM Standardization: 2^-ΔΔCt Relative Quantification"}
                        </div>
                    </div>
                    <div className="meas-panel" style={{"flex": "1", "minWidth": "280px", "display": "flex", "flexDirection": "column"} as CSSProperties}>
                        <span style={{"fontFamily": "monospace", "color": "#60a3ba", "fontSize": "0.85rem"} as CSSProperties}>
                            {"> qPCR Thermal Cycler Data... [Hover to Render]"}
                        </span>
                        <div className="sim-chart">
                            <div className="sim-bar">
                            </div>
                            <div className="sim-bar">
                            </div>
                            <div className="sim-bar">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="meas_fatty" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"游离脂肪酸底物分析 (Substrate Consumption)"}
                </h2>
                <div className="igem-grid">
                    <div className="igem-anim-hover-lift" style={{"padding": "2rem"} as CSSProperties}>
                        <h3 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                            {"高效液相色谱 (HPLC)"}
                        </h3>
                        <p style={{"lineHeight": "1.8", "fontSize": "0.95rem"} as CSSProperties}>
                            {"\n                            为了精准计算碳源转化率，我们需要监控发酵培养基中棕榈油废液（POME）内主要游离脂肪酸（如棕榈酸、油酸）的降解速率。我们采用了配备有示差折光检测器 (RID) 的 HPLC 系统，流动相优化为乙腈-水等度洗脱，确保了不同碳链长度脂肪酸的基线分离。\n                        "}
                        </p>
                        <div className="igem-img-zoom" style={{"height": "250px", "marginTop": "1.5rem"} as CSSProperties}>
                            <img src={`${import.meta.env.BASE_URL}assets/images/wetlab/meas-hplc-lab.jpg`} alt="HPLC操作与脂肪酸检测" />
                        </div>
                        <span className="igem-img-caption">
                            {"Figure 1. Substrate degradation monitoring via HPLC to calculate exact molar conversion yields."}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
