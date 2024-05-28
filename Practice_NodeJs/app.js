// src/app.js
import express from 'express';
import path from 'path';
import router from './src/routes/data.routes.js';

const app = express();
// const __dirname = path.resolve();

// Set view engine
app.set('view engine', 'ejs');
app.set("views", path.join(path.resolve(),"src",'views')); 
// app.set('views', path.join(__dirname, 'src', 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
// server.use(express.static('src/views'));
// app.use('/public', express.static(path.join(__dirname, 'src', 'public')));

// Routes
app.use(router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
