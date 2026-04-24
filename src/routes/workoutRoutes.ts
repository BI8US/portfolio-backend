import { Router } from 'express';

import { WorkoutController } from '../controllers/workoutController';
import { authenticate, authorize } from '../middleware/authMiddleware';

const router = Router();
const controller = new WorkoutController();

router.get('/', authenticate, authorize('USER', 'ADMIN'), controller.listWorkouts);

router
    .route('/profile')
    .get(authenticate, authorize('USER', 'ADMIN'), controller.getOrCreateProfile)
    .put(authenticate, authorize('USER', 'ADMIN'), controller.updateProfile);

router.post('/plan', authenticate, authorize('USER', 'ADMIN'), controller.createPlan);
router.post('/:id/chat', authenticate, authorize('USER', 'ADMIN'), controller.chat);
router.get('/:id/chat/messages', authenticate, authorize('USER', 'ADMIN'), controller.getChatMessages);
router.put('/:id/complete', authenticate, authorize('USER', 'ADMIN'), controller.complete);
router.delete('/:id', authenticate, authorize('USER', 'ADMIN'), controller.delete);

export default router;

