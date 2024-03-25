# build environment
FROM node:20.11.1 as build

WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN npm ci --silent

COPY ./ /app/

RUN echo "111111111111"

RUN npm run build
RUN echo "2222222222222"

# RUN npm prune --production
# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
# comment this line to run in remote
#COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

#COPY --from=build /app/ssl/certificate.crt /etc/nginx/certs/certificate.crt
#COPY --from=build /app/ssl/private.pem /etc/nginx/certsprivate.key

# uncomment this line to run in local
COPY --from=build /app/nginx-local.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
