FROM alpine:3.6

LABEL vendor="gnatty" \
      com.gnatty.version="0.1.1" \
      com.gnatty.release-date="2019-29-07" \
      maintainer="sercan@gnatty.io"

RUN apk add --update \
    curl \
    bash \
    nodejs-current \
    nodejs-npm

EXPOSE 3000

WORKDIR /app

COPY ./api /app/api
COPY ./package*.json /app/

RUN npm install
CMD npm run start
