import { Card } from 'react-bootstrap';

function Feature({ title, description, icon }) {
  return (
    <Card className="glass-card h-100 text-light">
      <Card.Body>
        <div className="feature-icon mb-3">{icon}</div>
        <Card.Title className="fw-semibold">{title}</Card.Title>
        <Card.Text className="text-secondary">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Feature;
