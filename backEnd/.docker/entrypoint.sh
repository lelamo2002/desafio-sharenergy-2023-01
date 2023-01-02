#!/bin/bash

dockerize -wait tcp://mongo:27017 -timeout 60s

npm i
npx prisma generate
npx prisma db push
npx prisma studio &
npm run dev