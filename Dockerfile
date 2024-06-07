FROM mirror.gcr.io/node:20-alpine as build
WORKDIR /elan-web
COPY package.json ./

RUN npm install --frozen-lockfile
COPY . /elan-web

RUN npm run build

FROM mirror.gcr.io/nginx:1.16.0-alpine
COPY --from=build /elan-web/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /elan-web/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
