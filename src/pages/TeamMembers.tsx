// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/team-members.css';
import type { CSSProperties } from 'react';

export default function TeamMembersPage() {
  return (
<div id="page-TeamMembers" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/team/hero-team-group.webp')`, "backgroundPosition": "center 25%"} as CSSProperties}>
        <h1>
            {"Meet The Team"}
        </h1>
        <p className="hero-sub">
            {"The multidisciplinary minds behind Zero Carbon Fragrances."}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#team_core" className="sidebar-link active">
                        {"核心成员 (Core Team)"}
                    </a>
                </li>
                <li>
                    <a href="#team_pi" className="sidebar-link">
                        {"指导老师 (PIs & Instructors)"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <div id="team_core" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"核心成员 (Core Team)"}
                </h2>
                <p style={{"color": "var(--igem-text-muted)", "marginBottom": "2rem", "fontSize": "1.1rem"} as CSSProperties}>
                    {"我们是一个由生物工程、计算生物学和传播学学生组成的跨学科团队。每个人都为“零碳香料”贡献了不可替代的力量。"}
                </p>
                <div className="igem-grid" style={{"gridTemplateColumns": "repeat(auto-fit, minmax(380px, 1fr))"} as CSSProperties}>
                    <div className="igem-anim-hover-lift" style={{"display": "flex", "gap": "1.5rem", "alignItems": "flex-start", "padding": "2rem"} as CSSProperties}>
                        <div className="team-avatar-box">
                            <img src={`${import.meta.env.BASE_URL}assets/images/team/member-zhangsan.jpg`} alt="张三" />
                        </div>
                        <div style={{"flex": "1"} as CSSProperties}>
                            <h3 style={{"margin": "0", "color": "var(--igem-primary)", "fontSize": "1.6rem"} as CSSProperties}>
                                {"张三"}
                            </h3>
                            <span className="member-role-badge">
                                {"队长 / 分子克隆"}
                            </span>
                            <div style={{"fontSize": "0.9rem", "color": "var(--igem-text-main)", "marginTop": "0.8rem", "lineHeight": "1.7"} as CSSProperties}>
                                <span style={{"color": "var(--igem-text-muted)"} as CSSProperties}>
                                    {"[ 大三 生物工程 ]"}
                                </span>
                                <br />
                                <strong>
                                    {"动机："}
                                </strong>
                                {" 对底盘细胞改造充满热情，希望用合成生物学解决现实世界的环境污染。"}
                                <br />
                                <strong>
                                    {"贡献："}
                                </strong>
                                {" 统筹整个项目的核心进度，设计复杂代谢通路，主导大环内酯合成关键质粒与解脂耶氏酵母的构建工作。\n                            "}
                            </div>
                        </div>
                    </div>
                    <div className="igem-anim-hover-lift" style={{"display": "flex", "gap": "1.5rem", "alignItems": "flex-start", "padding": "2rem"} as CSSProperties}>
                        <div className="team-avatar-box">
                            <img src={`${import.meta.env.BASE_URL}assets/images/team/member-lisi.jpg`} alt="李四" />
                        </div>
                        <div style={{"flex": "1"} as CSSProperties}>
                            <h3 style={{"margin": "0", "color": "var(--igem-primary)", "fontSize": "1.6rem"} as CSSProperties}>
                                {"李四"}
                            </h3>
                            <span className="member-role-badge">
                                {"湿实验副队长"}
                            </span>
                            <div style={{"fontSize": "0.9rem", "color": "var(--igem-text-main)", "marginTop": "0.8rem", "lineHeight": "1.7"} as CSSProperties}>
                                <span style={{"color": "var(--igem-text-muted)"} as CSSProperties}>
                                    {"[ 大四 生物技术 ]"}
                                </span>
                                <br />
                                <strong>
                                    {"动机："}
                                </strong>
                                {" 擅长各类分析仪器的极客，致力于将实验室的学术成果推向工业化的大规模发酵生产。"}
                                <br />
                                <strong>
                                    {"贡献："}
                                </strong>
                                {" 负责全部发酵条件的梯队优化，利用 GC-MS 进行关键产物鉴定，并系统分析棕榈油废液的转化效率。\n                            "}
                            </div>
                        </div>
                    </div>
                    <div className="igem-anim-hover-lift" style={{"display": "flex", "gap": "1.5rem", "alignItems": "flex-start", "padding": "2rem"} as CSSProperties}>
                        <div className="team-avatar-box">
                            <img src={`${import.meta.env.BASE_URL}assets/images/team/member-wangwu.jpg`} alt="王五" />
                        </div>
                        <div style={{"flex": "1"} as CSSProperties}>
                            <h3 style={{"margin": "0", "color": "var(--igem-primary)", "fontSize": "1.6rem"} as CSSProperties}>
                                {"王五"}
                            </h3>
                            <span className="member-role-badge">
                                {"建模组负责人"}
                            </span>
                            <div style={{"fontSize": "0.9rem", "color": "var(--igem-text-main)", "marginTop": "0.8rem", "lineHeight": "1.7"} as CSSProperties}>
                                <span style={{"color": "var(--igem-text-muted)"} as CSSProperties}>
                                    {"[ 大二 生物信息学 ]"}
                                </span>
                                <br />
                                <strong>
                                    {"动机："}
                                </strong>
                                {" 相信优雅的代码与精准的数学算法能够直接指导并极大加速湿实验的迭代进程。"}
                                <br />
                                <strong>
                                    {"贡献："}
                                </strong>
                                {" 构建高精度代谢网络模型 (FBA)，模拟并预测关键基因的敲除/过表达靶点，同时进行反应动力学拟合。\n                            "}
                            </div>
                        </div>
                    </div>
                    <div className="igem-anim-hover-lift" style={{"display": "flex", "gap": "1.5rem", "alignItems": "flex-start", "padding": "2rem"} as CSSProperties}>
                        <div className="team-avatar-box">
                            <img src={`${import.meta.env.BASE_URL}assets/images/team/member-zhaoliu.jpg`} alt="赵六" />
                        </div>
                        <div style={{"flex": "1"} as CSSProperties}>
                            <h3 style={{"margin": "0", "color": "var(--igem-primary)", "fontSize": "1.6rem"} as CSSProperties}>
                                {"赵六"}
                            </h3>
                            <span className="member-role-badge">
                                {"HP & 教育组长"}
                            </span>
                            <div style={{"fontSize": "0.9rem", "color": "var(--igem-text-main)", "marginTop": "0.8rem", "lineHeight": "1.7"} as CSSProperties}>
                                <span style={{"color": "var(--igem-text-muted)"} as CSSProperties}>
                                    {"[ 大三 合成生物学 ]"}
                                </span>
                                <br />
                                <strong>
                                    {"动机："}
                                </strong>
                                {" 致力于打破前沿科学的隐形壁垒，让公众深入了解零碳香料背后的硬核科技与生命伦理。"}
                                <br />
                                <strong>
                                    {"贡献："}
                                </strong>
                                {" 统筹双向公众参与、广泛的利益相关者访谈，组织编写并大规模分发了《合成生物学与香料制造》双语科普手册。\n                            "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="team_pi" className="igem-anim-hover-lift" style={{"textAlign": "center", "border": "2px dashed var(--glass-border)", "background": "transparent", "padding": "3rem"} as CSSProperties}>
                <p style={{"color": "var(--igem-text-muted)", "fontSize": "1.1rem", "fontWeight": "500", "margin": "0"} as CSSProperties}>
                    {"✦ 指导老师 (PIs) 数据预留区 ✦"}
                </p>
            </div>
        </div>
    </div>
</div>
  );
}
