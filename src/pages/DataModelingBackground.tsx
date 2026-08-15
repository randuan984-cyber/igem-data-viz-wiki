// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/datamodeling-background.css';
import { WasteImpactChart } from '../components/dashboards';
import type { CSSProperties } from 'react';

export default function DataModelingBackgroundPage() {
  return (
<div id="page-DataModelingBackground" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/model/hero-bg-background.jpg')`, "backgroundPosition": "center 30%"} as CSSProperties}>
        <h1>
            {"模型背景与目的"}
        </h1>
        <p className="hero-sub">
            {"Background & Objective"}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#dmbg_content" className="sidebar-link active">
                        {"说明"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <div id="dmbg_content" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"问题与目的"}
                </h2>
                <WasteImpactChart />
                <div className="igem-grid" style={{"gridTemplateColumns": "repeat(auto-fit, minmax(300px, 1fr))", "alignItems": "stretch", "marginTop": "1rem"} as CSSProperties}>
                    <div className="igem-img-zoom" style={{"borderRadius": "16px", "boxShadow": "0 10px 30px rgba(0,0,0,0.1)", "minHeight": "300px"} as CSSProperties}>
                        <img src={`${import.meta.env.BASE_URL}assets/images/model/bg-prediction.jpg`} alt="基因表达与代谢预测视窗" style={{"height": "100%"} as CSSProperties} />
                    </div>
                    <div className="cyber-target-box">
                        <div className="target-corners">
                        </div>
                        <div className="target-corners-inner">
                        </div>
                        <div style={{"fontSize": "3.5rem", "marginBottom": "1.5rem", "filter": "drop-shadow(0 0 15px rgba(165,187,138,0.45))"} as CSSProperties}>
                            {"\n                            👁️‍🗨️\n                        "}
                        </div>
                        <p className="core-text">
                            {"预测基因表达与代谢动态，"}
                            <br />
                            {"指导实验设计。"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
