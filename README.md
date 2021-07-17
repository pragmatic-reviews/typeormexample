# TypeORM Example

## Project setup

```
npm install -g typeorm
typeorm init --name TypeORMExample --database mysql
cd TypeORMExample
npm init -y
```

## MySQL database with Docker

```
docker run --name some-mysql \
-p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=my-secret-pw \
-d mysql \
--default-authentication-plugin=mysql_native_password
```

## Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command