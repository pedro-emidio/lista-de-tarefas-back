FROM node:14.17.5

WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm ci --only=production && npm cache clean --force
COPY . /app
CMD node index.js
EXPOSE 3002