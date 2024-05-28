// src/routes/data.routes.js
import express from 'express';
import {renderForm, uploadData, displayData } from '../controllers/data.controller.js';

const router = express.Router();

router.get('/', renderForm);
router.post('/upload', uploadData);
router.get('/display', displayData);

export default router;
