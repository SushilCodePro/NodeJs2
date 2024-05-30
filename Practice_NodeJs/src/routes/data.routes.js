// src/routes/data.routes.js
import express from 'express';
import {renderForm, uploadData, displayData } from '../controllers/data.controller.js';
import upload from '../middleware/upload.middleware.js';

const router = express.Router();

router.get('/', renderForm);
// Route to handle form submission with file upload
router.post('/upload', upload.single('image'), uploadData);

// router.post('/upload', uploadData);
router.get('/display', displayData);

export default router;
