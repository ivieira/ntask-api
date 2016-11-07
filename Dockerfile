FROM node:6.9.1

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY package.json npm-shrinkwrap.json $HOME/code/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/code
RUN npm install --silent

USER root
COPY . $HOME/code
RUN chown -R app:app $HOME/*
USER app
