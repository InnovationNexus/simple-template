import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import EventCard from '../components/EventCard';
import { fetchEvents } from '../services/api';

/**
 * EventsPage - Displays upcoming and past club events
 * Fetches event data from API with loading and error states
 */

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        setError('Unable to load events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  // Separate upcoming and past events
  const now = new Date();
  const upcomingEvents = events.filter((e) => new Date(e.date) >= now);
  const pastEvents = events.filter((e) => new Date(e.date) < now);

  return (
    <>
      <SEO
        title="Events & Workshops"
        description="Join us for monthly meetings, hands-on workshops, and special events. Check our calendar for upcoming bonsai activities in South Carolina."
        path="/events"
      />

      <PageHeader
        title="Events & Workshops"
        subtitle="Learn, create, and connect at our regular gatherings"
      />

      {/* Upcoming Events */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: 'var(--space-8)' }}>Upcoming Events</h2>

          {loading && (
            <div className="text-center" style={{ padding: 'var(--space-12)' }}>
              <span className="spinner"></span>
              <p style={{ marginTop: 'var(--space-4)', color: 'var(--color-neutral-500)' }}>
                Loading events...
              </p>
            </div>
          )}

          {error && (
            <div className="alert alert--error">
              {error}
            </div>
          )}

          {!loading && !error && upcomingEvents.length === 0 && (
            <div
              className="card"
              style={{ padding: 'var(--space-8)', textAlign: 'center' }}
            >
              <p style={{ margin: 0, color: 'var(--color-neutral-600)' }}>
                No upcoming events scheduled. Check back soon or{' '}
                <a href="/contact">contact us</a> for more information.
              </p>
            </div>
          )}

          {!loading && !error && upcomingEvents.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Event Types Info */}
      <section className="section section--alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
            <h2>What to Expect</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              We offer a variety of events throughout the year to support your
              bonsai journey.
            </p>
          </div>

          <div className="grid grid--3">
            <div className="feature-card">
              <div className="feature-card__icon">📅</div>
              <h3 className="feature-card__title">Monthly Meetings</h3>
              <p className="feature-card__text">
                Regular gatherings on the third Saturday featuring
                demonstrations, Q&A sessions, and member show-and-tell.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon">🎓</div>
              <h3 className="feature-card__title">Workshops</h3>
              <p className="feature-card__text">
                Hands-on learning sessions where you work on your own trees
                with guidance from experienced artists.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon">🌟</div>
              <h3 className="feature-card__title">Special Events</h3>
              <p className="feature-card__text">
                Annual shows, guest artist visits, field trips to nurseries,
                and collaborative community events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events (if any) */}
      {!loading && pastEvents.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 style={{ marginBottom: 'var(--space-8)' }}>Past Events</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {pastEvents.slice(0, 5).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Calendar Note */}
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
            <h3>Stay Updated</h3>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Members receive email notifications about upcoming events and any
              schedule changes. Join our mailing list to never miss an event.
            </p>
            <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-neutral-500)' }}>
              Questions about an event? Contact us at{' '}
              <a href="mailto:events@bonsaiclubofsc.com">events@bonsaiclubofsc.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventsPage;
