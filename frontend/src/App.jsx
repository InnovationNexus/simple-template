import { Container, Row, Col, Button, Card, Form, Navbar, Nav, Badge, Alert } from 'react-bootstrap';
import { useState } from 'react';
import ContactForm from './components/ContactForm';
import Feature from './components/Feature';
import CallToAction from './components/CallToAction';
import useInquiry from './hooks/useInquiry';

const features = [
  {
    title: 'Monthly meetups',
    description: 'Hands-on workshops, guest demos, and community meetups.',
    icon: '🌿',
  },
  {
    title: 'Workshops & demos',
    description: 'Learn wiring, pruning, and styling at all skill levels.',
    icon: '✂️',
  },
  {
    title: 'Plant swaps & shows',
    description: 'Swap plants, share techniques, and participate in local displays.',
    icon: '🌱',
  },
];

function App() {
  const [status, setStatus] = useState({ type: '', message: '' });
  const { sendInquiry, submitting } = useInquiry(setStatus);

  const handleSubmit = async (payload) => {
    const success = await sendInquiry(payload);
    if (success) {
      setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' });
    } else {
      setStatus({ type: 'danger', message: 'We could not send your message right now. Please try again soon.' });
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="border-bottom border-secondary sticky-top" expand="lg">
        <Container>
          <Navbar.Brand href="#">Bonsai Club of SC</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              <Badge bg="success" text="light" className="p-2">Community</Badge>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-5">
        <Row className="align-items-center gy-4">
          <Col md={6} className="text-light hero-text">
            <h1 className="fw-bold display-5 mb-3">Bonsai Club of South Carolina</h1>
            <p className="lead text-secondary">Local meetups, hands-on workshops, and a welcoming community for bonsai enthusiasts across South Carolina.</p>
            <div className="d-flex gap-3 flex-wrap">
              <Button variant="warning" size="lg" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Join the club
              </Button>
              <Button variant="outline-light" size="lg" href="#features">
                Learn more
              </Button>
            </div>
            <div className="d-flex align-items-center gap-3 mt-4 text-secondary">
              <div className="feature-icon">🌿</div>
              <div>
                <div className="fw-semibold text-light">Active community</div>
                <div>Monthly meetups, workshops, and plant clinics.</div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Card className="glass-card text-light p-3">
              <Card.Body>
                <Card.Title className="mb-3">Join or contact the club</Card.Title>
                <ContactForm onSubmit={handleSubmit} submitting={submitting} />
                {status.message && (
                  <Alert variant={status.type} className="mt-3 mb-0">
                    {status.message}
                  </Alert>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row id="features" className="mt-5 gy-4">
          {features.map((feature) => (
            <Col md={4} key={feature.title}>
              <Feature {...feature} />
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col>
            <CallToAction />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={8} className="mx-auto">
            <Card className="glass-card text-light">
              <Card.Body>
                <Card.Title>About membership</Card.Title>
                <Card.Text>
                  Membership is open to all skill levels. Dues support events and venue costs; visitors are welcome to attend a meeting before joining.
                </Card.Text>
                <Form.Text className="text-secondary">Have questions? Mention them in your message.</Form.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="border-top border-secondary py-4 mt-5">
        <Container className="d-flex justify-content-between text-secondary">
          <span className="footer-note">Bonsai Club of South Carolina — connecting enthusiasts across the state.</span>
          <a href="mailto:contact@bonsaiclubofsc.com" className="text-decoration-none text-light">contact@bonsaiclubofsc.com</a>
        </Container>
      </footer>
    </>
  );
}

export default App;
