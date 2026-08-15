// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/human-ihp.css';
import type { CSSProperties } from 'react';

export default function HumanIHPPage() {
  return (
<div id="page-HumanIHP" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/human/hero-bg-ihp.jpg')`, "backgroundPosition": "center 30%"} as CSSProperties}>
        <h1>
            {"整合人文实践"}
        </h1>
        <p className="hero-sub">
            {"Integrated Human Practices (iHP)"}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#ihp_research" className="sidebar-link active">
                        {"调研访谈"}
                    </a>
                </li>
                <li>
                    <a href="#ihp_ethics" className="sidebar-link">
                        {"伦理与安全分析"}
                    </a>
                </li>
                <li>
                    <a href="#ihp_interdis" className="sidebar-link">
                        {"跨学科合作"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <div id="ihp_research">
                <h2 className="section-title">
                    {"调研访谈"}
                </h2>
                <div className="ihp-interactive-card">
                    <div className="ihp-img-box">
                        <img src={`${import.meta.env.BASE_URL}assets/images/human/ihp-research.jpg`} alt="调研与访谈" />
                    </div>
                    <div className="ihp-content-box">
                        <div className="icon-radar-wrap">
                            <span>
                                {"💬"}
                            </span>
                        </div>
                        <p className="ihp-core-text">
                            {"问卷/专家访谈反馈，"}
                            <br />
                            {"科学家/医生/公众需求。"}
                        </p>
                    </div>
                </div>
            </div>
            <div id="ihp_ethics">
                <h2 className="section-title">
                    {"伦理与安全分析"}
                </h2>
                <div className="ihp-interactive-card reverse">
                    <div className="ihp-img-box">
                        <img src={`${import.meta.env.BASE_URL}assets/images/human/ihp-ethics.jpg`} alt="伦理与生物安全评估" />
                    </div>
                    <div className="ihp-content-box">
                        <div className="icon-scan-wrap">
                            {"\n                            🛡️\n                            "}
                            <div className="icon-scan-line">
                            </div>
                        </div>
                        <p className="ihp-core-text">
                            {"风险评估，"}
                            <br />
                            {"生物遏制策略，"}
                            <br />
                            {"公众沟通。"}
                        </p>
                    </div>
                </div>
            </div>
            <div id="ihp_interdis">
                <h2 className="section-title">
                    {"跨学科合作"}
                </h2>
                <div className="ihp-interactive-card">
                    <div className="ihp-img-box">
                        <img src={`${import.meta.env.BASE_URL}assets/images/human/ihp-interdis.jpg`} alt="跨学科协作与整合" />
                    </div>
                    <div className="ihp-content-box">
                        <div className="icon-pulse-wrap">
                            {"\n                            🤝\n                        "}
                        </div>
                        <p className="ihp-core-text">
                            {"与人文社科学者合作，"}
                            <br />
                            {"整合社会见解。"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
