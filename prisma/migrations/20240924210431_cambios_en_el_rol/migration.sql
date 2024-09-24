/*
  Warnings:

  - The `rol` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `type` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('Deportivo', 'Artistico', 'Gastronomico');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Company', 'Admin');

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "rol",
ADD COLUMN     "rol" "Role" NOT NULL DEFAULT 'Company';

-- DropEnum
DROP TYPE "Roles";

-- DropEnum
DROP TYPE "TypeEvent";
