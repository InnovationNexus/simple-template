import { Container, Row, Col, Button, Card, Form, Navbar, Nav, Badge, Alert } from 'react-bootstrap';
import { useState } from 'react';
import ContactForm from './components/ContactForm';
import Feature from './components/Feature';
import CallToAction from './components/CallToAction';
import useInquiry from './hooks/useInquiry';

const features = [
  {
    title: 'Premium visibility',
    description: 'Own a memorable domain that makes your brand stand out from day one.',
    icon: '🌐',
  },
  {
    title: 'SEO ready',
    description: 'An aged domain to help you start strong in search and ad campaigns.',
    icon: '🚀',
  },
  {
    title: 'Transfer assistance',
    description: 'We will guide you through the transfer process for a smooth handoff.',
    icon: '🤝',
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
          <Navbar.Brand href="#">Domain is Available</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              <Badge bg="warning" text="dark" className="p-2">For Sale</Badge>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-5">
        <Row className="align-items-center gy-4">
          <Col md={6} className="text-light hero-text">
            <h1 className="fw-bold display-5 mb-3">This domain is ready for its next chapter.</h1>
            <p className="lead text-secondary">Secure a high-impact name with credibility built in. Submit your offer and we will respond quickly.</p>
            <div className="d-flex gap-3 flex-wrap">
              <Button variant="warning" size="lg" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Make an offer
              </Button>
              <Button variant="outline-light" size="lg" href="#features">
                Why this domain?
              </Button>
            </div>
            <div className="d-flex align-items-center gap-3 mt-4 text-secondary">
              <div className="feature-icon">✓</div>
              <div>
                <div className="fw-semibold text-light">Serious seller</div>
                <div>Responsive communication within one business day.</div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Card className="glass-card text-light p-3">
              <Card.Body>
                <Card.Title className="mb-3">Inquire about this domain</Card.Title>
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
                <Card.Title>Transparent process</Card.Title>
                <Card.Text>
                  We respond promptly with pricing details and can arrange escrow for mutual peace of mind. Once an offer is accepted, we provide step-by-step guidance to transfer the domain to your registrar of choice.
                </Card.Text>
                <Form.Text className="text-secondary">Need a custom arrangement? Mention it in your message.</Form.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="border-top border-secondary py-4 mt-5">
        <Container className="d-flex justify-content-between text-secondary">
          <span className="footer-note">This domain is currently available for acquisition.</span>
          <a href="mailto:for-sale@example.com" className="text-decoration-none text-light">Email the owner</a>
        </Container>
      </footer>
    </>
  );
}

export default App;
