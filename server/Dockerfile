FROM node:10.9.0

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3005

CMD ["npm", "start"]