/*
  Warnings:

  - Changed the type of `type` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Typeasd" AS ENUM ('Deportivo', 'Artistico', 'Gastronomico');

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "type",
ADD COLUMN     "type" "Typeasd" NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "lastLogin" SET DEFAULT '';

-- DropEnum
DROP TYPE "Type";
