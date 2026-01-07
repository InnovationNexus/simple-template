import { Card, Button } from 'react-bootstrap';

function CallToAction() {
  return (
    <Card className="glass-card text-light text-center py-4">
      <Card.Body>
        <Card.Title className="display-6 mb-3">Ready to make an offer?</Card.Title>
        <Card.Text className="text-secondary">
          Tell us about your project and we will reply with pricing and next steps.
        </Card.Text>
        <Button
          variant="warning"
          size="lg"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Contact the owner
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CallToAction;
