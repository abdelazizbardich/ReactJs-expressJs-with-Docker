FROM node:16.18-alpine3.15
WORKDIR /home
RUN mkdir backend
WORKDIR /home/backend
COPY . .
RUN npm install
EXPOSE 9000
CMD [ "npm","start" ]