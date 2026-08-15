// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/datamodeling-impl.css';
import { SensitivityDemo } from '../components/dashboards';
import type { CSSProperties } from 'react';

export default function DataModelingImplPage() {
  return (
<div id="page-DataModelingImpl" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/model/hero-bg-impl.jpg')`, "backgroundPosition": "center 20%"} as CSSProperties}>
        <h1>
            {"模型实现与参数"}
        </h1>
        <p className="hero-sub">
            {"Implementation & Parameters"}
        </p>
    </div>
    <div className="content-layout">
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#dmimpl" className="sidebar-link active">
                        {"实现细节"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <div id="dmimpl" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"代码与参数"}
                </h2>
                <SensitivityDemo />
                <div className="impl-dashboard">
                    <div className="igem-img-zoom" style={{"borderRadius": "12px", "height": "220px", "boxShadow": "0 10px 25px rgba(0,0,0,0.1)"} as CSSProperties}>
                        <img src={`${import.meta.env.BASE_URL}assets/images/model/impl-code-matrix.jpg`} alt="代码实现与参数矩阵" style={{"height": "100%"} as CSSProperties} />
                    </div>
                    <div className="impl-flow-network">
                        <div className="impl-inputs">
                            <div className="impl-node">
                                <div className="impl-node-icon">
                                    {"🗄️"}
                                </div>
                                {"\n                                KEGG / BiGG\n                            "}
                            </div>
                            <div className="impl-node">
                                <div className="impl-node-icon">
                                    {"🔬"}
                                </div>
                                {"\n                                实测值\n                            "}
                            </div>
                        </div>
                        <div style={{"display": "flex", "flexDirection": "column", "flex": "1", "gap": "6rem"} as CSSProperties}>
                            <div className="impl-link">
                            </div>
                            <div className="impl-link impl-link-bottom">
                            </div>
                        </div>
                        <div className="impl-node impl-engine">
                            <div className="impl-node-icon">
                                {"💻"}
                            </div>
                            <span style={{"fontSize": "1.4rem", "color": "var(--igem-secondary)"} as CSSProperties}>
                                {"Python / COBRApy"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
