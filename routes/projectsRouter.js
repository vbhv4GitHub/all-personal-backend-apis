import express from 'express';
import * as controller from '../controller/projectsController.js';

const router = express.Router();

router.get('/', controller.getAllProjects);
router.get('/:id', controller.getProject);
router.post('/', controller.addProject);
router.delete('/:id', controller.deleteProject);
router.patch('/:id', controller.updateProject);

export default router;