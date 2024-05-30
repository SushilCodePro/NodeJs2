// src/app.js
import express from 'express';
import path from 'path';
import router from './src/routes/data.routes.js';

const app = express();
const __dirname = path.resolve();

// Set view engine
app.set('view engine', 'ejs');
app.set("views", path.join(path.resolve(),"src",'views')); 
// app.set('views', path.join(__dirname, 'src', 'views'));


// Middleware to parse URL-encoded data(HTML form data)
  // If the request has a Content-Type header of application/x-www-form-urlencoded, 
  //the express.urlencoded({ extended: true }) middleware is invoked. This middleware parses the URL-encoded data 
  //and populates req.body.
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data(API data)
  //f the request has a Content-Type header of application/json, the express.json() middleware is invoked. 
  //This middleware parses the JSON data and populates req.body.
app.use(express.json());

// Serve static files
// server.use(express.static('src/views'));
app.use('/uploads', express.static(path.join(__dirname, 'src', 'public','uploads')));

// Routes
app.use(router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
