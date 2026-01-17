import { Card, Button } from 'react-bootstrap';

function CallToAction() {
  return (
    <Card className="glass-card text-light text-center py-4">
      <Card.Body>
        <Card.Title className="display-6 mb-3">Ready to join?</Card.Title>
        <Card.Text className="text-secondary">
          Become a member or attend a meeting — tell us what you're interested in and we'll be in touch.
        </Card.Text>
        <Button
          variant="warning"
          size="lg"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Get in touch
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CallToAction;
