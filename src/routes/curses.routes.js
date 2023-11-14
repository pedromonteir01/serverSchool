import { Router } from "express";
import { 
    getCourses,
    getCoursesById,
    postCourse,
    editCOurse,
    deleteCourse
 } from "../controllers/courses.controller.js";

const coursesRouter = Router();

coursesRouter.get("/", getCourses);
coursesRouter.get("/:id", getCoursesById);
coursesRouter.post("/", postCourse);
coursesRouter.put("/:id", editCOurse);
coursesRouter.delete("/:id", deleteCourse);

export default coursesRouter