import { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

function useInquiry(setStatus) {
  const [submitting, setSubmitting] = useState(false);

  const sendInquiry = async (payload) => {
    setSubmitting(true);
    setStatus({ type: '', message: '' });
    try {
      const response = await fetch(`${API_BASE}/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.status === 'received';
    } catch (error) {
      setStatus({ type: 'danger', message: 'Unable to submit your message right now.' });
      return false;
    } finally {
      setSubmitting(false);
    }
  };

  return { sendInquiry, submitting };
}

export default useInquiry;
