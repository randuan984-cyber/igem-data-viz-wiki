// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/datamodeling-assumptions.css';
import { AssumptionsRadar } from '../components/dashboards';
import type { CSSProperties } from 'react';

export default function DataModelingAssumptionsPage() {
  return (
<div id="page-DataModelingAssumptions" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/model/hero-bg-assumptions.jpg')`, "backgroundPosition": "center 40%"} as CSSProperties}>
        <h1>
            {"模型设计与假设"}
        </h1>
        <p className="hero-sub">
            {"Design & Assumptions"}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#dmas" className="sidebar-link active">
                        {"假设与算法"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <div id="dmas" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"数学模型与核心假设"}
                </h2>
                <AssumptionsRadar />
                <div className="assumptions-network">
                    <div className="assumption-node">
                        <div className="node-icon">
                            {"🐍"}
                        </div>
                        <div className="node-content">
                            <h3 className="node-title">
                                {"COBRApy"}
                            </h3>
                            <span style={{"color": "var(--igem-text-muted)", "fontSize": "0.9rem", "fontWeight": "600"} as CSSProperties}>
                                {"(约束基础重建与分析框架)"}
                            </span>
                        </div>
                        <div className="node-image">
                            <img src={`${import.meta.env.BASE_URL}assets/images/model/asmp-cobrapy.jpg`} alt="COBRApy 框架" />
                        </div>
                    </div>
                    <div className="assumption-node">
                        <div className="node-icon">
                            {"📊"}
                        </div>
                        <div className="node-content">
                            <h3 className="node-title">
                                {"FBA分析"}
                            </h3>
                            <span style={{"color": "var(--igem-text-muted)", "fontSize": "0.9rem", "fontWeight": "600"} as CSSProperties}>
                                {"(通量平衡分析 / Flux Balance Analysis)"}
                            </span>
                        </div>
                        <div className="node-image">
                            <img src={`${import.meta.env.BASE_URL}assets/images/model/asmp-fba.jpg`} alt="FBA 分析图表" />
                        </div>
                    </div>
                    <div className="assumption-node">
                        <div className="node-icon">
                            {"⚖️"}
                        </div>
                        <div className="node-content">
                            <h3 className="node-title">
                                {"稳态假设"}
                            </h3>
                            <span style={{"color": "var(--igem-text-muted)", "fontSize": "0.9rem", "fontWeight": "600"} as CSSProperties}>
                                {"(Steady-State Assumption)"}
                            </span>
                        </div>
                        <div className="node-image">
                            <img src={`${import.meta.env.BASE_URL}assets/images/model/asmp-steady.jpg`} alt="稳态假设图解" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
