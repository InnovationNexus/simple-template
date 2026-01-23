import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// Layout
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import MembershipPage from './pages/MembershipPage';
import GalleryPage from './pages/GalleryPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';

/**
 * Application Router Configuration
 * All routes wrapped in MainLayout for consistent header/footer
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {/* Home */}
      <Route index element={<HomePage />} />
      
      {/* About */}
      <Route path="about" element={<AboutPage />} />
      
      {/* Events */}
      <Route path="events" element={<EventsPage />} />
      
      {/* Membership */}
      <Route path="membership" element={<MembershipPage />} />
      
      {/* Gallery */}
      <Route path="gallery" element={<GalleryPage />} />
      
      {/* Resources */}
      <Route path="resources" element={<ResourcesPage />} />
      
      {/* Contact */}
      <Route path="contact" element={<ContactPage />} />
      
      {/* 404 - Catch all */}
      <Route
        path="*"
        element={
          <div className="section" style={{ textAlign: 'center', padding: 'var(--space-24) 0' }}>
            <div className="container">
              <h1>Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
              <a href="/" className="btn btn--primary">
                Return Home
              </a>
            </div>
          </div>
        }
      />
    </Route>
  )
);

export default router;
