# TypeORM Example

## Project setup

```
npm install -g typeorm
mkdir typeorm-test
cd typeorm-test
typeorm init --database mysql



typeorm entity:create -n Profile
typeorm query "select * from user"
```

## MySQL database with Docker

```
docker run --name mysql-db \
-p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=root \
-d mysql \
--default-authentication-plugin=mysql_native_password
```

## Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command