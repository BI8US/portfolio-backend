import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting seeding...');

    // 1. Очистка базы данных (порядок важен из-за внешних ключей)
    await prisma.jobApplications.deleteMany();
    await prisma.skills.deleteMany();
    await prisma.skillGroups.deleteMany();
    await prisma.workExperiences.deleteMany();
    await prisma.projects.deleteMany();
    await prisma.educations.deleteMany();
    await prisma.mediaLinks.deleteMany();
    await prisma.resumes.deleteMany();
    await prisma.users.deleteMany();

    // 2. Восстановление пользователей
    console.log('👤 Creating users...');
    await prisma.users.createMany({
        data: [
            {
                email: 'sasha.smirnov009@gmail.com',
                userName: 'bibus',
                password: '$2b$10$qkIoJqymfgE.SpuSbrDZQOssgc4BL4UH0iZRymrO6H.wkgZ0hRgAq', // Твой хэш
                role: 'ADMIN',
                isActive: true,
                createdAt: new Date('2025-11-11T23:27:34.049Z'),
            },
            {
                email: 'testuser@gmail.com',
                userName: 'testuser',
                password: '$2b$10$zUCX0b3QSNJXI96hXJUG5urqDrGvC68SwWebh9WWecEelUf65HvgG', // Твой хэш
                role: 'USER',
                isActive: true,
                createdAt: new Date('2025-11-12T03:00:04.938Z'),
            },
        ],
    });

    // 3. Восстановление резюме и всех связанных сущностей
    console.log('📄 Creating resume and relations...');
    const resume = await prisma.resumes.create({
        data: {
            resumeName: 'ActiveResume',
            isActive: true,
            fullName: 'Alexander Smirnov',
            email: 'sasha.smirnov009@gmail.com',
            phone: '+372 5818 1605',
            picture: '/images/avatar.png',
            intro: 'Junior Software Developer · ex-Bolt · Final year student at TalTech',
            location: 'Tallinn, Estonia',
            summary:
                '**Junior Software Developer** with production-level experience from an internship at **Bolt** and a fast-paced startup. I am a **final-year** IT student at **TalTech**, focused on building clean and maintainable applications using **Go**, **Java**, and the **TypeScript** ecosystem. I value engineering excellence and enjoy using modern development workflows to deliver high-quality, reliable solutions. I am eager to apply my proactive mindset to solve real-world challenges and continue growing within a professional engineering team.',

            // Образование
            educations: {
                create: [
                    {
                        school: 'Tallinn University of Technology',
                        educationName: 'Bachelor’s in Computer Science',
                        startDate: 'September 2023',
                        endDate: 'June 2026',
                        description: '- Weighted **GPA** 4.5/5.0',
                        sortOrder: 0,
                    },
                    {
                        school: 'Tallinn Linnamäe Lyceum ',
                        educationName: 'Gymnasium',
                        startDate: 'September 2020',
                        endDate: 'June 2023',
                        description: '- Gold medal \n- Math 100/100\n',
                        sortOrder: 1,
                    },
                ],
            },

            // Опыт работы
            workExperiences: {
                create: [
                    {
                        company: 'Matiq Technologies OÜ',
                        position: 'Junior Software Engineer',
                        startDate: 'February 2026',
                        endDate: 'Present',
                        description:
                            '- **Architecting foundational backend services** and core business logic from scratch, with a focus on building a clean, modular, and scalable codebase (Go).\n- **Leading third-party API integrations**, implementing secure token management and ensuring compliance with data privacy policies.\n- **Building responsive full-stack features** using React and TypeScript, ensuring type safety and high performance across the entire application.\n- **Driving project maintainability** by establishing robust file structures and coding standards to facilitate long-term growth.\n- **Collaborating directly with founders** to translate product vision into technical architecture, taking full ownership of feature lifecycles.',
                        sortOrder: 0,
                    },
                    {
                        company: 'Bolt Technology OÜ',
                        position: 'Software Developer Intern',
                        startDate: 'June 2025',
                        endDate: 'August 2025',
                        description:
                            '- Maintained features for high-traffic SaaS **backend (Node.js)** and **frontend (React, Ember.js)** services, ensuring type safety with TypeScript.\n- Built **reusable UI components** following enterprise Design Systems and **refactored code** improving application maintainability and code readability.\n- Wrote **automated tests (Unit, Integration)** and performed manual verification to ensure high software quality.\n- Managed **live releases**, ensuring smooth and reliable deployment to **production environments**.\n- Collaborated with experienced engineers in an **Agile** environment, participating in sprint planning and applying industry best practices.\n- Achieved full productivity and managed live releases within the first month, mastering the tech stack from scratch.',
                        sortOrder: 1,
                    },
                ],
            },

            // Проекты
            projects: {
                create: [
                    {
                        title: 'Interactive Portfolio CMS',
                        subTitle: 'Personal project',
                        description:
                            '- Architected a decoupled CMS using **React**, **Node.js**, and **PostgreSQL** with **Docker** containerization.\n- Implemented secure **JWT authentication** and **RBAC** (Admin vs. Read-only Demo mode).\n- Ensured end-to-end type safety using **TypeScript**, **Prisma**, and **Zod**.\n- Optimized UX with **TanStack Query** caching and a custom "cold start" loading game.\n\n[Portfolio Backend Repository](https://github.com/BI8US/portfolio-backend) **|** [Portfolio Frontend Repository](https://github.com/BI8US/portfolio-frontend)',
                        media: '',
                        sortOrder: 0,
                    },
                    {
                        title: 'AI-Powered Study Assistant ',
                        subTitle: 'Team project, TalTech',
                        description:
                            '- Developed backend features for a microservices-based AI Assistant using Java (Spring Boot) and PostgreSQL.\n- Engineered automated quiz workflows with complex state transitions, utilizing cron jobs for background processing to manage user sessions and ensure consistency.\n\n[TalTech ChatBot](https://cs.taltech.ee/chatbot/dev/)',
                        media: '',
                        sortOrder: 1,
                    },
                    {
                        title: 'Marketplace Website',
                        subTitle: 'Team project, TalTech',
                        description:
                            '- Developed a RESTful API using **Java Spring Boot** and **PostgreSQL** for product and order management.\n- Designed a normalized database schema and managed migrations via **Liquibase**.\n- Wrote comprehensive integration tests with **JUnit** to ensure system reliability.\n- Integrated a **Vue.js** frontend client for product filtering and cart management.\n\n[Marketplace Backend Repository](https://github.com/BI8US/2024-marketplace-backend) **|** [Marketplace Frontend Repository](https://github.com/BI8US/2024-marketplace-frontend)',
                        media: '',
                        sortOrder: 2,
                    },
                    {
                        title: 'Multiplayer Game "Spaceship Sentinel"',
                        subTitle: 'Team project, TalTech',
                        description:
                            '- Built a multiplayer 2D game engine using **Java** and **LibGDX**.\n- Implemented real-time client-server synchronization using **KryoNet** networking.\n- Engineered enemy AI pathfinding logic using the **A-Star algorithm**.\n\n[Game Repository](https://github.com/BI8US/2024-game)',
                        media: '',
                        sortOrder: 3,
                    },
                ],
            },

            // Соц. сети
            mediaLinks: {
                create: [
                    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/alex-smrnv/', sortOrder: 0 },
                    { name: 'GitHub', link: 'https://github.com/BI8US', sortOrder: 1 },
                ],
            },

            // Группы навыков и сами навыки
            skillGroups: {
                create: [
                    {
                        name: 'Languages',
                        sortOrder: 0,
                        skills: {
                            create: [
                                { name: 'Java', sortOrder: 0 },
                                { name: 'Python', sortOrder: 1 },
                                { name: 'TypeScript', sortOrder: 2 },
                                { name: 'JavaScript', sortOrder: 3 },
                                { name: 'SQL', sortOrder: 4 },
                                { name: 'Go', sortOrder: 5 },
                            ],
                        },
                    },
                    {
                        name: 'Frontend',
                        sortOrder: 1,
                        skills: {
                            create: [
                                { name: 'React', sortOrder: 0 },
                                { name: 'Vue.js', sortOrder: 1 },
                                { name: 'Ember.js', sortOrder: 2 },
                                { name: 'Tailwind CSS', sortOrder: 3 },
                                { name: 'TanStack Query', sortOrder: 4 },
                            ],
                        },
                    },
                    {
                        name: 'Backend',
                        sortOrder: 2,
                        skills: {
                            create: [
                                { name: 'Go (Golang)', sortOrder: 0 },
                                { name: 'Node.js', sortOrder: 1 },
                                { name: 'Express', sortOrder: 2 },
                                { name: 'Spring Boot', sortOrder: 3 },
                                { name: 'REST API', sortOrder: 4 },
                                { name: 'JWT', sortOrder: 5 },
                            ],
                        },
                    },
                    {
                        name: 'Database',
                        sortOrder: 3,
                        skills: {
                            create: [
                                { name: 'PostgreSQL', sortOrder: 0 },
                                { name: 'MySQL', sortOrder: 1 },
                            ],
                        },
                    },
                    {
                        name: 'DevOps & Tools',
                        sortOrder: 4,
                        skills: {
                            create: [
                                { name: 'Git', sortOrder: 0 },
                                { name: 'Docker', sortOrder: 1 },
                                { name: 'CI/CD', sortOrder: 2 },
                                { name: 'Automated Testing', sortOrder: 3 },
                                { name: 'AI-assisted coding', sortOrder: 4 },
                                { name: 'Postman.', sortOrder: 5 },
                            ],
                        },
                    },
                    {
                        name: 'Soft Skills',
                        sortOrder: 5,
                        skills: {
                            create: [
                                { name: 'Agile/Scrum', sortOrder: 0 },
                                { name: 'Code review', sortOrder: 1 },
                                { name: 'Problem-solving', sortOrder: 2 },
                                { name: 'Teamwork', sortOrder: 3 },
                                { name: 'Critical thinking', sortOrder: 4 },
                            ],
                        },
                    },
                    {
                        name: 'Spoken Languages',
                        sortOrder: 6,
                        skills: {
                            create: [
                                { name: 'English (Fluent)', sortOrder: 0 },
                                { name: 'Estonian (Fluent)', sortOrder: 1 },
                                { name: 'Russian (Native)', sortOrder: 2 },
                            ],
                        },
                    },
                ],
            },
        },
    });

    console.log(`✅ Resume ID: ${resume.id} successfully created with all relations!`);

    // 4. Восстановление откликов на работу
    console.log('💼 Creating Job Applications...');

    // Внимание: чтобы файл seed.ts не стал огромным (из-за текстов вакансий на 500+ строк),
    // я добавил сюда 3 основные вакансии для проверки работы.
    // Если тебе нужны ВСЕ 12 вакансий с их длинными описаниями прямо в сиде — скажи, я могу сгенерировать полный массив.
    // Но обычно для локальной разработки хватает нескольких.
    await prisma.jobApplications.createMany({
        data: [
            {
                company: 'Swedbank Estonia',
                role: 'Software Engineer / QA',
                status: 'APPLIED',
                link: 'https://www.linkedin.com/jobs/view/4349012344/',
                schedule: 'Hybrid, Full-time',
                notes: 'https://jobs.swedbank.com/connect/dashboard',
                description: 'Are you passionate about testing and troubleshooting...',
                createdAt: new Date('2025-12-13T16:10:48.079Z'),
            },
            {
                company: 'Wise',
                role: 'Graduate Software Engineer',
                status: 'INTERVIEW_1',
                link: 'https://wise.jobs/job/graduate-software-engineer-in-tallinn-jid-2903',
                schedule: 'Full time',
                notes: 'Program start: September 7, 2026',
                description: 'Wise is a global technology company, building the best way to move and manage the world’s money...',
                createdAt: new Date('2026-02-26T13:11:57.687Z'),
            },
            {
                company: 'Betsson Group',
                role: 'Frontend Software Engineer - Web3 ',
                status: 'REJECTED',
                link: 'https://www.linkedin.com/jobs/view/4341719347/',
                schedule: 'Full-time',
                description: 'Much like a rollercoaster, life at Betsson Group is fast-paced...',
                createdAt: new Date('2025-12-04T17:54:40.232Z'),
            }
        ]
    });

    console.log('✨ Seeding completed successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });