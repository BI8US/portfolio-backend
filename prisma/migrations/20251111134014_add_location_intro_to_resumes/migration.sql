/*
  Warnings:

  - Made the column `resume_id` on table `educations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `job_applications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `company` on table `job_applications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `job_applications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `job_applications` required. This step will fail if there are existing NULL values in that column.
  - Made the column `resume_id` on table `media_links` required. This step will fail if there are existing NULL values in that column.
  - Made the column `resume_id` on table `projects` required. This step will fail if there are existing NULL values in that column.
  - Made the column `resume_name` on table `resumes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `is_active` on table `resumes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `resumes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `resume_id` on table `skills` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `resume_id` on table `work_experiences` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."educations" DROP CONSTRAINT "educations_resume_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."media_links" DROP CONSTRAINT "media_links_resume_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."projects" DROP CONSTRAINT "projects_resume_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."skills" DROP CONSTRAINT "skills_resume_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."work_experiences" DROP CONSTRAINT "work_experiences_resume_id_fkey";

-- AlterTable
ALTER TABLE "educations" ALTER COLUMN "resume_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "job_applications" ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "company" SET NOT NULL,
ALTER COLUMN "role" SET NOT NULL,
ALTER COLUMN "description" SET DATA TYPE TEXT,
ALTER COLUMN "notes" SET DATA TYPE TEXT,
ALTER COLUMN "updated_at" SET NOT NULL,
ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "media_links" ALTER COLUMN "resume_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "resume_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "resumes" ADD COLUMN     "intro" TEXT,
ADD COLUMN     "location" TEXT,
ALTER COLUMN "resume_name" SET NOT NULL,
ALTER COLUMN "is_active" SET NOT NULL,
ALTER COLUMN "is_active" SET DEFAULT false,
ALTER COLUMN "updated_at" SET NOT NULL,
ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "skills" ALTER COLUMN "resume_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" SET NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'USER';

-- AlterTable
ALTER TABLE "work_experiences" ALTER COLUMN "resume_id" SET NOT NULL;

-- RenameForeignKey
ALTER TABLE "work_experience_description_points" RENAME CONSTRAINT "work_experience_description_points_work_experience_entity_id_fk" TO "work_experience_description_points_work_experience_entity__fkey";

-- AddForeignKey
ALTER TABLE "educations" ADD CONSTRAINT "educations_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_experiences" ADD CONSTRAINT "work_experiences_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_links" ADD CONSTRAINT "media_links_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
