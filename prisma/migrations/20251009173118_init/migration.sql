-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL,
    "email" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT,
    "user_name" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resumes" (
    "id" BIGSERIAL NOT NULL,
    "resume_name" TEXT,
    "is_active" BOOLEAN,
    "full_name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "picture" TEXT,
    "summary" VARCHAR(1000),
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "resumes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "educations" (
    "id" BIGSERIAL NOT NULL,
    "school" TEXT,
    "education_name" TEXT,
    "start_date" TEXT,
    "end_date" TEXT,
    "resume_id" BIGINT,

    CONSTRAINT "educations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "education_description_points" (
    "id" BIGSERIAL NOT NULL,
    "education_entity_id" BIGINT NOT NULL,
    "description_point" TEXT,

    CONSTRAINT "education_description_points_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_experiences" (
    "id" BIGSERIAL NOT NULL,
    "company" TEXT,
    "position" TEXT,
    "start_date" TEXT,
    "end_date" TEXT,
    "resume_id" BIGINT,

    CONSTRAINT "work_experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_experience_description_points" (
    "id" BIGSERIAL NOT NULL,
    "work_experience_entity_id" BIGINT NOT NULL,
    "description_point" TEXT,

    CONSTRAINT "work_experience_description_points_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" BIGSERIAL NOT NULL,
    "title" TEXT,
    "sub_title" TEXT,
    "description" TEXT,
    "media" TEXT,
    "resume_id" BIGINT,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media_links" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "link" TEXT,
    "resume_id" BIGINT,

    CONSTRAINT "media_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "skill_group" TEXT,
    "resume_id" BIGINT,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_applications" (
    "id" BIGSERIAL NOT NULL,
    "link" TEXT,
    "contact" TEXT,
    "status" TEXT,
    "company" TEXT,
    "role" TEXT,
    "schedule" TEXT,
    "description" OID,
    "notes" OID,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job_applications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_user_name_key" ON "users"("user_name");

-- AddForeignKey
ALTER TABLE "educations" ADD CONSTRAINT "educations_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "education_description_points" ADD CONSTRAINT "education_description_points_education_entity_id_fkey" FOREIGN KEY ("education_entity_id") REFERENCES "educations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_experiences" ADD CONSTRAINT "work_experiences_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_experience_description_points" ADD CONSTRAINT "work_experience_description_points_work_experience_entity_id_fkey" FOREIGN KEY ("work_experience_entity_id") REFERENCES "work_experiences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_links" ADD CONSTRAINT "media_links_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
