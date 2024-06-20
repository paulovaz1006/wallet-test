FROM node:latest

WORKDIR /api-extrato

COPY . .

RUN rm -rf node_modules
RUN npm i

COPY start.sh /start.sh

RUN chmod +x /start.sh

CMD ["./start.sh"]

EXPOSE 3002

