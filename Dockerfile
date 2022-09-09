FROM node:16.15.0-slim


RUN apt update && apt install -y wget netcat git

USER node

WORKDIR /home/node/app

