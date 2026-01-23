import { useState } from 'react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { submitContact } from '../services/api';

/**
 * ContactPage - Contact form and club location/meeting information
 */

const contactInfo = [
  {
    icon: '📍',
    title: 'Meeting Location',
    content: (
      <>
        Riverbanks Botanical Garden
        <br />
        1300 Botanical Parkway
        <br />
        West Columbia, SC 29169
      </>
    ),
  },
  {
    icon: '📅',
    title: 'Meeting Schedule',
    content: (
      <>
        Third Saturday of each month
        <br />
        10:00 AM – 12:00 PM
        <br />
        Visitors welcome!
      </>
    ),
  },
  {
    icon: '✉️',
    title: 'Email',
    content: (
      <a href="mailto:info@bonsaiclubofsc.com">info@bonsaiclubofsc.com</a>
    ),
  },
];

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await submitContact(formData);
      setStatus({
        type: 'success',
        message: 'Thank you for your message! We\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: 'general', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Unable to send your message. Please try again or email us directly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with the Bonsai Club of South Carolina. Ask questions, inquire about membership, or find our meeting location."
        path="/contact"
      />

      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you"
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{ gap: 'var(--space-12)' }}>
            {/* Contact Form */}
            <div>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Send a Message</h2>

              {status.message && (
                <div className={`alert alert--${status.type}`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="form-select"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="membership">Membership Question</option>
                    <option value="events">Events & Workshops</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--primary btn--lg"
                  disabled={submitting}
                  style={{ width: '100%' }}
                >
                  {submitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>Get in Touch</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="card"
                    style={{ padding: 'var(--space-5)' }}
                  >
                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          flexShrink: 0,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'var(--color-primary-100)',
                          borderRadius: 'var(--radius-lg)',
                          fontSize: 'var(--text-xl)',
                        }}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <h4
                          style={{
                            margin: '0 0 var(--space-1)',
                            fontSize: 'var(--text-base)',
                          }}
                        >
                          {info.title}
                        </h4>
                        <p style={{ margin: 0, color: 'var(--color-neutral-600)' }}>
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div
                style={{
                  marginTop: 'var(--space-6)',
                  background: 'var(--color-earth-200)',
                  borderRadius: 'var(--radius-xl)',
                  aspectRatio: '16/9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-neutral-500)',
                }}
              >
                <div className="text-center">
                  <div style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>
                    🗺️
                  </div>
                  <p style={{ margin: 0 }}>
                    <a
                      href="https://maps.google.com/?q=Riverbanks+Botanical+Garden+Columbia+SC"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section section--alt">
        <div className="container">
          <div
            className="grid grid--3"
            style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
          >
            <div>
              <h4>Membership Questions?</h4>
              <p style={{ margin: 0 }}>
                Contact our treasurer at{' '}
                <a href="mailto:membership@bonsaiclubofsc.com">
                  membership@bonsaiclubofsc.com
                </a>
              </p>
            </div>
            <div>
              <h4>Event Inquiries?</h4>
              <p style={{ margin: 0 }}>
                Reach our events coordinator at{' '}
                <a href="mailto:events@bonsaiclubofsc.com">
                  events@bonsaiclubofsc.com
                </a>
              </p>
            </div>
            <div>
              <h4>Media & Press?</h4>
              <p style={{ margin: 0 }}>
                Contact our president at{' '}
                <a href="mailto:president@bonsaiclubofsc.com">
                  president@bonsaiclubofsc.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
