FROM node:16 As development

WORKDIR /usr/src/nest-api

COPY package*.json ./

RUN npm ci 

COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "node", "dist/main.js" ]