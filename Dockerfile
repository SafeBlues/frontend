# BUILD PHASE
FROM node:alpine
WORKDIR /app
COPY ./react-app/package.json ./
RUN npm install
COPY ./react-app ./
RUN npm run build
# RUN PHASE

FROM nginx
ENV PORT=8080
# TODO need to map the port back to 3000, to emulate the dev setup.
# needed to set the nginx port
COPY ./site.template /etc/nginx/conf.d/site.template
COPY --from=0 /app/build /usr/share/nginx/html
CMD /bin/sh -c "envsubst < /etc/nginx/conf.d/site.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"
