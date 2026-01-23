import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import FeatureCard from '../components/FeatureCard';

/**
 * MembershipPage - Membership benefits, dues, and signup information
 */

const benefits = [
  {
    icon: '🎟️',
    title: 'Monthly Meetings',
    description: 'Free admission to all regular monthly meetings and demonstrations.',
  },
  {
    icon: '🛠️',
    title: 'Workshop Discounts',
    description: 'Reduced rates on hands-on workshops and special learning events.',
  },
  {
    icon: '📚',
    title: 'Library Access',
    description: 'Borrow from our collection of bonsai books, magazines, and videos.',
  },
  {
    icon: '🌱',
    title: 'Plant Sales',
    description: 'Early access and member pricing at club plant sales and auctions.',
  },
  {
    icon: '💬',
    title: 'Community Network',
    description: 'Connect with fellow enthusiasts, find mentors, and share knowledge.',
  },
  {
    icon: '📧',
    title: 'Newsletter',
    description: 'Monthly newsletter with tips, event updates, and member spotlights.',
  },
];

const membershipLevels = [
  {
    name: 'Individual',
    price: 35,
    period: 'year',
    description: 'Perfect for solo enthusiasts',
    features: ['Full meeting access', 'Workshop discounts', 'Library privileges', 'Newsletter'],
  },
  {
    name: 'Family',
    price: 50,
    period: 'year',
    description: 'For households with multiple members',
    features: [
      'All individual benefits',
      'Up to 4 family members',
      'Youth program access',
      'Family workshop rates',
    ],
    popular: true,
  },
  {
    name: 'Student',
    price: 20,
    period: 'year',
    description: 'Full-time students under 25',
    features: ['Full meeting access', 'Workshop discounts', 'Mentorship program', 'Student events'],
  },
];

const faqs = [
  {
    question: 'Can I attend a meeting before joining?',
    answer:
      'Visitors are always welcome to attend one or two meetings before deciding to join. This lets you experience what we offer and meet our members.',
  },
  {
    question: 'When does membership renew?',
    answer:
      'Memberships run on a calendar year (January–December). New members joining after October receive the remainder of the current year plus the following year.',
  },
  {
    question: 'Do I need experience to join?',
    answer:
      'Not at all! We welcome complete beginners. Many of our most active members started with no bonsai experience and learned through the club.',
  },
  {
    question: 'How do I pay dues?',
    answer:
      'You can pay at any monthly meeting (cash or check) or contact our treasurer to arrange payment. We also accept payment at the door for new members.',
  },
];

function MembershipPage() {
  return (
    <>
      <SEO
        title="Membership"
        description="Join the Bonsai Club of South Carolina. Affordable membership with access to workshops, library, plant sales, and a welcoming community."
        path="/membership"
      />

      <PageHeader
        title="Become a Member"
        subtitle="Join our community and grow your bonsai passion"
      />

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <h2>Member Benefits</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Your membership directly supports club activities and gives you
              access to a wealth of resources and community.
            </p>
          </div>

          <div className="grid grid--3">
            {benefits.map((benefit) => (
              <FeatureCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section section--alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <h2>Membership Options</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Choose the membership level that fits your needs. All levels
              include our core benefits.
            </p>
          </div>

          <div
            className="grid grid--3"
            style={{ maxWidth: '900px', margin: '0 auto' }}
          >
            {membershipLevels.map((level) => (
              <div
                key={level.name}
                className="card"
                style={{
                  padding: 'var(--space-6)',
                  border: level.popular
                    ? '2px solid var(--color-primary-500)'
                    : undefined,
                  position: 'relative',
                }}
              >
                {level.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--color-primary-600)',
                      color: 'white',
                      padding: 'var(--space-1) var(--space-4)',
                      borderRadius: 'var(--radius-full)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 500,
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="text-center" style={{ marginBottom: 'var(--space-4)' }}>
                  <h3 style={{ marginBottom: 'var(--space-1)' }}>{level.name}</h3>
                  <p style={{ margin: 0, color: 'var(--color-neutral-500)', fontSize: 'var(--text-sm)' }}>
                    {level.description}
                  </p>
                </div>
                <div
                  className="text-center"
                  style={{
                    padding: 'var(--space-4) 0',
                    borderTop: '1px solid var(--color-earth-200)',
                    borderBottom: '1px solid var(--color-earth-200)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  <span
                    style={{
                      fontSize: 'var(--text-4xl)',
                      fontWeight: 700,
                      color: 'var(--color-primary-700)',
                    }}
                  >
                    ${level.price}
                  </span>
                  <span style={{ color: 'var(--color-neutral-500)' }}>
                    /{level.period}
                  </span>
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 var(--space-6)',
                  }}
                >
                  {level.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        padding: 'var(--space-2) 0',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-2)',
                        color: 'var(--color-neutral-600)',
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        fill="var(--color-primary-600)"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn ${level.popular ? 'btn--primary' : 'btn--secondary'}`}
                  style={{ width: '100%' }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  marginBottom: 'var(--space-6)',
                  paddingBottom: 'var(--space-6)',
                  borderBottom:
                    index < faqs.length - 1
                      ? '1px solid var(--color-earth-200)'
                      : 'none',
                }}
              >
                <h3
                  style={{
                    fontSize: 'var(--text-lg)',
                    fontFamily: 'var(--font-sans)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  {faq.question}
                </h3>
                <p style={{ margin: 0, color: 'var(--color-neutral-600)' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Ready to Join?
          </h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)',
            }}
          >
            Visit us at our next meeting or contact us to learn more. We'd love
            to welcome you to the club.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-4)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link to="/contact" className="btn btn--white btn--lg">
              Contact Us
            </Link>
            <Link to="/events" className="btn btn--ghost-white btn--lg">
              View Next Meeting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default MembershipPage;
