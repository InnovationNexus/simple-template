/**
 * Resources Route
 * Returns learning resources and helpful links
 * Currently uses mock data - ready for database integration
 */

const express = require('express');

const router = express.Router();

/**
 * Mock resources data
 * In production, this would come from a database or CMS
 */
const mockResources = [
  // Beginner Guides
  {
    id: 1,
    title: 'Bonsai Basics: Getting Started',
    description: 'A comprehensive guide covering the fundamentals of bonsai care for new enthusiasts.',
    type: 'guide',
    category: 'beginner',
    url: '/resources/beginner-guide',
    external: false,
  },
  {
    id: 2,
    title: 'Choosing Your First Bonsai Tree',
    description: 'Learn which species are best for beginners and how to select a healthy tree.',
    type: 'guide',
    category: 'beginner',
    url: '/resources/first-tree-guide',
    external: false,
  },
  {
    id: 3,
    title: 'Watering 101: The Most Important Skill',
    description: 'Master the art of proper watering - the single most important aspect of bonsai care.',
    type: 'guide',
    category: 'beginner',
    url: '/resources/watering-guide',
    external: false,
  },

  // Care Guides
  {
    id: 4,
    title: 'Seasonal Care Calendar',
    description: 'Month-by-month guide to bonsai care tasks in the South Carolina climate.',
    type: 'guide',
    category: 'care',
    url: '/resources/seasonal-care',
    external: false,
  },
  {
    id: 5,
    title: 'Fertilizing Your Bonsai',
    description: 'Understanding fertilizers, application schedules, and nutrition for healthy trees.',
    type: 'guide',
    category: 'care',
    url: '/resources/fertilizer-guide',
    external: false,
  },

  // External Resources
  {
    id: 6,
    title: 'Bonsai Empire',
    description: 'Excellent online resource with free courses, articles, and a thriving community forum.',
    type: 'link',
    category: 'external',
    url: 'https://www.bonsaiempire.com',
    external: true,
  },
  {
    id: 7,
    title: 'American Bonsai Society',
    description: 'The national organization for bonsai enthusiasts with events, publications, and resources.',
    type: 'link',
    category: 'external',
    url: 'https://www.absbonsai.org',
    external: true,
  },
  {
    id: 8,
    title: 'Bonsai Tonight Blog',
    description: 'Jonas Dupuich\'s excellent blog with detailed articles on technique and development.',
    type: 'link',
    category: 'external',
    url: 'https://bonsaitonight.com',
    external: true,
  },

  // Video Resources
  {
    id: 9,
    title: 'Herons Bonsai YouTube Channel',
    description: 'Peter Chan\'s comprehensive video library covering all aspects of bonsai.',
    type: 'video',
    category: 'videos',
    url: 'https://www.youtube.com/user/HestonsBonsai',
    external: true,
  },
  {
    id: 10,
    title: 'Bonsai Mirai Live',
    description: 'Ryan Neil\'s professional-level instruction and streaming content.',
    type: 'video',
    category: 'videos',
    url: 'https://live.bonsaimirai.com',
    external: true,
  },

  // Local Resources
  {
    id: 11,
    title: 'Native Species for SC Bonsai',
    description: 'Guide to collecting and developing native South Carolina trees as bonsai.',
    type: 'guide',
    category: 'local',
    url: '/resources/native-species',
    external: false,
  },
  {
    id: 12,
    title: 'Local Nurseries & Suppliers',
    description: 'Recommended nurseries and bonsai suppliers in the South Carolina area.',
    type: 'guide',
    category: 'local',
    url: '/resources/local-suppliers',
    external: false,
  },

  // Tools & Supplies
  {
    id: 13,
    title: 'Essential Bonsai Tools',
    description: 'What tools you actually need and recommendations for quality purchases.',
    type: 'tool',
    category: 'tools',
    url: '/resources/tools-guide',
    external: false,
  },
  {
    id: 14,
    title: 'Soil Components & Mixing',
    description: 'Understanding bonsai soil, components, and creating the right mix for your trees.',
    type: 'guide',
    category: 'tools',
    url: '/resources/soil-guide',
    external: false,
  },
];

/**
 * GET /api/resources
 * Returns all resources, optionally filtered by category
 */
router.get('/', (req, res) => {
  const { category } = req.query;

  let resources = [...mockResources];

  // Filter by category if provided
  if (category && category !== 'all') {
    resources = resources.filter((r) => r.category === category);
  }

  res.json(resources);
});

/**
 * GET /api/resources/categories
 * Returns available categories
 */
router.get('/categories', (req, res) => {
  const categories = [...new Set(mockResources.map((r) => r.category))];
  res.json(categories);
});

/**
 * GET /api/resources/:id
 * Returns a single resource by ID
 */
router.get('/:id', (req, res) => {
  const resourceId = parseInt(req.params.id, 10);
  const resource = mockResources.find((r) => r.id === resourceId);

  if (!resource) {
    return res.status(404).json({ error: 'Resource not found' });
  }

  return res.json(resource);
});

module.exports = router;
