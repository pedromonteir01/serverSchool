import { Router } from 'express'
import studentsRouter from './students.routes.js';
import coursesRouter from './curses.routes.js';

const router = Router();

router.use("/students", studentsRouter);
router.use("/courses", coursesRouter);

router.get("/", (req, res) => {
    return res.status(200).send({message: "server OK"});
});

export default router;