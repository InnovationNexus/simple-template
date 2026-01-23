import { useState } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

/**
 * GalleryPage - Showcase of member bonsai trees and club events
 * Uses placeholder images with plans for future CMS integration
 */

// Mock gallery data - in production, this would come from an API or CMS
const galleryItems = [
  {
    id: 1,
    title: 'Japanese Black Pine',
    artist: 'Robert Chen',
    style: 'Informal Upright',
    age: '45 years',
    category: 'trees',
  },
  {
    id: 2,
    title: 'Trident Maple',
    artist: 'Patricia Morrison',
    style: 'Broom',
    age: '30 years',
    category: 'trees',
  },
  {
    id: 3,
    title: 'Azalea Satsuki',
    artist: 'Linda Nakamura',
    style: 'Cascade',
    age: '20 years',
    category: 'trees',
  },
  {
    id: 4,
    title: 'Bald Cypress',
    artist: 'James Washington',
    style: 'Formal Upright',
    age: '35 years',
    category: 'trees',
  },
  {
    id: 5,
    title: 'Chinese Elm',
    artist: 'Member Collection',
    style: 'Literati',
    age: '25 years',
    category: 'trees',
  },
  {
    id: 6,
    title: 'Juniper Procumbens',
    artist: 'Beginner Workshop',
    style: 'Cascade',
    age: '10 years',
    category: 'trees',
  },
  {
    id: 7,
    title: '2024 Spring Show',
    artist: 'Club Event',
    style: '',
    age: '',
    category: 'events',
  },
  {
    id: 8,
    title: 'Workshop Day',
    artist: 'Club Event',
    style: '',
    age: '',
    category: 'events',
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'trees', label: 'Member Trees' },
  { id: 'events', label: 'Events' },
];

// Placeholder colors for gallery items
const placeholderColors = [
  'var(--color-primary-200)',
  'var(--color-earth-200)',
  'var(--color-primary-100)',
  'var(--color-earth-300)',
  'var(--color-primary-300)',
  'var(--color-earth-100)',
];

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Gallery"
        description="View beautiful bonsai trees from our members and photos from club events and exhibitions."
        path="/gallery"
      />

      <PageHeader
        title="Gallery"
        subtitle="A showcase of artistry from our talented members"
      />

      {/* Filter Tabs */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-2)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`btn ${activeCategory === cat.id ? 'btn--primary' : 'btn--secondary'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <div className="gallery">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="gallery__item">
                {/* Placeholder with decorative content */}
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: placeholderColors[index % placeholderColors.length],
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                  }}
                >
                  {item.category === 'trees' ? '🌳' : '📸'}
                </div>
                <div className="gallery__caption">
                  <strong>{item.title}</strong>
                  {item.artist && (
                    <span style={{ display: 'block', opacity: 0.9 }}>
                      {item.artist}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div
              className="text-center"
              style={{ padding: 'var(--space-12)', color: 'var(--color-neutral-500)' }}
            >
              No items in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Submit Your Tree */}
      <section className="section section--alt">
        <div className="container">
          <div
            className="card"
            style={{
              maxWidth: '700px',
              margin: '0 auto',
              padding: 'var(--space-8)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                margin: '0 auto var(--space-4)',
                background: 'var(--color-primary-100)',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--text-2xl)',
              }}
            >
              📷
            </div>
            <h2 style={{ marginBottom: 'var(--space-4)' }}>
              Share Your Bonsai
            </h2>
            <p style={{ marginBottom: 'var(--space-6)' }}>
              Members are invited to submit photos of their trees for the
              gallery. Share your progress, showcase your work, and inspire
              others in the community.
            </p>
            <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-neutral-500)' }}>
              Send submissions to{' '}
              <a href="mailto:gallery@bonsaiclubofsc.com">
                gallery@bonsaiclubofsc.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Note */}
      <section className="section">
        <div className="container text-center">
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-neutral-600)' }}>
            <em>
              Note: This gallery displays representative examples. Our members'
              full collections are showcased at our annual exhibition each
              spring at Riverbanks Botanical Garden.
            </em>
          </p>
        </div>
      </section>
    </>
  );
}

export default GalleryPage;
