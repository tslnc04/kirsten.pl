FROM node:18-alpine as builder

RUN mkdir /app

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build:production

FROM node:18-alpine as web

RUN mkdir /app

COPY --from=builder /app /app/

WORKDIR /app

ENV NODE_ENV production

CMD ["node", "/app/.next/standalone/server.js"]