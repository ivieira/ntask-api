FROM node:4.3.0

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global --silent npm@3.7.5

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
