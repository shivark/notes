import express from 'express';
import {get, create, post } from './../controllers/index.controller.mjs';

export const router = express.Router();

router.get('/', get);
router.post('/', post);
router.get('/create', create);

//router.get('/:id', product_controller.product_details);