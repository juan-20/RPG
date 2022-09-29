FROM node:16.15.1 as build
WORKDIR /app
COPY ./package.json /app/
COPY ./package-lock.json /app/
RUN npm install
RUN npm i @next/swc-linux-x64-musl
COPY . /app/
RUN npm run build
FROM node:16.15.1
WORKDIR /app
COPY --from=build /app/build /app/build
COPY package.json /app
COPY next.config.js /app
RUN npm i --production
EXPOSE 3000
CMD npm start
