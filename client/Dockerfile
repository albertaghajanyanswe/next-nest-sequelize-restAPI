FROM node:20.11.1-bullseye AS build

RUN npm install @openapitools/openapi-generator-cli -g

# Обновляем списки пакетов, добавляем репозитории и устанавливаем Java
RUN apt-get update && apt-get install -y \
    && apt-get install -y openjdk-11-jdk \
    && apt-get clean

# Устанавливаем переменные среды для Java
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
ENV PATH=$JAVA_HOME/bin:$PATH

# Проверяем установку
RUN java -version

WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/

ENV PATH /app/node_modules/.bin:$PATH

RUN npm ci --legacy-peer-deps --silent

COPY ./ /app/



# COPY . .
RUN npm run openapi
RUN npm run build

FROM nginx:1.21.6-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/out /usr/share/nginx/html

# comment this line to run in remote
#COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

#COPY --from=build /app/ssl/certificate.crt /etc/nginx/certs/certificate.crt
#COPY --from=build /app/ssl/private.pem /etc/nginx/certsprivate.key

# uncomment this line to run in local
COPY --from=build /app/nginx-local.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]