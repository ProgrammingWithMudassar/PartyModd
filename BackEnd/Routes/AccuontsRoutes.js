import express from 'express';
import { Register, LogIn } from '../Controller/Account.js'

const router = express.Router();

router.post('/Register',Register);
router.post('/logIn',LogIn);

export default router;