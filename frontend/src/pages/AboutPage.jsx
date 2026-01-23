import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

/**
 * AboutPage - Club history, mission, and leadership information
 */

const leadership = [
  {
    name: 'Robert Chen',
    role: 'President',
    bio: 'Practicing bonsai for over 25 years, Robert specializes in native species styling.',
  },
  {
    name: 'Patricia Morrison',
    role: 'Vice President',
    bio: 'Award-winning exhibitor with expertise in shohin and mame bonsai.',
  },
  {
    name: 'James Washington',
    role: 'Treasurer',
    bio: 'Dedicated to making bonsai accessible through community outreach programs.',
  },
  {
    name: 'Linda Nakamura',
    role: 'Secretary',
    bio: 'Former landscape architect bringing design principles to bonsai education.',
  },
];

const milestones = [
  { year: '1985', event: 'Club founded by 12 enthusiasts in Columbia' },
  { year: '1992', event: 'First annual show at Riverbanks Botanical Garden' },
  { year: '2001', event: 'Membership grows to over 100 active members' },
  { year: '2010', event: 'Launched youth education program' },
  { year: '2018', event: 'Hosted Southeast Regional Bonsai Convention' },
  { year: '2024', event: 'Celebrating nearly 40 years of bonsai community' },
];

function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about the Bonsai Club of South Carolina's history, mission, and leadership. Serving bonsai enthusiasts since 1985."
        path="/about"
      />

      <PageHeader
        title="About Our Club"
        subtitle="Cultivating community and the art of bonsai since 1985"
      />

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div
            className="grid grid--2"
            style={{ alignItems: 'center', gap: 'var(--space-12)' }}
          >
            <div>
              <h2>Our Mission</h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-neutral-700)' }}>
                The Bonsai Club of South Carolina is dedicated to promoting the
                art of bonsai through education, community engagement, and the
                sharing of knowledge between enthusiasts of all skill levels.
              </p>
              <p>
                We believe that bonsai is more than a hobby—it's a meditative
                practice that connects us to nature, teaches patience, and
                creates beauty that lasts generations. Our club provides a
                supportive environment where beginners can learn from
                experienced artists, and where everyone can share in the joy of
                cultivating living art.
              </p>
              <p>
                Through monthly meetings, workshops, exhibitions, and community
                outreach, we strive to preserve and advance the traditions of
                bonsai while making this ancient art accessible to everyone in
                South Carolina.
              </p>
            </div>
            <div
              style={{
                background: 'var(--color-earth-200)',
                borderRadius: 'var(--radius-xl)',
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '5rem',
              }}
            >
              🎋
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section section--alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <h2>Our History</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              From humble beginnings to one of the Southeast's most active
              bonsai communities.
            </p>
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                style={{
                  display: 'flex',
                  gap: 'var(--space-6)',
                  marginBottom: 'var(--space-6)',
                  paddingBottom: 'var(--space-6)',
                  borderBottom:
                    index < milestones.length - 1
                      ? '1px solid var(--color-earth-200)'
                      : 'none',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '80px',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    color: 'var(--color-primary-700)',
                  }}
                >
                  {milestone.year}
                </div>
                <p style={{ margin: 0, color: 'var(--color-neutral-700)' }}>
                  {milestone.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <h2>Club Leadership</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Our dedicated board members volunteer their time to ensure the
              club thrives.
            </p>
          </div>

          <div className="grid grid--4">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="card"
                style={{ textAlign: 'center' }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    margin: 'var(--space-6) auto var(--space-4)',
                    background: 'var(--color-primary-100)',
                    borderRadius: 'var(--radius-full)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--text-2xl)',
                    color: 'var(--color-primary-700)',
                  }}
                >
                  {leader.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div className="card__body" style={{ paddingTop: 0 }}>
                  <h3
                    className="card__title"
                    style={{ marginBottom: 'var(--space-1)' }}
                  >
                    {leader.name}
                  </h3>
                  <p
                    style={{
                      color: 'var(--color-primary-700)',
                      fontWeight: 500,
                      marginBottom: 'var(--space-3)',
                    }}
                  >
                    {leader.role}
                  </p>
                  <p className="card__text" style={{ margin: 0, fontSize: 'var(--text-sm)' }}>
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Info */}
      <section className="section section--alt">
        <div className="container">
          <div
            className="card"
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: 'var(--space-8)',
              textAlign: 'center',
            }}
          >
            <h2 style={{ marginBottom: 'var(--space-4)' }}>Join Us at a Meeting</h2>
            <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-6)' }}>
              We meet on the <strong>third Saturday of every month</strong> at
              the Riverbanks Botanical Garden in Columbia, SC. Meetings run from
              10:00 AM to 12:00 PM and typically include a demonstration or
              workshop.
            </p>
            <p style={{ marginBottom: 'var(--space-6)' }}>
              Visitors are always welcome to attend a meeting before joining.
              Come see what we're all about!
            </p>
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-4)',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link to="/events" className="btn btn--primary">
                View Upcoming Events
              </Link>
              <Link to="/contact" className="btn btn--secondary">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
