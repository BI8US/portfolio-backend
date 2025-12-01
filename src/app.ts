import cors from 'cors';
import express from 'express';

import router from './routes/router';

const app = express();

const allowedOriginsRaw = process.env.CORS_ALLOWED_ORIGINS || "";
const allowedOrigins = allowedOriginsRaw.split(",").map(origin => origin.trim());

const previewDomain = process.env.CORS_PREVIEW_DOMAIN || '.asmirnov.pages.dev';

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin) return callback(null, true);

            if (allowedOrigins.indexOf(origin) !== -1) {
                return callback(null, true);
            }

            if (origin.endsWith(previewDomain)) {
                return callback(null, true);
            }

            const msg =
                'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        },
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

export default app;
