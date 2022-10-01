FROM node:16-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY next.config.js ./next.config.js

COPY ./src/pages ./src/pages
COPY ./public ./public
COPY ./styles ./styles
COPY ./src/components ./src/components

CMD npm run dev