/**
 * API Service Layer
 * Centralized API calls with consistent error handling
 * Uses environment variable for API base URL with fallback to proxy
 */

const API_BASE = import.meta.env.VITE_API_URL || '/api';

/**
 * Generic fetch wrapper with error handling
 * @param {string} endpoint - API endpoint (without base URL)
 * @param {object} options - Fetch options
 * @returns {Promise<any>} - Parsed JSON response
 */
async function apiFetch(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Request failed with status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    // Re-throw with more context if it's a network error
    if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
      throw new Error('Unable to connect to the server. Please check your connection.');
    }
    throw error;
  }
}

/**
 * Submit contact form
 * @param {object} data - Contact form data (name, email, subject, message)
 * @returns {Promise<object>} - API response
 */
export async function submitContact(data) {
  return apiFetch('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Fetch upcoming and past events
 * @returns {Promise<Array>} - List of events
 */
export async function fetchEvents() {
  return apiFetch('/events');
}

/**
 * Fetch learning resources
 * @returns {Promise<Array>} - List of resources
 */
export async function fetchResources() {
  return apiFetch('/resources');
}

/**
 * Check API health
 * @returns {Promise<object>} - Health status
 */
export async function checkHealth() {
  return apiFetch('/health');
}

export default {
  submitContact,
  fetchEvents,
  fetchResources,
  checkHealth,
};
