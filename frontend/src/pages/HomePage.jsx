import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FeatureCard from '../components/FeatureCard';

/**
 * HomePage - Landing page showcasing the club's purpose and value
 * Features hero section, benefits, upcoming events preview, and CTA
 */

const features = [
  {
    icon: '🌿',
    title: 'Monthly Meetups',
    description:
      'Join us every third Saturday for hands-on workshops, demonstrations, and friendly community gatherings.',
  },
  {
    icon: '✂️',
    title: 'Expert Workshops',
    description:
      'Learn wiring, pruning, styling, and repotting techniques from experienced bonsai artists and guest instructors.',
  },
  {
    icon: '🌱',
    title: 'Beginner Friendly',
    description:
      'New to bonsai? We welcome all skill levels and offer mentorship programs to help you grow.',
  },
  {
    icon: '🏆',
    title: 'Shows & Exhibitions',
    description:
      'Display your trees at local shows and participate in regional and national bonsai exhibitions.',
  },
  {
    icon: '🤝',
    title: 'Plant Swaps',
    description:
      'Trade trees, pots, and supplies with fellow members at our regular plant swap events.',
  },
  {
    icon: '📚',
    title: 'Resource Library',
    description:
      'Access our collection of books, magazines, and learning materials to deepen your bonsai knowledge.',
  },
];

const testimonials = [
  {
    quote:
      "Joining the Bonsai Club transformed my hobby into a true passion. The community here is incredibly supportive.",
    author: 'Margaret T.',
    role: 'Member since 2019',
  },
  {
    quote:
      "The workshops are invaluable. I've learned more in two years with the club than I did in ten years on my own.",
    author: 'David L.',
    role: 'Member since 2021',
  },
];

function HomePage() {
  return (
    <>
      <SEO path="/" />

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <span className="hero__tagline">Est. 1985 • Columbia, SC</span>
            <h1 className="hero__title">
              Cultivating the Art of Bonsai in South Carolina
            </h1>
            <p className="hero__subtitle">
              Join a welcoming community of bonsai enthusiasts. Learn from
              experts, share your passion, and grow your skills at our monthly
              meetups and workshops.
            </p>
            <div className="hero__actions">
              <Link to="/membership" className="btn btn--white btn--lg">
                Become a Member
              </Link>
              <Link to="/events" className="btn btn--ghost-white btn--lg">
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <h2>Why Join the Bonsai Club?</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Whether you're nurturing your first tree or have decades of
              experience, our club offers something for everyone.
            </p>
          </div>

          <div className="grid grid--3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section section--alt">
        <div className="container">
          <div
            className="grid grid--2"
            style={{ alignItems: 'center', gap: 'var(--space-12)' }}
          >
            <div>
              <h2>A Community Rooted in Passion</h2>
              <p>
                For nearly four decades, the Bonsai Club of South Carolina has
                been bringing together tree lovers from across the state. What
                started as a small group of enthusiasts has grown into one of
                the most active bonsai communities in the Southeast.
              </p>
              <p>
                Our members range from curious beginners to award-winning
                artists, united by a shared love for the living art of bonsai.
                We believe that the best way to learn is through hands-on
                experience and the generous sharing of knowledge.
              </p>
              <Link to="/about" className="btn btn--primary">
                Learn Our Story
              </Link>
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
              🌳
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <h2>What Our Members Say</h2>
          </div>

          <div className="grid grid--2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card"
                style={{ padding: 'var(--space-8)' }}
              >
                <blockquote style={{ margin: 0 }}>
                  <p
                    style={{
                      fontSize: 'var(--text-lg)',
                      fontStyle: 'italic',
                      color: 'var(--color-neutral-700)',
                      marginBottom: 'var(--space-4)',
                    }}
                  >
                    "{testimonial.quote}"
                  </p>
                  <footer>
                    <strong style={{ color: 'var(--color-neutral-900)' }}>
                      {testimonial.author}
                    </strong>
                    <br />
                    <span
                      style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-neutral-500)',
                      }}
                    >
                      {testimonial.role}
                    </span>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section"
        style={{
          background:
            'linear-gradient(135deg, var(--color-primary-800) 0%, var(--color-primary-900) 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: 'var(--space-4)' }}>
            Ready to Start Your Bonsai Journey?
          </h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)',
              fontSize: 'var(--text-lg)',
            }}
          >
            Join our community today. Visitors are always welcome to attend a
            meeting before committing to membership.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-4)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link to="/membership" className="btn btn--white btn--lg">
              Join the Club
            </Link>
            <Link to="/contact" className="btn btn--ghost-white btn--lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
