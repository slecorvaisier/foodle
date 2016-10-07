FROM dalenys/nodejs:latest

RUN mkdir -p /app
WORKDIR /app

ENV NPM_CONFIG_LOGLEVEL warn

COPY package.json /app
RUN npm install --ignore-scripts

COPY . /app

EXPOSE 8080
CMD ["node", "index.js"]
