[![Build Status](https://travis-ci.org/bjorn-87/me-express-backend.svg?branch=master)](https://travis-ci.org/bjorn-87/me-express-backend) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/bjorn-87/me-express-backend/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/bjorn-87/me-express-backend/?branch=master) [![Code Coverage](https://scrutinizer-ci.com/g/bjorn-87/me-express-backend/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/bjorn-87/me-express-backend/?branch=master) [![Build Status](https://scrutinizer-ci.com/g/bjorn-87/me-express-backend/badges/build.png?b=master)](https://scrutinizer-ci.com/g/bjorn-87/me-express-backend/build-status/master)

This is my backend repo for the course jsramverk at Blekinge Tekniska Högskola

## Download and install

### `npm install`
First download this repo and then run the command.

### `Set up the database`
Open your terminal and navigate to me-express-backend/db.
then run following command:<br>
`sqlite3 texts.sqlite`<br>
`.read migrate.sql`<br>
`.exit`

### `npm start`
Runs the app in the development mode.
Open http://localhost:1337 to view it in the browser.
