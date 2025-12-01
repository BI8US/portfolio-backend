# Alexander Smirnov - Portfolio Backend API ⚙️

[![Deploy Status](https://img.shields.io/badge/Deploy-Render-blue)](https://resume-backend-yxcp.onrender.com)
[![Database](https://img.shields.io/badge/Database-Neon%20PostgreSQL-00E599)](https://neon.tech)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED)](https://www.docker.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

This repository contains the **Backend API** for my interactive portfolio and resume platform. It is a robust RESTful service built with Node.js, Express, and TypeScript, designed to handle authentication, data validation, and content management.

🔗 **Base URL:** `https://resume-backend-yxcp.onrender.com/api`
🔗 **Frontend Repository:** [https://github.com/BI8US/frontend](https://github.com/BI8US/frontend)

---

## 🔐 Key Features

### Architecture & Security
- **RBAC (Role-Based Access Control):**
    - `ADMIN`: Full CRUD access to manage resume content.
    - `USER` (Demo): Read-only access. This allows recruiters to explore the admin interface safely.
- **Secure Authentication:** JWT implementation with `bcryptjs` for password hashing.
- **Strict Validation:** All incoming requests are validated at runtime using **Zod** schemas, ensuring data integrity and type safety.
- **Type Safety:** End-to-end type safety achieved through TypeScript and auto-generated Prisma Client types.

### Infrastructure
- **Dockerized:** Fully containerized application using Docker and Docker Compose for consistent development and deployment environments.
- **Database:** PostgreSQL (managed via Prisma ORM).
- **Automated Migrations:** The Docker container automatically applies pending database migrations on startup.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js v20 (Alpine Linux in Docker)
- **Framework:** Express v5
- **Language:** TypeScript v5
- **ORM:** Prisma v6
- **Database:** PostgreSQL 15
- **Validation:** Zod
- **Auth:** jsonwebtoken, bcryptjs
- **Tooling:** ESLint v8, Prettier
- **Deployment:** Render (Web Service)

---

## 🚀 Getting Started

The project is optimized for **Docker** development to avoid environment inconsistencies.

### Prerequisites
- Docker & Docker Compose
- Node.js (optional, for local scripting)

### 1. Clone the Repository
```bash
git clone git@github.com:BI8US/server-node.git
cd server-node
```

### 2. Environment Setup
Create a `.env` file in the root directory based on the example below.
**Note:** For local Docker development, `DATABASE_URL` must point to the service name `db`, not `localhost`.
```dotenv
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin
POSTGRES_DB=project_db
DATABASE_URL="postgresql://admin:admin@db:5432/project_db?schema=public"
PORT=8080

JWT_SECRET=your_super_secret_key_change_me
JWT_EXPIRES_IN=86400

CORS_ALLOWED_ORIGINS=http://localhost:3000,https://asmirnov.pages.dev
CORS_PREVIEW_DOMAIN=.asmirnov.pages.dev
```

### 3. Run with Docker (Recommended)
This command builds the app container and starts the PostgreSQL database.
```bash
npm run start
```
OR manually:
```bash
docker compose up
```
The API will be available at http://localhost:8080.

### 4. Rebuild
If you install new packages or change the prisma.schema, use the rebuild script to update the container:
```bash
npm run rebuild
```
OR manually:
```bash
docker compose down && docker compose up --build
```
## 📦 Available Scripts
### Docker Commands
`npm run start` Starts the application and database using Docker Compose.

`npm run stop` Stops all running containers.

`npm run logs` Tails the logs of the app container.

`npm run rebuild` Rebuilds the Docker image (useful after dependency/schema changes) and restarts containers.

### Local Development (Without Docker)
`npm run dev` Starts the server locally using ts-node-dev (Requires local DB).

`npm run build` Compiles TypeScript to JavaScript (dist/).

### Code Quality
`npm run lint` Checks for code issues.

`npm run format` Formats code with Prettier.

`npm run fix:all` Runs formatting and linting fixes on the entire project.

## 🗄️ Database & Prisma
The project uses Prisma ORM. The schema defines models for `User`, `Resume`, `Education`, `Experience`, `Skills`, etc.

### Running Migrations
In production (and Docker), migrations run automatically on startup. To create a new migration during development (requires local DB connection):

```Bash
# 1. Temporarily change .env DATABASE_URL host to 'localhost'
# 2. Run:
npx prisma migrate dev --name your_migration_name
# 3. Change .env back to 'db' and run 'npm run rebuild'
```

## 💡 Author
**Alexander Smirnov**

**Portfolio:** [asmirnov.pages.dev](https://asmirnov.pages.dev)

**LinkedIn:** [https://www.linkedin.com/in/alex-smrnv/](https://www.linkedin.com/in/alex-smrnv/)

**GitHub:** [https://github.com/BI8US](https://github.com/BI8US)