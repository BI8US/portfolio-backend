# Alexander Smirnov - Portfolio Backend ⚙️

[![Hosting](https://img.shields.io/badge/Hosting-Hetzner-d80027)](https://www.hetzner.com/)
[![Database](https://img.shields.io/badge/PostgreSQL-15-4169E1)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED)](https://www.docker.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

This repository contains the **Backend API** for my interactive portfolio and resume platform. It is a robust RESTful service built with Node.js, Express, and TypeScript, designed to handle authentication, data validation, content management, and an AI-assisted workout feature.

🔗 **Live site:** [https://asmirnov.ee/](https://asmirnov.ee/)  
🔗 **Frontend repository:** [https://github.com/BI8US/portfolio-frontend](https://github.com/BI8US/portfolio-frontend)

---

## 🔐 Key Features

### Architecture & Security
- **RBAC (Role-Based Access Control):**
    - `ADMIN`: Full CRUD access to manage resume content.
    - `USER` (Demo): Read-only access. This allows recruiters to explore the admin interface safely.
- **Secure Authentication:** JWT implementation with `bcryptjs` for password hashing.
- **Strict Validation:** All incoming requests are validated at runtime using **Zod** schemas, ensuring data integrity and type safety.
- **Type Safety:** End-to-end type safety achieved through TypeScript and auto-generated Prisma Client types.

### AI workout assistant
- **Plan generation:** Authenticated users can create a planned workout from natural language (`userRequest`), the persisted **user profile** (age, weight, goals, injuries, etc.), and the **last five completed** workouts (planned vs actual JSON). The model returns a strict **WorkoutPlan** JSON (`title`, `focus`, `exercises`, `aiMessage`) via OpenAI Chat Completions with `json_schema` response format.
- **Coach chat on a session:** For a specific workout id, the client can send messages; the server persists **user** and **AI** rows in `workout_chat_messages`, calls the model with **profile**, **current plan**, **recent completed workouts**, and **chat history**, then returns `reply`, optional `updatedPlan` (when the user asked for plan changes), and a server `timestamp`. If `updatedPlan` is present, `plannedData` and workout `title` are updated in the database.
- **Graceful degradation:** Without `OPENAI_API_KEY`, plan creation returns a small mock plan and chat returns an explanatory reply with `updatedPlan: null`.
- **HTTP:** Workout endpoints live under `/api/workouts` (JWT, roles `USER` or `ADMIN`); see [`src/routes/workoutRoutes.ts`](./src/routes/workoutRoutes.ts).

### Infrastructure
- **Dockerized:** Fully containerized application using Docker and Docker Compose for consistent development and deployment environments.
- **Database:** PostgreSQL (managed via Prisma ORM).
- **Automated Migrations:** The Docker container automatically applies pending database migrations on startup.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js v20 (Alpine Linux in Docker)
- **Framework:** Express 5
- **Language:** TypeScript 5
- **ORM:** Prisma 6
- **Database:** PostgreSQL 15
- **Validation:** Zod
- **Auth:** jsonwebtoken, bcryptjs
- **AI:** OpenAI Chat Completions API (HTTPS `fetch`; optional third-party base URL via `OPENAI_API_URL`)
- **Tooling:** ESLint 8, Prettier
- **Deployment:** Self-hosted on Hetzner (Docker)

---

## 🚀 Getting Started

The project is optimized for **Docker** development to avoid environment inconsistencies.

### Prerequisites
- Docker & Docker Compose
- Node.js (optional, for local scripting)

### 1. Clone the Repository
```bash
git clone git@github.com:BI8US/portfolio-backend.git
cd portfolio-backend
```

### 2. Environment Setup
Copy the committed template and edit values (especially secrets):

```bash
cp .env.example .env
```

All variables are documented with comments in [`.env.example`](./.env.example). **Docker:** `DATABASE_URL` must use the hostname `db` (the Compose service name), not `localhost`. For `npx prisma migrate dev` or `npm run dev` against Postgres on your machine, temporarily switch `DATABASE_URL` to `localhost` as noted in `.env.example` and in the migrations section below.

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
The project uses Prisma ORM. Besides resume-related models, the schema includes **`UserProfile`** (one-to-one with `User`, includes `language`), **`Workout`** (`plannedData` / `actualData` JSON, `aiFeedback`), **`WorkoutChatMessage`**, and **`JobApplication`**.

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

**Portfolio:** [asmirnov.ee](https://asmirnov.ee/)

**LinkedIn:** [https://www.linkedin.com/in/alex-smrnv/](https://www.linkedin.com/in/alex-smrnv/)

**GitHub:** [https://github.com/BI8US](https://github.com/BI8US)
