// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/human-education.css';
import type { CSSProperties } from 'react';

export default function HumanEducationPage() {
  return (
<div id="page-HumanEducation" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/human/hero-bg-education.jpg')`, "backgroundPosition": "center 20%"} as CSSProperties}>
        <h1>
            {"教育科普"}
        </h1>
        <p className="hero-sub">
            {"Education & Public Engagement"}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#edu_activity" className="sidebar-link active">
                        {"科普活动"}
                    </a>
                </li>
                <li>
                    <a href="#edu_resource" className="sidebar-link">
                        {"教育资源开发"}
                    </a>
                </li>
                <li>
                    <a href="#edu_community" className="sidebar-link">
                        {"社区参与"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <div id="edu_activity" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"科普活动"}
                </h2>
                <div className="igem-grid">
                    <div className="edu-flip-container">
                        <div className="edu-flip-card">
                            <div className="edu-flip-front">
                                <div className="edu-icon">
                                    {"🎤"}
                                </div>
                                <h3 style={{"margin": "0", "fontSize": "1.5rem"} as CSSProperties}>
                                    {"讲座"}
                                </h3>
                            </div>
                            <div className="edu-flip-back" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/human/edu-lecture.jpg')`} as CSSProperties}>
                                <p className="edu-flip-text">
                                    {"讲座"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="edu-flip-container">
                        <div className="edu-flip-card">
                            <div className="edu-flip-front">
                                <div className="edu-icon">
                                    {"🛠️"}
                                </div>
                                <h3 style={{"margin": "0", "fontSize": "1.5rem"} as CSSProperties}>
                                    {"工作坊"}
                                </h3>
                            </div>
                            <div className="edu-flip-back" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/human/edu-workshop.jpg')`} as CSSProperties}>
                                <p className="edu-flip-text">
                                    {"工作坊"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="edu-flip-container">
                        <div className="edu-flip-card">
                            <div className="edu-flip-front">
                                <div className="edu-icon">
                                    {"🖼️"}
                                </div>
                                <h3 style={{"margin": "0", "fontSize": "1.5rem"} as CSSProperties}>
                                    {"展览"}
                                </h3>
                            </div>
                            <div className="edu-flip-back" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/human/edu-exhibition.jpg')`} as CSSProperties}>
                                <p className="edu-flip-text">
                                    {"展览等"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="edu_resource" style={{"marginBottom": "6rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"教育资源开发"}
                </h2>
                <p style={{"textAlign": "center", "color": "var(--igem-text-muted)", "fontSize": "0.9rem", "fontFamily": "monospace", "letterSpacing": "1px"} as CSSProperties}>
                    {"[ HOVER TO UNPACK RESOURCES ]"}
                </p>
                <div className="edu-stack-container">
                    <div className="edu-stack-item">
                        <i>
                            {"📖"}
                        </i>
                        {" 科普手册\n                    "}
                    </div>
                    <div className="edu-stack-item">
                        <i>
                            {"🎬"}
                        </i>
                        {" 动画视频\n                    "}
                    </div>
                    <div className="edu-stack-item">
                        <i>
                            {"🕹️"}
                        </i>
                        {" 互动工具\n                    "}
                    </div>
                </div>
            </div>
            <div id="edu_community" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"社区参与"}
                </h2>
                <div className="edu-pulse-box">
                    <div className="edu-pulse-core">
                        {"🤝"}
                    </div>
                    <h3 style={{"fontSize": "1.8rem", "color": "var(--igem-primary)", "margin": "0 0 1rem 0"} as CSSProperties}>
                        {"与学校 / 博物馆合作"}
                    </h3>
                    <p style={{"fontSize": "1.2rem", "color": "var(--igem-text-muted)", "fontWeight": "600", "margin": "0", "letterSpacing": "2px", "textTransform": "uppercase"} as CSSProperties}>
                        {"\n                        提升科学认知\n                    "}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
