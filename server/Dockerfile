FROM node:14.18.1-alpine3.14
WORKDIR /app

RUN addgroup app && adduser -S -G app app && chown -R app /app
USER app

COPY package*.json ./
RUN npm install
COPY . .

ENV API_URL=http://api.products.com/
EXPOSE 3001

CMD ["npm", "start"]