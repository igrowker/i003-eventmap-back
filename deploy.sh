#!/bin/sh

npx prisma migrate deploy

npx prisma db push

npm run start:prod