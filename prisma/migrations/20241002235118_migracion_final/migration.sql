-- CreateEnum
CREATE TYPE "Type" AS ENUM ('Deportivo', 'Artistico', 'Gastronomico');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Company', 'Admin');

ALTER TABLE "Event" ALTER COLUMN "userId" TYPE UUID USING "userId"::uuid;

-- CreateTable
CREATE TABLE "Event" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "location" JSONB NOT NULL,
    "photos" TEXT[],
    "description" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,
    "capacity" TEXT NOT NULL DEFAULT 'Sin definir',
    "addres" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cuit" TEXT NOT NULL,
    "rol" "Role" NOT NULL DEFAULT 'Company',
    "state" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLogin" TEXT DEFAULT '',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_cuit_key" ON "User"("cuit");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
