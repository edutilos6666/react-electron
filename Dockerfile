# FROM nginx:alpine
# COPY /public /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


# stage: 1
FROM node:v12.2.0 as react-build
# WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build


# stage: 2 — the production environment
FROM nginx:alpine
COPY — from=react-build /build /usr/share/nginx/html
EXPOSE 80
CMD [“nginx”, “-g”, “daemon off;”]
