# Template for Rails with simpacker

A template repository for Ruby on Rails application with simpacker gem

## Frameworks/Libraries and versions
* Frontend
  * Node.js 12.16.3
  * Webpack 4.43.0
  * TypeScript 3.9.3
  * React 16.9 (Option)
  * Vue 2.6 (Option)
  * ESLint 7.0.0
  * Prettier 2.0.5
  * Jest 26.0.1
  * node-sass 4.14.1
  * stylelint 13.5.0
* Server side
  * Ruby 2.7.1
  * Rails 6.0.3
  * Slim 4.1.0
  * Simpacker 1.1.0
  * Puma 4.3.5
  * RuboCop 0.84.0
  * RSpec 3.9.2
  * PostgreSQL 12.x

For more information, please see [docker-compose.yaml](./docker-compose.yaml) / [rails/Gemfile](./rails/Gemfile) / [webpack/package.json](./webpack/package.json))

## How to start sample application
1. Fork this repository
2. Clone forked repository
3. Up docker containers
    ```
    docker-compose up -d --build
    ```
4. Create database on Postgres
    ```
    docker-compose exec rails bundle exec rails db:create
    ```
5. Start Rails server
    ```
    docker-compose exec rails bundle exec rails server
    ```
6. Open http://localhost:3000/

## How to deploy
TODO
