import { Router } from "express";
import { ResumeController } from "../controllers/resumeController";
import { AuthController } from "../controllers/authController";
import { JobApplicationController } from "../controllers/jobApplicationController";
import { authenticate, authorize } from "../middleware/authMiddleware";

const router = Router();

const resumeController = new ResumeController();
const authController = new AuthController();
const jobApplicationController = new JobApplicationController();

// --- AUTH ---
router.post("/auth/register",
    authController.register.bind(authController));
router.post("/auth/login", authController.login.bind(authController));

// --- RESUMES ---
router.get(
    "/resume",
    authenticate,
    authorize("USER", "ADMIN"),
    resumeController.getAllResumes.bind(resumeController)
);

router.get(
    "/resume/active",
    resumeController.getActiveResume.bind(resumeController)
);

router.get(
    "/resume/:id",
    authenticate,
    authorize("USER", "ADMIN"),
    resumeController.getById.bind(resumeController)
);

router.post(
    "/resume",
    authenticate,
    authorize("ADMIN"),
    resumeController.create.bind(resumeController)
);

router.delete(
    "/resume/:id",
    authenticate,
    authorize("ADMIN"),
    resumeController.delete.bind(resumeController)
);

// --- UPDATE HEADER ---
router.patch(
    "/resume/:id",
    authenticate,
    authorize("ADMIN"),
    resumeController.updateHeader.bind(resumeController)
);

// --- UPDATE CHILD LISTS ---
router.patch(
    "/resume/:id/educations",
    authenticate,
    authorize("ADMIN"),
    resumeController.updateEducations.bind(resumeController)
);

router.patch(
    "/resume/:id/projects",
    authenticate,
    authorize("ADMIN"),
    resumeController.updateProjects.bind(resumeController)
);

router.patch(
    "/resume/:id/skills",
    authenticate,
    authorize("ADMIN"),
    resumeController.updateSkills.bind(resumeController)
);

router.patch(
    "/resume/:id/workexperiences",
    authenticate,
    authorize("ADMIN"),
    resumeController.updateWorkExperiences.bind(resumeController)
);

router.get(
    "/applications",
    authenticate,
    authorize("USER", "ADMIN"),
    jobApplicationController.getAllApplications.bind(jobApplicationController)
);

router.get(
    "/applications/:id",
    authenticate,
    authorize("USER", "ADMIN"),
    jobApplicationController.getById.bind(jobApplicationController)
)

router.post(
    "/applications",
    authenticate,
    authorize("ADMIN"),
    jobApplicationController.create.bind(jobApplicationController)
)

router.patch(
    "/applications/:id",
    authenticate,
    authorize("ADMIN"),
    jobApplicationController.update.bind(jobApplicationController)
)

router.delete(
    "/applications/:id",
    authenticate,
    authorize("ADMIN"),
    jobApplicationController.delete.bind(jobApplicationController)

)

// --- ROOT TEST ---
router.get("/", (req, res) => {
    res.json({ message: "API is working!" });
});

export default router;
