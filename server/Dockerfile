#  Dockerfile for Node/Express backend

## Get version 18 of Node built on top of
## the alpine distribution
FROM node:18-alpine

## Specify work directory on image to be /app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

## Copy package.json file over to the image
## so we can run npm install in next layer
## Location will be current working directory
COPY package*.json .

## Install dependencies listed in the package.json file
## first so they can be cached
RUN npm install

## Then copy the rest of our source code inside server into working directory
COPY . .

## Set environment variable in our container using ENV instruction
ENV PORT=3001
EXPOSE 3001

## Run a command to start the app inside the container
## Effectively runs the 'start' script in the package.json
## file, which runs command 'node server.js'
## Can only be one CMD per Dockerfile, and tells container
## how to run the application. 
CMD ["npm","start"]