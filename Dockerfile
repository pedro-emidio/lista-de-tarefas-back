FROM node:14.19 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm build

CMD [ "node", "src/index.js" ]
