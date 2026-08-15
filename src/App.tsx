import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PageIntroVideo from './components/PageIntroVideo';
import { PAGE_TITLES } from './siteConfig';

const Home = lazy(() => import('./pages/Home'));
const TeamMembers = lazy(() => import('./pages/TeamMembers'));
const TeamAttributions = lazy(() => import('./pages/TeamAttributions'));
const ProjectDescription = lazy(() => import('./pages/ProjectDescription'));
const ProjectEngineering = lazy(() => import('./pages/ProjectEngineering'));
const ProjectResults = lazy(() => import('./pages/ProjectResults'));
const ProjectContribution = lazy(() => import('./pages/ProjectContribution'));
const WetLabDescription = lazy(() => import('./pages/WetLabDescription'));
const WetLabDesign = lazy(() => import('./pages/WetLabDesign'));
const WetLabParts = lazy(() => import('./pages/WetLabParts'));
const WetLabMeasurement = lazy(() => import('./pages/WetLabMeasurement'));
const WetLabNotebook = lazy(() => import('./pages/WetLabNotebook'));
const WetLabSafety = lazy(() => import('./pages/WetLabSafety'));
const ModelingBackground = lazy(() => import('./pages/DataModelingBackground'));
const ModelingAssumptions = lazy(() => import('./pages/DataModelingAssumptions'));
const ModelingImpl = lazy(() => import('./pages/DataModelingImpl'));
const ModelingResults = lazy(() => import('./pages/DataModelingResults'));
const ModelingApplication = lazy(() => import('./pages/DataModelingApplication'));
const HumanIHP = lazy(() => import('./pages/HumanIHP'));
const HumanEducation = lazy(() => import('./pages/HumanEducation'));

function PageLoading() {
  return (
    <div className="page-loading" role="status">
      Loading…
    </div>
  );
}

function RevealController() {
  const { pathname } = useLocation();

  useEffect(() => {
    const targets = document.querySelectorAll(
      '.hero-full h1, .hero-sub, .section-title, .res-data-showcase, .part-card, .model-results-card, .app-card, .assumption-node, .impl-node, .timeline-table',
    );
    targets.forEach((el) => el.classList.add('reveal-init'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function NotFound() {
  return (
    <div className="hero-full">
      <h1>Page Not Found</h1>
      <p className="hero-sub">The page you are looking for does not exist.</p>
    </div>
  );
}

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoading />}>
      <RevealController />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team/members" element={<TeamMembers />} />
        <Route path="/team/attributions" element={<TeamAttributions />} />
        <Route path="/project/description" element={<ProjectDescription />} />
        <Route path="/project/engineering" element={<ProjectEngineering />} />
        <Route path="/project/results" element={<ProjectResults />} />
        <Route path="/project/contribution" element={<ProjectContribution />} />
        <Route path="/wetlab/description" element={<WetLabDescription />} />
        <Route path="/wetlab/design" element={<WetLabDesign />} />
        <Route path="/wetlab/parts" element={<WetLabParts />} />
        <Route path="/wetlab/measurement" element={<WetLabMeasurement />} />
        <Route path="/wetlab/notebook" element={<WetLabNotebook />} />
        <Route path="/wetlab/safety" element={<WetLabSafety />} />
        <Route path="/modeling/background" element={<ModelingBackground />} />
        <Route path="/modeling/assumptions" element={<ModelingAssumptions />} />
        <Route path="/modeling/implementation" element={<ModelingImpl />} />
        <Route path="/modeling/results" element={<ModelingResults />} />
        <Route path="/modeling/application" element={<ModelingApplication />} />
        <Route path="/human/ihp" element={<HumanIHP />} />
        <Route path="/human/education" element={<HumanEducation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const label = PAGE_TITLES[location.pathname] ?? 'iGEM Wiki';
    document.title = `China-HUBU-Wuhan | ${label}`;
  }, [location.pathname]);

  // 页内锚点（#section）与 HashRouter 共存：锚点点击只做平滑滚动
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href') ?? '';
      if (href.startsWith('#/')) return; // 交给 HashRouter
      event.preventDefault();
      if (href.length > 1) {
        const el = document.getElementById(href.slice(1));
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // 缺失图片统一降级为带说明的占位块，而不是浏览器破图
  useEffect(() => {
    const onError = (event: Event) => {
      const img = event.target as HTMLImageElement | null;
      if (!img || img.tagName !== 'IMG' || img.dataset.fallback) return;
      img.dataset.fallback = '1';
      const fallback = document.createElement('div');
      fallback.className = 'img-fallback';
      fallback.setAttribute('role', 'img');
      const label = img.alt || '图片待补充';
      fallback.setAttribute('aria-label', label);
      fallback.textContent = label;
      img.replaceWith(fallback);
    };
    document.addEventListener('error', onError, true);
    return () => document.removeEventListener('error', onError, true);
  }, []);

  return (
    <div className="app-shell">
      {/* key 绑定路由：每次切换栏目都会重新挂载并播放过场动画 */}
      <PageIntroVideo key={location.key} />
      <Navbar />
      <main className="app-main">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
