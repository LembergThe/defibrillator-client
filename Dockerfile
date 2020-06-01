FROM node:10-alpine as build-stage

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./

RUN yarn install --network-timeout 1000000

# Bundle app source
COPY . .

RUN yarn build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.18
COPY --from=build-stage /usr/src/app/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf