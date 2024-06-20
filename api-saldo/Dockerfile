FROM node:latest

WORKDIR /api-saldo

COPY . .

RUN rm -rf node_modules
RUN npm i

CMD ["npm", "start"]

EXPOSE 3001

