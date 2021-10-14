### Base image

FROM node:alpine

WORKDIR /usr/app
### install some dependency
COPY ./package.json ./
RUN npm install

### Default command running the server
CMD ["npm", "start"]