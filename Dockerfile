FROM node:14.15.4-alpine
WORKDIR /app
COPY . .
RUN npm i
ENV NODE_ENV production
RUN npm run build
CMD [ "npm", "start" ]
