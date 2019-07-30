FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -verbose

COPY . .

EXPOSE 8080
CMD [ "node", "src/server.js" ]