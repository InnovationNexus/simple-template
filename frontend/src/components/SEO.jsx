import { useEffect } from 'react';

/**
 * SEO Component - Manages document head meta tags for each page
 * Handles title, description, and Open Graph tags
 */

const defaultMeta = {
  title: 'Bonsai Club of South Carolina',
  description:
    'Join the Bonsai Club of South Carolina for workshops, meetups, and a welcoming community of bonsai enthusiasts. Learn the art of bonsai with us.',
  image: '/images/og-image.jpg',
  url: 'https://bonsaiclubofsc.com',
};

function SEO({ title, description, image, path = '' }) {
  const pageTitle = title
    ? `${title} | Bonsai Club of South Carolina`
    : defaultMeta.title;
  const pageDescription = description || defaultMeta.description;
  const pageImage = image || defaultMeta.image;
  const pageUrl = `${defaultMeta.url}${path}`;

  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Helper to set meta tag
    const setMeta = (property, content, isOg = false) => {
      const attr = isOg ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    setMeta('description', pageDescription);

    // Open Graph tags
    setMeta('og:title', pageTitle, true);
    setMeta('og:description', pageDescription, true);
    setMeta('og:image', pageImage, true);
    setMeta('og:url', pageUrl, true);
    setMeta('og:type', 'website', true);
    setMeta('og:site_name', 'Bonsai Club of South Carolina', true);

    // Twitter Card tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', pageTitle);
    setMeta('twitter:description', pageDescription);
    setMeta('twitter:image', pageImage);

    // Cleanup function - restore defaults on unmount
    return () => {
      document.title = defaultMeta.title;
    };
  }, [pageTitle, pageDescription, pageImage, pageUrl]);

  return null;
}

export default SEO;
