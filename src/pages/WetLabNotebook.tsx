// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/wetlab-notebook.css';
import type { CSSProperties } from 'react';

export default function WetLabNotebookPage() {
  return (
<div id="page-WetLabNotebook" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/wetlab/hero-bg-notebook.jpg')`, "backgroundPosition": "center 30%"} as CSSProperties}>
        <h1>
            {"Lab Notebook"}
        </h1>
        <p className="hero-sub">
            {"The unvarnished truth of our synthetic biology journey. Triumphs, failures, and the rigorous daily records that paved the way to zero-carbon fragrances."}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#month_april" className="sidebar-link active">
                        {"April 2025: 构建与克隆"}
                    </a>
                </li>
                <li>
                    <a href="#month_may" className="sidebar-link">
                        {"May 2025: 转化与表型"}
                    </a>
                </li>
                <li>
                    <a href="#month_june" className="sidebar-link">
                        {"June 2025: 发酵与测试"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <p style={{"color": "var(--igem-text-muted)", "fontSize": "1.1rem", "marginBottom": "3rem", "lineHeight": "1.8"} as CSSProperties}>
                {"\n                实验记录是我们项目最宝贵的财富。在这里，你可以看到每一个质粒是如何被拼凑，每一次突发的杂菌污染是如何被解决，以及我们在深夜守在发酵罐旁获取第一手数据的心路历程。\n            "}
            </p>
            <div id="month_april" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"April 2025: 构建与克隆"}
                </h2>
                <div className="notebook-timeline">
                    <div className="notebook-entry">
                        <div className="notebook-marker">
                        </div>
                        <div className="notebook-date">
                            {"2025.04.10"}
                        </div>
                        <div className="notebook-card">
                            <div style={{"display": "flex", "gap": "2rem", "flexWrap": "wrap", "alignItems": "flex-start"} as CSSProperties}>
                                <div style={{"flex": "2", "minWidth": "250px"} as CSSProperties}>
                                    <div style={{"marginBottom": "1rem"} as CSSProperties}>
                                        <span className="log-tag tag-op">
                                            {"PCR & 酶切"}
                                        </span>
                                        <span className="log-tag tag-success">
                                            {"Gibson Assembly"}
                                        </span>
                                    </div>
                                    <h3 style={{"marginTop": "0", "color": "var(--igem-text-main)"} as CSSProperties}>
                                        {"核心大环内酯表达载体构建"}
                                    </h3>
                                    <p style={{"fontSize": "0.95rem", "lineHeight": "1.8", "color": "var(--igem-text-muted)"} as CSSProperties}>
                                        <strong>
                                            {"操作："}
                                        </strong>
                                        {" 利用 Q5 高保真酶扩增了密码子优化的 CYP52A13 与 CYC1 基因。骨架载体 pYALI 经 XhoI 和 BamHI 双酶切线性化。随后进行了 5 片段的 Gibson 无缝组装。"}
                                        <br />
                                        <strong>
                                            {"结果："}
                                        </strong>
                                        {" 转化大肠杆菌 DH5α 后，涂布含 Amp 的 LB 平板，置于 37°C 培养箱过夜。"}
                                        <br />
                                        <strong>
                                            {"次日计划："}
                                        </strong>
                                        {" 挑选单克隆进行 Colony PCR 验证。\n                                    "}
                                    </p>
                                </div>
                                <div style={{"flex": "1", "minWidth": "200px"} as CSSProperties}>
                                    <img src={`${import.meta.env.BASE_URL}assets/images/wetlab/note-gel-0410.jpg`} alt="PCR凝胶电泳验证" className="notebook-photo" />
                                    <p style={{"textAlign": "center", "fontFamily": "'Kalam', cursive", "fontSize": "0.9rem", "marginTop": "0.5rem", "color": "#666"} as CSSProperties}>
                                        {"Gel checking for inserts."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="notebook-entry">
                        <div className="notebook-marker">
                        </div>
                        <div className="notebook-date">
                            {"2025.04.12"}
                        </div>
                        <div className="notebook-card">
                            <div style={{"marginBottom": "1rem"} as CSSProperties}>
                                <span className="log-tag tag-op">
                                    {"Colony PCR"}
                                </span>
                                <span className="log-tag tag-warn">
                                    {"Troubleshooting"}
                                </span>
                            </div>
                            <h3 style={{"marginTop": "0", "color": "var(--igem-text-main)"} as CSSProperties}>
                                {"菌落 PCR 验证假阳性率偏高"}
                            </h3>
                            <p style={{"fontSize": "0.95rem", "lineHeight": "1.8", "color": "var(--igem-text-muted)"} as CSSProperties}>
                                <strong>
                                    {"问题现象："}
                                </strong>
                                {" 挑取了 24 个单克隆进行 PCR，电泳结果显示仅有 3 个克隆出现了预期的 4.2kb 目的条带，其余均为假阳性。"}
                                <br />
                                <strong>
                                    {"分析原因："}
                                </strong>
                                {" Gibson 反应的同源臂设计（20bp）可能过短，导致了非特异性退火。"}
                                <br />
                                <strong>
                                    {"解决方案："}
                                </strong>
                                {" 将正确的 3 个克隆送去 Sanger 测序。如果测序正确，继续推进；同时重新设计带有 35bp 同源臂的引物作为 Plan B。\n                            "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="month_may" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"May 2025: 转化与表型"}
                </h2>
                <div className="notebook-timeline">
                    <div className="notebook-entry">
                        <div className="notebook-marker">
                        </div>
                        <div className="notebook-date">
                            {"2025.05.05"}
                        </div>
                        <div className="notebook-card">
                            <div style={{"display": "flex", "gap": "2rem", "flexWrap": "wrap", "alignItems": "flex-start"} as CSSProperties}>
                                <div style={{"flex": "1", "minWidth": "200px"} as CSSProperties}>
                                    <img src={`${import.meta.env.BASE_URL}assets/images/wetlab/note-plate-0505.jpg`} alt="酵母转化涂布" className="notebook-photo tilt-right" />
                                    <p style={{"textAlign": "center", "fontFamily": "'Kalam', cursive", "fontSize": "0.9rem", "marginTop": "0.5rem", "color": "#666"} as CSSProperties}>
                                        {"Yeast colonies on SC-Ura plate!"}
                                    </p>
                                </div>
                                <div style={{"flex": "2", "minWidth": "250px"} as CSSProperties}>
                                    <div style={{"marginBottom": "1rem"} as CSSProperties}>
                                        <span className="log-tag tag-op">
                                            {"Yeast Transformation"}
                                        </span>
                                        <span className="log-tag tag-success">
                                            {"Success"}
                                        </span>
                                    </div>
                                    <h3 style={{"marginTop": "0", "color": "var(--igem-text-main)"} as CSSProperties}>
                                        {"酵母化转与长出单克隆！"}
                                    </h3>
                                    <p style={{"fontSize": "0.95rem", "lineHeight": "1.8", "color": "var(--igem-text-muted)"} as CSSProperties}>
                                        <strong>
                                            {"操作："}
                                        </strong>
                                        {" 按照改良版的 "}
                                        <i>
                                            {"Yarrowia lipolytica"}
                                        </i>
                                        {" 醋酸锂-PEG 法，将测序正确的线性化整合型质粒转化入 POX 敲除型底盘菌株。涂布于 SC-Ura 缺陷培养基，28°C 培养了整整三天。"}
                                        <br />
                                        <strong>
                                            {"激动人心的结果："}
                                        </strong>
                                        {" 今早打开培养箱，成功看到了分布均匀的白色单克隆酵母！这标志着异源大环内酯通路已被成功导入。\n                                    "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="month_june" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"June 2025: 发酵与测试"}
                </h2>
                <div className="notebook-timeline">
                    <div className="notebook-entry">
                        <div className="notebook-marker">
                        </div>
                        <div className="notebook-date">
                            {"2025.06.15"}
                        </div>
                        <div className="notebook-card">
                            <div style={{"marginBottom": "1rem"} as CSSProperties}>
                                <span className="log-tag tag-op">
                                    {"Fermentation"}
                                </span>
                                <span className="log-tag tag-op">
                                    {"GC-MS"}
                                </span>
                                <span className="log-tag tag-success">
                                    {"Milestone"}
                                </span>
                            </div>
                            <h3 style={{"marginTop": "0", "color": "var(--igem-text-main)"} as CSSProperties}>
                                {"首次检出黄葵内酯产物！"}
                            </h3>
                            <p style={{"fontSize": "0.95rem", "lineHeight": "1.8", "color": "var(--igem-text-muted)"} as CSSProperties}>
                                <strong>
                                    {"操作："}
                                </strong>
                                {" 收集 5L 发酵罐中运行了 120h 的发酵液。采用正己烷进行液液萃取，随后上机进行气相色谱-质谱 (GC-MS) 检测。"}
                                <br />
                                <strong>
                                    {"结果分析："}
                                </strong>
                                {" 在质谱图保留时间 15.8 min 处，观察到了与标准品完全一致的特征峰！虽然初次定量的浓度仅为 32 mg/L，但这证实了我们的“零碳香料细胞工厂”概念是完全可行的！"}
                                <br />
                                <strong>
                                    {"后续："}
                                </strong>
                                {" 将立即启动 C/N 比优化的正交试验，力求将产量提升一个数量级。\n                            "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
