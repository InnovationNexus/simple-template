import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import ResourceCard from '../components/ResourceCard';
import { fetchResources } from '../services/api';

/**
 * ResourcesPage - Educational resources, guides, and helpful links
 * Categorized by type with beginner-friendly content highlighted
 */

const beginnerTips = [
  {
    title: 'Start with Hardy Species',
    description:
      'Chinese elm, juniper, and ficus are forgiving species perfect for beginners.',
  },
  {
    title: 'Water Properly',
    description:
      'Water when the soil surface feels dry. Most bonsai die from overwatering.',
  },
  {
    title: 'Provide Adequate Light',
    description:
      'Most bonsai need several hours of direct sunlight daily. Outdoor placement is often best.',
  },
  {
    title: 'Be Patient',
    description:
      'Bonsai is measured in years, not weeks. Enjoy the journey of cultivation.',
  },
];

function ResourcesPage() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const loadResources = async () => {
      try {
        const data = await fetchResources();
        setResources(data);
      } catch (err) {
        setError('Unable to load resources. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadResources();
  }, []);

  // Get unique categories
  const categories = [
    'all',
    ...new Set(resources.map((r) => r.category)),
  ];

  const filteredResources =
    activeCategory === 'all'
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  return (
    <>
      <SEO
        title="Resources"
        description="Bonsai learning resources including beginner guides, care instructions, recommended books, and helpful links."
        path="/resources"
      />

      <PageHeader
        title="Learning Resources"
        subtitle="Guides, tips, and links to help you on your bonsai journey"
      />

      {/* Beginner Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <h2>Getting Started with Bonsai</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              New to bonsai? Here are the fundamentals every beginner should
              know.
            </p>
          </div>

          <div className="grid grid--4">
            {beginnerTips.map((tip, index) => (
              <div key={index} className="feature-card">
                <div
                  className="feature-card__icon"
                  style={{ background: 'var(--color-earth-100)' }}
                >
                  {index + 1}
                </div>
                <h3 className="feature-card__title">{tip.title}</h3>
                <p className="feature-card__text">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources List */}
      <section className="section section--alt">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--space-6)' }}>Recommended Resources</h2>

          {/* Category Filter */}
          {!loading && resources.length > 0 && (
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-2)',
                marginBottom: 'var(--space-8)',
                flexWrap: 'wrap',
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`btn btn--sm ${activeCategory === cat ? 'btn--primary' : 'btn--secondary'}`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          )}

          {loading && (
            <div className="text-center" style={{ padding: 'var(--space-12)' }}>
              <span className="spinner"></span>
              <p style={{ marginTop: 'var(--space-4)', color: 'var(--color-neutral-500)' }}>
                Loading resources...
              </p>
            </div>
          )}

          {error && <div className="alert alert--error">{error}</div>}

          {!loading && !error && filteredResources.length > 0 && (
            <div className="grid grid--2">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          )}

          {!loading && !error && filteredResources.length === 0 && (
            <div
              className="card"
              style={{ padding: 'var(--space-8)', textAlign: 'center' }}
            >
              <p style={{ margin: 0, color: 'var(--color-neutral-600)' }}>
                No resources found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Library Section */}
      <section className="section">
        <div className="container">
          <div
            className="grid grid--2"
            style={{ alignItems: 'center', gap: 'var(--space-12)' }}
          >
            <div>
              <h2>Club Library</h2>
              <p>
                Members have access to our lending library, which includes over
                100 bonsai books, magazines, and instructional DVDs. Borrow
                materials at any monthly meeting and return them within 30 days.
              </p>
              <p>
                Our collection covers topics from basic care to advanced
                styling, species-specific guides, pot selection, display
                techniques, and more.
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Popular titles include:</strong>
              </p>
              <ul style={{ color: 'var(--color-neutral-600)', marginTop: 'var(--space-2)' }}>
                <li>The Complete Book of Bonsai by Harry Tomlinson</li>
                <li>Bonsai Techniques I & II by John Naka</li>
                <li>The Art of Bonsai by Yuji Yoshimura</li>
                <li>Bonsai with American Trees by Paul Weismantel</li>
              </ul>
            </div>
            <div
              style={{
                background: 'var(--color-earth-200)',
                borderRadius: 'var(--radius-xl)',
                aspectRatio: '4/3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
              }}
            >
              📚
            </div>
          </div>
        </div>
      </section>

      {/* Suggest a Resource */}
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
            <h3>Know a Great Resource?</h3>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Help fellow members discover valuable bonsai content. If you've
              found a helpful book, website, or video, let us know and we'll
              consider adding it to our recommendations.
            </p>
            <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-neutral-500)' }}>
              Send suggestions to{' '}
              <a href="mailto:resources@bonsaiclubofsc.com">
                resources@bonsaiclubofsc.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResourcesPage;
