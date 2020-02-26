# FROM nginx:alpine
# COPY /public /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


# stage: 1
FROM node:12.16.1-alpine3.10 as react-build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
# RUN yarn
RUN yarn config set strict-ssl false
RUN yarn config set network-timeout 300000
RUN yarn
RUN yarn global add react-scripts@3.0.1
COPY . /app
RUN yarn build


# stage: 2 — the production environment
FROM nginx:alpine
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 3000 80
ENTRYPOINT [“nginx”, “-g”, “daemon off;”]
