import express from 'express';
import { controller } from './../controllers/notes/index.mjs';

export const router = express.Router();

router.get('/', controller.get);
router.post('/', controller.post);
router.get('/create', controller.create);

//router.get('/:id', product_controller.product_details);