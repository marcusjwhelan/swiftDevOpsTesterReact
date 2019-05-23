# base image
FROM node:12.2-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm config set unsafe-perm true && \
    npm install --silent && \
    npm add react-scripts@3.0.1 -g --silent

# start app
CMD ["npm", "start"]
