FROM node:16.2.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app
COPY yarn.lock /app

RUN yarn install --silent

COPY . /app

CMD ["yarn", "start"]