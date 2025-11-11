import { Router } from "express";
import { ResumeController } from "../controllers/resumeController";
import { AuthController } from "../controllers/authController";
import { JobApplicationController } from "../controllers/jobApplicationController";
import { authenticate, authorize } from "../middleware/authMiddleware";
import { validate } from "../middleware/validate";
import { loginSchema } from "../schemas/auth.schema";
import {
    ApplicationParams,
    createApplicationSchema,
    updateApplicationSchema,
    getOrDeleteApplicationSchema
} from "../schemas/jobApplication.schema";
import {
    ResumeParams,
    getOrDeleteResumeSchema,
    createResumeSchema,
    updateHeaderSchema,
    updateEducationsSchema,
    updateProjectsSchema,
    updateSkillsSchema,
    updateWorkExperiencesSchema
} from "../schemas/resume.schema";

const router = Router();

const resumeController = new ResumeController();
const authController = new AuthController();
const jobApplicationController = new JobApplicationController();

// --- AUTH ---
router.post("/auth/register",
    authController.register.bind(authController));
router.post("/auth/login",
    validate(loginSchema),
    authController.login.bind(authController));

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

router.get<ResumeParams>(
    "/resume/:id",
    authenticate,
    authorize("USER", "ADMIN"),
    validate(getOrDeleteResumeSchema),
    resumeController.getById.bind(resumeController)
);

router.post(
    "/resume",
    authenticate,
    authorize("ADMIN"),
    validate(createResumeSchema),
    resumeController.create.bind(resumeController)
);

router.delete<ResumeParams>(
    "/resume/:id",
    authenticate,
    authorize("ADMIN"),
    validate(getOrDeleteResumeSchema),
    resumeController.delete.bind(resumeController)
);

// --- UPDATE HEADER ---
router.patch<ResumeParams>(
    "/resume/:id",
    authenticate,
    authorize("ADMIN"),
    validate(updateHeaderSchema),
    resumeController.updateHeader.bind(resumeController)
);

// --- UPDATE CHILD LISTS ---
router.patch<ResumeParams>(
    "/resume/:id/educations",
    authenticate,
    authorize("ADMIN"),
    validate(updateEducationsSchema),
    resumeController.updateEducations.bind(resumeController)
);

router.patch<ResumeParams>(
    "/resume/:id/projects",
    authenticate,
    authorize("ADMIN"),
    validate(updateProjectsSchema),
    resumeController.updateProjects.bind(resumeController)
);

router.patch<ResumeParams>(
    "/resume/:id/skills",
    authenticate,
    authorize("ADMIN"),
    validate(updateSkillsSchema),
    resumeController.updateSkills.bind(resumeController)
);

router.patch<ResumeParams>(
    "/resume/:id/workexperiences",
    authenticate,
    authorize("ADMIN"),
    validate(updateWorkExperiencesSchema),
    resumeController.updateWorkExperiences.bind(resumeController)
);

// --- APPLICATIONS ---

router.get(
    "/applications",
    authenticate,
    authorize("USER", "ADMIN"),
    jobApplicationController.getAllApplications.bind(jobApplicationController)
);

router.get<ApplicationParams>(
    "/applications/:id",
    authenticate,
    authorize("USER", "ADMIN"),
    validate(getOrDeleteApplicationSchema),
    jobApplicationController.getById.bind(jobApplicationController)
)

router.post(
    "/applications",
    authenticate,
    authorize("ADMIN"),
    validate(createApplicationSchema),
    jobApplicationController.create.bind(jobApplicationController)
)

router.patch<ApplicationParams>(
    "/applications/:id",
    authenticate,
    authorize("ADMIN"),
    validate(updateApplicationSchema),
    jobApplicationController.update.bind(jobApplicationController)
)

router.delete<ApplicationParams>(
    "/applications/:id",
    authenticate,
    authorize("ADMIN"),
    validate(getOrDeleteApplicationSchema),
    jobApplicationController.delete.bind(jobApplicationController)

)

// --- ROOT TEST ---
router.get("/", (req, res) => {
    res.json({ message: "API is working!" });
});

export default router;
