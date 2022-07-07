FROM node:16-alpine

WORKDIR /app/BotManager

COPY package.json /app/BotManager

RUN yarn install

EXPOSE 3000

COPY . .

CMD yarn start