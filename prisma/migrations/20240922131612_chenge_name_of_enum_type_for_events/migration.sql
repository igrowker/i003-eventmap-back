/*
  Warnings:

  - Changed the type of `type` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TypeEvent" AS ENUM ('Deportivo', 'Artistico', 'Gastronomico');

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "type",
ADD COLUMN     "type" "TypeEvent" NOT NULL;

-- DropEnum
DROP TYPE "Type";
