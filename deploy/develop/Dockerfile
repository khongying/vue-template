FROM node:11.13.0-alpine as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build-staging

FROM nginx:1.15.10-alpine
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY --from=build-stage /app/deploy/develop/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/deploy/develop/nginx/nginx.default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
