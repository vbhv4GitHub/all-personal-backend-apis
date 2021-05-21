import express from 'express';
import * as controller from '../../controller/TinderControllers/usersController.js';

const router = express.Router();

router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUser);
router.post('/', controller.addUser);
router.delete('/:id', controller.deleteUser);
router.patch('/:id', controller.updateUser);

export default router;
