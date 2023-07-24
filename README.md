# Getting Started 

Introduction
Welcome to our web application! This document provides an overview of the features and functionalities of our app, as well as instructions on how to use it effectively.

Purpose
The purpose of our web application is to allow users to load a CSV file with preformatted data and display the data as cards on the website. Users can also search for data within the loaded CSV file using a search bar.

Getting Started
Before you begin using the web application, please make sure you have the following installed on your machine:

Node.js
npm (Node Package Manager)
Next, follow these steps to set up the application:

Clone the repository to your local machine.
Navigate to the project directory in your terminal or command prompt.
Install the required dependencies by running the following command:

  npm install
  npm start

Frontend (React) Usage
The frontend of our web application is built using React, 
providing a user-friendly and responsive interface for users to interact with the data.

File Upload
To load a CSV file with preformatted data, follow these steps:

Click on the "Choose File" button.
Select the desired CSV file from your local machine and click "Open."
The web application will parse the CSV file in memory and display each row's data as cards on the website.

Search Functionality
To search for specific data within the loaded CSV file, use the search bar:

Type your search query into the search bar.
Click the "Search" button or press Enter.
The displayed cards will be updated to show only the matching results that meet the search criteria.

Backend (Node.js with Express) Usage (Optional)
Our web application can work in a standalone mode without the backend. 
However, if you wish to use the backend for additional features or data storage, follow these steps:

Set up the backend by navigating to the csv-data-api folder in your terminal or command prompt.
  npm install
  node index.js

Automated Tests (Optional)
We have included automated tests to ensure the reliability and correctness of our web application. 
To run the tests, use the following command:
  npm test

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

