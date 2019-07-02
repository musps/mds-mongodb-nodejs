FROM alpine:3.6

LABEL vendor="gnatty" \
      com.gnatty.version="0.1.1" \
      com.gnatty.release-date="2019-29-07" \
      maintainer="sercan@gnatty.io"

RUN apk add --update \
    curl \
    bash \
    nodejs-current \
    nodejs-npm \
    git

RUN apk add --no-cache mongodb

VOLUME /data/db
EXPOSE 30001 30001
EXPOSE 30002 30002
EXPOSE 30003 30003

COPY run.sh /root
CMD ["/root/run.sh"]
