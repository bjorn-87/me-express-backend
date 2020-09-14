CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(60) NOT NULL,
    UNIQUE(email)
);

DROP TABLE IF EXISTS reports;

CREATE TABLE IF NOT EXISTS reports (
    week INT NOT NULL,
    "text" VARCHAR(1000),
    UNIQUE(week)
);

INSERT INTO reports (week, "text") VALUES (1, "# Här är min rapport för vecka 1
Här finns instruktionerna hur man installerar modulerna och startar min Me-applikation.

### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Download and install

### `npm install`

First download this repo from [Github](https://github.com/bjorn-87/my-react-app-frontend) and then run the command.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify");

INSERT INTO reports (week, "text") VALUES(2, "## Mina Githubrepo för frontend/backend
https://github.com/bjorn-87/my-react-app-frontend <br>
https://github.com/bjorn-87/me-express-backend

repoThis is my backend repo for the course jsramverk at Blekinge Tekniska Högskola

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
Open http://localhost:1337 to view it in the browser.")
