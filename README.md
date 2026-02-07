# Playwright Automation Project

## Overview
This repository contains UI and API automation implemented using Playwright with JavaScript.  
The project demonstrates automation practices including UI validation, API testing, and test reporting.

## Tech Stack
- Playwright
- JavaScript
- Node.js

## UI Automation
**Application:** https://demoqa.com/

The UI automation covers:
- Login using an existing user (user created manually).
- Validation of logged-in username and logout button.
- Navigation to Book Store.
- Search for the book **Learning JavaScript Design Patterns**.
- Validation of search results.
- Extraction of **Title, Author, and Publisher** details.
- Writing extracted details into a file.
- Logout from the application.

The extracted book details are saved in: `output/bookDetails.txt`

## API Automation
**Base URL:** https://reqres.in/

The API automation performs the following operations:
- Create a user and validate the response status code.
- Fetch and store the user ID from the response.
- Attempt to retrieve the created user details.
- Update the user name and validate the response.

## API Behavior Note
ReqRes is a public mock API. From the execution environment used, API requests (POST/GET/PUT) returned **403 Forbidden** due to access restrictions.
The automation executes all required API calls, validates the actual response status codes received, and logs the observed behavior.

## Project Structure
```
.
├── tests
│   ├── ui
│   │   └── bookStore.spec.js
│   └── api
│       └── reqres.spec.js
├── utils
│   └── fileWriter.js
├── output
│   └── bookDetails.txt
├── playwright.config.js
├── package.json
└── README.md
```

## Running the Tests
Install dependencies: 
```
npm install
```

Run all tests: 
```
npx playwright test
```

View the HTML test report: 
```
npx playwright show-report
```




