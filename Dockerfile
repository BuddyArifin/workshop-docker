FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -verbose

COPY src ./src

EXPOSE 8080
CMD [ "node", "src/server.js" ]