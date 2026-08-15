// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/datamodeling-results.css';
import { ModelValidationChart } from '../components/dashboards';
import type { CSSProperties } from 'react';

export default function DataModelingResultsPage() {
  return (
<div id="page-DataModelingResults" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/model/hero-bg-results.jpg')`, "backgroundPosition": "center 50%"} as CSSProperties}>
        <h1>
            {"模型结果与验证"}
        </h1>
        <p className="hero-sub">
            {"Simulation & Validation"}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#dmres" className="sidebar-link active">
                        {"模拟数据"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <div id="dmres" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"结果对比"}
                </h2>
                <ModelValidationChart />
                <div className="igem-grid" style={{"alignItems": "stretch", "marginTop": "1rem"} as CSSProperties}>
                    <div className="igem-img-zoom" style={{"borderRadius": "16px", "minHeight": "350px"} as CSSProperties}>
                        <img src={`${import.meta.env.BASE_URL}assets/images/model/model-compare-graph.jpg`} alt="实验数据与模拟数据对比分析" style={{"height": "100%"} as CSSProperties} />
                    </div>
                    <div className="model-results-card">
                        <div className="highlight-number">
                            {"30% ⇡"}
                        </div>
                        <p style={{"fontSize": "1.3rem", "fontWeight": "800", "color": "var(--igem-text-main)", "margin": "0", "letterSpacing": "1px"} as CSSProperties}>
                            {"模拟产量提升"}
                        </p>
                        <div className="css-chart-box">
                            <div className="css-bar experimental" data-label="实验数据">
                            </div>
                            <div className="css-bar simulated" data-label="模拟验证">
                            </div>
                        </div>
                        <p style={{"color": "var(--igem-text-muted)", "fontSize": "1rem", "marginTop": "2rem", "fontWeight": "500"} as CSSProperties}>
                            {"\n                            与实验数据对比分析\n                        "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
