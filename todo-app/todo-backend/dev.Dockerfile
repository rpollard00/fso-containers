FROM node:16

WORKDIR /usr/src/app

#COPY --chown=node:node . .
COPY . .

RUN npm install

ENV DEBUG express:*
#ENV NODE_ENV production

#USER node

CMD ["npm", "run", "dev"]