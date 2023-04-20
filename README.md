# Web3 Emoji Calendar

This is a basic application using ReactJS, Webpack, Babel, ESLint and Prettier, that connects to a Web3 Metamask wallet (_you need to have ethereum in your browser for this application to work_).
It receives a hash in the URL, that the application will convert into emoji(s) , and allow the user to choose a date, connect to the Metamask wallet, validate and sign the object data. Then it allows the user to see the emojis added in each day in the main page.

## Getting Started

To get started with the project, follow these steps:

1. Install the dependencies:
   `npm install`

2. Start the development server:
   `npm start`

3. Try to add emojis to the calendar, you can access the main page at http://localhost:3000.

-   You can use this hash as example, which will generate a list of emojis: http://localhost:3000/8J+klPCfmITwn46X

### ESLint checks and ESLint Fixes

-   `npm run lint`
-   `npm run lint:fix`

### Prettier checks and Prettier Fixes

-   `npm run prettier`
-   `npm run prettier:fix`

Created by @alvarosps
