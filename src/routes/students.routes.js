import { Router } from 'express';
import { 
    deleteStuden,
    editStudent,
    getAllStudents,
    getStudentById,
    postStudent
 } from '../controllers/students.controller.js';

const studentsRouter = Router();

studentsRouter.get("/", getAllStudents);

studentsRouter.get("/:id", getStudentById);

studentsRouter.post("/", postStudent);

studentsRouter.put("/:id", editStudent);

studentsRouter.delete("/:id", deleteStuden);

export default studentsRouter;