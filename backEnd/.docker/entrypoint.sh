#!/bin/bash

dockerize -wait tcp://mongo:27017 -timeout 60s

npm i
npm run dev