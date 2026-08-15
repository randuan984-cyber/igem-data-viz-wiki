import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_SECTIONS } from '../siteConfig';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar">
      <NavLink
        to="/"
        className="logo"
        aria-label="China-HUBU-Wuhan Home"
        onClick={() => setMobileOpen(false)}
      >
        China-HUBU-Wuhan
      </NavLink>

      <nav className="nav-desktop" aria-label="主导航">
        {NAV_SECTIONS.map((section) =>
          section.children ? (
            <div className="nav-item nav-item-has-children" key={section.label}>
              <button
                type="button"
                className="nav-button"
                aria-haspopup="true"
                aria-expanded="false"
                onKeyDown={(event) => {
                  if (event.key === 'Escape') event.currentTarget.blur();
                }}
              >
                {section.label}
              </button>
              <ul className="dropdown-menu">
                {section.children.map((child) => (
                  <li key={child.to}>
                    <NavLink to={child.to} className={({ isActive }) => (isActive ? 'active' : '')}>
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <NavLink
              key={section.to}
              to={section.to!}
              className={({ isActive }) => `nav-item nav-link-item${isActive ? ' active' : ''}`}
            >
              {section.label}
            </NavLink>
          ),
        )}
      </nav>

      <button
        type="button"
        className="hamburger"
        aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      {mobileOpen && (
        <div className="mobile-menu">
          {NAV_SECTIONS.map((section) => (
            <div className="mobile-section" key={section.label}>
              <div className="mobile-section-title">{section.label}</div>
              {section.children ? (
                section.children.map((child) => (
                  <NavLink
                    key={child.to}
                    to={child.to}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </NavLink>
                ))
              ) : (
                <NavLink to={section.to!} onClick={() => setMobileOpen(false)}>
                  {section.label}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
