# BUILD PHASE
FROM node:alpine
WORKDIR /app
COPY ./vue-app/package.json ./
RUN npm install
COPY ./vue-app ./
RUN npm run build
# RUN PHASE

FROM nginx
ENV PORT=8080
# needed to set the nginx port
COPY ./site.template /etc/nginx/conf.d/site.template
COPY --from=0 /app/dist /usr/share/nginx/html
CMD /bin/sh -c "envsubst < /etc/nginx/conf.d/site.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"
