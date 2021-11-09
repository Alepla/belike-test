import express, { Router } from 'express';
import path from 'path';
import UsersController from './users.controller';

const router = Router();
const userController = new UsersController();

router.get('/', (req, res) => {
});

router.post('/register', (req, res) => {
});

export default router;