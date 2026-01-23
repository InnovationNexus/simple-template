import { Link } from 'react-router-dom';

/**
 * EventCard - Displays event information in a card format
 * Shows date, title, description, and link to details
 */

function EventCard({ event }) {
  const { id, title, date, time, location, description, type } = event;

  // Format date for display
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return {
      day: d.getDate(),
      month: d.toLocaleDateString('en-US', { month: 'short' }),
      weekday: d.toLocaleDateString('en-US', { weekday: 'long' }),
    };
  };

  const formattedDate = formatDate(date);

  return (
    <article className="card">
      <div className="card__body">
        <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
          {/* Date badge */}
          <div
            style={{
              flexShrink: 0,
              width: '60px',
              textAlign: 'center',
              padding: 'var(--space-3)',
              background: 'var(--color-primary-100)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 700,
                color: 'var(--color-primary-800)',
                lineHeight: 1,
              }}
            >
              {formattedDate.day}
            </div>
            <div
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-primary-700)',
                fontWeight: 500,
              }}
            >
              {formattedDate.month}
            </div>
          </div>

          {/* Event details */}
          <div style={{ flex: 1 }}>
            <span className="card__subtitle">{type}</span>
            <h3 className="card__title" style={{ marginBottom: 'var(--space-2)' }}>
              {title}
            </h3>
            <p className="card__text" style={{ marginBottom: 'var(--space-3)' }}>
              {description}
            </p>
            <div className="card__meta">
              <span className="card__meta-item">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                {time}
              </span>
              <span className="card__meta-item">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
