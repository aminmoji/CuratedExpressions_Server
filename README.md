# Curated Expressions — Server

Node/Express backend for **Curated Expressions**, a full-stack art marketplace project built during boot camp in 2023.

The API supports user signup/login and artwork CRUD operations for the React client.

## Features

- MongoDB/Mongoose persistence
- User registration with bcrypt password hashing
- User login with JWT issuance
- List all artwork
- List artwork belonging to a user
- Fetch an artwork by ID
- Create, update, and delete artwork records
- CORS-enabled JSON API

## Tech stack

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- JSON Web Tokens
- dotenv
- Morgan

## Related repository

React client:

https://github.com/aminmoji/CuratedExpressions_Client

## Local setup

```bash
git clone https://github.com/aminmoji/CuratedExpressions_Server.git
cd CuratedExpressions_Server
npm install
cp .env.example .env
npm run dev
```

## Environment variables

```text
PORT
URL
SECRET
```

Example values are provided in `.env.example`.

`URL` is the MongoDB connection URI. `SECRET` is used for JWT signing and should be a long random value.

## Main API routes

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/` | List artwork |
| GET | `/user/:id` | List artwork for a user |
| GET | `/artwork/:id` | Fetch one artwork |
| POST | `/artwork/` | Create artwork |
| PUT | `/artwork/:id` | Update artwork |
| DELETE | `/artwork/:id` | Delete artwork |
| POST | `/signup/` | Register |
| POST | `/login/` | Login |

## Project status

Historical portfolio / learning project.

It is not presented as a production-ready commerce system. The cleanup keeps the original architecture and fixes only clear correctness/security issues.
