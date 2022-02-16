#!/bin/bash
echo "Hello"

# Push schema to db
npx prisma db push
# Push initial data to db
npx prisma db seed
npm run dev