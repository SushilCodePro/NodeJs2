// src/controllers/data.controller.js
let submissions = []; // In-memory storage for simplicity

// Render the form page
export const renderForm = (req, res) => {
    res.render('form');
  };
// Handle form submission
export const uploadData = (req, res) => {
  const { name, product, price } = req.body;

  console.log(req.body);
  // Save data to the in-memory storage
  submissions.push({ name, product, price });

console.log(submissions);
  // Redirect to display page
  res.redirect('/display');
};

// Display the submitted data
export const displayData = (req, res) => {
  res.render('display', { submissions });
};
