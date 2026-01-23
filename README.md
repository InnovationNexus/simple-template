# Bonsai Club of South Carolina Website

A production-ready website for the Bonsai Club of South Carolina, featuring a React + Vite frontend and Express backend API.

## 🌳 Overview

This project provides a complete website solution for a bonsai community organization, including:

- **Public Pages**: Home, About, Events, Membership, Gallery, Resources, Contact
- **REST API**: Health checks, contact form, events listing, resources listing
- **Responsive Design**: Mobile-first approach with earth-tone color palette
- **SEO Optimized**: Semantic HTML, meta tags, Open Graph, sitemap

## 📁 Project Structure

```
/
├── frontend/                 # React + Vite SPA
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── layouts/          # Page layout wrappers
│   │   ├── pages/            # Route page components
│   │   ├── services/         # API service layer
│   │   ├── router.jsx        # React Router configuration
│   │   ├── main.jsx          # Application entry point
│   │   └── styles.css        # Global styles & design system
│   ├── public/               # Static assets
│   └── index.html            # HTML template with SEO tags
│
├── backend/                  # Express REST API
│   ├── src/
│   │   ├── routes/           # API route handlers
│   │   ├── services/         # Business logic (email, etc.)
│   │   ├── config.js         # Environment configuration
│   │   └── server.js         # Express app entry point
│   └── .env.example          # Environment variable template
│
├── docker-compose.yml        # Docker orchestration
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or later
- npm 9 or later
- (Optional) Docker and Docker Compose

### Local Development

**1. Clone and install dependencies:**

```bash
# Backend
cd backend
cp .env.example .env
npm install

# Frontend
cd ../frontend
npm install
```

**2. Start development servers:**

```bash
# Terminal 1: Backend (port 5000)
cd backend
npm run dev

# Terminal 2: Frontend (port 5173)
cd frontend
npm run dev
```

**3. Open your browser:**
- Frontend: http://localhost:5173
- API Health: http://localhost:5000/api/health

### Using Docker

```bash
# Build and start all services
docker-compose up --build

# Access the site
# Frontend: http://localhost:5173
# Backend:  http://localhost:5000
```

## 🔧 Configuration

### Backend Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment mode | `development` |
| `ALLOWED_ORIGINS` | CORS origins (comma-separated) | `http://localhost:5173` |
| `RATE_LIMIT_WINDOW_MS` | Rate limit window in ms | `60000` |
| `RATE_LIMIT_MAX` | Max requests per window | `60` |
| `MAIL_HOST` | SMTP server hostname | - |
| `MAIL_PORT` | SMTP server port | `587` |
| `MAIL_USER` | SMTP username | - |
| `MAIL_PASSWORD` | SMTP password | - |
| `MAIL_FROM` | Sender email address | `noreply@bonsaiclubofsc.com` |
| `MAIL_TO` | Recipient for contact forms | `info@bonsaiclubofsc.com` |

> **Note:** When SMTP credentials are not configured, the email service operates in console-only mode, logging emails instead of sending them.

### Frontend Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | API base URL | `/api` (uses Vite proxy) |
| `VITE_API_PROXY` | Proxy target for Docker | `http://backend:5000` |

## 📡 API Endpoints

### Health Check
```
GET /api/health
```
Returns service status and version information.

### Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Smith",
  "email": "john@example.com",
  "subject": "membership",
  "message": "I'd like to join the club."
}
```

### Events
```
GET /api/events
GET /api/events/:id
```
Returns upcoming and past club events (currently mock data).

### Resources
```
GET /api/resources
GET /api/resources?category=beginner
GET /api/resources/categories
GET /api/resources/:id
```
Returns learning resources and helpful links (currently mock data).

## 🎨 Design System

The site uses a custom CSS design system with:

- **Typography**: Crimson Pro (headings), Inter (body)
- **Colors**: Earth-tone palette with green primary colors
- **Spacing**: Consistent spacing scale using CSS custom properties
- **Components**: Cards, buttons, forms, feature cards, gallery grid

Key CSS custom properties are defined in `frontend/src/styles.css`:

```css
:root {
  --color-primary-700: #15803d;
  --color-earth-100: #f5f1eb;
  --font-serif: 'Crimson Pro', serif;
  --font-sans: 'Inter', sans-serif;
  /* ... */
}
```

## 🏗️ Architecture Decisions

### Frontend
- **React Router v7**: Client-side routing with nested layouts
- **No UI Framework**: Custom CSS for full design control and smaller bundle
- **Service Layer**: Centralized API calls with error handling
- **SEO Component**: Per-page meta tag management

### Backend
- **Express.js**: Simple, well-documented, production-ready
- **Modular Routes**: Clean separation of concerns
- **Graceful Shutdown**: Proper handling of SIGTERM/SIGINT
- **Mock Data**: API ready for database integration

### Security
- **Helmet**: Security headers
- **CORS**: Configurable origin whitelist
- **Rate Limiting**: Prevents abuse
- **Input Validation**: Request body validation

## 📦 Production Deployment

### Build

```bash
# Frontend production build
cd frontend
npm run build
# Output: frontend/dist/

# Backend (no build step needed)
cd backend
npm start
```

### Deployment Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Configure proper `ALLOWED_ORIGINS`
- [ ] Set up SMTP credentials for email
- [ ] Configure Nginx/Cloudflare for the frontend
- [ ] Set up SSL certificates
- [ ] Configure rate limiting appropriately
- [ ] Set up monitoring and logging

### Nginx Configuration (Example)

```nginx
server {
    listen 80;
    server_name bonsaiclubofsc.com;
    
    # Frontend static files
    location / {
        root /var/www/bonsaiclubofsc/dist;
        try_files $uri $uri/ /index.html;
    }
    
    # API proxy
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm test

# Backend tests (to be implemented)
cd backend
npm test
```

## 📈 Future Enhancements

The following features are scaffolded or planned:

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Admin dashboard for content management
- [ ] Event registration system
- [ ] Member directory (authenticated)
- [ ] Gallery image upload
- [ ] Newsletter subscription
- [ ] E-commerce for merchandise

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is proprietary to the Bonsai Club of South Carolina.

---

**Bonsai Club of South Carolina**  
*Cultivating the art of bonsai since 1985*
