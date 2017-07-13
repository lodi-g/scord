FROM node:7.5.0-alpine

# App dir
RUN mkdir -p /var/scord
WORKDIR /var/scord

# Dependancies
COPY package.json /var/scord
RUN npm install

# App sources
COPY . /var/scord

# Run
CMD [ "npm", "start" ]