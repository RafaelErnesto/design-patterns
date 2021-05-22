FROM node:15

WORKDIR /src

COPY package.json .

RUN npm install
RUN npm install -g typescript

COPY . .
