/**
 * FeatureCard - Displays a feature with icon, title, and description
 * Used on home page and throughout the site for highlighting benefits
 */

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-card__icon">{icon}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__text">{description}</p>
    </div>
  );
}

export default FeatureCard;
