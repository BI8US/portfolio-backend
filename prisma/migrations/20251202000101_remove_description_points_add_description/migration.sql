/*
  Warnings:

  - You are about to drop the `education_description_points` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `work_experience_description_points` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."education_description_points" DROP CONSTRAINT "education_description_points_education_entity_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."work_experience_description_points" DROP CONSTRAINT "work_experience_description_points_work_experience_entity__fkey";

-- AlterTable
ALTER TABLE "educations" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "work_experiences" ADD COLUMN     "description" TEXT;

-- DropTable
DROP TABLE "public"."education_description_points";

-- DropTable
DROP TABLE "public"."work_experience_description_points";
