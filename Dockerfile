FROM node:10.15.3-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache git

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}    

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install

COPY . .

CMD npm run chat:production