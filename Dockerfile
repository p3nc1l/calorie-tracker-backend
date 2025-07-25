FROM node:24

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ARG PORT

EXPOSE ${PORT}

CMD ["node", "."]