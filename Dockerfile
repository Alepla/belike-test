FROM node:12-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json tsconfig.json ./
COPY src ./src
COPY views ./views
RUN npm install 

EXPOSE 4000
CMD npm start