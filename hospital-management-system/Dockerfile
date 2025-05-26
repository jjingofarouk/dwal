FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY frontend ./frontend
COPY functions ./functions

RUN npm run install:all

EXPOSE 3000

CMD ["npm", "run", "dev"]