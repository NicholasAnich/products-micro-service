FROM node:lts-alpine3.14
WORKDIR /app

RUN addgroup app && adduser -S -G app app && chown -R app /app
USER app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3001

CMD ["npm", "dev:start"]