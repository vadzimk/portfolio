# production version
# dind cannot benefit from multi-staged dockerfile, that's why it is all in one stage
FROM node:16-alpine
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev vips-dev && rm -rf /var/cache/apk/* > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY ./ .
RUN npm ci --cache .npm --prefer-offline
RUN npm run build
EXPOSE 1337
CMD ["npm", "run","start"]
