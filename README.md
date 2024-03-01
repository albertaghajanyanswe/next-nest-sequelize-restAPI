### 1. PROJECT DESCRIPTION
------------------------------
#### Todo app
```
TODO
```
### 2. Install and run guide for development mode.
------------------------------
#### Install all requirements in both parts (client, server)
#### server
```
cd server
npm ci
```
#### client
```
cd client
npm ci
```
------------------------------
------------------------------
#### Runs the app in the development mode.

#### server
```
cd server
npm run debug
```
#### client
```
cd client
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
------------------------------
### 3. Runs the app via docker.
#### install docker and docker-compose
```
DOCKER         - https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-ru

DOCKER COMPOSE - https://docs.docker.com/compose/install/

```
```
bash run-docker-containers-local.sh
```
Open [http://localhost:80](http://localhost:80) to view it in the browser.

```
Make sure you are added correct variables in .env files (client/.env, server/.env)
```

##### ENV
>  client

```
REACT_APP_API_URL=" "
REACT_APP_ENV_MODE=" "
REACT_APP_PUBLIC_VAPID_KEY=" "

REACT_APP_FIREBASE_KEY=" "
REACT_APP_FIREBASE_PUBLIC_VAPID=" "

REACT_APP_FIREBASE_API_KEY=" "
REACT_APP_FIREBASE_AUTH_DOMAIN=" "
REACT_APP_FIREBASE_PROJECT_ID=" "
REACT_APP_FIREBASE_STORAGE_BUCKET=" "
REACT_APP_FIREBASE_MESSENGER_SENDER_ID=" "
REACT_APP_FIREBASE_APP_ID=" "
REACT_APP_FIREBASE_MEASUREMENT_ID=" "

```

>  server

```
key=""

MAIL_HOST=""
MAIL_PORT=
MAIL_USER=""
MAIL_PASSWORD=""
API_URL=
CLIENT_URL=

DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=" "
DB_HOST=127.0.0.1
DB_DIALECT=mysql
DB_PORT=3306
DB_CONNECTION_LIMIT=10

LOGIN_SECRET_KEY=
```


### Get doc.yml file for UI
 - http://localhost:4000/api/docs-yaml