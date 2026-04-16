import { Router } from 'express';

import { AuthController } from '../controllers/authController';
import { JobApplicationController } from '../controllers/jobApplicationController';
import { ResumeController } from '../controllers/resumeController';
import { authenticate, authorize } from '../middleware/authMiddleware';

const router = Router();

const resumeController = new ResumeController();
const authController = new AuthController();
const jobApplicationController = new JobApplicationController();

// --- ROOT TEST ---
router.get('/', (req, res) => res.json({ message: 'API is working!' }));

// --- AUTH ---
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// --- RESUMES ---
router.get('/resume/active', resumeController.getActiveResume);

router.route('/resume')
    .get(authenticate, authorize('USER', 'ADMIN'), resumeController.getAllResumes)
    .post(authenticate, authorize('ADMIN'), resumeController.create);

router.route('/resume/:id')
    .get(authenticate, authorize('USER', 'ADMIN'), resumeController.getById)
    .patch(authenticate, authorize('ADMIN'), resumeController.updateHeader)
    .delete(authenticate, authorize('ADMIN'), resumeController.delete);

// --- UPDATE CHILD LISTS (RESUME) ---
router.patch('/resume/:id/educations', authenticate, authorize('ADMIN'), resumeController.updateEducations);
router.patch('/resume/:id/projects', authenticate, authorize('ADMIN'), resumeController.updateProjects);
router.patch('/resume/:id/skills', authenticate, authorize('ADMIN'), resumeController.updateSkillGroups);
router.patch('/resume/:id/workexperiences', authenticate, authorize('ADMIN'), resumeController.updateWorkExperiences);

// --- APPLICATIONS ---
router.route('/applications')
    .get(authenticate, authorize('USER', 'ADMIN'), jobApplicationController.getAllApplications)
    .post(authenticate, authorize('ADMIN'), jobApplicationController.create);

router.route('/applications/:id')
    .get(authenticate, authorize('USER', 'ADMIN'), jobApplicationController.getById)
    .patch(authenticate, authorize('ADMIN'), jobApplicationController.update)
    .delete(authenticate, authorize('ADMIN'), jobApplicationController.delete);

export default router;