/*
  Warnings:

  - You are about to drop the column `photo` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "photo",
ADD COLUMN     "photos" TEXT[];
