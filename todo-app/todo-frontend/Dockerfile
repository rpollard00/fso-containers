FROM node:16 as build

WORKDIR /usr/src/app

COPY . .

ENV CI true

RUN npm ci

RUN npm run build

FROM build as test

RUN npm run test

FROM build as prod

#RUN npm install -g serve

CMD ["npm", "start"]