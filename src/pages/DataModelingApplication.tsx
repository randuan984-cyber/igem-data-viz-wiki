// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/datamodeling-application.css';
import { MarketValueChart } from '../components/dashboards';
import type { CSSProperties } from 'react';

export default function DataModelingApplicationPage() {
  return (
<div id="page-DataModelingApplication" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/model/hero-bg-application.jpg')`, "backgroundPosition": "center 30%"} as CSSProperties}>
        <h1>
            {"模型应用与意义"}
        </h1>
        <p className="hero-sub">
            {"Application & Significance"}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#dmapp" className="sidebar-link active">
                        {"优化与贡献"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <div id="dmapp" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"优化与贡献"}
                </h2>
                <MarketValueChart />
                <div className="app-card-grid">
                    <div className="app-card">
                        <div className="app-image-wrapper">
                            <img src={`${import.meta.env.BASE_URL}assets/images/model/app-ferment.jpg`} alt="指导发酵条件" />
                        </div>
                        <div className="app-icon-container">
                            {"🧪"}
                        </div>
                        <h3 style={{"color": "var(--igem-primary)", "margin": "0 0 0.5rem 0", "fontSize": "1.3rem"} as CSSProperties}>
                            {"指导发酵条件"}
                        </h3>
                    </div>
                    <div className="app-card">
                        <div className="app-image-wrapper">
                            <img src={`${import.meta.env.BASE_URL}assets/images/model/app-target.jpg`} alt="预测最优基因靶点" />
                        </div>
                        <div className="app-icon-container">
                            {"🎯"}
                        </div>
                        <h3 style={{"color": "var(--igem-primary)", "margin": "0 0 0.5rem 0", "fontSize": "1.3rem"} as CSSProperties}>
                            {"预测最优基因靶点"}
                        </h3>
                    </div>
                    <div className="app-card">
                        <div className="app-image-wrapper">
                            <img src={`${import.meta.env.BASE_URL}assets/images/model/app-opensource.jpg`} alt="开源助力iGEM" />
                        </div>
                        <div className="app-icon-container">
                            {"🌐"}
                        </div>
                        <h3 style={{"color": "var(--igem-primary)", "margin": "0 0 0.5rem 0", "fontSize": "1.3rem"} as CSSProperties}>
                            {"开源助力 iGEM"}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
