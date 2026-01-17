import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactForm({ onSubmit, submitting }) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(formState);
  };

  return (
    <Form onSubmit={handleSubmit} id="contact">
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Your name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Alex Buyer"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="you@yourdomain.com"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="Tell us about your experience and interests (e.g., workshops, beginner help, plant swap)."
          required
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="warning" type="submit" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send message'}
        </Button>
      </div>
    </Form>
  );
}

export default ContactForm;
