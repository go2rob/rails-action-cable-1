# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version `3.2.2`
`cd project/dir`
`rbenv install`
* System dependencies
Sqlite3 need to be installed
`sudo apt install sqlite3`

* Configuration
`bundle install`
* Database creation
```shell
bundle exec rake db:create
```
* Database initialization
```shell
bundle exec rake db:migrate
```
* SPA
SPA is located in `lib/spas` - a CRA App
```shell
cd lib/spas/action-cable-poc
nvm install
nvm use
npm run start
```
* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
