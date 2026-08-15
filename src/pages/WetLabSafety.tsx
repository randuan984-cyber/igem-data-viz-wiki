// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/wetlab-safety.css';
import type { CSSProperties } from 'react';

export default function WetLabSafetyPage() {
  return (
<div id="page-WetLabSafety" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/wetlab/hero-bg-safety.jpg')`, "backgroundPosition": "center 20%"} as CSSProperties}>
        <h1>
            {"Safety & Ethics"}
        </h1>
        <p className="hero-sub">
            {"Responsible innovation is our core principle. We rigorously adhere to biosafety standards to ensure our zero-carbon fragrances benefit society without risk to humanity or the environment."}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#safety_lab" className="sidebar-link active">
                        {"1. 实验室安全"}
                    </a>
                </li>
                <li>
                    <a href="#safety_bio" className="sidebar-link">
                        {"2. 生物安全封控"}
                    </a>
                </li>
                <li>
                    <a href="#safety_env" className="sidebar-link">
                        {"3. 环境保护"}
                    </a>
                </li>
                <li>
                    <a href="#safety_ethics" className="sidebar-link">
                        {"4. 伦理与责任"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <p style={{"color": "var(--igem-text-muted)", "fontSize": "1.1rem", "marginBottom": "3rem", "lineHeight": "1.8"} as CSSProperties}>
                {"\n                本项目所有的实验均在湖北大学省部共建生物催化与酶工程国家重点实验室完成。我们严格遵守了 iGEM 安全委员会与所在机构的双重安全规定。\n            "}
            </p>
            <div id="safety_lab" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"实验室安全 (Lab Safety)"}
                </h2>
                <div className="igem-anim-hover-lift" style={{"display": "flex", "gap": "2rem", "flexWrap": "wrap", "padding": "2.5rem"} as CSSProperties}>
                    <div style={{"flex": "1", "minWidth": "250px"} as CSSProperties}>
                        <h3 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                            {"严格的准入与防护体系"}
                        </h3>
                        <p style={{"lineHeight": "1.8", "fontSize": "0.95rem"} as CSSProperties}>
                            {"\n                            所有团队成员在进入实验室前，均需通过长达 20 课时的实验室综合安全培训，并以满分成绩通过考核。\n                        "}
                        </p>
                        <ul style={{"lineHeight": "1.8", "fontSize": "0.95rem", "color": "var(--igem-text-main)", "paddingLeft": "1.2rem"} as CSSProperties}>
                            <li>
                                <strong>
                                    {"个人防护装备 (PPE):"}
                                </strong>
                                {" 强制穿着阻燃白大褂、丁腈手套、护目镜，并在超净台操作时佩戴口罩。"}
                            </li>
                            <li>
                                <strong>
                                    {"危化品管理:"}
                                </strong>
                                {" 项目中涉及的有机溶剂（如提取脂肪酸使用的正己烷、乙酸乙酯）必须在带有通风系统的专用化学通风橱内操作，并进行防爆存储。"}
                            </li>
                        </ul>
                    </div>
                    <div className="igem-img-zoom" style={{"flex": "1", "minWidth": "250px", "height": "220px", "borderRadius": "12px"} as CSSProperties}>
                        <img src={`${import.meta.env.BASE_URL}assets/images/wetlab/safety-ppe.jpg`} alt="团队成员穿着完整PPE进行实验" />
                    </div>
                </div>
            </div>
            <div id="safety_bio" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"生物安全封控 (Biosafety Containment)"}
                </h2>
                <p style={{"color": "var(--igem-text-muted)", "fontSize": "1.1rem", "marginBottom": "2rem"} as CSSProperties}>
                    {"针对工程菌株潜在的逃逸风险，我们在底盘选择与基因组设计上设置了多重“生物锁”。"}
                </p>
                <div className="safety-shield-box">
                    {"🛡️"}
                </div>
                <h3 style={{"textAlign": "center", "color": "var(--igem-primary)", "marginBottom": "3rem"} as CSSProperties}>
                    {"BSL-1 标准生物安全实验室"}
                </h3>
                <div className="igem-grid">
                    <div className="rm-card">
                        <div className="rm-risk-icon">
                            {"🦠"}
                        </div>
                        <h3 style={{"marginTop": "0"} as CSSProperties}>
                            {"潜在风险：致病性与感染"}
                        </h3>
                        <p style={{"color": "var(--igem-text-muted)", "fontSize": "0.95rem"} as CSSProperties}>
                            {"操作未知的致病微生物可能对实验人员及公众健康构成严重威胁。"}
                        </p>
                        <div className="rm-mitigation">
                            <h3 style={{"marginTop": "0", "color": "#fff"} as CSSProperties}>
                                {"🛡️ 安全防范协议"}
                            </h3>
                            <p style={{"fontSize": "0.95rem"} as CSSProperties}>
                                {"我们使用的底盘生物（解脂耶氏酵母与大肠杆菌 DH5α）均被世界卫生组织归类为 "}
                                <strong>
                                    {"Risk Group 1 (RG1)"}
                                </strong>
                                {"。它们对人类健康成人、动物及植物均无致病性。"}
                            </p>
                        </div>
                    </div>
                    <div className="rm-card">
                        <div className="rm-risk-icon">
                            {"🧬"}
                        </div>
                        <h3 style={{"marginTop": "0"} as CSSProperties}>
                            {"潜在风险：工程菌环境逃逸"}
                        </h3>
                        <p style={{"color": "var(--igem-text-muted)", "fontSize": "0.95rem"} as CSSProperties}>
                            {"携带重组质粒的工程菌如果意外泄漏至自然环境，可能造成未知的生态基因污染。"}
                        </p>
                        <div className="rm-mitigation">
                            <h3 style={{"marginTop": "0", "color": "#fff"} as CSSProperties}>
                                {"🛡️ 营养缺陷型“生物锁”"}
                            </h3>
                            <p style={{"fontSize": "0.95rem"} as CSSProperties}>
                                {"我们使用的是 "}
                                <strong>
                                    {"Ura3- 营养缺陷型菌株"}
                                </strong>
                                {"。这意味着一旦工程菌离开补充了尿嘧啶的特定实验室培养基，它将完全无法在自然环境中存活与繁殖，实现了物理与生物的双重封控。"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="safety_env" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"环境保护 (Environmental Protection)"}
                </h2>
                <div className="stripe-warning-board">
                    <h3 style={{"color": "#60a3ba", "marginTop": "0", "fontSize": "1.4rem"} as CSSProperties}>
                        {"实验室废弃物与发酵尾气处理标准"}
                    </h3>
                    <p style={{"lineHeight": "1.8", "fontSize": "0.95rem"} as CSSProperties}>
                        {"项目的愿景是解决环境污染，因此我们绝不容许实验室本身成为污染源："}
                    </p>
                    <ul style={{"lineHeight": "1.8", "fontSize": "0.95rem", "color": "var(--igem-text-main)"} as CSSProperties}>
                        <li>
                            <strong>
                                {"生物废液灭活："}
                            </strong>
                            {" 所有含活菌的废液（包括培养基、洗涤液）在排放前，必须加入高浓度次氯酸钠浸泡 24 小时，或置于 121°C 高压蒸汽灭菌锅中彻底灭活 30 分钟。"}
                        </li>
                        <li>
                            <strong>
                                {"棕榈油废液收集："}
                            </strong>
                            {" 未使用完的 POME（棕榈油加工废水）及萃取有机溶剂，被分类集中收集至学校危废处理站统一焚烧，严禁直接排入下水道。"}
                        </li>
                        <li>
                            <strong>
                                {"发酵罐尾气过滤："}
                            </strong>
                            {" 5L 生物反应器排出的尾气均配备有 0.22 μm 级别的除菌滤膜，确保无气溶胶污染实验室空气。"}
                        </li>
                    </ul>
                </div>
            </div>
            <div id="safety_ethics" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"伦理与责任 (Ethics)"}
                </h2>
                <div className="igem-anim-hover-lift" style={{"display": "flex", "gap": "2rem", "flexWrap": "wrap"} as CSSProperties}>
                    <div className="igem-img-zoom" style={{"flex": "1", "minWidth": "250px", "borderRadius": "12px", "height": "280px"} as CSSProperties}>
                        <img src={`${import.meta.env.BASE_URL}assets/images/wetlab/safety-ethics.jpg`} alt="讨论伦理与项目影响力" />
                    </div>
                    <div style={{"flex": "1.5", "minWidth": "250px"} as CSSProperties}>
                        <h3 style={{"color": "var(--igem-primary)", "marginTop": "0"} as CSSProperties}>
                            {"替代动物提取：零残忍 (Cruelty-Free) 的香料未来"}
                        </h3>
                        <p style={{"lineHeight": "1.8", "fontSize": "0.95rem", "marginBottom": "1rem"} as CSSProperties}>
                            {"\n                            历史上，高端的麝香类香料多从麝鹿等珍稀动物的腺体中残忍提取，引发了极大的动物伦理争议。我们的合成生物学方案提供了 100% 纯素 (Vegan)、零残忍的替代品，极大契合了现代绿色日化产业的伦理需求。\n                        "}
                        </p>
                        <h3 style={{"color": "var(--igem-primary)", "marginTop": "1rem"} as CSSProperties}>
                            {"Dual-Use (双重用途) 审查评估"}
                        </h3>
                        <p style={{"lineHeight": "1.8", "fontSize": "0.95rem"} as CSSProperties}>
                            {"\n                            在项目的顶层设计阶段，我们联合 HP (人类实践) 组咨询了生命伦理学专家。经评估，我们合成的大环内酯产物、以及所使用的所有标准化元件，均不存在被用于制造生物武器或毒害社会的“双重用途”潜在风险。我们的技术专为人类福祉与碳减排服务。\n                        "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
