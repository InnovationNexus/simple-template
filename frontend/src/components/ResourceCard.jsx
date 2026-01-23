/**
 * ResourceCard - Displays a learning resource with icon and link
 * Used on the Resources page for guides, links, and learning materials
 */

function ResourceCard({ resource }) {
  const { title, description, type, url, external } = resource;

  const typeIcons = {
    guide: '📖',
    video: '🎥',
    article: '📄',
    tool: '🔧',
    link: '🔗',
  };

  const icon = typeIcons[type] || '📄';

  return (
    <a
      href={url}
      target={external ? '_blank' : '_self'}
      rel={external ? 'noopener noreferrer' : undefined}
      className="card"
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div className="card__body">
        <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--color-earth-100)',
              borderRadius: 'var(--radius-lg)',
              fontSize: 'var(--text-xl)',
            }}
          >
            {icon}
          </div>
          <div style={{ flex: 1 }}>
            <h3 className="card__title" style={{ marginBottom: 'var(--space-1)' }}>
              {title}
              {external && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ marginLeft: '6px', verticalAlign: 'middle' }}
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
                </svg>
              )}
            </h3>
            <p className="card__text" style={{ margin: 0 }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ResourceCard;
