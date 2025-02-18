# Assignment 3: Basic Web Server

See this project live onRender [here](https://n320.onrender.com/)

## Purpose

In this homework assignment students will:

- create a simple web server using Node.js

## Instructions

To complete this homework, complete the following:

- Create a Node.js HTTP Server

  - Use the http module to create a basic web server.
  - The server should listen on a fallback port like http://localhost:3000.
  - Serve different content based on the request URL.

- Serve Two Web Pages (index.html & about.html)

  - index.html: The homepage should contain a welcome message and a navigation link to about.html.
  - about.html: This page should contain information about the project and a link back to index.html.

- Navigation Between Pages

  - Both pages should have a <nav> section with links that allow switching between them without manually changing the URL.

- Frontend JavaScript

  - At least one page should include a JavaScript file (script.js) that manipulates the DOM (e.g., change text on a button click, display the current time, change background color, etc.).

- Serve At Least One Static Resource

  - Include and serve an image or a video file to enhance the web pages.
  - The file should be loaded correctly when requested from the browser.

- Use path Module for File Management

  - Use path.join() or path.resolve() to serve the correct files dynamically.

- Use fs.readFileSync() to Serve Content
  - Read and serve the HTML, CSS, and JS files using fs.readFileSync() when requested.

## Weekly Recap

This week we learned how to create a basic web server with Node.js. We also learned how to make async and await functions, along with handling callbacks and handling errors with try...catch blocks. We also discussed Promises in Javascript
