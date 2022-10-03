FROM node:16 as build

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_BACKEND_URL http://localhost:3000
ENV CI true

RUN npm ci

RUN npm run build

FROM build as test

RUN npm run test

FROM build as prod

RUN npm install -g serve

CMD ["serve", "build"]