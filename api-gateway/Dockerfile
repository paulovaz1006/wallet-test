FROM node:latest

WORKDIR /api-gateway

COPY . .

RUN rm -rf package-lock.json
RUN rm -rf node_modules
RUN npm i

CMD ["npm", "start"]

EXPOSE 3000

