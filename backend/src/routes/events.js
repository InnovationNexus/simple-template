/**
 * Events Route
 * Returns upcoming and past club events
 * Currently uses mock data - ready for database integration
 */

const express = require('express');

const router = express.Router();

/**
 * Mock events data
 * In production, this would come from a database
 */
const mockEvents = [
  {
    id: 1,
    title: 'Monthly Meeting: Spring Repotting',
    date: '2026-02-15',
    time: '10:00 AM - 12:00 PM',
    location: 'Riverbanks Botanical Garden',
    description: 'Learn the best practices for spring repotting. Bring a tree to work on!',
    type: 'Monthly Meeting',
  },
  {
    id: 2,
    title: 'Beginner Workshop: Your First Bonsai',
    date: '2026-02-22',
    time: '1:00 PM - 4:00 PM',
    location: 'Riverbanks Botanical Garden',
    description: 'A hands-on workshop for beginners. All materials provided. Registration required.',
    type: 'Workshop',
  },
  {
    id: 3,
    title: 'Monthly Meeting: Wiring Techniques',
    date: '2026-03-15',
    time: '10:00 AM - 12:00 PM',
    location: 'Riverbanks Botanical Garden',
    description: 'Master the art of wiring with demonstrations on various species.',
    type: 'Monthly Meeting',
  },
  {
    id: 4,
    title: 'Annual Spring Show',
    date: '2026-04-05',
    time: '9:00 AM - 5:00 PM',
    location: 'Riverbanks Botanical Garden',
    description: 'Our annual exhibition featuring member trees and guest artists. Free admission.',
    type: 'Exhibition',
  },
  {
    id: 5,
    title: 'Guest Artist: Pine Styling Workshop',
    date: '2026-04-12',
    time: '9:00 AM - 4:00 PM',
    location: 'Riverbanks Botanical Garden',
    description: 'Special workshop with visiting artist on advanced pine styling techniques.',
    type: 'Workshop',
  },
  {
    id: 6,
    title: 'Monthly Meeting: Summer Care',
    date: '2026-05-17',
    time: '10:00 AM - 12:00 PM',
    location: 'Riverbanks Botanical Garden',
    description: 'Prepare your trees for the hot South Carolina summer with proper care techniques.',
    type: 'Monthly Meeting',
  },
  {
    id: 7,
    title: 'Plant Swap & Auction',
    date: '2026-06-07',
    time: '10:00 AM - 1:00 PM',
    location: 'Riverbanks Botanical Garden',
    description: 'Bring trees, pots, and supplies to swap or sell. Proceeds support club activities.',
    type: 'Special Event',
  },
  // Past events for testing
  {
    id: 8,
    title: 'Monthly Meeting: Winter Protection',
    date: '2026-01-18',
    time: '10:00 AM - 12:00 PM',
    location: 'Riverbanks Botanical Garden',
    description: 'Discussion on protecting tropical and temperate bonsai during cold snaps.',
    type: 'Monthly Meeting',
  },
];

/**
 * GET /api/events
 * Returns all events sorted by date
 */
router.get('/', (req, res) => {
  // Sort events by date
  const sortedEvents = [...mockEvents].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  res.json(sortedEvents);
});

/**
 * GET /api/events/:id
 * Returns a single event by ID
 */
router.get('/:id', (req, res) => {
  const eventId = parseInt(req.params.id, 10);
  const event = mockEvents.find((e) => e.id === eventId);

  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }

  return res.json(event);
});

module.exports = router;
