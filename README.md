# Sequelize ORM + Sequelize CLI + PostgreSQL

A simple example of using Sequelize ORM with Sequelize CLI and PostgreSQL.

## Installation

```bash
$ npm i
```

## Configuration

```bash
# Add the following to your .env file
# These parameters are found in the file .env.example
# If use development database, add this params
DB_DEV_USERNAME=
DB_DEV_PASSWORD=
DB_DEV_SCHEMA=
DB_DEV_NAME=
DB_DEV_HOST=
DB_DEV_DIALECT=postgres # if use another DBMS, read the documentation https://sequelize.org/docs/v6/getting-started/

#IF use production database, add this params
DB_USERNAME=
DB_PASSWORD=
DB_SCHEMA=
DB_NAME=
DB_HOST=
DB_DIALECT=postgres # if use another DBMS, read the documentation https://sequelize.org/docs/v6/getting-started/


```

## Usage

```bash
$ npm run dev # Starts the server in development mode
$ npm run migrate # Runs the migrations
$ npm run unmigrate # Undoing the migrations
$ npm run seed # Run all seeds
$ npm run unseed # Undoes all seeds
$ npm start # Starts the server in production mode

```
