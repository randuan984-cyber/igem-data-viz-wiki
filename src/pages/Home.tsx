// Auto-converted from legacy HTML fragment - content preserved.
import '../assets/css/home.css';
import type { CSSProperties } from 'react';

export default function HomePage() {
  return (
<div id="page-Home" className="page-content">
    <div className="hero-full" style={{"backgroundImage": `url('${import.meta.env.BASE_URL}assets/images/home/hero-bg-palm-forest.webp')`} as CSSProperties}>
        <h1>
            {"Zero Carbon Fragrances"}
        </h1>
        <p className="hero-sub">
            {"Producing high-value macrocyclic musks from palm oil waste — a synthetic biology solution for a greener fragrance industry."}
        </p>
        <div className="hero-buttons">
            <a href="#/project/description" className="btn-glow">
                {"Project Description"}
            </a>
            <a href="#/project/engineering" className="btn-glow">
                {"Engineering Cycle"}
            </a>
            <a href="#/project/results" className="btn-glow">
                {"Key Results"}
            </a>
        </div>
    </div>
    <div className="content-layout">
        <aside className="sidebar" id="home-sidebar">
            <ul>
                <li>
                    <a href="#home_highlights" className="sidebar-link active">
                        {"项目亮点"}
                    </a>
                </li>
                <li>
                    <a href="#home_goals" className="sidebar-link">
                        {"目标与价值"}
                    </a>
                </li>
                <li>
                    <a href="#home_video" className="sidebar-link">
                        {"故事与愿景"}
                    </a>
                </li>
            </ul>
        </aside>
        <div className="main-content">
            <div id="home_highlights" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"Project Highlights"}
                </h2>
                <p style={{"color": "var(--igem-text-muted)", "fontSize": "1.1rem", "marginBottom": "2rem"} as CSSProperties}>
                    {"\n                    We engineered "}
                    <i>
                        {"Yarrowia lipolytica"}
                    </i>
                    {" to convert waste oils into macrocyclic musks, offering a clean, renewable alternative to traditional chemical fragrance production.\n                "}
                </p>
                <div className="igem-grid">
                    <div className="igem-anim-hover-lift tint-sage">
                        <div className="igem-img-zoom" style={{"height": "160px", "marginBottom": "1.2rem"} as CSSProperties}>
                            <img src={`${import.meta.env.BASE_URL}assets/images/home/highlight-waste-pome.jpg`} alt="Waste Valorization" />
                        </div>
                        <h3 style={{"color": "var(--igem-primary)", "marginBottom": "0.5rem"} as CSSProperties}>
                            {"Waste Valorization"}
                        </h3>
                        <p style={{"fontSize": "0.95rem"} as CSSProperties}>
                            {"Converts highly polluting palm oil mill effluent (POME) into valuable fragrance precursors."}
                        </p>
                    </div>
                    <div className="igem-anim-hover-lift tint-teal">
                        <div className="igem-img-zoom" style={{"height": "160px", "marginBottom": "1.2rem"} as CSSProperties}>
                            <img src={`${import.meta.env.BASE_URL}assets/images/home/highlight-fermentation.jpg`} alt="Green Biomanufacturing" />
                        </div>
                        <h3 style={{"color": "var(--igem-primary)", "marginBottom": "0.5rem"} as CSSProperties}>
                            {"Green Biomanufacturing"}
                        </h3>
                        <p style={{"fontSize": "0.95rem"} as CSSProperties}>
                            {"Replaces harsh petrochemical synthesis routes with clean, room-temperature yeast fermentation."}
                        </p>
                    </div>
                    <div className="igem-anim-hover-lift tint-lavender">
                        <div className="igem-img-zoom" style={{"height": "160px", "marginBottom": "1.2rem"} as CSSProperties}>
                            <img src={`${import.meta.env.BASE_URL}assets/images/home/highlight-perfume.jpg`} alt="High-Value Musks" />
                        </div>
                        <h3 style={{"color": "var(--igem-primary)", "marginBottom": "0.5rem"} as CSSProperties}>
                            {"High-Value Musks"}
                        </h3>
                        <p style={{"fontSize": "0.95rem"} as CSSProperties}>
                            {"Producing top-tier perfumery ingredients: Cyclopentadecanolide and Ambrettolide."}
                        </p>
                    </div>
                </div>
            </div>
            <div id="home_goals" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"What We Aim to Achieve"}
                </h2>
                <div className="igem-grid">
                    <div className="igem-anim-hover-lift tint-blush" style={{"textAlign": "center", "padding": "2.5rem 1.5rem"} as CSSProperties}>
                        <img src={`${import.meta.env.BASE_URL}assets/images/home/icon-sustainability.jpg`} alt="Sustainable" style={{"width": "80px", "height": "80px", "borderRadius": "50%", "margin": "0 auto 1.5rem", "border": "4px solid var(--igem-bg-light)", "boxShadow": "var(--glass-shadow)"} as CSSProperties} />
                        <h3 style={{"color": "var(--igem-primary)"} as CSSProperties}>
                            {"Sustainable Production"}
                        </h3>
                        <p style={{"fontSize": "0.95rem"} as CSSProperties}>
                            {"Zero-waste bioprocess using agricultural residues."}
                        </p>
                    </div>
                    <div className="igem-anim-hover-lift tint-cream" style={{"textAlign": "center", "padding": "2.5rem 1.5rem"} as CSSProperties}>
                        <img src={`${import.meta.env.BASE_URL}assets/images/home/icon-carbon-reduction.jpg`} alt="Carbon Reduction" style={{"width": "80px", "height": "80px", "borderRadius": "50%", "margin": "0 auto 1.5rem", "border": "4px solid var(--igem-bg-light)", "boxShadow": "var(--glass-shadow)"} as CSSProperties} />
                        <h3 style={{"color": "var(--igem-primary)"} as CSSProperties}>
                            {"Carbon Reduction"}
                        </h3>
                        <p style={{"fontSize": "0.95rem"} as CSSProperties}>
                            {"Lower CO2 footprint compared to petrochemical routes."}
                        </p>
                    </div>
                    <div className="igem-anim-hover-lift tint-mist" style={{"textAlign": "center", "padding": "2.5rem 1.5rem"} as CSSProperties}>
                        <img src={`${import.meta.env.BASE_URL}assets/images/home/icon-open-science.jpg`} alt="Open Science" style={{"width": "80px", "height": "80px", "borderRadius": "50%", "margin": "0 auto 1.5rem", "border": "4px solid var(--igem-bg-light)", "boxShadow": "var(--glass-shadow)"} as CSSProperties} />
                        <h3 style={{"color": "var(--igem-primary)"} as CSSProperties}>
                            {"Open Science"}
                        </h3>
                        <p style={{"fontSize": "0.95rem"} as CSSProperties}>
                            {"Sharing all BioBricks and protocols with the iGEM community."}
                        </p>
                    </div>
                </div>
            </div>
            <div id="home_video" style={{"marginBottom": "5rem"} as CSSProperties}>
                <h2 className="section-title">
                    {"Watch Our Story"}
                </h2>
                <div className="igem-anim-hover-lift tint-mist" style={{"padding": "1rem"} as CSSProperties}>
                    <div className="video-shell" style={{"height": "400px", "borderRadius": "12px"} as CSSProperties}>
                        <video
                            controls
                            playsInline
                            preload="metadata"
                            aria-label="Zero Carbon Fragrances 项目宣传视频"
                            src={`${import.meta.env.BASE_URL}assets/images/home/1.mp4`}
                        >
                            {"您的浏览器不支持 HTML5 视频播放。"}
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
