FROM node:8-alpine

WORKDIR /app
COPY ./package.json ./
RUN yarn
COPY . .
RUN yarn build --prod

CMD [ "yarn", "run", "start:prod" ]
