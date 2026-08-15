import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-nav-row">
          <Link to="/">Home</Link>
          <span className="sep">·</span>
          <Link to="/team/members">Team</Link>
          <span className="sep">·</span>
          <Link to="/project/description">Project</Link>
          <span className="sep">·</span>
          <Link to="/wetlab/description">Wet Lab</Link>
          <span className="sep">·</span>
          <Link to="/modeling/background">Data Modeling</Link>
          <span className="sep">·</span>
          <Link to="/human/ihp">Human Practices</Link>
        </div>
        <div className="footer-license">
          © 2025 China-HUBU-Wuhan · Content on this site is licensed under a Creative Commons
          Attribution 4.0 International license.
        </div>
        <div className="footer-repo">
          Repository:{' '}
          <a href="https://gitlab.igem.org/2025/china-hubu-wuhan" target="_blank" rel="noreferrer">
            gitlab.igem.org/2025/china-hubu-wuhan
          </a>
        </div>
        <div className="footer-school">
          HUBU · Wuhan · China
          <br />
          Hubei University &amp; China-HUBU-Wuhan iGEM Team
        </div>
        <div className="footer-social">
          <a href="#">Twitter</a>
          <a href="#">Bilibili</a>
          <a href="#">YouTube</a>
          <a href="#">WeChat</a>
        </div>
      </div>
    </footer>
  );
}
