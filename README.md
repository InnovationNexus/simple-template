# Bonsai Club of South Carolina Website

A minimal site for the Bonsai Club of South Carolina with an Express backend for contact submissions and a Vite + React frontend.

## Project structure

- `backend/`: Express API (CommonJS) with CORS, Helmet, rate limiting, and Nodemailer for inquiry emails.
- `frontend/`: React 18 + Vite SPA using React Router and React Bootstrap/Bootswatch.
- `docker-compose.yml`: Runs frontend and backend services on a shared network.

## Prerequisites

- Node.js 18+ and npm
- SMTP credentials for Nodemailer (or leave blank to log emails to console)

## Backend setup

```bash
cd backend
cp .env.example .env
npm install
npm run dev    # starts nodemon on port 5000
```

### Environment variables

Refer to `.env.example` for all options. Configure `MAIL_HOST`, `MAIL_USER`, `MAIL_PASSWORD`, `MAIL_FROM`, and `MAIL_TO` for email delivery. `ALLOWED_ORIGINS` controls CORS origins (comma-separated).

## Frontend setup

```bash
cd frontend
npm install
npm run dev    # Vite dev server on port 5173
# `npm start` is available for compatibility with react-scripts workflows
```

Set `VITE_API_URL` to point to the backend when not using the dev proxy default (`/api`).

### Testing

Frontend tests run with Node's built-in test runner:

```bash
cd frontend
npm test
```

## Docker Compose

```bash
docker-compose up --build
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5000 (health at `/health`)

## API

POST `/api/inquiry`

```json
{
  "name": "Optional name",
  "email": "contact@bonsaiclubofsc.com",
  "message": "Offer details"
}
```

Returns `{ "status": "received", "delivered": true | false }`.
